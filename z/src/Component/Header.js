import React from 'react'
import Slidere from './Slider'
import Freshfruit from './Freshfruit'
import Dealsoftheday from './Dealsoftheday'
import Fruits from './Fruits&Vegetable'
import Banner from './Banner'
import Newarrivals from './Newarrivals'
import Gerocery from './Gerocery'
import Featuredproducts from './Featuredproducts'
import Audiojungle from './Audiojungle'
import Milkegg from './Milkegg'
import Downloadapp from './Downloadapp'
import Security from './Security'
import Footer from './Footer'
import { Link } from 'react-router-dom'
import Shearchbar from './Shearchbar'
import Navbar from './Navbar'

function Header() {
  return (
    <div>
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
                        <li><Link to="/single_products">Shop Single</Link></li>
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
        <div class="header-top-bar d-none d-md-block">
          <div class="container">
            <div class="row align-items-center">
              <div class="col-3">
                <div class="social-links social-links-dark">
                  <a class="social-link facebook" href="#"
                  ><i class="lab la-facebook"></i
                  ></a>
                  <a class="social-link twitter" href="#"
                  ><i class="lab la-twitter"></i
                  ></a>
                  <a class="social-link youtube" href="#"
                  ><i class="lab la-youtube"></i
                  ></a>
                  <a class="social-link instagram" href="#"
                  ><i class="lab la-instagram"></i
                  ></a>
                </div>
              </div>
              <div class="col-9">
                <ul class="header-topbar-nav nav">
                  <li class="topbar-nav-item">
                    <a
                      class="topbar-nav-link"
                      data-bs-toggle="modal"
                      data-bs-target="#exampleModalLocation"
                      href="#"
                    ><i class="icon las la-map-marker"></i>Store Locator</a
                    >
                  </li>
                  <li class="topbar-nav-item">
                    <a class="topbar-nav-link" href="#"
                    ><i class="icon las la-shipping-fast"></i>Track Your
                      Order</a
                    >
                  </li>
                  {/* <!--   <li class="topbar-nav-item dropdown">
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
                          </li> --> */}
                </ul>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- header top end --> */}

        <Shearchbar />


        {/* <!-- header middle end --> */}
        <Navbar />
        {/* <!-- header middle end --> */}
      </header>
      <Slidere />
      <Freshfruit />
      <Dealsoftheday />
      <Fruits />
      <Banner />
      <Newarrivals />
      <Gerocery />
      <Featuredproducts />
      <Audiojungle />
      <Milkegg />
      <Downloadapp />
      <Security />
      <Footer />

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
                        <li>$23.06</li>
                        {/* <li>Color: White</li> */}
                        <li>Quantity:1</li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="col-lg-7">
                  <div className="cart-content">
                    <p className="title">There are 3 items in your cart.</p>
                    <p><span>Total products:</span>$23.06</p>
                    <p><span>Total shipping:</span>Free</p>
                    <p><span>Taxes:</span> $0.00</p>
                    <p><span>Total:</span> $23.06 (tax excl.)</p>
                    <div className="cart-content-btn">
                      <button className="btn btn-sm btn-dark me-1 mt-3 mt-sm-0" data-bs-dismiss="modal">Continue
                        shopping</button>
                      <button className="btn btn-sm btn-dark mt-3 mt-sm-0"><Link to="/checkout" style={{ color: 'white' }}>Proceed to
                        checkout</Link></button>
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

export default Header
