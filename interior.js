// ==========================================
// FUNIRO FURNITURE - INTERIOR.JS
// Professional Structure: Modular, Efficient, No Globals
// ==========================================

(function () {
  "use strict";

  // ==========================================
  // UTILITIES
  // ==========================================
  const utils = {
    // Debounce function for scroll events
    debounce: (func, wait) => {
      let timeout;
      return function executedFunction(...args) {
        const later = () => {
          clearTimeout(timeout);
          func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
      };
    },

    // Selector helper with null check
    query: (selector) => document.querySelector(selector),

    // Bootstrap Collapse instance helper
    getCollapseInstance: (element) => {
      return new bootstrap.Collapse(element, { toggle: false });
    },
  };

  // ==========================================
  // NAVBAR ENHANCEMENTS (Fixed Toggler & Closing)
  function initNavbar() {
    const navbar = utils.query('.navbar');
    const navbarCollapse = utils.query('.navbar-collapse');
    const navLinks = document.querySelectorAll('.navbar-nav .nav-link');

    if (!navbar || !navbarCollapse) {
      console.warn('Navbar elements not found - check HTML structure');
      return;
    }

    // Debug: Confirm Bootstrap is loaded
    if (typeof bootstrap === 'undefined') {
      console.error('Bootstrap JS not loaded! Check script order.');
      return;
    }
    console.log('Bootstrap loaded, initializing navbar...');

    // Active link highlighting (robust pathname matching)
    const currentPath = window.location.pathname;
    navLinks.forEach(link => {
      const href = link.getAttribute('href') || '';
      const linkPath = href.startsWith('/') ? href : `./${href}`;
      const isActive = currentPath.endsWith(linkPath) || (link.textContent.trim().toLowerCase() === 'shop' && currentPath.includes('/shop'));
      if (isActive) {
        link.classList.add('active');
        console.log('Active class added to:', link.textContent.trim(), 'Path:', currentPath); // Debug log—remove after test
      }
    });

    // Navbar scroll shadow (debounced)
    const handleNavbarScroll = utils.debounce(() => {
      if (window.pageYOffset > 50) {
        navbar.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.08)';
      } else {
        navbar.style.boxShadow = '0 2px 4px rgba(0, 0, 0, 0.05)';
      }
    }, 10);
    window.addEventListener('scroll', handleNavbarScroll, { passive: true });

    // Body lock using Bootstrap events
    const collapseInstance = bootstrap.Collapse.getInstance(navbarCollapse) || new bootstrap.Collapse(navbarCollapse);
    navbarCollapse.addEventListener('show.bs.collapse', () => {
      document.body.classList.add('menu-open');
    });
    navbarCollapse.addEventListener('hidden.bs.collapse', () => {
      document.body.classList.remove('menu-open');
    });

    // Outside click to close
    document.addEventListener('click', (e) => {
      if (navbarCollapse.classList.contains('show') && !navbar.contains(e.target)) {
        collapseInstance.hide();
      }
    });

    // Smooth scroll for anchor links (close menu if open)
    document.querySelectorAll('a[href^="#"]').forEach(link => {
      link.addEventListener('click', (e) => {
        const href = link.getAttribute('href');
        if (href === '#') return;
        const target = document.querySelector(href);
        if (target) {
          e.preventDefault();
          const offsetTop = target.offsetTop - 80;
          window.scrollTo({ top: offsetTop, behavior: 'smooth' });
          if (navbarCollapse.classList.contains('show')) {
            collapseInstance.hide();
          }
        }
      });
    });

    // Close menu on nav link click
    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        if (navbarCollapse.classList.contains('show')) {
          collapseInstance.hide();
        }
      });
    });

    console.log('Navbar initialized (active + hover fix)');
  }

  // ==========================================
  // AOS INITIALIZATION (Single, with Refresh)
  // ==========================================
  function initAOS() {
    if (typeof AOS !== "undefined") {
      AOS.init({
        duration: 700,
        easing: "cubic-bezier(0.25, 1, 0.5, 1)",
        once: true,
        offset: 100,
        disable: false,
      });

      // Refresh on key events for dynamic content
      ["load", "resize", "scroll"].forEach((event) => {
        window.addEventListener(event, AOS.refresh, { passive: true });
      });
      window.addEventListener("resize", AOS.refreshHard);
    }
  }

  // ==========================================
  // FORMS HANDLING (Contact & Search)
  // ==========================================
  function initForms() {
    const contactForms = document.querySelectorAll(".contact-form");
    contactForms.forEach((form) => {
      form.addEventListener("submit", (e) => {
        e.preventDefault();
        const name = form
          .querySelector(
            'input[placeholder="Your Name"], input[aria-label="Name"]'
          )
          ?.value.trim();
        const email = form.querySelector('input[type="email"]')?.value.trim();
        const message = form.querySelector("textarea")?.value.trim();

        if (name && email && message) {
          showToast("Message sent! We'll reply soon.", "success");
          form.reset();
        } else {
          showToast("Please fill all fields.", "error");
        }
      });
    });

    const footerForm = utils.query(
      '.contact-form[data-testid="form-footer-contact"]'
    );
    if (footerForm) {
      footerForm.addEventListener("submit", (e) => {
        e.preventDefault();
        showToast("Subscribed! Welcome to the Funiro community.", "success");
        footerForm.reset();
      });
    }

    const searchForm = utils.query(".input-group");
    if (searchForm) {
      searchForm.addEventListener("submit", (e) => {
        e.preventDefault();
        const query = searchForm.querySelector('[type="search"]')?.value.trim();
        if (query) {
          showToast(`Searching for: ${query}`, "info");
        }
      });
    }
  }

  // Toast Utility
  function showToast(message, type = "info") {
    const toast = document.createElement("div");
    toast.className = `toast-notification toast-${type}`;
    toast.textContent = message;
    toast.style.cssText = `
            position: fixed; top: 20px; right: 20px; 
            background: ${
              type === "success"
                ? "#2EC1AC"
                : type === "error"
                ? "#E97171"
                : "var(--color-primary)"
            }; 
            color: white; padding: 1rem 2rem; border-radius: 0.5rem; z-index: 9999; 
            transform: translateX(100%); transition: transform 0.3s ease-out;
        `;
    document.body.appendChild(toast);
    setTimeout(() => (toast.style.transform = "translateX(0)"), 100);
    setTimeout(() => toast.remove(), 3000);
  }

  // ==========================================
  // PRODUCT INTERACTIONS
  // ==========================================
  function initProducts() {
    document.addEventListener("click", (e) => {
      if (e.target.closest(".btn-overlay")) {
        e.preventDefault();
        const btn = e.target.closest(".btn-overlay");
        const card = btn.closest(".product-card");
        const productName =
          card?.querySelector(".product-name")?.textContent || "Item";

        const originalText = btn.textContent;
        const originalBg = btn.style.backgroundColor;
        const originalColor = btn.style.color;
        btn.textContent = "Added!";
        btn.style.backgroundColor = "#2EC1AC";
        btn.style.color = "#FFFFFF";

        setTimeout(() => {
          btn.textContent = originalText;
          btn.style.backgroundColor = originalBg;
          btn.style.color = originalColor;
        }, 1500);

        console.log(`Added ${productName} to cart`);
      }
    });
  }

  // ==========================================
  // INSTAGRAM LAZY LOADING
  // ==========================================
  function initInstagram() {
    const instagramItems = document.querySelectorAll(".instagram-item img");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const img = entry.target;
            img.style.opacity = "0";
            img.style.transition = "opacity 0.5s ease";
            setTimeout(() => (img.style.opacity = "1"), 100);
            observer.unobserve(img);
          }
        });
      },
      { threshold: 0.1 }
    );

    instagramItems.forEach((img) => observer.observe(img));
  }

  // ==========================================
  // SCROLL TO TOP BUTTON
  // ==========================================
  function initScrollTop() {
    const scrollTopBtn = utils.query("#scrollTopBtn");
    if (!scrollTopBtn) return;

    const handleScroll = utils.debounce(() => {
      if (window.pageYOffset > 300) {
        scrollTopBtn.classList.add("show");
      } else {
        scrollTopBtn.classList.remove("show");
      }
    }, 10);

    window.addEventListener("scroll", handleScroll, { passive: true });
    scrollTopBtn.addEventListener("click", (e) => {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }

  // ==========================================
  // PARALLAX EFFECTS (Lightweight)
  // ==========================================
  function initParallax() {
    const storyImg = utils.query(".story-img");
    if (storyImg) {
      const handleParallax = utils.debounce(() => {
        const scrolled = window.pageYOffset;
        const rate = scrolled * -0.5;
        storyImg.style.transform = `translateY(${rate}px) scale(1 + ${
          scrolled * 0.0005
        })`;
      }, 16);
      window.addEventListener("scroll", handleParallax, { passive: true });
    }

    const bannerImg = utils.query(".banner-img");
    if (bannerImg) {
      const handleBannerParallax = utils.debounce(() => {
        const scrolled = window.pageYOffset;
        const rate = scrolled * -0.3;
        bannerImg.style.transform = `translateY(${rate}px) scale(1 + ${
          scrolled * 0.0003
        })`;
      }, 16);
      window.addEventListener("scroll", handleBannerParallax, {
        passive: true,
      });
    }
  }

  // ==========================================
  // CHAT BUTTON (Contact page)
  // ==========================================
  function initChat() {
    const chatBtn = utils.query("#chatBtn");
    if (chatBtn) {
      chatBtn.addEventListener("click", () => {
        showToast("Chat opened! (Integrate live chat here)", "info");
      });
    }
  }

  // ==========================================
  // INIT ALL (On DOM Ready)
  // ==========================================
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", () => {
      initAOS();
      initNavbar();
      initForms();
      initProducts();
      initInstagram();
      initScrollTop();
      initParallax();
      initChat();
    });
  } else {
    // Already loaded
    initAOS();
    initNavbar();
    initForms();
    initProducts();
    initInstagram();
    initScrollTop();
    initParallax();
    initChat();
  }
})();