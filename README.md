# funiro
# Ecommerce website selling aesthetic furniture
//Home page//
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Funiro - Discover Our New Furniture Collection</title>
    <meta name="description"
        content="Discover premium furniture for your home. Browse our collection of dining, living, and bedroom furniture with modern designs and exceptional quality.">

    <!-- Bootstrap CSS -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet">

    <!-- Google Fonts -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link
        href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&family=Montserrat:wght@700&display=swap"
        rel="stylesheet">

    <!-- Bootstrap Icons -->
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.1/font/bootstrap-icons.css">

    <!-- Custom CSS -->
    <link rel="stylesheet" href="/css/interior.css">
</head>

<body>
    <!-- Navigation Header -->
    <nav class="navbar navbar-expand-lg navbar-light bg-white sticky-top" data-testid="navbar-main">
        <div class="container">
            <a class="navbar-brand" href="/Funiro-dev/home.html" data-testid="link-home">
                <img src="/images/funiro-logo.png" alt="Funiro Logo" class="logo">
            </a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation"
                data-testid="button-menu-toggle">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse justify-content-center" id="navbarNav">
                <ul class="navbar-nav">
                    <li class="nav-item">
                        <a class="nav-link active" href="interior.html" data-testid="link-home-nav">Home</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="shop.html" data-testid="link-shop">Shop</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="about.html" data-testid="link-about">About</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="contact.html" data-testid="link-contact">Contact</a>
                    </li>
                </ul>
            </div>
            <div class="navbar-icons">
                <a href="#" class="icon-link" data-testid="link-user">
                    <i class="bi bi-person"></i>
                </a>
                <a href="#" class="icon-link" data-testid="link-search">
                    <i class="bi bi-search"></i>
                </a>
                <a href="#" class="icon-link" data-testid="link-wishlist">
                    <i class="bi bi-heart"></i>
                </a>
                <a href="#" class="icon-link" data-testid="link-cart">
                    <i class="bi bi-cart"></i>
                </a>
            </div>
        </div>
    </nav>

    <!-- Hero Section -->
    <section class="hero-section" id="home" data-testid="section-hero">
        <div class="hero-background">
            <img src="/images/home-banner.jpeg" alt="Modern living room furniture" class="img-fluid">
        </div>
        <div class="container">
            <div class="hero-content">
                <div class="hero-card">
                    <p class="hero-label" data-testid="text-hero-label">New Arrival</p>
                    <h1 class="hero-title" data-testid="text-hero-title">Discover Our<br>New Collection</h1>
                    <p class="hero-description" data-testid="text-hero-description">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec
                        ullamcorper mattis.
                    </p>
                    <a href="#shop" class="btn btn-primary btn-hero" data-testid="button-buy-now">BUY NOW</a>
                </div>
            </div>
        </div>
    </section>

    <!-- Browse The Range Section -->
    <section class="browse-range-section py-5" data-testid="section-browse-range">
        <div class="container">
            <div class="text-center mb-5">
                <h2 class="section-title" data-testid="text-browse-title">Browse The Range</h2>
                <p class="section-subtitle" data-testid="text-browse-subtitle">Lorem ipsum dolor sit amet, consectetur
                    adipiscing elit.</p>
            </div>
            <div class="row g-4">
                <div class="col-md-4" data-testid="card-category-dining">
                    <div class="category-card">
                        <div class="category-image">
                            <img src="/images/browse-1.jpeg" alt="Dining furniture" class="img-fluid">
                        </div>
                        <h3 class="category-title" data-testid="text-category-dining">Dining</h3>
                    </div>
                </div>
                <div class="col-md-4" data-testid="card-category-living">
                    <div class="category-card">
                        <div class="category-image">
                            <img src="/images/browse-2.jpeg" alt="Living room furniture" class="img-fluid">
                        </div>
                        <h3 class="category-title" data-testid="text-category-living">Living</h3>
                    </div>
                </div>
                <div class="col-md-4" data-testid="card-category-bedroom">
                    <div class="category-card">
                        <div class="category-image">
                            <img src="/images/browse-3.jpeg" alt="Bedroom furniture" class="img-fluid">
                        </div>
                        <h3 class="category-title" data-testid="text-category-bedroom">Bedroom</h3>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Our Products Section -->
    <section class="our-products-section py-5" id="shop" data-testid="section-products">
        <div class="container">
            <div class="text-center mb-5">
                <h2 class="section-title" data-testid="text-products-title">Our Products</h2>
            </div>
            <div class="row g-4">
                <!-- Product 1 -->
                <div class="col-lg-3 col-md-6" data-testid="card-product-1">
                    <div class="product-card">
                        <div class="product-image-wrapper">
                            <span class="badge-sale" data-testid="badge-sale-1">-30%</span>
                            <img src="/images/shop-1.jpeg" alt="Syltherine" class="product-image">
                            <div class="product-overlay">
                                <button class="btn btn-overlay" data-testid="button-add-cart-1">Add to cart</button>
                                <div class="product-actions">
                                    <a href="#" class="action-link" data-testid="link-share-1"><i
                                            class="bi bi-share"></i> Share</a>
                                    <a href="#" class="action-link" data-testid="link-compare-1"><i
                                            class="bi bi-arrow-left-right"></i> Compare</a>
                                    <a href="#" class="action-link" data-testid="link-like-1"><i
                                            class="bi bi-heart"></i> Like</a>
                                </div>
                            </div>
                        </div>
                        <div class="product-info">
                            <h3 class="product-name" data-testid="text-product-name-1">Syltherine</h3>
                            <p class="product-description" data-testid="text-product-desc-1">Stylish cafe chair</p>
                            <div class="product-price">
                                <span class="price-current" data-testid="text-price-current-1">₹2,500,000.00</span>
                                <span class="price-original" data-testid="text-price-original-1">₹3,500,000.00</span>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Product 2 -->
                <div class="col-lg-3 col-md-6" data-testid="card-product-2">
                    <div class="product-card">
                        <div class="product-image-wrapper">
                            <img src="/images/shop-2.jpeg" alt="Leviosa" class="product-image">
                            <div class="product-overlay">
                                <button class="btn btn-overlay" data-testid="button-add-cart-2">Add to cart</button>
                                <div class="product-actions">
                                    <a href="#" class="action-link" data-testid="link-share-2"><i
                                            class="bi bi-share"></i> Share</a>
                                    <a href="#" class="action-link" data-testid="link-compare-2"><i
                                            class="bi bi-arrow-left-right"></i> Compare</a>
                                    <a href="#" class="action-link" data-testid="link-like-2"><i
                                            class="bi bi-heart"></i> Like</a>
                                </div>
                            </div>
                        </div>
                        <div class="product-info">
                            <h3 class="product-name" data-testid="text-product-name-2">Leviosa</h3>
                            <p class="product-description" data-testid="text-product-desc-2">Stylish cafe chair</p>
                            <div class="product-price">
                                <span class="price-current" data-testid="text-price-current-2">₹2,500,000.00</span>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Product 3 -->
                <div class="col-lg-3 col-md-6" data-testid="card-product-3">
                    <div class="product-card">
                        <div class="product-image-wrapper">
                            <span class="badge-sale" data-testid="badge-sale-3">-50%</span>
                            <img src="/images/shop-3.jpeg" alt="Lolito" class="product-image">
                            <div class="product-overlay">
                                <button class="btn btn-overlay" data-testid="button-add-cart-3">Add to cart</button>
                                <div class="product-actions">
                                    <a href="#" class="action-link" data-testid="link-share-3"><i
                                            class="bi bi-share"></i> Share</a>
                                    <a href="#" class="action-link" data-testid="link-compare-3"><i
                                            class="bi bi-arrow-left-right"></i> Compare</a>
                                    <a href="#" class="action-link" data-testid="link-like-3"><i
                                            class="bi bi-heart"></i> Like</a>
                                </div>
                            </div>
                        </div>
                        <div class="product-info">
                            <h3 class="product-name" data-testid="text-product-name-3">Lolito</h3>
                            <p class="product-description" data-testid="text-product-desc-3">Luxury big sofa</p>
                            <div class="product-price">
                                <span class="price-current" data-testid="text-price-current-3">₹7,000,000.00</span>
                                <span class="price-original" data-testid="text-price-original-3">₹14,000,000.00</span>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Product 4 -->
                <div class="col-lg-3 col-md-6" data-testid="card-product-4">
                    <div class="product-card">
                        <div class="product-image-wrapper">
                            <span class="badge-new" data-testid="badge-new-4">New</span>
                            <img src="/images/shop-4.jpeg" alt="Respira" class="product-image">
                            <div class="product-overlay">
                                <button class="btn btn-overlay" data-testid="button-add-cart-4">Add to cart</button>
                                <div class="product-actions">
                                    <a href="#" class="action-link" data-testid="link-share-4"><i
                                            class="bi bi-share"></i> Share</a>
                                    <a href="#" class="action-link" data-testid="link-compare-4"><i
                                            class="bi bi-arrow-left-right"></i> Compare</a>
                                    <a href="#" class="action-link" data-testid="link-like-4"><i
                                            class="bi bi-heart"></i> Like</a>
                                </div>
                            </div>
                        </div>
                        <div class="product-info">
                            <h3 class="product-name" data-testid="text-product-name-4">Respira</h3>
                            <p class="product-description" data-testid="text-product-desc-4">Outdoor bar table and stool
                            </p>
                            <div class="product-price">
                                <span class="price-current" data-testid="text-price-current-4">₹500,000.00</span>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Product 5 -->
                <div class="col-lg-3 col-md-6" data-testid="card-product-5">
                    <div class="product-card">
                        <div class="product-image-wrapper">
                            <img src="/images/shop-5.jpeg" alt="Grifo" class="product-image">
                            <div class="product-overlay">
                                <button class="btn btn-overlay" data-testid="button-add-cart-5">Add to cart</button>
                                <div class="product-actions">
                                    <a href="#" class="action-link" data-testid="link-share-5"><i
                                            class="bi bi-share"></i> Share</a>
                                    <a href="#" class="action-link" data-testid="link-compare-5"><i
                                            class="bi bi-arrow-left-right"></i> Compare</a>
                                    <a href="#" class="action-link" data-testid="link-like-5"><i
                                            class="bi bi-heart"></i> Like</a>
                                </div>
                            </div>
                        </div>
                        <div class="product-info">
                            <h3 class="product-name" data-testid="text-product-name-5">Grifo</h3>
                            <p class="product-description" data-testid="text-product-desc-5">Night lamp</p>
                            <div class="product-price">
                                <span class="price-current" data-testid="text-price-current-5">₹1,500,000.00</span>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Product 6 -->
                <div class="col-lg-3 col-md-6" data-testid="card-product-6">
                    <div class="product-card">
                        <div class="product-image-wrapper">
                            <span class="badge-new" data-testid="badge-new-6">New</span>
                            <img src="/images/shop-6.jpeg" alt="Muggo" class="product-image">
                            <div class="product-overlay">
                                <button class="btn btn-overlay" data-testid="button-add-cart-6">Add to cart</button>
                                <div class="product-actions">
                                    <a href="#" class="action-link" data-testid="link-share-6"><i
                                            class="bi bi-share"></i> Share</a>
                                    <a href="#" class="action-link" data-testid="link-compare-6"><i
                                            class="bi bi-arrow-left-right"></i> Compare</a>
                                    <a href="#" class="action-link" data-testid="link-like-6"><i
                                            class="bi bi-heart"></i> Like</a>
                                </div>
                            </div>
                        </div>
                        <div class="product-info">
                            <h3 class="product-name" data-testid="text-product-name-6">Muggo</h3>
                            <p class="product-description" data-testid="text-product-desc-6">Small mug</p>
                            <div class="product-price">
                                <span class="price-current" data-testid="text-price-current-6">₹150,000.00</span>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Product 7 -->
                <div class="col-lg-3 col-md-6" data-testid="card-product-7">
                    <div class="product-card">
                        <div class="product-image-wrapper">
                            <span class="badge-sale" data-testid="badge-sale-7">-50%</span>
                            <img src="/images/shop-7.jpeg" alt="Pingky" class="product-image">
                            <div class="product-overlay">
                                <button class="btn btn-overlay" data-testid="button-add-cart-7">Add to cart</button>
                                <div class="product-actions">
                                    <a href="#" class="action-link" data-testid="link-share-7"><i
                                            class="bi bi-share"></i> Share</a>
                                    <a href="#" class="action-link" data-testid="link-compare-7"><i
                                            class="bi bi-arrow-left-right"></i> Compare</a>
                                    <a href="#" class="action-link" data-testid="link-like-7"><i
                                            class="bi bi-heart"></i> Like</a>
                                </div>
                            </div>
                        </div>
                        <div class="product-info">
                            <h3 class="product-name" data-testid="text-product-name-7">Pingky</h3>
                            <p class="product-description" data-testid="text-product-desc-7">Cute bed set</p>
                            <div class="product-price">
                                <span class="price-current" data-testid="text-price-current-7">₹7,000,000.00</span>
                                <span class="price-original" data-testid="text-price-original-7">₹14,000,000.00</span>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Product 8 -->
                <div class="col-lg-3 col-md-6" data-testid="card-product-8">
                    <div class="product-card">
                        <div class="product-image-wrapper">
                            <span class="badge-new" data-testid="badge-new-8">New</span>
                            <img src="/images/shop-8.jpeg" alt="Potty" class="product-image">
                            <div class="product-overlay">
                                <button class="btn btn-overlay" data-testid="button-add-cart-8">Add to cart</button>
                                <div class="product-actions">
                                    <a href="#" class="action-link" data-testid="link-share-8"><i
                                            class="bi bi-share"></i> Share</a>
                                    <a href="#" class="action-link" data-testid="link-compare-8"><i
                                            class="bi bi-arrow-left-right"></i> Compare</a>
                                    <a href="#" class="action-link" data-testid="link-like-8"><i
                                            class="bi bi-heart"></i> Like</a>
                                </div>
                            </div>
                        </div>
                        <div class="product-info">
                            <h3 class="product-name" data-testid="text-product-name-8">Potty</h3>
                            <p class="product-description" data-testid="text-product-desc-8">Minimalist flower pot</p>
                            <div class="product-price">
                                <span class="price-current" data-testid="text-price-current-8">₹500,000.00</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="text-center mt-5">
                <a href="#" class="btn btn-outline-primary btn-show-more" data-testid="button-show-more">Show More</a>
            </div>
        </div>
    </section>

    <!-- Beautiful Rooms Inspiration Section -->
    <section class="inspiration-section py-5" data-testid="section-inspiration">
        <div class="container-fluid px-0">
            <div class="row g-0 align-items-center">
                <div class="col-lg-5 px-4 px-lg-5">
                    <div class="inspiration-content">
                        <h2 class="inspiration-title mb-3" data-testid="text-inspiration-title">50+ Beautiful
                            rooms<br>inspiration</h2>
                        <p class="inspiration-description mb-4" data-testid="text-inspiration-desc">
                            Our designer already made a lot of beautiful prototype of rooms that inspire you
                        </p>
                        <a href="#" class="btn inspiration-btn" data-testid="button-explore-more">Explore More</a>
                    </div>
                </div>
                <div class="col-lg-7">
                    <div class="inspiration-carousel-wrapper">
                        <div id="inspirationCarousel" class="carousel slide carousel-fade" data-bs-ride="carousel"
                            data-bs-interval="5000" data-testid="carousel-inspiration">
                            <div class="carousel-inner">
                                <div class="carousel-item active">
                                    <div class="inspiration-card">
                                        <img src="/images/explore-1.jpeg" class="d-block w-100"
                                            alt="Room inspiration 1">
                                        <div class="inspiration-overlay">
                                            <div class="room-label">
                                                <span class="room-number" data-testid="text-room-number-1">01</span>
                                                <span class="room-separator">—</span>
                                                <span class="room-name" data-testid="text-room-name-1">BED ROOM</span>
                                            </div>
                                            <h4 class="room-title" data-testid="text-room-title-1">Inner Peace <i
                                                    class="bi bi-arrow-right room-arrow"></i></h4>
                                        </div>
                                    </div>
                                </div>
                                <div class="carousel-item">
                                    <div class="inspiration-card">
                                        <img src="/images/explore-2.jpeg" class="d-block w-100"
                                            alt="Room inspiration 2">
                                        <div class="inspiration-overlay">
                                            <div class="room-label">
                                                <span class="room-number">02</span>
                                                <span class="room-separator">—</span>
                                                <span class="room-name">LIVING ROOM</span>
                                            </div>
                                            <h4 class="room-title">Cozy Haven <i
                                                    class="bi bi-arrow-right room-arrow"></i></h4>
                                        </div>
                                    </div>
                                </div>
                                <div class="carousel-item">
                                    <div class="inspiration-card">
                                        <img src="/images/explore-3.jpeg" class="d-block w-100"
                                            alt="Room inspiration 3">
                                        <div class="inspiration-overlay">
                                            <div class="room-label">
                                                <span class="room-number">03</span>
                                                <span class="room-separator">—</span>
                                                <span class="room-name">DINING AREA</span>
                                            </div>
                                            <h4 class="room-title">Elegant Gather <i
                                                    class="bi bi-arrow-right room-arrow"></i></h4>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <!-- Indicators (visible, bottom-left under overlay) -->
                            <div class="carousel-indicators">
                                <button type="button" data-bs-target="#inspirationCarousel" data-bs-slide-to="0"
                                    class="active" aria-current="true" aria-label="Slide 1"></button>
                                <button type="button" data-bs-target="#inspirationCarousel" data-bs-slide-to="1"
                                    aria-label="Slide 2"></button>
                                <button type="button" data-bs-target="#inspirationCarousel" data-bs-slide-to="2"
                                    aria-label="Slide 3"></button>
                            </div>
                            <!-- Controls (subtle, show on hover) -->
                            <button class="carousel-control-prev" type="button" data-bs-target="#inspirationCarousel"
                                data-bs-slide="prev">
                                <span class="carousel-control-prev-icon" aria-hidden="true">
                                    <i class="bi bi-chevron-left"></i>
                                </span>
                                <span class="visually-hidden">Previous</span>
                            </button>
                            <button class="carousel-control-next" type="button" data-bs-target="#inspirationCarousel"
                                data-bs-slide="next">
                                <span class="carousel-control-next-icon" aria-hidden="true">
                                    <i class="bi bi-chevron-right"></i>
                                </span>
                                <span class="visually-hidden">Next</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Instagram Gallery Section -->
    <section class="instagram-section py-5" data-testid="section-instagram">
        <div class="container-fluid">
            <div class="row justify-content-center mb-5">
                <div class="col-12 text-center">
                    <p class="instagram-subtitle" data-testid="text-instagram-subtitle">Share your setup with</p>
                    <h2 class="instagram-title" data-testid="text-instagram-title">#FuniroFurniture</h2>
                </div>
            </div>
            <div class="instagram-scroller">
                <div class="instagram-track">
                    <!-- First Grid Instance -->
                    <div class="instagram-grid-instance">
                        <div class="instagram-item item-1">
                            <img src="/images/share-1.jpeg" alt="Instagram furniture 1">
                        </div>
                        <div class="instagram-item item-2">
                            <img src="/images/share-2.jpeg" alt="Instagram furniture 2">
                        </div>
                        <div class="instagram-item item-3">
                            <img src="/images/share-3.jpeg" alt="Instagram furniture 3">
                        </div>
                        <div class="instagram-item item-4">
                            <img src="/images/share-4.jpeg" alt="Instagram furniture 4">
                        </div>
                        <div class="instagram-item item-5">
                            <img src="/images/share-5.jpeg" alt="Instagram furniture 5">
                        </div>
                        <div class="instagram-item item-6">
                            <img src="/images/share-6.jpeg" alt="Instagram furniture 6">
                        </div>
                        <div class="instagram-item item-7">
                            <img src="/images/share-7.jpeg" alt="Instagram furniture 7">
                        </div>
                        <div class="instagram-item item-8">
                            <img src="/images/share-8.jpeg" alt="Instagram furniture 8">
                        </div>
                    </div>
                    <!-- Duplicated Grid Instance for Seamless Loop -->
                    <div class="instagram-grid-instance">
                        <div class="instagram-item item-1">
                            <img src="/images/share-1.jpeg" alt="Instagram furniture 1">
                        </div>
                        <div class="instagram-item item-2">
                            <img src="/images/share-2.jpeg" alt="Instagram furniture 2">
                        </div>
                        <div class="instagram-item item-3">
                            <img src="/images/share-3.jpeg" alt="Instagram furniture 3">
                        </div>
                        <div class="instagram-item item-4">
                            <img src="/images/share-4.jpeg" alt="Instagram furniture 4">
                        </div>
                        <div class="instagram-item item-5">
                            <img src="/images/share-5.jpeg" alt="Instagram furniture 5">
                        </div>
                        <div class="instagram-item item-6">
                            <img src="/images/share-6.jpeg" alt="Instagram furniture 6">
                        </div>
                        <div class="instagram-item item-7">
                            <img src="/images/share-7.jpeg" alt="Instagram furniture 7">
                        </div>
                        <div class="instagram-item item-8">
                            <img src="/images/share-8.jpeg" alt="Instagram furniture 8">
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Footer -->
    <footer class="footer py-5" data-testid="footer-main">
        <div class="container">
            <div class="row g-4">
                <div class="col-lg-3 col-md-6">
                    <h3 class="footer-brand" data-testid="text-footer-brand">Funiro.</h3>
                    <address class="footer-address" data-testid="text-footer-address">
                        400 University Drive Suite 200 Coral Gables,<br>
                        FL 33134 USA
                    </address>
                </div>
                <div class="col-lg-2 col-md-6">
                    <h4 class="footer-title" data-testid="text-footer-links-title">Links</h4>
                    <ul class="footer-links">
                        <li><a href="#" data-testid="link-footer-home">Home</a></li>
                        <li><a href="#shop" data-testid="link-footer-shop">Shop</a></li>
                        <li><a href="blog.html" data-testid="link-footer-blog">Blog</a></li>
                        <li><a href="#about" data-testid="link-footer-about">About</a></li>
                        <li><a href="#contact" data-testid="link-footer-contact">Contact</a></li>
                    </ul>
                </div>
                <div class="col-lg-3 col-md-6"> 
                    <h4 class="footer-title" data-testid="text-footer-help-title">Help</h4>
                    <ul class="footer-links">
                        <li><a href="#" data-testid="link-footer-payment">Payment Options</a></li>
                        <li><a href="#" data-testid="link-footer-returns">Returns</a></li>
                        <li><a href="privacy-policy.html" data-testid="link-footer-privacy">Privacy Policies</a></li>
                    </ul>
                </div>
                <div class="col-lg-4 col-md-6">
                    <h4 class="footer-title" data-testid="text-footer-contact-title">Contact Us</h4>
                    <form class="contact-form" data-testid="form-contact">
                        <div class="mb-3">
                            <input type="text" class="form-control" placeholder="Your Name" aria-label="Name"
                                data-testid="input-name">
                        </div>
                        <div class="mb-3">
                            <input type="email" class="form-control" placeholder="Your Email" aria-label="Email"
                                data-testid="input-email-contact">
                        </div>
                        <div class="mb-3">
                            <textarea class="form-control" rows="3" placeholder="Your Message" aria-label="Message"
                                data-testid="input-message"></textarea>
                        </div>
                        <button class="btn btn-submit" type="submit" data-testid="button-submit-contact">Send
                            Message</button>
                    </form>
                </div>
            </div>
            <hr class="footer-divider">
            <div class="row">
                <div class="col-12">
                    <p class="footer-copyright" data-testid="text-copyright">2023 Funiro. All rights reserved</p>
                </div>
            </div>
        </div>
    </footer>

    <!-- Scroll to Top Button -->
    <button id="scrollTopBtn" class="scroll-top-btn" title="Scroll to Top">
        <i class="bi bi-arrow-up"></i>
    </button>
    <!-- Bootstrap JS Bundle -->
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js"></script>

    <!-- Custom JavaScript -->
    <script src="interior.js"></script>
</body>

</html>


/* ==========================================
   FUNIRO FURNITURE - CUSTOM STYLES
   ========================================== */

/* ==========================================
   ROOT VARIABLES & DESIGN TOKENS
   ========================================== */
:root {
  /* Color Palette */
  --color-primary: #d4af37;
  --color-primary-dark: #b8942a;
  --color-sale: #e97171;
  --color-new: #2ec1ac;
  --color-cream: #fff3e3;
  --color-white: #ffffff;
  --color-text-primary: #2b2b2b;
  --color-text-secondary: #8c8c8c;
  --color-text-muted: #8c8c8c;
  --color-border: #e5e5e5;
  --color-overlay: rgba(58, 58, 58, 0.72);

  /* Typography */
  --font-primary: "Poppins", sans-serif;
  --font-accent: "Montserrat", sans-serif;

  /* Spacing */
  --spacing-xs: 0.5rem;
  --spacing-sm: 1rem;
  --spacing-md: 1.5rem;
  --spacing-lg: 2rem;
  --spacing-xl: 3rem;
  --spacing-2xl: 4rem;
  --spacing-3xl: 5rem;

  /* Border Radius */
  --radius-sm: 0.25rem;
  --radius-md: 0.5rem;

  /* Transitions */
  --transition-base: all 0.3s ease;
  --transition-slow: all 0.5s ease;

  /* Shadows */
  --shadow-sm: 0 2px 4px rgba(0, 0, 0, 0.06);
  --shadow-md: 0 4px 6px rgba(0, 0, 0, 0.08);
  --shadow-lg: 0 10px 20px rgba(0, 0, 0, 0.12);
}

/* ==========================================
   GLOBAL STYLES
   ========================================== */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: var(--font-primary);
  color: var(--color-text-primary);
  line-height: 1.6;
  overflow-x: hidden;
}

h1,
h2,
h3,
h4,
h5,
h6 {
  font-weight: 600;
  line-height: 1.2;
  margin-bottom: var(--spacing-sm);
}

img {
  max-width: 100%;
  height: auto;
  display: block;
}

a {
  text-decoration: none;
  color: inherit;
  transition: var(--transition-base);
}

/* ==========================================
ENHANCED
  NAVIGATION
  (HEADER)
  ==========================================
  */
.navbar {
  /* padding: 1rem 0; */
  box-shadow: var(--shadow-sm);
  border-bottom: 1px solid var(--color-border);
  background-color: var(--color-white);
  backdrop-filter: blur(10px);
  height: 100px;
}

.navbar-brand .logo {
  height: 140px; /* Bigger logo size */
  width: 240px;
  transition: var(--transition-base);
}

.navbar-brand:hover .logo {
  transform: scale(1.05);
}

.navbar-expand-lg .navbar-nav {
  flex-direction: row;
  column-gap: 40px; /* Increased gap between nav items */
}

.navbar-nav .nav-link {
  color: var(--color-text-primary);
  font-weight: 500;
  font-size: 1.1rem; /* Slightly larger font */
  padding: 0.75rem 1.5rem; /* More padding for better touch targets */
  position: relative;
  transition: var(--transition-base);
}

.navbar-nav .nav-link::after {
  content: "";
  position: absolute;
  bottom: 0;
  left: 50%;
  width: 0;
  height: 2px;
  background-color: var(--color-primary);
  transition: var(--transition-base);
  transform: translateX(-50%);
}

.navbar-nav .nav-link:hover::after,
.navbar-nav .nav-link.active::after {
  width: 80%;
}

.navbar-nav .nav-link:hover,
.navbar-nav .nav-link.active {
  color: var(--color-primary);
}

.navbar-icons {
  display: flex;
  gap: 2rem; /* Increased gap */
  align-items: center;
}

.icon-link {
  color: var(--color-text-primary);
  font-size: 1.4rem; /* Larger icons */
  transition: var(--transition-base);
  position: relative;
}

.icon-link::before {
  content: attr(data-count) ""; /* For future cart count */
  position: absolute;
  top: -0.5rem;
  right: -0.5rem;
  background: var(--color-primary);
  color: var(--color-white);
  border-radius: 50%;
  width: 20px;
  height: 20px;
  font-size: 0.75rem;
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
}

.icon-link:hover {
  color: var(--color-primary);
  transform: scale(1.2);
}

/* Mobile Navigation - Improved for Tidiness */
@media (max-width: 991px) {
  .navbar {
    padding: 0.75rem 1rem;
    height: 150px;
  }

  .navbar-brand .logo {
    height: 60px; /* Much smaller logo on mobile for tidiness */
    width: 120px;
  }

  .navbar-toggler {
    padding: 0.25rem;
    border: none;
    box-shadow: none;
  }

  .navbar-collapse {
    margin-top: 1rem;
    padding: 0 1rem;
    width: 100%;
  }

  .navbar-nav {
    flex-direction: column; /* Stack vertically */
    align-items: center;
    gap: 0.5rem; /* Space between links */
    text-align: center;
    margin: 0;
    width: 100%;
  }

  .navbar-nav .nav-item {
    width: 100%;
    margin: 0;
  }

  .navbar-nav .nav-link {
    padding: 0.75rem 0; /* Full width padding for touch */
    font-size: 1rem;
    width: 100%;
    border-bottom: 1px solid var(--color-border); /* Subtle divider */
  }

  .navbar-nav .nav-link:last-child {
    border-bottom: none;
  }

  .navbar-icons {
    margin-top: 1.5rem;
    justify-content: center;
    gap: 1.5rem; /* Balanced gap for icons */
    width: 100%;
    padding: 0 1rem;
    border-top: 1px solid var(--color-border); /* Separator line */
    padding-top: 1rem;
  }

  .icon-link {
    font-size: 1.5rem; /* Slightly larger for touch */
  }
}

@media (max-width: 575px) {
  .navbar-brand .logo {
    height: 50px;
    width: 100px;
  }

  .navbar-nav .nav-link {
    padding: 0.5rem 0;
    font-size: 0.95rem;
  }

  .navbar-icons {
    gap: 1rem;
  }

  .icon-link {
    font-size: 1.3rem;
  }
}

/* ==========================================
   HERO SECTION
   ========================================== */
.hero-section {
  position: relative;
  min-height: 85vh;
  display: flex;
  align-items: center;
  overflow: hidden;
}

.hero-background {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
}

.hero-background img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.hero-content {
  position: relative;
  z-index: 2;
  padding: var(--spacing-xl);
  display: flex;
  align-items: center;
  justify-content: flex-end;
  min-height: 85vh;
  max-width: 100%;
}

.hero-card {
  background-color: var(--color-cream);
  padding: var(--spacing-2xl) var(--spacing-xl);
  border-radius: var(--radius-md);
  max-width: 500px;
  box-shadow: var(--shadow-lg);
  border: 1px solid rgba(184, 142, 47, 0.1);
}

.hero-label {
  font-size: 1rem;
  font-weight: 600;
  color: var(--color-text-primary);
  letter-spacing: 0.05em;
  margin-bottom: var(--spacing-xs);
}

.hero-title {
  font-size: 3.5rem;
  font-weight: 700;
  color: var(--color-primary);
  margin-bottom: var(--spacing-md);
  line-height: 1.1;
}

.hero-description {
  font-size: 1.125rem;
  color: var(--color-text-secondary);
  margin-bottom: var(--spacing-xl);
  line-height: 1.7;
}

.btn-hero {
  background-color: var(--color-primary);
  color: var(--color-white);
  border: none;
  padding: 1rem 3rem;
  font-size: 1rem;
  font-weight: 700;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  transition: var(--transition-base);
}

.btn-hero:hover {
  background-color: var(--color-primary-dark);
  color: var(--color-white);
  transform: translateY(-2px);
  box-shadow: var(--shadow-md);
}

/* Mobile Hero */
@media (max-width: 991px) {
  .hero-section {
    min-height: auto;
    text-align: center;
  }

  .hero-content {
    padding: var(--spacing-lg);
    min-height: auto;
    justify-content: center;
  }

  .hero-card {
    padding: var(--spacing-lg);
    max-width: none;
  }

  .hero-title {
    font-size: 2.5rem;
  }
}

/* ==========================================
   BROWSE THE RANGE SECTION
   ========================================== */
.browse-range-section {
  padding: var(--spacing-3xl) 0;
}

.section-title {
  font-size: 2.5rem;
  font-weight: 700;
  color: var(--color-text-primary);
  margin-bottom: var(--spacing-sm);
}

.section-subtitle {
  font-size: 1.125rem;
  color: var(--color-text-secondary);
}

.category-card {
  cursor: pointer;
  transition: var(--transition-base);
}

.category-card:hover {
  transform: translateY(-5px);
}

.category-image {
  border-radius: var(--radius-md);
  overflow: hidden;
  margin-bottom: var(--spacing-md);
}

.category-image img {
  width: 100%;
  height: 480px;
  object-fit: cover;
  transition: var(--transition-slow);
}

.category-card:hover .category-image img {
  transform: scale(1.05);
}

.category-title {
  font-size: 1.5rem;
  font-weight: 600;
  color: var(--color-text-primary);
  text-align: center;
}

/* ==========================================
   OUR PRODUCTS SECTION
   ========================================== */
.our-products-section {
  padding: var(--spacing-3xl) 0;
  background-color: #fafafa;
}

.product-card {
  background-color: var(--color-white);
  border-radius: var(--radius-md);
  overflow: hidden;
  transition: var(--transition-base);
  height: 100%;
}

.product-card:hover {
  box-shadow: var(--shadow-lg);
  transform: translateY(-5px);
}

.product-image-wrapper {
  position: relative;
  overflow: hidden;
  background-color: #f4f5f7;
}

.product-image {
  width: 100%;
  height: 300px;
  object-fit: cover;
  transition: var(--transition-slow);
}

.product-card:hover .product-image {
  transform: scale(1.1);
}

/* Product Badges */
.badge-sale,
.badge-new {
  position: absolute;
  top: 1rem;
  right: 1rem;
  width: 48px;
  height: 48px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.875rem;
  font-weight: 600;
  color: var(--color-white);
  z-index: 2;
}

.badge-sale {
  background-color: var(--color-sale);
}

.badge-new {
  background-color: var(--color-new);
}

/* Product Overlay */
.product-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: var(--color-overlay);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: var(--transition-base);
}

.product-card:hover .product-overlay {
  opacity: 1;
}

.btn-overlay {
  background-color: var(--color-white);
  color: var(--color-primary);
  border: none;
  padding: 0.75rem 2.5rem;
  font-size: 1rem;
  font-weight: 600;
  margin-bottom: var(--spacing-md);
  transition: var(--transition-base);
}

.btn-overlay:hover {
  background-color: var(--color-primary);
  color: var(--color-white);
}

.product-actions {
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
  justify-content: center;
}

.action-link {
  color: var(--color-white);
  font-size: 0.875rem;
  font-weight: 600;
  display: flex;
  align-items: center;
  gap: 0.25rem;
  transition: var(--transition-base);
}

.action-link:hover {
  color: var(--color-primary);
}

/* Product Info */
.product-info {
  padding: 1.25rem;
}

.product-name {
  font-size: 1.5rem;
  font-weight: 600;
  color: var(--color-text-primary);
  margin-bottom: 0.5rem;
}

.product-description {
  font-size: 1rem;
  color: var(--color-text-muted);
  margin-bottom: 0.75rem;
}

.product-price {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.price-current {
  font-size: 1.25rem;
  font-weight: 600;
  color: var(--color-text-primary);
}

.price-original {
  font-size: 1rem;
  color: var(--color-text-muted);
  text-decoration: line-through;
}

/* Show More Button */
.btn-show-more {
  border: 1px solid var(--color-primary);
  color: var(--color-primary);
  background-color: transparent;
  padding: 0.75rem 3rem;
  font-size: 1rem;
  font-weight: 600;
  transition: var(--transition-base);
}

.btn-show-more:hover {
  background-color: var(--color-primary);
  color: var(--color-white);
  border-color: var(--color-primary);
}

/* ==========================================
   INSPIRATION SECTION (Matching Initial Screenshot: Off-white BG, Left Text, Right Carousel with Bottom-Left Overlay & Dots)
   ========================================== */
.inspiration-section {
  padding: var(--spacing-3xl) 0;
  background-color: #fff9f2; /* Off-white background */
}

.inspiration-content {
  padding: 0 var(--spacing-xl) 0 0;
}

.inspiration-title {
  font-size: 2.5rem; /* Bold heading size */
  font-weight: 700;
  color: var(--color-text-primary); /* Dark text */
  margin-bottom: var(--spacing-sm);
  line-height: 1.1;
}

.inspiration-description {
  font-size: 1rem;
  color: var(--color-text-secondary); /* Gray paragraph */
  margin-bottom: var(--spacing-xl);
  line-height: 1.7;
  font-weight: 400;
}

.inspiration-btn {
  background-color: var(--color-primary) !important; /* Solid mustard button */
  border: none !important;
  color: var(--color-white) !important;
  padding: 0.75rem 2rem !important;
  font-size: 1rem;
  font-weight: 600;
  border-radius: var(--radius-sm);
  text-transform: none;
  transition: var(--transition-base);
  box-shadow: none;
}

.inspiration-btn:hover {
  background-color: var(--color-primary-dark) !important;
  transform: translateY(-2px);
  box-shadow: var(--shadow-md);
  color: var(--color-white) !important;
}

/* Carousel */
.inspiration-carousel-wrapper {
  position: relative;
  padding: 0 var(--spacing-md);
}

.inspiration-carousel {
  overflow: hidden;
  border-radius: var(--radius-md);
  height: 580px; /* Fixed height to match screenshot proportions */
}

.carousel-fade .carousel-item {
  opacity: 0;
  transition-property: opacity;
  transform: none;
}

.carousel-fade .carousel-item.active,
.carousel-fade .carousel-item-next.carousel-item-left,
.carousel-fade .carousel-item-prev.carousel-item-right {
  opacity: 1;
}

.carousel-item-next,
.carousel-item-prev,
.carousel-item.active {
  display: block;
}

.inspiration-card {
  position: relative;
  border-radius: var(--radius-md);
  overflow: hidden;
  height: 600px;
  width: auto;
}

.inspiration-card img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: 1.5s;
}

.inspiration-card:hover img {
  transform: scale(1.02);
}

/* Overlay: Small white card at bottom-left */
.inspiration-overlay {
  position: absolute;
  bottom: 1.5rem;
  left: 1.5rem;
  background-color: rgba(255, 255, 255, 0.9);
  padding: 1.5rem;
  border-radius: var(--radius-sm);
  min-width: 250px;
  box-shadow: var(--shadow-sm);
  transition: var(--transition-base);
}

.inspiration-overlay:hover {
  transform: translateY(-2px);
}

.room-label {
  display: flex;
  align-items: center;
  margin-bottom: 0.5rem;
  text-transform: uppercase;
  font-size: 0.875rem;
}

.room-number {
  font-size: 0.875rem;
  font-weight: 600;
  color: var(--color-text-muted); /* Gray */
  letter-spacing: 0.05em;
}

.room-separator {
  margin: 0 0.5rem;
  color: var(--color-text-muted);
  font-weight: 300;
}

.room-name {
  font-size: 0.875rem;
  font-weight: 500;
  color: var(--color-text-muted); /* Gray */
  letter-spacing: 0.05em;
}

.room-title {
  font-size: 1.75rem;
  font-weight: 700;
  color: var(--color-text-primary); /* Bold black */
  margin: 0;
  line-height: 1.2;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.room-arrow {
  color: var(--color-primary); /* Gold arrow */
  font-size: 1rem;
  margin-left: 0.5rem;
  transition: var(--transition-base);
}

.room-title:hover .room-arrow {
  transform: translateX(2px);
}

/* Indicators: Small circular dots under images, bottom-left */
.carousel-indicators {
  bottom: 0.5rem;
  left: 50%;
  right: auto;
  width: auto;
  gap: 0.5rem;
  justify-content: flex-start;
  padding: 0;
  margin: 0;
}

.carousel-indicators [data-bs-target] {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background-color: rgba(255, 255, 255, 0.5); /* Light gray/white dots */
  border: none;
  cursor: pointer;
  transition: var(--transition-base);
  opacity: 0.6;
}

.carousel-indicators .active {
  background-color: var(--color-primary); /* Gold active */
  opacity: 1;
  transform: scale(1.2);
}

/* Controls: Subtle, gold-themed */
.carousel-control-prev,
.carousel-control-next {
  width: 48px;
  height: 48px;
  border-radius: 50%;
  background-color: rgba(255, 255, 255, 0.9);
  border: none;
  top: 50%;
  transform: translateY(-50%);
  opacity: 0.8;
  transition: var(--transition-base);
  box-shadow: var(--shadow-sm);
}

.carousel-control-prev {
  left: 1rem;
}

.carousel-control-next {
  right: 1rem;
}

.carousel-control-prev-icon,
.carousel-control-next-icon {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.carousel-control-prev-icon i,
.carousel-control-next-icon i {
  font-size: 1rem;
  color: var(--color-primary); /* Gold arrows */
}

.carousel-control-prev:hover,
.carousel-control-next:hover {
  background-color: var(--color-primary);
  opacity: 1;
  box-shadow: var(--shadow-md);
}

.carousel-control-prev:hover i,
.carousel-control-next:hover i {
  color: var(--color-white);
}

/* Responsive: Stack on mobile, center overlay/dots */
@media (max-width: 991px) {
  .row.align-items-center {
    flex-direction: column-reverse; /* Image first */
  }

  .inspiration-content {
    text-align: center;
    padding: var(--spacing-lg) 0;
  }

  .inspiration-title {
    font-size: 2rem;
  }

  .inspiration-btn {
    display: block;
    margin: 0 auto;
  }

  .inspiration-carousel {
    height: 450px;
  }

  .inspiration-overlay {
    min-width: auto;
    left: 50%;
    transform: translateX(-50%);
    bottom: 2rem;
    text-align: center;
  }

  .room-title {
    justify-content: center;
  }

  .carousel-indicators {
    left: 50%;
    transform: translateX(-50%);
    justify-content: center;
  }

  .carousel-control-prev,
  .carousel-control-next {
    display: none; /* Hide on mobile */
  }
}

@media (max-width: 575px) {
  .inspiration-carousel {
    height: 350px;
  }

  .inspiration-overlay {
    padding: 1rem;
  }

  .room-title {
    font-size: 1.5rem;
  }
}

/* ==========================================
   INSTAGRAM SECTION (Horizontal Scrolling Collage Grid with Header on Top)
   ========================================== */
.instagram-section {
  padding: var(--spacing-3xl) 0;
  background-color: var(--color-white); /* Clean white background */
}

.instagram-subtitle {
  font-size: 1.25rem;
  font-weight: 600;
  color: var(--color-text-secondary); /* Light gray */
  margin-bottom: 0.5rem;
  font-family: var(--font-primary); /* Sans-serif */
}

.instagram-title {
  font-size: 2.5rem;
  font-weight: 700;
  color: var(--color-text-primary); /* Bold black */
  margin-bottom: 0;
  font-family: var(--font-accent); /* Bold sans-serif for hashtag */
  letter-spacing: -0.02em;
}

/* Header - Centered on Top */
.instagram-header {
  text-align: center;
  margin-bottom: var(--spacing-xl);
}

/* Scroller Container */
.instagram-scroller {
  overflow: hidden; /* Hide overflow for seamless scroll */
  position: relative;
  width: 100%;
  padding: 0; /* Ensure no padding */
}

.instagram-track {
  display: flex;
  flex-wrap: nowrap; /* No wrapping for horizontal flow */
  gap: 0; /* No gap between instances to eliminate white space */
  animation: scroll-left 20s linear infinite; /* Auto-scroll right to left, slower for grids */
  width: 200%; /* Exactly twice for seamless loop */
}

.instagram-track:hover {
  animation-play-state: paused; /* Pause on hover */
}

/* Keyframes for horizontal scroll */
@keyframes scroll-left {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-50%); /* Move half the width for seamless loop */
  }
}

/* Grid Instance Wrapper */
.instagram-grid-instance {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(3, 1fr);
  gap: var(--spacing-sm);
  width: 50%;
  height: 600px;
  flex: 0 0 auto;
  padding: 0px 7px;
}

/* Image Items */
.instagram-item {
  border-radius: var(--radius-md);
  overflow: hidden;
  cursor: pointer;
  transition: var(--transition-base);
  box-shadow: var(--shadow-sm);
  display: flex; /* Ensure flex for equal filling */
}

.instagram-item img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: var(--transition-slow);
  flex: 1; /* Fill equally */
}

/* Specific Placements to Match Collage */
.item-1 {
  grid-column: 1;
  grid-row: 1 / 4;
}

.item-2 {
  grid-column: 2;
  grid-row: 1;
}

.item-3 {
  grid-column: 3;
  grid-row: 1;
}

.item-4 {
  grid-column: 2;
  grid-row: 2;
}

.item-5 {
  grid-column: 3;
  grid-row: 2;
}

.item-6 {
  grid-column: 4;
  grid-row: 1 / 4;
}

.item-7 {
  grid-column: 2;
  grid-row: 3;
}

.item-8 {
  grid-column: 3;
  grid-row: 3;
}

/* Hover Effects */
.instagram-item:hover {
  transform: translateY(-2px);
  box-shadow: var(--shadow-lg);
}

.instagram-item:hover img {
  transform: scale(1.05);
}

/* Responsive: Adjust grid width and speed on tablet */
@media (max-width: 991px) {
  .instagram-grid-instance {
    width: 50%;
    height: 450px;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(4, 1fr);
    gap: 0.75rem;
  }

  /* Adjust item placements for 2-column */
  .item-1 {
    grid-column: 1;
    grid-row: 1 / 3;
  }
  .item-2 {
    grid-column: 2;
    grid-row: 1;
  }
  .item-3 {
    grid-column: 2;
    grid-row: 2;
  }
  .item-4 {
    grid-column: 1;
    grid-row: 3;
  }
  .item-5 {
    grid-column: 2;
    grid-row: 3;
  }
  .item-6 {
    grid-column: 1;
    grid-row: 4 / 5;
  }
  .item-7 {
    grid-column: 2;
    grid-row: 4;
  }
  .item-8 {
    grid-column: 1 / 3;
    grid-row: 5;
  }

  .instagram-track {
    animation-duration: 35s;
  }

  .instagram-title {
    font-size: 2rem;
  }

  .instagram-header {
    margin-bottom: var(--spacing-lg);
  }
}

/* Responsive: Single Column on Mobile - Switch to vertical scroll for better UX */
@media (max-width: 575px) {
  .instagram-scroller {
    overflow-x: auto; /* Allow horizontal scroll on mobile */
    overflow-y: hidden;
  }

  .instagram-grid-instance {
    width: 50%;
    height: auto;
    grid-template-columns: 1fr;
    grid-template-rows: repeat(8, auto);
    gap: 0.5rem;
  }

  /* Stack items vertically */
  .item-1,
  .item-2,
  .item-3,
  .item-4,
  .item-5,
  .item-6,
  .item-7,
  .item-8 {
    grid-column: 1;
    grid-row: auto;
  }

  .item-1 {
    grid-row: 1;
  }
  .item-2 {
    grid-row: 2;
  }
  .item-3 {
    grid-row: 3;
  }
  .item-4 {
    grid-row: 4;
  }
  .item-5 {
    grid-row: 5;
  }
  .item-6 {
    grid-row: 6;
  }
  .item-7 {
    grid-row: 7;
  }
  .item-8 {
    grid-row: 8;
  }

  .instagram-track {
    animation-duration: 25s; /* Slower on mobile */
  }

  .instagram-item img {
    height: 200px;
  }

  .instagram-subtitle {
    font-size: 1rem;
  }

  .instagram-title {
    font-size: 1.75rem;
  }

  .instagram-header {
    margin-bottom: var(--spacing-md);
  }
}
/* ==========================================
   ENHANCED FOOTER
   ========================================== */
.footer {
  background-color: var(--color-white);
  color: var(--color-white);
  padding: var(--spacing-3xl) 0 var(--spacing-lg);
  border-top: 1px solid var(--color-border);
}

.footer-brand {
  font-size: 1.75rem; /* Larger brand */
  font-weight: 700;
  color: var(--color-primary);
  margin-bottom: var(--spacing-md);
  font-family: var(--font-accent);
}

.footer-address {
  font-size: 1rem;
  color: var(--color-text-secondary); /* Lighter for contrast */
  line-height: 1.7;
  font-style: normal;
  margin-bottom: var(--spacing-lg);
}

.footer-title {
  font-size: 1.1rem;
  font-weight: 600;
  color: var(--color-text-primary);
  margin-bottom: var(--spacing-md);
}

.footer-links {
  list-style: none;
  padding: 0;
}

.footer-links li {
  margin-bottom: 0.75rem;
}

.footer-links a {
  font-size: 1rem;
  color: var(--color-text-secondary);
  font-weight: 400;
  transition: var(--transition-base);
}

.footer-links a:hover {
  color: var(--color-primary);
}

/* Contact Form in Footer */
.contact-form {
  background: var(--color-text-secondary);
  padding: var(--spacing-lg);
  border-radius: var(--radius-md);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.1);
}

.contact-form .form-control {
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.2);
  color: var(--color-white);
  padding: 0.75rem;
  margin-bottom: var(--spacing-sm);
  border-radius: var(--radius-sm);
  transition: var(--transition-base);
}

.contact-form .form-control::placeholder {
  color: #cccccc;
}

.contact-form .form-control:focus {
  background: rgba(255, 255, 255, 0.15);
  border-color: var(--color-primary);
  color: var(--color-white);
  box-shadow: 0 0 0 0.2rem rgba(184, 142, 47, 0.25);
}

.contact-form .btn-submit {
  background-color: var(--color-primary);
  color: var(--color-white);
  border: none;
  padding: 0.75rem 2rem;
  font-size: 1rem;
  font-weight: 600;
  width: 100%;
  border-radius: var(--radius-sm);
  transition: var(--transition-base);
}

.contact-form .btn-submit:hover {
  background-color: var(--color-primary-dark);
  transform: translateY(-1px);
  box-shadow: var(--shadow-sm);
}

.footer-divider {
  margin: var(--spacing-xl) 0 var(--spacing-lg);
  border-color: var(--color-primary-dark);
}

.footer-copyright {
  text-align: center; /* Centered for better look */
  color: var(--color-text-secondary);
  font-size: 0.95rem;
  margin: 0;
}

/* ==========================================
   UTILITY CLASSES
   ========================================== */
.text-primary-color {
  color: var(--color-primary);
}

.bg-cream {
  background-color: var(--color-cream);
}

/* Smooth Scroll */
html {
  scroll-behavior: smooth;
}

/* ==========================================
   RESPONSIVE DESIGN
   ========================================== */
@media (max-width: 991px) {
  .section-title {
    font-size: 2rem;
  }

  .inspiration-title {
    font-size: 2rem;
  }

  .instagram-title {
    font-size: 2rem;
  }
}

/* Scroll to Top Button */
.scroll-top-btn {
  position: fixed;
  bottom: 2rem;
  right: 2rem;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: var(--color-primary);
  color: var(--color-white);
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.2rem;
  cursor: pointer;
  opacity: 0;
  visibility: hidden;
  transition: var(--transition-base);
  box-shadow: var(--shadow-md);
  z-index: 1000;
}

.scroll-top-btn:hover {
  background-color: var(--color-primary-dark);
  transform: translateY(-2px);
  box-shadow: var(--shadow-lg);
}

.scroll-top-btn.show {
  opacity: 1;
  visibility: visible;
}

/* Responsive: Smaller on mobile, adjust position */
@media (max-width: 768px) {
  .scroll-top-btn {
    bottom: 1.5rem;
    right: 1.5rem;
    width: 45px;
    height: 45px;
    font-size: 1rem;
  }
}
/* Shop page css starts */
.search-section .input-group {
  background-color: var(--color-primary);
  border-radius: var(--radius-md);
  overflow: hidden;
}
.search-section .form-control {
  background-color: var(--color-white);
  border: none !important;
  color: var(--color-text-primary);
}
.search-section .form-control::placeholder {
  color: var(--color-text-secondary);
}
.search-section .btn-primary {
  background-color: var(--color-primary) !important;
  border: none !important;
}
.search-section .btn-primary i {
  color: var(--color-white) !important;
}

/* ==========================================
   ABOUT PAGE - ENHANCED ANIMATIONS
   ========================================== */

/* ==========================================
   ABOUT BANNER SECTION STYLES (Append to interior.css)
   ========================================== */

/* About Banner Section (Structured similarly to home but with unique classes and subtle adjustments for About theme) */
.about-banner-section {
  position: relative;
  min-height: 70vh; /* Slightly shorter than home for a more focused About intro */
  display: flex;
  align-items: center;
  overflow: hidden;
  margin-bottom: var(--spacing-xl); /* Added spacing to separate from content */
}

.banner-background {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
}

.banner-background img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  filter: brightness(
    0.95
  ); /* Subtle dim for text readability, themed for About */
  transition: var(--transition-slow); /* Smooth zoom on load/hover if needed */
}

.about-banner-section:hover .banner-background img {
  transform: scale(1.02); /* Gentle parallax-like zoom on hover */
}

.banner-content {
  position: relative;
  z-index: 2;
  padding: var(--spacing-xl);
  display: flex;
  align-items: center;
  justify-content: flex-start; /* Aligned left for About page narrative feel */
  min-height: 70vh;
  max-width: 100%;
}

.banner-card {
  background-color: var(--color-cream);
  padding: var(--spacing-2xl) var(--spacing-xl);
  border-radius: var(--radius-md);
  max-width: 450px; /* Slightly narrower for About focus */
  box-shadow: var(--shadow-lg);
  border: 1px solid rgba(184, 142, 47, 0.1);
}

.banner-label {
  font-size: 1rem;
  font-weight: 600;
  color: var(--color-text-primary);
  letter-spacing: 0.05em;
  margin-bottom: var(--spacing-xs);
  text-transform: uppercase; /* Added for emphasis */
}

.banner-title {
  font-size: 3rem; /* Slightly smaller than home for subtlety */
  font-weight: 700;
  color: var(--color-primary);
  margin-bottom: var(--spacing-md);
  line-height: 1.1;
}

.banner-description {
  font-size: 1.125rem;
  color: var(--color-text-secondary);
  margin-bottom: var(--spacing-xl);
  line-height: 1.7;
}

.btn-banner {
  background-color: var(--color-primary);
  color: var(--color-white);
  border: none;
  padding: 1rem 3rem;
  font-size: 1rem;
  font-weight: 700;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  transition: var(--transition-base);
}

.btn-banner:hover {
  background-color: var(--color-primary-dark);
  color: var(--color-white);
  transform: translateY(-2px);
  box-shadow: var(--shadow-md);
}

/* Mobile About Banner */
@media (max-width: 991px) {
  .about-banner-section {
    min-height: auto;
    text-align: center;
  }

  .banner-content {
    padding: var(--spacing-lg);
    min-height: auto;
    justify-content: center;
  }

  .banner-card {
    padding: var(--spacing-lg);
    max-width: none;
  }

  .banner-title {
    font-size: 2.25rem;
  }
}
/* Global for About Page Sections */
.about-intro-section,
.our-story-section {
  background-color: #fff9f2; /* Off-white/beige background */
}

.why-choose-section {
  background-color: #fafafa; /* Light gray for subtle contrast */
}

/* ==========================================
   INTRO SECTION UPDATES (Append/Replace in interior.css for CEO Image Fix)
   ========================================== */

/* Intro Section - Increased height and adjusted display for full image visibility */
.intro-image-wrapper {
  border-radius: 0.5rem;
  overflow: hidden;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  max-height: 500px; /* Increased from 300px to allow taller images without heavy cropping */
  transition: transform 0.5s ease-out; /* Parallax-like zoom on scroll/hover */
}

.intro-image-wrapper img {
  width: 100%;
  height: auto; /* Changed from 100% to auto to maintain natural aspect ratio and prevent distortion */
  object-fit: contain; /* Changed from cover to contain for full image display without cropping (use cover if you prefer cropping) */
  display: block;
  transition: transform 0.5s ease-out;
}

.intro-image-wrapper:hover img {
  transform: scale(1.05); /* Gentle zoom on hover */
}

.intro-content {
  padding: 2rem; /* Simple padding */
}

.intro-title {
  font-size: 2.5rem; /* Fixed simple size */
  font-weight: 700;
  color: var(--color-text-primary);
  line-height: 1.1;
  margin-bottom: 1.5rem;
}

.intro-description,
.story-paragraph {
  font-size: 1.125rem;
  color: var(--color-text-secondary);
  line-height: 1.6;
  margin-bottom: 2rem;
  font-weight: 400;
}

.btn-about-journey {
  background-color: var(--color-primary);
  color: var(--color-white);
  border: none;
  padding: 1rem 2rem; /* Simple padding */
  font-size: 1rem;
  font-weight: 600;
  border-radius: 0.25rem;
  text-transform: uppercase;
  transition: all 0.3s cubic-bezier(0.25, 1, 0.5, 1); /* Smooth luxury easing */
  position: relative;
  overflow: hidden;
}

.btn-about-journey::before {
  content: "";
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    90deg,
    transparent,
    rgba(255, 255, 255, 0.2),
    transparent
  );
  transition: left 0.5s;
}

.btn-about-journey:hover::before {
  left: 100%;
}

.btn-about-journey:hover {
  background-color: var(--color-primary-dark);
  color: var(--color-white);
  transform: scale(1.05); /* Slight scale-up */
}

/* Our Story Section */
.our-story-section {
  padding: 3rem 0; /* Simple padding */
}

.story-image-wrapper {
  border-radius: 0.5rem;
  overflow: hidden;
  transition: transform 0.6s ease-out; /* For parallax zoom */
}

.story-image-wrapper img {
  width: 100%;
  height: auto; /* Auto height */
  display: block;
  transition: transform 0.6s ease-out;
}

.story-image-wrapper:hover img {
  transform: scale(1.02); /* Subtle zoom for depth */
}

.story-content {
  padding: 2rem; /* Simple padding */
}

.story-paragraph strong {
  color: var(--color-text-primary);
}

/* Why Choose Us Section */
.why-choose-section {
  padding: 3rem 0;
}

.feature-card {
  background-color: var(--color-white);
  padding: 2rem; /* Simple padding */
  border-radius: 0.5rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  transition: all 0.3s cubic-bezier(0.25, 1, 0.5, 1); /* Luxury easing on hover */
  cursor: pointer;
}

.feature-card:hover {
  transform: translateY(-5px) scale(1.02); /* Elevate + subtle scale */
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.12);
}

.feature-icon-i {
  font-size: 3rem;
  color: var(--color-primary);
  transition: all 0.3s ease-out; /* Icon animation */
  filter: drop-shadow(0 0 5px rgba(212, 175, 55, 0.3)); /* Soft glow */
}

.feature-card:hover .feature-icon-i {
  transform: scale(1.1); /* Icon scale on hover */
  filter: drop-shadow(0 0 10px rgba(212, 175, 55, 0.5)); /* Enhanced glow */
}

.feature-title {
  font-size: 1.25rem;
  font-weight: 600;
  color: var(--color-text-primary);
  transition: color 0.3s ease-out;
}

.feature-card:hover .feature-title {
  color: var(--color-primary); /* Title color transition */
}

.feature-description {
  font-size: 1rem;
  color: var(--color-text-secondary);
  line-height: 1.6;
}

/* Instagram Section Enhancements */
.instagram-item {
  transition: transform 0.3s ease-out; /* Zoom on hover */
}

.instagram-item:hover {
  transform: scale(1.05); /* Gentle zoom */
}

.instagram-item img {
  transition: transform 0.3s ease-out;
}

.instagram-item:hover img {
  transform: scale(1.05);
}

/* Micro-interactions for Links/Buttons */
a,
button {
  transition: all 0.3s cubic-bezier(0.25, 1, 0.5, 1); /* Consistent luxury easing */
}

a:hover,
button:hover {
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* Shadow intensity on hover */
}

/* AOS Custom Overrides for Subtlety */
[data-aos] {
  transition-property: transform, opacity; /* GPU-friendly */
}

[data-aos].aos-animate {
  transition-duration: 0.6s; /* Slightly longer for elegance */
}

/* Follow Us Banner - Reuse Instagram Styles (Already in CSS) */
.instagram-section {
  background-color: var(--color-white);
}

/* Responsive Adjustments */
@media (max-width: 991px) {
  .about-intro-section,
  .our-story-section {
    text-align: center;
  }

  .about-intro-section .row {
    flex-direction: column;
  }

  .our-story-section .row {
    flex-direction: column-reverse !important; /* Ensure content above image on mobile */
  }

  .intro-image-wrapper {
    max-height: 250px; /* Even smaller on mobile */
  }

  .intro-content,
  .story-content {
    padding: 1.5rem; /* Simpler mobile padding */
  }

  .intro-title {
    font-size: 2rem;
  }

  .feature-card {
    padding: 1.5rem;
  }
}

@media (max-width: 575px) {
  .intro-title {
    font-size: 1.75rem;
  }

  .intro-description {
    font-size: 1rem;
  }

  .intro-image-wrapper {
    max-height: 200px;
  }

  .feature-icon i {
    font-size: 2.5rem;
  }
}
/* Responsive Adjustments for CEO Image */
@media (max-width: 991px) {
  .intro-image-wrapper {
    max-height: 400px; /* Slightly reduced for tablet/mobile balance */
  }
}

@media (max-width: 575px) {
  .intro-image-wrapper {
    max-height: 300px; /* Optimized for small screens */
  }
}

/* ==========================================
   CONTACT PAGE - STYLES & ANIMATIONS
   ========================================== */

/* Color Variables (Aligned with Site Theme) */
:root {
  --color-primary: #d4af37; /* Mustard yellow primary */
  --color-primary-dark: #b8942a; /* Darker yellow */
  --color-accent: #2ec1ac; /* Teal accent from original */
  --color-bg-light: #fafafa; /* Soft neutral gray */
  --color-shadow: 0 4px 20px rgba(0, 0, 0, 0.08); /* Soft shadows */
  --color-border-light: #e5e5e5; /* Light borders */
}

/* Banner Section */
.contact-banner-section {
  background: linear-gradient(
    135deg,
    #ffffff 0%,
    #fff9f2 100%
  ); /* Soft beige gradient matching site */
  min-height: 50vh;
  display: flex;
  align-items: center;
  padding: 5rem 0;
}

.banner-title {
  font-size: 3.5rem;
  font-weight: 700;
  color: var(--color-text-primary);
  line-height: 1.1;
}

.banner-subtitle {
  font-size: 1.25rem;
  color: var(--color-text-secondary);
  font-weight: 400;
}

.banner-image-wrapper {
  position: relative;
  overflow: hidden;
  border-radius: 0.5rem;
}

.banner-img {
  transition: transform 0.6s cubic-bezier(0.25, 1, 0.5, 1);
}

.banner-image-wrapper:hover .banner-img {
  transform: scale(1.05); /* Parallax zoom */
}

/* Contact Details Section */
.contact-details-section {
  padding: 5rem 0;
}

.contact-card {
  background: #ffffff;
  padding: 2.5rem;
  border-radius: 0.5rem;
  box-shadow: var(--color-shadow);
  transition: all 0.3s cubic-bezier(0.25, 1, 0.5, 1);
  border: 1px solid transparent;
}

.contact-card:hover {
  transform: scale(1.03); /* Gentle lift */
  box-shadow: 0 8px 30px rgba(212, 175, 55, 0.1); /* Enhanced shadow with primary tint */
  border-color: var(--color-primary);
}

.card-icon {
  width: 60px;
  height: 60px;
  background: var(--color-primary);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  color: #ffffff;
  font-size: 1.5rem;
  transition: transform 0.3s ease-out;
}

.contact-card:hover .card-icon {
  transform: scale(1.1); /* Icon scale */
}

.card-title {
  font-size: 1.25rem;
  font-weight: 600;
  color: var(--color-text-primary);
  margin-bottom: 1rem;
}

.card-text {
  font-size: 1rem;
  color: var(--color-text-secondary);
  line-height: 1.6;
}

/* Contact Form Section */
.contact-form-section {
  padding: 5rem 0;
  background: #ffffff;
}

.form-image-wrapper {
  border-radius: 0.5rem;
  overflow: hidden;
  box-shadow: var(--color-shadow);
}

.contact-form .form-control {
  border: 1px solid var(--color-border-light);
  border-radius: 0.5rem;
  padding: 1rem 1.25rem;
  font-size: 1rem;
  transition: all 0.3s cubic-bezier(0.25, 1, 0.5, 1);
  background: #ffffff;
}

.contact-form .form-control:focus {
  border-color: var(--color-primary);
  box-shadow: 0 0 0 0.2rem rgba(212, 175, 55, 0.1); /* Glowing border with site primary */
  outline: none;
}

.contact-form .form-control::placeholder {
  color: var(--color-text-secondary);
}

.btn-submit {
  background: var(--color-primary);
  color: #ffffff;
  border: none;
  padding: 1rem 2.5rem;
  font-size: 1rem;
  font-weight: 600;
  border-radius: 0.5rem;
  transition: all 0.3s cubic-bezier(0.25, 1, 0.5, 1);
  width: 100%;
}

.btn-submit:hover {
  background: var(--color-primary-dark); /* Site's darker primary */
  transform: scale(1.05); /* Scale-up */
  box-shadow: var(--color-shadow);
  color: #ffffff;
}

/* Map Section */
.map-section {
  padding: 5rem 0;
  background: var(--color-bg-light);
}

.map-wrapper {
  height: 400px;
  transition: transform 0.6s cubic-bezier(0.25, 1, 0.5, 1);
}

.map-wrapper:hover {
  transform: scale(1.01); /* Subtle zoom */
}

/* Footer CTA Section */
.footer-cta-section {
  border-top: 1px solid var(--color-border-light);
}

.cta-text {
  font-size: 1.25rem;
  color: var(--color-text-primary);
  font-weight: 500;
}

.social-link {
  width: 50px;
  height: 50px;
  background: var(--color-primary);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #ffffff;
  font-size: 1.25rem;
  transition: all 0.3s cubic-bezier(0.25, 1, 0.5, 1);
}

.social-link:hover {
  background: var(--color-primary-dark);
  transform: scale(1.1) rotate(5deg); /* Pulse with rotation */
  box-shadow: var(--color-shadow);
}

/* Floating Chat Button */
.chat-btn {
  position: fixed;
  bottom: 2rem;
  right: 2rem;
  width: 60px;
  height: 60px;
  background: var(--color-primary);
  border: none;
  border-radius: 50%;
  color: #ffffff;
  font-size: 1.5rem;
  cursor: pointer;
  box-shadow: var(--color-shadow);
  transition: all 0.3s cubic-bezier(0.25, 1, 0.5, 1);
  z-index: 1000;
  animation: pulse 2s infinite;
}

.chat-btn:hover {
  background: var(--color-primary-dark);
  transform: scale(1.1);
  animation: none;
}

@keyframes pulse {
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.05);
  }
  100% {
    transform: scale(1);
  }
}

/* Responsive Adjustments */
@media (max-width: 991px) {
  .contact-banner-section {
    text-align: center;
    padding: 3rem 0;
  }

  .banner-title {
    font-size: 2.5rem;
  }

  .contact-form-section .row {
    flex-direction: column;
  }

  .map-wrapper {
    height: 300px;
  }

  .chat-btn {
    bottom: 1.5rem;
    right: 1.5rem;
    width: 50px;
    height: 50px;
    font-size: 1.25rem;
  }
}

/* Privacy Policy Specific Styles */
.privacy-wrapper {
  background-color: var(--color-white);
  padding: 80px 20px;
  min-height: 100vh;
}

.privacy-container {
  max-width: 900px;
  margin: 0 auto;
}

.privacy-title {
  font-size: 2.5rem;
  font-weight: 600;
  color: var(--color-text-primary);
  text-align: center;
  margin-bottom: 1rem;
  font-family: var(--font-primary);
}

.privacy-subtitle {
  font-size: 1rem;
  color: var(--color-text-secondary);
  text-align: center;
  margin-bottom: 3rem;
  line-height: 1.6;
}

.section-heading {
  font-size: 1.25rem;
  font-weight: 600;
  color: var(--color-primary);
  margin-top: 40px;
  margin-bottom: 1rem;
  line-height: 1.2;
}

.section-content {
  font-size: 1rem;
  color: var(--color-text-primary);
  line-height: 1.8;
  margin-bottom: 1.5rem;
}

.section-content a {
  color: var(--color-primary);
  text-decoration: none;
}

.section-content a:hover {
  color: var(--color-primary-dark);
}

.last-updated {
  text-align: center;
  color: var(--color-text-secondary);
  font-size: 0.9rem;
  margin-bottom: 2rem;
}

.section ul {
  padding-left: 1.5rem;
}

.section li {
  margin-bottom: 0.5rem;
}

/* Responsive */
@media (max-width: 768px) {
  .privacy-wrapper {
    padding: 40px 20px;
  }

  .privacy-title {
    font-size: 1.8rem;
  }

  .section-heading {
    font-size: 1.125rem;
    margin-top: 30px;
  }

  .section-content {
    line-height: 1.6;
  }
}
/* ==========================================
   PAYMENT OPTIONS PAGE STYLES (Append to interior.css)
   ========================================== */

.payment-page {
  max-width: 900px;
  margin: 0 auto;
  padding: 80px 20px;
  background: #fff;
}

.payment-title {
  color: var(--color-primary);
  font-size: 2.5rem;
  font-weight: 700;
  text-align: center;
  margin-bottom: 3rem;
}

.payment-intro {
  color: var(--color-text-secondary);
  font-size: 1.125rem;
  text-align: center;
  margin-bottom: 3rem;
}

.payment-methods-title {
  color: var(--color-text-primary);
  font-size: 2rem;
  font-weight: 600;
  text-align: center;
  margin-bottom: 2rem;
}

.payment-card {
  padding: 1.5rem;
  border: 1px solid var(--color-border);
  border-radius: var(--radius-md);
  height: 100%;
  transition: var(--transition-base);
}

.payment-card:hover {
  transform: scale(1.03);
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.08);
}

.payment-icon {
  font-size: 2rem;
  color: var(--color-primary);
  margin-right: 1rem;
}

.payment-card-title {
  color: var(--color-text-primary);
  font-weight: 600;
  font-size: 1.25rem;
}

.payment-card-desc {
  color: var(--color-text-secondary);
  font-size: 1rem;
}

.security-notice {
  background: #f8f9fa;
  border-radius: var(--radius-md);
  padding: 2rem;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
  margin-bottom: 3rem;
}

.security-title {
  color: var(--color-text-primary);
  font-size: 1.5rem;
  font-weight: 600;
  text-align: center;
  margin-bottom: 1rem;
}

.security-desc {
  color: var(--color-text-secondary);
  text-align: center;
}

.support-title {
  color: var(--color-text-primary);
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 1rem;
}

.support-desc {
  color: var(--color-text-secondary);
  font-size: 1.125rem;
  margin-bottom: 1.5rem;
}

/* ==========================================
   RETURNS & REFUNDS PAGE STYLES (Append to interior.css)
   ========================================== */

.returns-page {
  max-width: 900px;
  margin: 0 auto;
  padding: 80px 20px;
  background: #fff;
}

.returns-title {
  color: var(--color-primary);
  font-size: 2.5rem;
  font-weight: 700;
  text-align: center;
  margin-bottom: 3rem;
}

.returns-section-title {
  color: var(--color-text-primary);
  font-size: 1.25rem;
  margin-top: 40px;
  margin-bottom: 1rem;
}

.returns-paragraph {
  color: var(--color-text-primary);
  line-height: 1.8;
  font-size: 1rem;
  margin-bottom: 1.5rem;
}

.returns-list {
  color: var(--color-text-primary);
  line-height: 1.8;
  padding-left: 1.5rem;
  list-style-type: disc;
}

.returns-ordered-list {
  color: var(--color-text-primary);
  line-height: 1.8;
  padding-left: 1.5rem;
  list-style-type: decimal;
}

.need-help-section {
  background: #f8f9fa;
  border-radius: 10px;
  padding: 20px;
}

.need-help-section .returns-section-title {
  margin-top: 0;
}

