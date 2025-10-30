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
