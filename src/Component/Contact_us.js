import React from 'react'
import Downloadapp from './Downloadapp'
import Security from './Security'
import Footer from './Footer'
import { Link } from 'react-router-dom'
import Shearchbar from './Shearchbar'
import Navbar from './Navbar'

const Contact_us = () => {
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
            <li className="breadcrumb-item active" aria-current="page">contact us </li>
          </ol>
        </div>
      </div>
    </div>
  </nav>
  {/* bread crumb section end */}
  <div className="map section-mb">
    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d64876600.99126343!2d-31.49658015000001!3d-7.0382327499999855!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x65a81cae36eb8ff%3A0xa6342257f310534f!2sAtlantic%20Ocean!5e0!3m2!1sen!2sbd!4v1618893629132!5m2!1sen!2sbd" />
  </div>
  <section className="contact-section section-mb">
    <div className="container">
      <div className="row mb-n7">
        <div className="col-lg-6 mb-7">
          {/* contact-title-section start */}
          <div className="contact-title-section">
            <h3 className="title">Get in touch</h3>
            <p>
              Top rated construction packages we pleasure rationally encounter
              <br className="d-none d-xl-block" />
              consequences interesting who loves or pursue or desires
            </p>
          </div>
          {/* contact-title-section end */}
          <form id="contactForm" className="row" action="https://htmldemo.net/grano/grano/assets/php/contact.php" method="POST" noValidate="novalidate">
            {/* assets/php/contact.php */}
            <div className="col-12 col-sm-6 mb-7">
              <input type="text" className="form-control" id="name" name="name" placeholder="Your Name*" />
            </div>
            <div className="col-12 col-sm-6 mb-7">
              <input type="text" className="form-control" id="email" name="email" placeholder="Your Email*" />
            </div>
            <div className="col-12 mb-9">
              <textarea className="form-control massage-control" name="massage" id="massage" cols={30} rows={10} placeholder="Message" defaultValue={""} />
            </div>
            <div className="col-12">
              <button id="contactSubmit" type="submit" className="btn btn-dark">
                Send Message
              </button>
              <p className="form-message mt-3" />
            </div>
          </form>
        </div>
        <div className="col-lg-6 mb-7">
          <div className="contact-address">
            {/* address-list start */}
            <div className="address-list mb-4 mb-xl-10 pb-2">
              <h4 className="title">Office Addres</h4>
              <p>
                245 Southern Street, Apartment no. 174 Central Twon, New
                Yourk, USa
              </p>
            </div>
            {/* address-list end */}
            {/* address-list start */}
            <div className="address-list mb-4 mb-xl-10 pb-2">
              <h4 className="title">Phone Number</h4>
              <ul>
                <li>
                  <a className="phone-number" href="tel:+12345678987">+12345 678 987</a>
                </li>
                <li>
                  <a className="phone-number" href="tel:+98745612321">+98745 612 321</a>
                </li>
              </ul>
            </div>
            {/* address-list end */}
            {/* address-list start */}
            <div className="address-list">
              <h4 className="title">Web Address</h4>
              <ul>
                <li>
                  <a className="mailto" href="mailto:info@example.com">info@example.com</a>
                </li>
                <li>
                  <a className="mailto" href="mailto:www.example.com">www.example.com</a>
                </li>
              </ul>
            </div>
            {/* address-list end */}
          </div>
        </div>
      </div>
    </div>
  </section>

 




  <Downloadapp/>
  <Security/>
  <Footer/>




</div>

    </div>
  )
}

export default Contact_us