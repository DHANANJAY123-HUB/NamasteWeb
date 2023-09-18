import React from 'react'
import { Link } from 'react-router-dom'


function Mainbar() {
  return (
    <div>
    <div class="modal fade offcanvas-modal" id="exampleModal">
      <div class="modal-dialog offcanvas-dialog">
        <div class="modal-content">
          <div class="modal-header offcanvas-header">
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>

          <ul class="header-topbar-nav nav my-4 justify-content-center">
            <li class="topbar-nav-item">
              <a class="topbar-nav-link" href="#"
                ><i class="icon las la-map-marker"></i>Store Locator</a
              >
            </li>
            <li class="topbar-nav-item">
              <a class="topbar-nav-link" href="#"
                ><i class="icon las la-shipping-fast"></i>Track Your Order</a
              >
            </li>
          </ul>

          <div class="bg-white">
            <ul class="quick-links justify-content-center">
              {/* <!-- quick-link-item --> */}
              <li class="quick-link-item d-inline-flex">
                <span class="quick-link-icon flex-shrink-0">
                  <a href="#" class="quick-link">
                    <i class="las la-user-circle"></i>
                  </a>
                </span>
                <span class="flex-grow-1">
                  <a href="#" class="my-account">My account</a>
                  <a href="#" class="sign-in">Sign out</a>
                </span>
              </li>
              {/* <!-- quick-link-item end -->
              <!-- quick-link-item --> */}
              <li class="quick-link-item d-inline-flex">
                <a href="#" class="quick-link">
                  <span class="quick-link-icon flex-shrink-0">
                    <span class="badge rounded-pill bg-success">2</span>
                  </span>
                </a>
              </li>
              {/* <!-- quick-link-item end -->
              <!-- quick-link-item --> */}
              <li class="quick-link-item d-inline-flex">
                <a href="#" class="quick-link">
                  <span class="quick-link-icon flex-shrink-0">
                    <i class="lar la-heart"></i>
                    <span class="badge rounded-pill bg-success">3</span>
                  </span>
                </a>
              </li>
              {/* <!-- quick-link-item end --> */}
            </ul>
          </div>

          <form action="#" class="offcanvas-form">
            <input
              type="text"
              class="form-control"
              placeholder="Enter your search key ... "
            />
            <button class="btn-search btn-success" type="submit">
              <i class="las la-search"></i>
            </button>
          </form>

          {/* <!-- offcanvas-mobile-menu start --> */}

          <nav id="offcanvasNav" class="offcanvas-menu">
            <ul>
              <li>
                <a href="javascript:void(0)">Home</a>
                {/* <!-- home sub menu --> */}
                <ul>
                  <li><a href="index.html">Home 1</a></li>
                  <li><a href="index-2.html">Home 2</a></li>
                  <li><a href="index-3.html">Home 3</a></li>
                  <li><a href="index-4.html">Home 4</a></li>
                </ul>
                {/* <!-- home sub menu end--> */}
              </li>
              <li>
              <a href="shop-left-sidebar.html">shop</a>

                {/* <!-- shop mega menu --> */}

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
                        <a href="shop-grid-left-sidebar.html"
                          >Shop Grid Left Sidebar</a
                        >
                      </li>
                      <li>
                        <a href="shop-grid-right-sidebar.html"
                          >Shop Grid Right Sidebar</a
                        >
                      </li>
                    </ul>
                  </li>

                  <li>
                    <a href="#">Shop Single</a>
                    <ul>
                      <li><a href="single-product.html">Shop Single</a></li>
                      <li>
                        <a href="single-product-configurable.html"
                          >Shop Variable</a
                        >
                      </li>
                      <li>
                        <a href="single-product-affiliate.html"
                          >Shop Affiliate</a
                        >
                      </li>
                      <li>
                        <a href="single-product-group.html">Shop Group</a>
                      </li>
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
                {/* <!-- shop mega menu end--> */}
              </li>
              <li>
                <a href="javascript:void(0)">pages</a>
                {/* <!-- pages sub menu --> */}
                <ul>
                  <li><a href="about-us.html">About Page</a></li>
                  <li><a href="cart.html">Cart Page</a></li>
                  <li><a href="checkout.html">Checkout Page</a></li>
                  <li><a href="compare.html">Compare Page</a></li>
                  <li><a href="login.html">Login &amp; Register Page</a></li>
                  <li><a href="myaccount.html">Account Page</a></li>
                  <li><a href="wishlist.html">Wishlist Page</a></li>
                </ul>
                {/* <!-- pages sub menu end--> */}
              </li>
              <li>
                <a href="javascript:void(0)">Blog</a>
                {/* <!-- blog sub menu --> */}
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
                        <a href="blog-grid-left-sidebar.html"
                          >Blog Grid Left Sidebar</a
                        >
                      </li>
                      <li>
                        <a href="blog-grid-right-sidebar.html"
                          >Blog Grid Right Sidebar</a
                        >
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href="#">Blog List</a>
                    <ul>
                      <li>
                        <a href="blog-list-left-sidebar.html"
                          >Blog List Left Sidebar</a
                        >
                      </li>
                      <li>
                        <a href="blog-list-right-sidebar.html"
                          >Blog List Right Sidebar</a
                        >
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href="#">Blog details</a>
                    <ul>
                      <li>
                        <a href="blog-details-left-sidebar.html"
                          >Blog details Left Sidebar</a
                        >
                      </li>
                      <li>
                        <a href="blog-details-right-sidebar.html"
                          >Blog details Right Sidbar</a
                        >
                      </li>
                    </ul>
                  </li>
                </ul>
                {/* <!-- blog sub menu end--> */}
              </li>
              <li>
                <a href="contact.html">Contact</a>
              </li>
            </ul>

            <div class="offcanvas-social">
              <ul>
                <li>
                  <a href="#"><i class="ion-social-facebook"></i></a>
                </li>
                <li>
                  <a href="#"><i class="ion-social-twitter"></i></a>
                </li>
                <li>
                  <a href="#"><i class="ion-social-instagram"></i></a>
                </li>
                <li>
                  <a href="#"><i class="ion-social-google"></i></a>
                </li>
                <li>
                  <a href="#"><i class="ion-social-instagram"></i></a>
                </li>
              </ul>
            </div>
          </nav>
          {/* <!-- offcanvas-mobile-menu end --> */}
          <div class="header-top">
            <ul id="offcanvas-menu2" class="blog-ctry-menu blog-ctry-menu2">
              <li>
                <a href="javascript:void(0)">currency: USD $</a>
                <ul class="category-sub-menu">
                  <li><a href="#">EUR $</a></li>
                  <li><a href="#">USD $</a></li>
                </ul>
              </li>
              <li>
                <a href="javascript:void(0)"
                  ><img
                    class="me-1"
                    src="assets/images/icon/us-flag.jpg"
                    alt="img"
                  />English</a
                >
                <ul class="category-sub-menu">
                  <li>
                    <a href="#"
                      ><img
                        class="me-1"
                        src="assets/images/icon/us-flag.jpg"
                        alt="flags"
                      />
                      English</a
                    >
                  </li>
                  <li>
                    <a href="#"
                      ><img
                        class="me-1"
                        src="assets/images/icon/italiano-flag.jpg"
                        alt="flags"
                      />
                      Français</a
                    >
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
</div>
  )
}

export default Mainbar
