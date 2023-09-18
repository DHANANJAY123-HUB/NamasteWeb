import React from 'react'
import Navbar from './Navbar'
import Shearchbar from './Shearchbar'

const Login = () => {
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
                    <li><a href="single-product.html">Shop Single</a></li>
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
   <Shearchbar/>
    {/* header middle end */}
<Navbar/>
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
            <li className="breadcrumb-item active" aria-current="page">login &amp; register</li>
          </ol>
        </div>
      </div>
    </div>
  </nav>
  {/* bread crumb section end */}
  <div className="login-register-area section-mb">
    <div className="container">
      <div className="row">
        <div className="col-lg-7 col-md-12 mx-auto">
          <div className="login-register-wrapper">
            <div className="login-register-tab-list nav nav-tabs" id="nav-tab" role="tablist">
              <a className="active" data-bs-toggle="tab" href="#lg1">
                <h4>login</h4>
              </a>
              <a data-bs-toggle="tab" href="#lg2">
                <h4>register</h4>
              </a>
            </div>
            <div className="tab-content">
              <div id="lg1" className="tab-pane show active">
                <div className="login-form-container">
                  <div className="login-register-form">
                    <form action="#" method="post">
                      <input type="text" name="user-name" placeholder="Username" />
                      <input type="password" name="user-password" placeholder="Password" />
                      <div className="button-box">
                        <div className="login-toggle-btn">
                          <input id="remember" type="checkbox" />
                          <label htmlFor="remember">Remember me</label>
                          <a href="#">Forgot Password?</a>
                        </div>
                        <a href="#" className="btn btn-dark">
                          <span>Login</span>
                        </a>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
              <div id="lg2" className="tab-pane">
                <div className="login-form-container">
                  <div className="login-register-form">
                    <form action="#" method="post">
                      <input type="text" name="user-name" placeholder="Username" />
                      <input type="text" name="first-name" placeholder="First Name" />
                      <input type="text" name="last-name" placeholder="Last Name" />
                      <input type="password" name="user-password" placeholder="Password" />
                      <input name="user-email" placeholder="Email" type="email" />
                      <div className="button-box">
                        <a href="#" className="btn btn-dark">
                          <span>Register</span>
                        </a>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
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
  {/* main content end */}
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
  {/* footer section end */}
  {/* Modal */}
  <div className="modal fade" id="product-modal">
    <div className="modal-dialog modal-dialog-centered product-modal-dialog">
      <div className="modal-content">
        <div className="modal-header">
          <button type="button" className="btn-close" data-bs-dismiss="modal" />
        </div>
        <div className="modal-body">
          <div className="row mb-n7">
            <div className="col-md-5 mb-7">
              <div className="modal-gallery-slider">
                <div className="product-modal-gallery">
                  <div className="swiper-container">
                    <div className="swiper-wrapper">
                      <div className="swiper-slide product-modal-gallery-item">
                        <img src="assets/images/products/product-2.1.jpg" alt="image_not_found" />
                      </div>
                      <div className="swiper-slide product-modal-gallery-item">
                        <img src="assets/images/products/product-2.jpg" alt="image_not_found" />
                      </div>
                      <div className="swiper-slide product-modal-gallery-item">
                        <img src="assets/images/products/product-4.jpg" alt="image_not_found" />
                      </div>
                      <div className="swiper-slide product-modal-gallery-item">
                        <img src="assets/images/products/product-9.jpg" alt="image_not_found" />
                      </div>
                      <div className="swiper-slide product-modal-gallery-item">
                        <img src="assets/images/products/product-13.jpg" alt="image_not_found" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="product-modal-gallery-thumbs">
                  <div className="swiper-container">
                    <div className="swiper-wrapper">
                      <div className="swiper-slide product-modal-gallery-thumbs-item">
                        <a href="#?">
                          <img src="assets/images/products/product-2.1.jpg" alt="image_not_found" />
                        </a>
                      </div>
                      <div className="swiper-slide product-modal-gallery-thumbs-item">
                        <a href="#?"> <img src="assets/images/products/product-2.jpg" alt="image_not_found" /></a>
                      </div>
                      <div className="swiper-slide product-modal-gallery-thumbs-item">
                        <a href="#?"> <img src="assets/images/products/product-4.jpg" alt="image_not_found" /></a>
                      </div>
                      <div className="swiper-slide product-modal-gallery-thumbs-item">
                        <a href="#?"> <img src="assets/images/products/product-9.jpg" alt="image_not_found" /></a>
                      </div>
                      <div className="swiper-slide product-modal-gallery-thumbs-item">
                        <a href="#?"> <img src="assets/images/products/product-13.jpg" alt="image_not_found" /></a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-7 mb-7">
              <div className="modal-product-des">
                <h3 className="modal-product-title">Tropical Juice Drink</h3>
                <h3 className="modal-product-sub-title">Reference: demo_3</h3>
                <div className="reviews">
                  <span className="las la-star" />
                  <span className="las la-star" />
                  <span className="las la-star" />
                  <span className="las la-star" />
                  <span className="las la-star" />
                </div>
                <div className="product-price-wrapp-lg">
                  <span className="product-regular-price-lg">€43.80</span>
                  <span className="product-price-on-sale-lg">€39.42</span>
                  <span className="badge badge-lg bg-dark">Save 8%</span>
                </div>
                <div className="product-description-short">
                  <ul>
                    <li>
                      Score extra points when it comes to your sporty look with the Juicy Couture™ Juicy Quilted Terry
                      Track Jacket.
                    </li>
                    <li>
                      Soft terry construction in a quilted design.
                    </li>
                    <li>
                      Front zipper closure.
                    </li>
                    <li>
                      61% cotton, 39% polyester;<br />Lining: 58% cotton, 42% polyester.
                    </li>
                  </ul>
                </div>
                <div className="product-variants">
                  <div className="product-variants-item">
                    <span className="control-label">Size</span>
                    <select className="form-control form-control-select">
                      <option value={1} title="S" selected="selected">S</option>
                      <option value={2} title="M">M</option>
                      <option value={3} title="L">L</option>
                      <option value={4} title="XL">XL</option>
                    </select>
                  </div>
                  <div className="product-variants-item">
                    <span className="control-label">color</span>
                    <ul>
                      <li className="input-container">
                        <label>
                          <input className="input-color" type="checkbox" />
                          <span className="color" />
                        </label>
                      </li>
                      <li className="input-container">
                        <label>
                          <input className="input-color" type="checkbox" defaultChecked="checked" />
                          <span className="color" />
                        </label>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="product-add-to-cart">
                  <span className="control-label">Quantity</span>
                  <div className="product-count style d-flex my-4">
                    <div className="count d-flex">
                      <input type="number" min={1} max={100} step={1} defaultValue={1} />
                      <div className="button-group">
                        <button className="count-btn increment">
                          <span className="las la-angle-up" />
                        </button>
                        <button className="count-btn decrement">
                          <span className="las la-angle-down" />
                        </button>
                      </div>
                    </div>
                    <div>
                      <button data-bs-toggle="modal" data-bs-target="#add-to-cart" className="modal-add-to-cart-btn">
                        Add to cart
                      </button>
                    </div>
                  </div>
                  <div className="product-add-to-card">
                    <a className="product-add-to-card-item" href="#"><i className="lar la-heart" /> Add to wishlist</a>
                    <a className="product-add-to-card-item" href="#"><i className="las la-sync" /> My wishlist</a>
                  </div>
                  <div className="product-social-sharing">
                    <span>Share</span>
                    <ul>
                      <li className="facebook"><a href="#" target="_blank"><i className="lab la-facebook-f" /></a></li>
                      <li className="twitter"><a href="#" target="_blank"><i className="lab la-twitter" /></a></li>
                      <li className="pinterest"><a href="#" target="_blank"><i className="lab la-pinterest" /></a></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* Modal */}
  <div className="modal fade" id="product-modal-compare">
    <div className="modal-dialog modal-dialog-centered compare-modal-dialog">
      <div className="modal-content">
        <div className="modal-header">
          <button type="button" className="btn-close" data-bs-dismiss="modal" />
        </div>
        <div className="modal-body">
          <p> <i className="las la-check" /> Product added to compare.</p>
        </div>
      </div>
    </div>
  </div>
  {/* Modal */}
  <div className="modal fade" id="product-modal-wishlist">
    <div className="modal-dialog modal-dialog-centered wishlist-modal-dialog">
      <div className="modal-content">
        <div className="modal-header">
          <button type="button" className="btn-close" data-bs-dismiss="modal" />
        </div>
        <div className="modal-body">
          <p> You must be logged in to manage your wishlist.</p>
        </div>
      </div>
    </div>
  </div>
  <div className="modal fade" id="addto-cart-modal">
    <div className="modal-dialog modal-dialog-centered">
      <div className="modal-content">
        <div className="modal-header bg-dark border-bottom-0 justify-content-center">
          <span className="ion-android-done me-5" />
          <h4 className="modal-title text-center">Product successfully added to your shopping cart</h4>
          <button type="button" className="btn-close position-absolute" data-bs-dismiss="modal" aria-label="Close">×</button>
        </div>
        <div className="modal-body p-5">
          <div className="row align-items-center align-items-lg-start">
            <div className="col-lg-5">
              <div className="row align-items-center align-items-lg-start">
                <div className="col-md-6">
                  <img className="product-image" src="assets/images/products/product-13.jpg" alt="images_not_found" />
                </div>
                <div className="col-md-6">
                  <h6 className="product-name">Snacking Essentials Walnuts</h6>
                  <ul className="quntity-list">
                    <li>€23.06</li>
                    <li>Color: White</li>
                    <li>Quantity:1</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-lg-7">
              <div className="cart-content">
                <p className="title">There are 3 items in your cart.</p>
                <p><span>Total products:</span>€23.06</p>
                <p><span>Total shipping:</span>Free</p>
                <p><span>Taxes:</span> €0.00</p>
                <p><span>Total:</span> €23.06 (tax excl.)</p>
                <div className="cart-content-btn">
                  <button className="btn btn-sm btn-dark me-1 mt-3 mt-sm-0" data-bs-dismiss="modal">Continue
                    shopping</button>
                  <button className="btn btn-sm btn-dark mt-3 mt-sm-0">Proceed to
                    checkout</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>


    </div>
  )
}

export default Login