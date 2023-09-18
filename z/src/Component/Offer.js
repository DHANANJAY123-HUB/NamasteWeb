import React from 'react'
import Shearchbar from './Shearchbar'
import Navbar from './Navbar'

const Offer = () => {
    return (
        <div>

            <div>
                {/* header section start */}
                {/* Modal */}
                <div className="modal fade offcanvas-modal" id="exampleModal">
                    <div className="modal-dialog offcanvas-dialog">
                        <div className="modal-content">
                            <div className="modal-header offcanvas-header">
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
                            </div>
                            <ul className="header-topbar-nav nav my-4 justify-content-center">
                                <li className="topbar-nav-item">
                                    <a className="topbar-nav-link" href="#"><i className="icon las la-map-marker" />Store Locator</a>
                                </li>
                                <li className="topbar-nav-item">
                                    <a className="topbar-nav-link" href="#"><i className="icon las la-shipping-fast" />Track Your Order</a>
                                </li>
                            </ul>
                            <div className="bg-white">
                                <ul className="quick-links justify-content-center">
                                    {/* quick-link-item */}
                                    <li className="quick-link-item d-inline-flex">
                                        <span className="quick-link-icon flex-shrink-0">
                                            <a href="#" className="quick-link">
                                                <i className="las la-user-circle" />
                                            </a>
                                        </span>
                                        <span className="flex-grow-1">
                                            <a href="#" className="my-account">My account</a>
                                            <a href="#" className="sign-in">Sign out</a>
                                        </span>
                                    </li>
                                    {/* quick-link-item end */}
                                    {/* quick-link-item */}
                                    <li className="quick-link-item d-inline-flex">
                                        <a href="#" className="quick-link">
                                            <span className="quick-link-icon flex-shrink-0">
                                                <span className="badge rounded-pill bg-success">2</span>
                                            </span>
                                        </a>
                                    </li>
                                    {/* quick-link-item end */}
                                    {/* quick-link-item */}
                                    <li className="quick-link-item d-inline-flex">
                                        <a href="#" className="quick-link">
                                            <span className="quick-link-icon flex-shrink-0">
                                                <i className="lar la-heart" />
                                                <span className="badge rounded-pill bg-success">3</span>
                                            </span>
                                        </a>
                                    </li>
                                    {/* quick-link-item end */}
                                </ul>
                            </div>
                            <form action="#" className="offcanvas-form">
                                <input type="text" className="form-control" placeholder="Enter your search key ... " />
                                <button className="btn-search btn-success" type="submit">
                                    <i className="las la-search" />
                                </button>
                            </form>
                            {/* offcanvas-mobile-menu start */}
                            <nav id="offcanvasNav" className="offcanvas-menu">
                                <ul>
                                    <li>
                                        <a href="javascript:void(0)">Home</a>
                                        {/* home sub menu */}
                                        <ul>
                                            <li><a href="index.html">Home 1</a></li>
                                            <li><a href="index-2.html">Home 2</a></li>
                                            <li><a href="index-3.html">Home 3</a></li>
                                            <li><a href="index-4.html">Home 4</a></li>
                                        </ul>
                                        {/* home sub menu end*/}
                                    </li>
                                    <li>
                                        <a href="shop-grid-left-sidebar.html">shop</a>
                                        {/* shop mega menu */}
                                        <ul>
                                            <li>
                                                <a href="#">Shop Grid</a>
                                                <ul>
                                                    <li>
                                                        <a href="shop-grid-4-column.html">Shop Grid 4 Column</a>
                                                    </li>
                                                    <li>
                                                        <a href="shop-grid-5-column.html">Shop Grid 5 Column</a>
                                                    </li>
                                                    <li>
                                                        <a href="shop-grid-left-sidebar.html">Shop Grid Left Sidebar</a>
                                                    </li>
                                                    <li>
                                                        <a href="shop-grid-right-sidebar.html">Shop Grid Right Sidebar</a>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li>
                                                <a href="#">Shop Single</a>
                                                <ul>
                                                    <li><a href="#">Shop Single</a></li>
                                                    <li>
                                                        <a href="single-product-configurable.html">Shop Variable</a>
                                                    </li>
                                                    <li>
                                                        <a href="single-product-affiliate.html">Shop Affiliate</a>
                                                    </li>
                                                    <li><a href="single-product-group.html">Shop Group</a></li>
                                                </ul>
                                            </li>
                                            <li>
                                                <a href="#">other pages</a>
                                                <ul>
                                                    <li><a href="about-us.html">About Page</a></li>
                                                    <li><a href="cart.html">Cart Page</a></li>
                                                    <li><a href="checkout.html">Checkout Page</a></li>
                                                    <li><a href="compare.html">Compare Page</a></li>
                                                </ul>
                                            </li>
                                        </ul>
                                        {/* shop mega menu end*/}
                                    </li>
                                    <li>
                                        <a href="javascript:void(0)">pages</a>
                                        {/* pages sub menu */}
                                        <ul>
                                            <li><a href="about-us.html">About Page</a></li>
                                            <li><a href="cart.html">Cart Page</a></li>
                                            <li><a href="checkout.html">Checkout Page</a></li>
                                            <li><a href="compare.html">Compare Page</a></li>
                                            <li><a href="login.html">Login &amp; Register Page</a></li>
                                            <li><a href="myaccount.html">Account Page</a></li>
                                            <li><a href="wishlist.html">Wishlist Page</a></li>
                                        </ul>
                                        {/* pages sub menu end*/}
                                    </li>
                                    <li>
                                        <a href="javascript:void(0)">Blog</a>
                                        {/* blog sub menu */}
                                        <ul>
                                            <li>
                                                <a href="#">Blog Grid</a>
                                                <ul>
                                                    <li>
                                                        <a href="blog-grid-5-column.html">Blog Grid 5 column</a>
                                                    </li>
                                                    <li>
                                                        <a href="blog-grid-6-column.html">Blog Grid 6 column</a>
                                                    </li>
                                                    <li>
                                                        <a href="blog-grid-left-sidebar.html">Blog Grid Left Sidebar</a>
                                                    </li>
                                                    <li>
                                                        <a href="blog-grid-right-sidebar.html">Blog Grid Right Sidebar</a>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li>
                                                <a href="#">Blog List</a>
                                                <ul>
                                                    <li>
                                                        <a href="blog-list-left-sidebar.html">Blog List Left Sidebar</a>
                                                    </li>
                                                    <li>
                                                        <a href="blog-list-right-sidebar.html">Blog List Right Sidebar</a>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li>
                                                <a href="#">Blog details</a>
                                                <ul>
                                                    <li>
                                                        <a href="blog-details-left-sidebar.html">Blog details Left Sidebar</a>
                                                    </li>
                                                    <li>
                                                        <a href="blog-details-right-sidebar.html">Blog details Right Sidbar</a>
                                                    </li>
                                                </ul>
                                            </li>
                                        </ul>
                                        {/* blog sub menu end*/}
                                    </li>
                                    <li>
                                        <a href="contact.html">Contact</a>
                                    </li>
                                </ul>
                                <div className="offcanvas-social">
                                    <ul>
                                        <li>
                                            <a href="#"><i className="ion-social-facebook" /></a>
                                        </li>
                                        <li>
                                            <a href="#"><i className="ion-social-twitter" /></a>
                                        </li>
                                        <li>
                                            <a href="#"><i className="ion-social-instagram" /></a>
                                        </li>
                                        <li>
                                            <a href="#"><i className="ion-social-google" /></a>
                                        </li>
                                        <li>
                                            <a href="#"><i className="ion-social-instagram" /></a>
                                        </li>
                                    </ul>
                                </div>
                            </nav>
                            {/* offcanvas-mobile-menu end */}
                            <div className="header-top">
                                <ul id="offcanvas-menu2" className="blog-ctry-menu blog-ctry-menu2">
                                    <li>
                                        <a href="javascript:void(0)">currency: USD $</a>
                                        <ul className="category-sub-menu">
                                            <li><a href="#">EUR $</a></li>
                                            <li><a href="#">USD $</a></li>
                                        </ul>
                                    </li>
                                    <li>
                                        <a href="javascript:void(0)"><img className="me-1" src="assets/images/icon/us-flag.jpg" alt="img" />English</a>
                                        <ul className="category-sub-menu">
                                            <li>
                                                <a href="#"><img className="me-1" src="assets/images/icon/us-flag.jpg" alt="flags" />
                                                    English</a>
                                            </li>
                                            <li>
                                                <a href="#"><img className="me-1" src="assets/images/icon/italiano-flag.jpg" alt="flags" />
                                                    Français</a>
                                            </li>
                                        </ul>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <header>
                    <div className="header-top-bar d-none d-md-block">
                        <div className="container">
                            <div className="row align-items-center">
                                <div className="col-3">
                                    <div className="social-links social-links-dark">
                                        <a className="social-link facebook" href="#"><i className="lab la-facebook" /></a>
                                        <a className="social-link twitter" href="#"><i className="lab la-twitter" /></a>
                                        <a className="social-link youtube" href="#"><i className="lab la-youtube" /></a>
                                        <a className="social-link instagram" href="#"><i className="lab la-instagram" /></a>
                                    </div>
                                </div>
                                <div className="col-9">
                                    <ul className="header-topbar-nav nav">
                                        <li className="topbar-nav-item">
                                            <a className="topbar-nav-link" href="#"><i className="icon las la-map-marker" />Store Locator</a>
                                        </li>
                                        <li className="topbar-nav-item">
                                            <a className="topbar-nav-link" href="#"><i className="icon las la-shipping-fast" />Track Your Order</a>
                                        </li>
                                        {/*   <li class="topbar-nav-item dropdown">
								<a class="topbar-nav-link" href="#" data-bs-toggle="dropdown" id="euro"><span>EUR $</span> <i class="ion-chevron-down"></i></a>

								<ul class="dropdown-menu" aria-labelledby="usd">
									<li><a class="dropdown-item" href="#">EUR $</a></li>
									<li><a class="dropdown-item" href="#">USD $</a></li>
								</ul>
							</li>
							<li class="topbar-nav-item dropdown">
								<a class="topbar-nav-link" href="#" data-bs-toggle="dropdown" id="english">
									<img src="assets/images/icon/us-flag.jpg" alt="image_not_found" />
									<span>English</span> <i class="ion-chevron-down"></i></a>

								<ul class="dropdown-menu" aria-labelledby="english">
									<li><a class="dropdown-item" href="#"><img src="assets/images/icon/us-flag.jpg" alt="us-flag">English</a></li>
									<li><a class="dropdown-item" href="#"><img src="assets/images/icon/italiano-flag.jpg" alt="italiano-flag"> Italiano</a></li>
								</ul>
							</li> */}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* header top end */}
                    <Shearchbar />
                    {/* header middle end */}
                    <Navbar />
                    {/* header middle end */}
                </header>
                {/* header section end */}
                {/* main content start */}
                {/* bread crumb section start */}
                <nav className="breadcrumb-section">
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                <ol className="breadcrumb bg-transparent m-0 p-0 align-items-center">
                                    <li className="breadcrumb-item"><a href="index.html">Home</a></li>
                                    <li className="breadcrumb-item active" aria-current="page">Coupan page </li>
                                </ol>
                            </div>
                        </div>
                    </div>
                </nav>
                {/* bread crumb section end */}
                <section className="featured-carousel-section">
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                <div className="section-title">
                                    <h2 className="title">Coupan Offers</h2>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-12">
                                <div className="featured-carousel">
                                    <div className="swiper-container">
                                        <div className="swiper-wrapper">
                                            {/* swiper-slide start */}
                                            <div className="col-md-3">
                                                <div className="featured-carousel-item swiper-slide">
                                                    {/* product-card-list start */}
                                                    <div className="product-card-list">
                                                        {/* product-card start */}
                                                        <div className="product-card">
                                                            {/*  <span class="badge bg-success product-badge">new</span> */}
                                                            <div className="product-thumb-nail">
                                                                <a href="#">
                                                                    <img className="product-image" src="assets/images/products/pay.png" alt="image_not_found" />
                                                                </a>
                                                                {/* <ul class="actions">
													<li class="action whish-list">
														<button data-bs-toggle="modal" data-bs-target="#product-modal-wishlist"><i class="lar la-heart"></i></button>
													</li>
													<li class="action compare">
														<button data-bs-toggle="modal" data-bs-target="#product-modal-compare"></button>
													</li>
													<li class="action quick-view">
														<button data-bs-toggle="modal" data-bs-target="#product-modal"><i class="las la-eye"></i></button>
													</li>
												</ul> */}
                                                            </div>
                                                            <div className="product-content">
                                                                <h4 className="product-title"><a href="#">Paytm Voucher</a></h4>
                                                                <h5 className><a href="#">On shopping for 1999</a></h5>
                                                                <h6 className><a href="#">Minimum order value 599</a></h6>
                                                                <h6 className><a href="#">One Time per user</a></h6>
                                                                <div className="product-price-wrapp">
                                                                    <span className="badge bg-success">*T&amp;C</span>
                                                                </div>
                                                                <div className="product-cart-btn-wrap">
                                                                    <button className="btn btn-dark add-to-cart-btn" data-bs-toggle="modal" data-bs-target="#addto-cart-modal">Redeem</button>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        {/* product-card end */}
                                                    </div>
                                                    {/* product-card-list end */}
                                                </div>
                                            </div>
                                            {/* swiper-slide end*/}
                                            {/* swiper-slide start */}
                                            <div className="col-md-3">
                                                <div className="featured-carousel-item swiper-slide">
                                                    {/* product-card-list start */}
                                                    <div className="product-card-list">
                                                        {/* product-card start */}
                                                        <div className="product-card">
                                                            {/*  <span class="badge bg-success product-badge">new</span> */}
                                                            <div className="product-thumb-nail">
                                                                <a href="#">
                                                                    <img className="product-image" src="assets/images/products/gft.png" alt="image_not_found" />
                                                                    <img className="product-image-hover-style" src="assets/images/products/gft.png" alt="image_not_found" />
                                                                </a>
                                                                {/* <ul class="actions">
													<li class="action whish-list">
														<button data-bs-toggle="modal" data-bs-target="#product-modal-wishlist"><i class="lar la-heart"></i></button>
													</li>
													<li class="action compare">
														<button data-bs-toggle="modal" data-bs-target="#product-modal-compare"></button>
													</li>
													<li class="action quick-view">
														<button data-bs-toggle="modal" data-bs-target="#product-modal"><i class="las la-eye"></i></button>
													</li>
												</ul> */}
                                                            </div>
                                                            <div className="product-content">
                                                                <h3 className="product-title"><a href="#">Buy 1 Get 1 Free</a></h3>
                                                                <h5 className><a href="#">First purchase</a></h5>
                                                                <h6 className><a href="#">Minimum order value 599</a></h6>
                                                                <h6 className><a href="#">One Time per user</a></h6>
                                                                <div className="product-price-wrapp">
                                                                    <span className="badge bg-success">*T&amp;C</span>
                                                                </div>
                                                                <div className="product-cart-btn-wrap">
                                                                    <button className="btn btn-dark add-to-cart-btn" data-bs-toggle="modal" data-bs-target="#addto-cart-modal">Redeem</button>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        {/* product-card end */}
                                                    </div>
                                                    {/* product-card-list end */}
                                                </div>
                                            </div>
                                            {/* swiper-slide end*/}
                                            {/* swiper-slide end*/}
                                            {/* swiper-slide start */}
                                            <div className="col-md-3">
                                                <div className="featured-carousel-item swiper-slide">
                                                    {/* product-card-list start */}
                                                    <div className="product-card-list">
                                                        {/* product-card start */}
                                                        <div className="product-card">
                                                            {/*  <span class="badge bg-success product-badge">new</span> */}
                                                            <div className="product-thumb-nail">
                                                                <a href="#">
                                                                    <img className="product-image" src="assets/images/products/gft.png" alt="image_not_found" />
                                                                    <img className="product-image-hover-style" src="assets/images/products/gft.png" alt="image_not_found" />
                                                                </a>
                                                                {/* <ul class="actions">
													<li class="action whish-list">
														<button data-bs-toggle="modal" data-bs-target="#product-modal-wishlist"><i class="lar la-heart"></i></button>
													</li>
													<li class="action compare">
														<button data-bs-toggle="modal" data-bs-target="#product-modal-compare"></button>
													</li>
													<li class="action quick-view">
														<button data-bs-toggle="modal" data-bs-target="#product-modal"><i class="las la-eye"></i></button>
													</li>
												</ul> */}
                                                            </div>
                                                            <div className="product-content">
                                                                <h3 className="product-title"><a href="#">Buy 1 Get 1 Free</a></h3>
                                                                <h5 className><a href="#">First purchase</a></h5>
                                                                <h6 className><a href="#">Minimum order value 599</a></h6>
                                                                <h6 className><a href="#">One Time per user</a></h6>
                                                                <div className="product-price-wrapp">
                                                                    <span className="badge bg-success">*T&amp;C</span>
                                                                </div>
                                                                <div className="product-cart-btn-wrap">
                                                                    <button className="btn btn-dark add-to-cart-btn" data-bs-toggle="modal" data-bs-target="#addto-cart-modal">Redeem</button>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        {/* product-card end */}
                                                    </div>
                                                    {/* product-card-list end */}
                                                </div>
                                            </div>
                                            {/* swiper-slide end*/}
                                            {/* swiper-slide start */}
                                            <div className="col-md-3">
                                                <div className="featured-carousel-item swiper-slide">
                                                    {/* product-card-list start */}
                                                    <div className="product-card-list">
                                                        {/* product-card start */}
                                                        <div className="product-card">
                                                            {/*  <span class="badge bg-success product-badge">new</span> */}
                                                            <div className="product-thumb-nail">
                                                                <a href="#">
                                                                    <img className="product-image" src="assets/images/products/gft.png" alt="image_not_found" />
                                                                    <img className="product-image-hover-style" src="assets/images/products/gft.png" alt="image_not_found" />
                                                                </a>
                                                                {/* <ul class="actions">
													<li class="action whish-list">
														<button data-bs-toggle="modal" data-bs-target="#product-modal-wishlist"><i class="lar la-heart"></i></button>
													</li>
													<li class="action compare">
														<button data-bs-toggle="modal" data-bs-target="#product-modal-compare"></button>
													</li>
													<li class="action quick-view">
														<button data-bs-toggle="modal" data-bs-target="#product-modal"><i class="las la-eye"></i></button>
													</li>
												</ul> */}
                                                            </div>
                                                            <div className="product-content">
                                                                <h3 className="product-title"><a href="#">Buy 1 Get 1 Free</a></h3>
                                                                <h5 className><a href="#">First purchase</a></h5>
                                                                <h6 className><a href="#">Minimum order value 599</a></h6>
                                                                <h6 className><a href="#">One Time per user</a></h6>
                                                                <div className="product-price-wrapp">
                                                                    <span className="badge bg-success">*T&amp;C</span>
                                                                </div>
                                                                <div className="product-cart-btn-wrap">
                                                                    <button className="btn btn-dark add-to-cart-btn" data-bs-toggle="modal" data-bs-target="#addto-cart-modal">Redeem</button>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        {/* product-card end */}
                                                    </div>
                                                    {/* product-card-list end */}
                                                </div>
                                            </div>
                                            {/* swiper-slide end*/}
                                        </div>
                                    </div>
                                    {/* swiper navigation */}
                                    <div className="swiper-button-prev common-swiper-button-prev">
                                        <i className="las la-angle-left" />
                                    </div>
                                    <div className="swiper-button-next common-swiper-button-next">
                                        <i className="las la-angle-right" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* news letter section start */}
                <section className="news-letter-sectoin bg-success">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-lg-8 col-xl-9">
                                <div className="news-letter-wrap">
                                    <div className="news-letter-title">
                                        <h3 className="title">DOWNLOAD OUR APP</h3>
                                        <p>Download now to get more offers.</p>
                                    </div>
                                    {/* <form id="mc-form" class="news-letter-form" action="#">
							<input id="mc-email" class="form-control" name="email" type="email" placeholder="Your email address">
							<button class="sign-up-btn" type="submit">Sign up</button>
						</form> */}
                                </div>
                            </div>
                            <div className="col-lg-4 col-xl-3">
                                <div className="text-center text-lg-end mt-7 mt-lg-0">
                                    <a className="store-btn" href="#">
                                        <img src="assets/images/icon/app_store.png" alt="images_not_found" />
                                    </a>
                                    <a className="store-btn" href="#">
                                        <img src="assets/images/icon/google_play.png" alt="images_not_found" />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* news letter section end */}
                {/* service section start */}
                <section className="service-section section-mt section-mb">
                    <div className="container">
                        <div className="services">
                            <div className="row mb-n7">
                                <div className="col-sm-6 col-lg-3 mb-7">
                                    <div className="service-item">
                                        <img className="service-icon" src="assets/images/icon/service1.png" alt="images_not_found" />
                                        <h3 className="service-title">100% SECURE PAYMENTS</h3>
                                        <p>Moving your card details to a much more secured place</p>
                                    </div>
                                </div>
                                <div className="col-sm-6 col-lg-3 mb-7">
                                    <div className="service-item">
                                        <img className="service-icon" src="assets/images/icon/service2.png" alt="images_not_found" />
                                        <h3 className="service-title">TRUSTPAY</h3>
                                        <p>100% Payment Protection. Easy Return Policy</p>
                                    </div>
                                </div>
                                <div className="col-sm-6 col-lg-3 mb-7">
                                    <div className="service-item">
                                        <img className="service-icon" src="assets/images/icon/service3.png" alt="images_not_found" />
                                        <h3 className="service-title">HELP CENTER</h3>
                                        <p>GGot a question? Look no further.Browse our FAQs or submit your query here.</p>
                                    </div>
                                </div>
                                <div className="col-sm-6 col-lg-3 mb-7">
                                    <div className="service-item">
                                        <img className="service-icon" src="assets/images/icon/service4.png" alt="images_not_found" />
                                        <h3 className="service-title">Express Shipping</h3>
                                        <p>Fast, reliable delivery from global warehouses</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* service section end */}
                {/* footer section start */}
                <footer className="footer">
                    <div className="container">
                        <div className="row mb-n7">
                            <div className="col-lg-4 col-sm-6 mb-7">
                                <div className="footer-widget">
                                    <a className="footer-brand" href="index.html">
                                        <img src="assets/images/logo/logo-dark.png" alt="images_not_found" />
                                    </a>
                                    <p>We are a team of designers and developers that create high quality Magento, Prestashop, Opencart.</p>
                                    <ul className="footer-des">
                                        <li className="footer-des-list"><i className="las la-map-marked" /> <span>4710-4890 Breckinridge USA</span>
                                        </li>
                                        <li className="footer-des-list"><i className="las la-envelope-open" /> <a href="mailto:demo@hasthemes.com">demo@hasthemes.com</a>
                                        </li>
                                        <li className="footer-des-list"><i className="las la-phone-volume" /> <a href="tel:+11238889999">+1 123 888
                                            9999</a></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-lg-2 col-sm-6 mb-7">
                                <div className="footer-widget">
                                    <h4 className="title">Information</h4>
                                    <ul className="footer-menu">
                                        <li className="footer-menu-items"><a className="footer-menu-link" href="#">Delivery</a></li>
                                        <li className="footer-menu-items"><a className="footer-menu-link" href="about-us.html">About us</a></li>
                                        <li className="footer-menu-items"><a className="footer-menu-link" href="#">Secure payment</a></li>
                                        <li className="footer-menu-items"><a className="footer-menu-link" href="contact-us.html">Contact us</a></li>
                                        <li className="footer-menu-items"><a className="footer-menu-link" href="#">Sitemap</a></li>
                                        <li className="footer-menu-items"><a className="footer-menu-link" href="#">Stores</a></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-lg-2 col-sm-6 mb-7">
                                <div className="footer-widget">
                                    <h4 className="title">Information</h4>
                                    <ul className="footer-menu">
                                        <li className="footer-menu-items"><a className="footer-menu-link" href="#">Legal Notice</a></li>
                                        <li className="footer-menu-items"><a className="footer-menu-link" href="#">Prices drop</a></li>
                                        <li className="footer-menu-items"><a className="footer-menu-link" href="#">New products</a></li>
                                        <li className="footer-menu-items"><a className="footer-menu-link" href="#">Best sales</a></li>
                                        <li className="footer-menu-items"><a className="footer-menu-link" href="login.html">Login</a></li>
                                        <li className="footer-menu-items"><a className="footer-menu-link" href="myaccount.html">My account</a></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-lg-2 col-sm-6 mb-7">
                                <div className="footer-widget">
                                    <h4 className="title">Information</h4>
                                    <ul className="footer-menu">
                                        <li className="footer-menu-items"><a className="footer-menu-link" href="#"> Personal info</a></li>
                                        <li className="footer-menu-items"><a className="footer-menu-link" href="#">Orders</a></li>
                                        <li className="footer-menu-items"><a className="footer-menu-link" href="#">Credit slips</a></li>
                                        <li className="footer-menu-items"><a className="footer-menu-link" href="#">Addresses</a></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-lg-2 col-sm-6 mb-7">
                                <div className="footer-widget">
                                    <h4 className="title">Information</h4>
                                    <div className="social-links social-links-dark">
                                        <a className="social-link facebook" href="#"><i className="lab la-facebook" /></a>
                                        <a className="social-link twitter" href="#"><i className="lab la-twitter" /></a>
                                        <a className="social-link youtube" href="#"><i className="lab la-youtube" /></a>
                                        <a className="social-link instagram" href="#"><i className="lab la-instagram" /></a>
                                    </div>
                                    <a className="footer-payment" href="#">
                                        <img src="assets/images/payment/payment.png" alt="images_not_found" />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="copy-right bg-dark">
                        <div className="container">
                            <div className="row">
                                <div className="col-12">
                                    <p>© <span id="currentYear" /> Made With <i className="las la-heart" /> By <a href="https://hasthemes.com/">HasThemes</a> All Rights
                                        Reserved </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </footer>
            </div>



        </div>
    )
}

export default Offer