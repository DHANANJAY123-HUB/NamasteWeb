import React, { useEffect, useState } from 'react'
import Footer from './Footer'
import Security from './Security'
import Downloadapp from './Downloadapp'
import { Link } from 'react-router-dom'
import Shearchbar from './Shearchbar'
import Navbar from './Navbar'

const Checkout = () => {



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
                  <li className="breadcrumb-item active" aria-current="page">check out page</li>
                </ol>
              </div>
            </div>
          </div>
        </nav>
        {/* bread crumb section end */}
        <div className="check-out-section section-mb">
          <div className="container">
            <div className="row">
              <div className="col-lg-7">
                <div className="billing-info-wrap">
                  <h3 className="title">Billing Details</h3>
                  <form className="personal-information" action="https://htmldemo.net/grano/grano/assets/php/contact.php">
                    <div className="row">
                      <div className="col-lg-6 col-md-6">
                        <div className="billing-info mb-5">
                          <label>First Name</label>
                          <input type="text" />
                        </div>
                      </div>
                      <div className="col-lg-6 col-md-6">
                        <div className="billing-info mb-5">
                          <label>Last Name</label>
                          <input type="text" />
                        </div>
                      </div>
                      <div className="col-lg-12">
                        <div className="billing-info mb-5">
                          <label>Company Name</label>
                          <input type="text" />
                        </div>
                      </div>
                      <div className="col-lg-12">
                        <div className="billing-select mb-5">
                          <label htmlFor="inputState" className="form-label">Country</label>
                          <select id="inputState" className="form-select mb-3">
                            <option>Select a country</option>
                            <option>Azerbaijan</option>
                            <option>Bahamas</option>
                            <option>Bahrain</option>
                            <option>Bangladesh</option>
                            <option>Barbados</option>
                          </select>
                        </div>
                      </div>
                      <div className="col-lg-12">
                        <div className="billing-info mb-5">
                          <label>Street Address</label>
                          <input className="billing-address mb-3" placeholder="House number and street name" type="text" />
                          <input placeholder="Apartment, suite, unit etc." type="text" />
                        </div>
                      </div>
                      <div className="col-lg-12">
                        <div className="billing-info mb-5">
                          <label>Town / City</label>
                          <input type="text" />
                        </div>
                      </div>
                      <div className="col-lg-6 col-md-6">
                        <div className="billing-info mb-5">
                          <label>State / County</label>
                          <input type="text" />
                        </div>
                      </div>
                      <div className="col-lg-6 col-md-6">
                        <div className="billing-info mb-5">
                          <label>Postcode / ZIP</label>
                          <input type="text" />
                        </div>
                      </div>
                      <div className="col-lg-6 col-md-6">
                        <div className="billing-info mb-5">
                          <label>Phone</label>
                          <input type="text" />
                        </div>
                      </div>
                      <div className="col-lg-6 col-md-6">
                        <div className="billing-info mb-5">
                          <label>Email Address</label>
                          <input type="text" />
                        </div>
                      </div>
                    </div>
                  </form>
                  <div className="checkout-account mb-5">
                    <input id="id2" className="checkout-toggle2" type="checkbox" />
                    <label htmlFor="id2">Create an account?</label>
                  </div>
                  <div className="checkout-account-toggle open-toggle2 mb-30">
                    <input placeholder="Email address" type="email" />
                    <input placeholder="Password" type="password" />
                    <button className="btn btn-dark" type="submit">
                      register
                    </button>
                  </div>
                  <div className="additional-info-wrap">
                    <h4 className="title">Additional information</h4>
                    <div className="additional-info">
                      <label className="mb-2">Order notes</label>
                      <textarea placeholder="Notes about your order, e.g. special notes for delivery. " name="message" defaultValue={""} />
                    </div>
                  </div>
                  <div className="checkout-account mt-25">
                    <input id="ship" className="checkout-toggle" type="checkbox" />
                    <label htmlFor="ship">Ship to a different address?</label>
                  </div>
                  <div className="different-address open-toggle mt-5">
                    <div className="row">
                      <div className="col-lg-6 col-md-6">
                        <div className="billing-info mb-5">
                          <label>First Name</label>
                          <input type="text" />
                        </div>
                      </div>
                      <div className="col-lg-6 col-md-6">
                        <div className="billing-info mb-5">
                          <label>Last Name</label>
                          <input type="text" />
                        </div>
                      </div>
                      <div className="col-lg-12">
                        <div className="billing-info mb-5">
                          <label>Company Name</label>
                          <input type="text" />
                        </div>
                      </div>
                      <div className="col-lg-12">
                        <div className="billing-select mb-5">
                          <label htmlFor="inputState1" className="form-label">Country</label>
                          <select id="inputState1" className="form-select mb-3">
                            <option>Select a country</option>
                            <option>Azerbaijan</option>
                            <option>Bahamas</option>
                            <option>Bahrain</option>
                            <option>Bangladesh</option>
                            <option>Barbados</option>
                          </select>
                        </div>
                      </div>
                      <div className="col-lg-12">
                        <div className="billing-info mb-5">
                          <label>Street Address</label>
                          <input className="billing-address mb-3" placeholder="House number and street name" type="text" />
                          <input placeholder="Apartment, suite, unit etc." type="text" />
                        </div>
                      </div>
                      <div className="col-lg-12">
                        <div className="billing-info mb-5">
                          <label>Town / City</label>
                          <input type="text" />
                        </div>
                      </div>
                      <div className="col-lg-6 col-md-6">
                        <div className="billing-info mb-5">
                          <label>State / County</label>
                          <input type="text" />
                        </div>
                      </div>
                      <div className="col-lg-6 col-md-6">
                        <div className="billing-info mb-5">
                          <label>Postcode / ZIP</label>
                          <input type="text" />
                        </div>
                      </div>
                      <div className="col-lg-6 col-md-6">
                        <div className="billing-info mb-5">
                          <label>Phone</label>
                          <input type="text" />
                        </div>
                      </div>
                      <div className="col-lg-6 col-md-6">
                        <div className="billing-info mb-5">
                          <label>Email Address</label>
                          <input type="text" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-5 mt-4 mt-lg-0">
                <div className="your-order-area">
                  <h3 className="title">Your order</h3>
                  <div className="your-order-wrap gray-bg-4">
                    <div className="your-order-product-info">
                      <div className="your-order-top">
                        <ul>
                          <li>Product</li>
                          <li>Total</li>
                        </ul>
                      </div>
                      <div className="your-order-middle">
                        <ul>
                          <li>
                            <span className="order-middle-left">Product Name X 1</span>
                            <span className="order-price">$329 </span>
                          </li>
                          <li>
                            <span className="order-middle-left">Product Name X 1</span>
                            <span className="order-price">$329 </span>
                          </li>
                        </ul>
                      </div>
                      <div className="your-order-bottom">
                        <ul>
                          <li className="your-order-shipping">Shipping</li>
                          <li>Free shipping</li>
                        </ul>
                      </div>
                      <div className="your-order-total">
                        <ul>
                          <li className="order-total">Total</li>
                          <li>$329</li>
                        </ul>
                      </div>
                    </div>
                    <div className="payment-method">
                      <div className="payment-accordion element-mrg">
                        <div className="panel-group" id="accordion">
                          <div className="panel payment-accordion">
                            <div className="panel-heading" id="method-one">
                              <h4 className="panel-title">
                                <a data-toggle="collapse" data-parent="#accordion" href="#method1">
                                  Direct bank transfer
                                </a>
                              </h4>
                            </div>
                            <div id="method1" className="panel-collapse collapse show">
                              <div className="panel-body">
                                <p>
                                  Please send a check to Store Name, Store Street,
                                  Store Town, Store State / County, Store Postcode.
                                </p>
                              </div>
                            </div>
                          </div>
                          <div className="panel payment-accordion">
                            <div className="panel-heading" id="method-two">
                              <h4 className="panel-title">
                                <a className="collapsed" data-toggle="collapse" data-parent="#accordion" href="#method2">
                                  Check payments
                                </a>
                              </h4>
                            </div>
                            <div id="method2" className="panel-collapse collapse">
                              <div className="panel-body">
                                <p>
                                  Please send a check to Store Name, Store Street,
                                  Store Town, Store State / County, Store Postcode.
                                </p>
                              </div>
                            </div>
                          </div>
                          <div className="panel payment-accordion">
                            <div className="panel-heading" id="method-three">
                              <h4 className="panel-title">
                                <a className="collapsed" data-toggle="collapse" data-parent="#accordion" href="#method3">
                                  Cash on delivery
                                </a>
                              </h4>
                            </div>
                            <div id="method3" className="panel-collapse collapse">
                              <div className="panel-body">
                                <p>
                                  Please send a check to Store Name, Store Street,
                                  Store Town, Store State / County, Store Postcode.
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="Place-order mt-25">
                    <Link className="btn btn-dark btn-lg w-100" to="/order">Place Order</Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>



        <Downloadapp />
        <Security />
        <Footer />


      </div>
    </div>
  )
}

export default Checkout