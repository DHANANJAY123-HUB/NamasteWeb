import React from 'react'

const Aboutus = () => {
  return (
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
    <div id="active-sticky2" className="header-space bg-white">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-6 col-sm-4 col-lg-7 col-xl-8">
            <div className="d-flex">
              <div className="flex-shrink-0">
                <div className="d-flex align-items-center vertical-menu">
                  <button className="menu-bars menu-btn d-none d-lg-block">
                    <i className="las la-bars" />
                  </button>
                  <a className="logo" href="index.html"><img src="assets/images/logo/logo-dark.png" alt="image_not_found" /></a>
                  <ul className="vmenu-content">
                    <li className="menu-item">
                      <a href="#"> Fresh Food<i className="ion-ios-arrow-right" /></a>
                      <ul className="verticale-mega-menu flex-wrap">
                        <li className="menu-item">
                          <a href="#">
                            <span><strong>Fresh Salad &amp; Dips</strong></span>
                          </a>
                          <ul className="submenu-item">
                            <li>
                              <a href="#"><span>Bananas</span></a>
                            </li>
                            <li>
                              <a href="#">Apples Pears</a>
                            </li>
                            <li>
                              <a href="#">Berries Cherries</a>
                            </li>
                            <li>
                              <a href="#"> Oranges Citrus Fruit </a>
                            </li>
                            <li>
                              <a href="#">Grapes</a>
                            </li>
                          </ul>
                        </li>
                        <li className="menu-item">
                          <a href="#">
                            <span><strong>Fresh Salad &amp; Dips</strong></span>
                          </a>
                          <ul className="submenu-item">
                            <li>
                              <a href="#">Potatoes Sweet Potatoes</a>
                            </li>
                            <li>
                              <a href="#">Onions Leeks</a>
                            </li>
                            <li>
                              <a href="#">Carrots Root Vegetables</a>
                            </li>
                            <li>
                              <a href="#">Broccoli Cauliflower</a>
                            </li>
                            <li>
                              <a href="#">Cabbages Greens</a>
                            </li>
                          </ul>
                        </li>
                        <li>
                          <a href="#">
                            <span><strong>Fresh Salad &amp; Dips</strong></span>
                          </a>
                          <ul className="submenu-item">
                            <li>
                              <a href="#">Lettuce Salad bags</a>
                            </li>
                            <li>
                              <a href="#">Tomatoes</a>
                            </li>
                            <li>
                              <a href="#">Cucumber</a>
                            </li>
                            <li>
                              <a href="#">Celery</a>
                            </li>
                            <li>
                              <a href="#">Peppers</a>
                            </li>
                          </ul>
                        </li>
                        <li>
                          <a href="#">
                            <span><strong>Milk, Butter &amp; Eggs</strong></span>
                          </a>
                          <ul className="submenu-item">
                            <li>
                              <a href="#">Milk</a>
                            </li>
                            <li>
                              <a href="#">Spreads Margarine</a>
                            </li>
                            <li>
                              <a href="#">Fresh Cream Custard</a>
                            </li>
                            <li>
                              <a href="#">Eggs</a>
                            </li>
                            <li>
                              <a href="#">Baking Cooking</a>
                            </li>
                          </ul>
                        </li>
                      </ul>
                      {/* sub menu */}
                    </li>
                    <li className="menu-item">
                      <a href="shop-grid-left-sidebar.html"> Fresh Fruit<i className="ion-ios-arrow-right" /></a>
                      <ul className="verticale-sub-menu flex-wrap">
                        <li>
                          <ul className="submenu-item">
                            <li>
                              <a href="shop-grid-left-sidebar.html"><span>Bananas</span></a>
                            </li>
                            <li>
                              <a href="shop-grid-left-sidebar.html">Apples Pears</a>
                            </li>
                            <li>
                              <a href="shop-grid-left-sidebar.html">Berries Cherries</a>
                            </li>
                            <li>
                              <a href="shop-grid-left-sidebar.html"> Oranges Citrus Fruit </a>
                            </li>
                            <li>
                              <a href="shop-grid-left-sidebar.html">Grapes</a>
                            </li>
                          </ul>
                        </li>
                      </ul>
                    </li>
                    <li className="menu-item">
                      <a href="#">Fresh Vegetables<i className="ion-ios-arrow-right" /></a>
                      <ul className="verticale-sub-menu flex-wrap">
                        <li>
                          <ul className="submenu-item">
                            <li>
                              <a href="#">Potatoes Sweet Potatoes</a>
                            </li>
                            <li>
                              <a href="#">Onions Leeks</a>
                            </li>
                            <li>
                              <a href="#">Carrots Root Vegetables</a>
                            </li>
                            <li>
                              <a href="#">Broccoli Cauliflower</a>
                            </li>
                            <li>
                              <a href="#">Cabbages Greens</a>
                            </li>
                          </ul>
                        </li>
                      </ul>
                    </li>
                    <li className="menu-item">
                      <a href="#">Bananas</a>
                    </li>
                    <li className="menu-item">
                      <a href="#"> Apples &amp; Pears</a>
                    </li>
                    <li className="menu-item"><a href="#"> Berries &amp; Cherries</a></li>
                    <li className="menu-item"><a href="#"> Oranges &amp; Citrus Fruit</a></li>
                    <li className="menu-item"><a href="#">Grapes</a></li>
                    <li className="menu-item"><a href="#"> Onions &amp; Leeks</a></li>
                    <li className="menu-item"><a href="#">Cabbages &amp; Greens</a></li>
                    <li className="menu-item"><a href="#">Onions &amp; Leeks</a></li>
                  </ul>
                  {/* menu content */}
                </div>
              </div>
              <div className="flex-grow-1 d-none d-lg-block">
                <form className="search-form position-relative" action="#">
                  <div className="input-group">
                    <input className="form-control" type="text" placeholder="Enter your search key ... " />
                    <div className="input-group-text">
                      <button className="search-btn btn-success">
                        <i className="ion-ios-search-strong" />
                      </button>
                    </div>
                  </div>
                  <select className="form-select d-none d-xl-block" id="autoSizingSelect">
                    <option value={"0"}>All categories</option>
                    <option value={"04"}>Fresh Food</option>
                    <option value={"83"}>- - Fresh Fruit</option>
                    <option value={"87"}>- - - - Bananas</option>
                    <option value={"88"}>- - - - Apples &amp; Pears</option>
                    <option value={"89"}>- - - - Berries &amp; Cherries</option>
                    <option value={"90"}>- - - - Oranges &amp; Citrus Fruit</option>
                    <option value={"91"}>- - - - Grapes</option>
                    <option value={"84"}>- - Fresh Vegetables</option>
                    <option value={"92"}>
                      - - - - Potatoes &amp; Sweet Potatoes
                    </option>
                    <option value={"93"}>- - - - Onions &amp; Leeks</option>
                    <option value={"94"}>
                      - - - - Carrots &amp; Root Vegetables
                    </option>
                    <option value={"95"}>- - - - Broccoli &amp; Cauliflower</option>
                    <option value={"96"}>- - - - Cabbages &amp; Greens</option>
                    <option value={"85"}>- - Fresh Salad &amp; Dips</option>
                    <option value={"97"}>- - - - Lettuce &amp; Salad bags</option>
                    <option value={"98"}>- - - - Tomatoes</option>
                    <option value={"99"}>- - - - Cucumber</option>
                    <option value={"00"}>- - - - Celery</option>
                    <option value={"01"}>- - - - Peppers</option>
                    <option value={"86"}>- - Milk, Butter &amp; Eggs</option>
                    <option value={"02"}>- - - - Milk</option>
                    <option value={"03"}>- - - - Spreads &amp; Margarine</option>
                    <option value={"04"}>- - - - Fresh Cream &amp; Custard</option>
                    <option value={"05"}>- - - - Eggs</option>
                    <option value={"06"}>- - - - Baking &amp; Cooking</option>
                  </select>
                </form>
              </div>
            </div>
          </div>
          <div className="col-6 col-sm-8 col-lg-5 col-xl-4">
            <ul className="quick-links">
              {/* quick-link-item */}
              <li className="quick-link-item d-none d-md-inline-flex">
                <span className="quick-link-icon flex-shrink-0">
                  <a href="#" className="quick-link">
                    <i className="las la-user-circle" />
                  </a>
                </span>
                <span className="flex-grow-1">
                  <a href="myaccount.html" className="my-account">My account</a>
                  <a href="login.html" className="sign-in">Sign out</a>
                </span>
              </li>
              {/* quick-link-item end */}
              {/* quick-link-item */}
              {/* quick-link-item end */}
              {/* quick-link-item */}
              <li className="quick-link-item d-none d-sm-flex">
                <a href="cart.html" className="quick-link">
                  <span className="quick-link-icon flex-shrink-0">
                    <i className="lar la-heart" />
                    <span className="badge rounded-pill bg-success">3</span>
                  </span>
                </a>
              </li>
              {/* quick-link-item end */}
              {/* quick-link-item */}
              <li className="quick-link-item">
                <a href="#" className="quick-link">
                  <span className="quick-link-icon flex-shrink-0">
                    <i className="las la-shopping-bag" />
                    <span className="badge rounded-pill bg-success">4</span>
                  </span>
                </a>
                <div className="checkout-cart">
                  <ul className="checkout-scroll">
                    <li className="checkout-cart-list">
                      <div className="checkout-img">
                        <img className="product-image" src="assets/images/mini-cart/1.jpg" alt="img" />
                        <span className="product-quantity">1x</span>
                      </div>
                      <div className="checkout-block">
                        <a className="product-name" href="#">Warburtons 9 Crumpets</a>
                        <span className="product-price">$24.33</span>
                        <a className="remove-cart" href="#">
                          <i className="las la-times" />
                        </a>
                        <div className="product-size">
                          <span>Size: S</span>
                        </div>
                      </div>
                    </li>
                    <li className="checkout-cart-list">
                      <div className="checkout-img">
                        <img className="product-image" src="assets/images/mini-cart/2.jpg" alt="img" />
                        <span className="product-quantity">1x</span>
                      </div>
                      <div className="checkout-block">
                        <a href="#" className="product-name">Snacking Essentials Cashew</a>
                        <span className="product-price">$23.33</span>
                        <a className="remove-cart" href="#">
                          <i className="las la-times" />
                        </a>
                        <div className="product-size">
                          <span>Size: S</span>
                        </div>
                      </div>
                    </li>
                  </ul>
                  <ul className="list-group checkout-sub-total">
                    <li className="list-group-item">
                      <span>Subtotal</span>
                      <span>$146.00</span>
                    </li>
                    <li className="list-group-item">
                      <span>shipping</span>
                      <span>$7.00</span>
                    </li>
                    <li className="list-group-item">
                      <strong>Total</strong>
                      <strong>$58.71</strong>
                    </li>
                  </ul>
                  {/* checkout-action button start */}
                  <div className="checkout-action">
                    <a href="checkout.html" className="btn btn-lg btn-dark d-block">Checkout</a>
                  </div>
                  {/* checkout-action button end */}
                </div>
              </li>
              {/* quick-link-item end */}
              <li className="quick-link-item d-lg-none">
                <button className="toggle-menu" data-bs-toggle="modal" data-bs-target="#exampleModal">
                  <i className="las la-bars" />
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    {/* header middle end */}
    <div id="active-sticky" className="header-botom bg-dark d-none d-lg-block">
      <div className="container position-relative">
        <div className="row align-items-center">
          <div className="col-md-8">
            <ul className="main-menu">
              <li className="main-menu-item position-relative">
                <a className="main-menu-link" href="index.html">Home</a>
                {/* <ul class="sub-menu">
                              <li><a class="sub-menu-link" href="index.html">Home 1</a></li>
                              <li><a class="sub-menu-link" href="index-2.html">Home 2</a></li>
                              <li><a class="sub-menu-link" href="index-3.html">Home 3</a></li>
                              <li><a class="sub-menu-link" href="index-4.html">Home 4</a></li>
                          </ul> */}
              </li>
              <li className="main-menu-item position-static">
                <a className="main-menu-link" href="shop-grid-left-sidebar.html">shop</a>
              </li>
              <li className="main-menu-item position-relative">
                <a className="main-menu-link" href="#">pages<i className="ion-ios-arrow-down" /></a>
                <ul className="sub-menu">
                  <li><a className="sub-menu-link" href="about-us.html">About Page</a></li>
                  <li><a className="sub-menu-link" href="cart.html">Cart Page</a></li>
                  <li><a className="sub-menu-link" href="checkout.html">Checkout Page</a></li>
                  <li><a className="sub-menu-link" href="compare.html">Compare Page</a></li>
                  <li><a className="sub-menu-link" href="login.html">Login &amp; Register Page</a></li>
                  <li><a className="sub-menu-link" href="myaccount.html">Account Page</a></li>
                  <li><a className="sub-menu-link" href="wishlist.html">Wishlist Page</a></li>
                </ul>
              </li>
              <li className="main-menu-item position-relative">
                <a className="main-menu-link" href="blog-grid-4-column.html">Blog</a>
              </li>
              <li className="main-menu-item position-relative">
                <a className="main-menu-link" href="contact-us.html">Contact us</a>
              </li>
            </ul>
          </div>
          <div className="col-md-4">
            <div className="contact-info">
              <i className="las la-headset" />
              <span>Call us:</span>
              <a href="tel:0123456789">0123456789</a>
            </div>
          </div>
        </div>
      </div>
    </div>
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
            <li className="breadcrumb-item active" aria-current="page">about us </li>
          </ol>
        </div>
      </div>
    </div>
  </nav>
  {/* bread crumb section end */}
  {/* about-section start */}
  <section className="about-section section-mt section-mb">
    <div className="container">
      <div className="row mb-n7 align-items-center">
        <div className="col-xl-6 mb-7">
          <div className="about-content text-center">
            <div className="about-left-image">
              <img src="assets/images/products/large-1.jpg" alt="img" className="img-responsive" />
            </div>
          </div>
        </div>
        <div className="col-xl-6 mb-7">
          <div className="about-content">
            <h2 className="title mb-7">
              We are a digital agency focused on delivering content and utility
              user-experiences.
            </h2>
            <p className="mb-7">
              Adipiscing lacus ut elementum, nec duis, tempor litora turpis
              dapibus. Imperdiet cursus odio tortor in elementum. Egestas nunc
              eleifend feugiat lectus laoreet, vel nunc taciti integer cras. Hac
              pede dis, praesent nibh ac dui mauris sit. Pellentesque mi,
              facilisi mauris, elit sociis leo sodales accumsan. Iaculis ac
              fringilla torquent lorem consectetuer, sociosqu phasellus risus
              urna aliquam, ornare.
            </p>
            <img src="assets/images/products/signature.png" alt="img" />
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* about-section end */}
  {/* static-info-section satrt */}
  <section className="static-info-section">
    <div className="container">
      <div className="static_info">
        <div className="row">
          <div className="col-12 col-sm-6 col-lg-3">
            <div className="box_info">
              <span className="icon_info las la-shipping-fast" />
              <div className="txt_info">
                <h2 className="title">Free Shipping</h2>
                <p>On all orders over $75.00</p>
              </div>
            </div>
          </div>
          <div className="col-12 col-sm-6 col-lg-3">
            <div className="box_info">
              <span className="icon_info las la-globe-americas" />
              <div className="txt_info">
                <h2 className="title">Free Returns</h2>
                <p>Returns are free within 9 days</p>
              </div>
            </div>
          </div>
          <div className="col-12 col-sm-6 col-lg-3">
            <div className="box_info">
              <span className="icon_info las la-money-bill-wave" />
              <div className="txt_info">
                <h2 className="title">100% Payment Secure</h2>
                <p>Your payment are safe with us.</p>
              </div>
            </div>
          </div>
          <div className="col-12 col-sm-6 col-lg-3">
            <div className="box_info">
              <span className="icon_info las la-headset" />
              <div className="txt_info">
                <h2 className="title">Support 24/7</h2>
                <p>Contact us 24 hours a day</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* static-info-section end */}
  {/* service-section start */}
  <section className="service-section section-mb">
    <div className="container">
      <div className="row mb-n7">
        <div className="col-sm-6 col-lg-4 mb-7">
          <div className="single-blog">
            <div className="single-thumb mb-4 zoom-in d-block overflow-hidden">
              <img src="assets/images/products/product-1.jpg" alt="single-thumb-naile" />
            </div>
            <div className="single-service">
              <h3 className="title text-capitalize mb-4">What do we do?</h3>
              <p>
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
                quae ab illo inventore veritatis et quasi architecto
              </p>
            </div>
          </div>
        </div>
        <div className="col-sm-6 col-lg-4 mb-7">
          <div className="single-blog">
            <div className="single-thumb mb-4 zoom-in d-block overflow-hidden">
              <img src="assets/images/products/product-2.jpg" alt="single-thumb-naile" />
            </div>
            <div className="single-service">
              <h3 className="title text-capitalize mb-4">Our Mission</h3>
              <p>
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
                quae ab illo inventore veritatis et quasi architecto
              </p>
            </div>
          </div>
        </div>
        <div className="col-sm-6 col-lg-4 mb-7">
          <div className="single-blog">
            <div className="single-thumb mb-4 zoom-in d-block overflow-hidden">
              <img src="assets/images/products/product-3.jpg" alt="single-thumb-naile" />
            </div>
            <div className="single-service">
              <h3 className="title text-capitalize mb-4">About Us</h3>
              <p>
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
                quae ab illo inventore veritatis et quasi architecto
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* service-section end */}
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

  )
}

export default Aboutus