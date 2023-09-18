import React from 'react'
import Shearchbar from './Shearchbar'
import Downloadapp from './Downloadapp'
import Security from './Security'
import Footer from './Footer'
import Navbar from './Navbar'

const Myaccount = () => {
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
                  <li className="breadcrumb-item active" aria-current="page">my account</li>
                </ol>
              </div>
            </div>
          </div>
        </nav>
        {/* bread crumb section end */}
        <div className="my-account section-mb">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <h3 className="title text-capitalize mb-5 pb-4">my account</h3>
              </div>
              {/* My Account Tab Menu Start */}
              <div className="col-lg-3 col-12 mb-5">
                <div className="myaccount-tab-menu nav" role="tablist">
                  <a href="#dashboad" data-bs-toggle="tab"><i className="fa fa-tachometer" /> Dashboard</a>
                  <a href="#orders" data-bs-toggle="tab"><i className="fa fa-cart-arrow-down" /> Orders</a>
                  {/* <a href="#download" data-bs-toggle="tab"><i class="fa fa-download"></i> Download</a> */}
                  <a href="#payment-method" data-bs-toggle="tab"><i className="fa fa-credit-card" /> Transaction History</a>
                  <a href="#address-edit" data-bs-toggle="tab"><i className="fa fa-map-marker" /> address</a>
                  <a href="#account-info" data-bs-toggle="tab" className="active"><i className="fa fa-user" /> Account
                    Details</a>
                  <a href="login.html"><i className="fa fa-sign-out" /> Logout</a>
                </div>
              </div>
              {/* My Account Tab Menu End */}
              {/* My Account Tab Content Start */}
              <div className="col-lg-9 col-12 mb-5">
                <div className="tab-content" id="myaccountContent">
                  {/* Single Tab Content Start */}
                  <div className="tab-pane fade" id="dashboad" role="tabpanel">
                    <div className="myaccount-content">
                      <h3>Dashboard</h3>
                      <div className="welcome mb-20">
                        <p>
                          Hello, <strong>Alex Tuntuni</strong> (If Not
                          <strong>Tuntuni !</strong><a href="login-register.html" className="logout"> Logout</a>)
                        </p>
                      </div>
                      <p className="mb-0">
                        From your account dashboard. you can easily check &amp; view
                        your recent orders, manage your shipping and billing addresses
                        and edit your password and account details.
                      </p>
                    </div>
                  </div>
                  {/* Single Tab Content End */}
                  {/* Single Tab Content Start */}
                  <div className="tab-pane fade" id="orders" role="tabpanel">
                    <div className="myaccount-content">
                      <h3>Orders</h3>
                      <div className="myaccount-table table-responsive text-center">
                        <table className="table table-bordered">
                          <thead className="thead-light">
                            <tr>
                              <th>No</th>
                              <th>Name</th>
                              <th>Date</th>
                              <th>Status</th>
                              <th>Total</th>
                              <th>Action</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td>1</td>
                              <td>Mostarizing Oil</td>
                              <td>Aug 22, 2018</td>
                              <td>
                                <span style={{ color: '#fff', backgroundColor: '#ffc107' }}>Pending</span>
                              </td>
                              <td>$45</td>
                              <td>
                                <a href="#" className="ht-btn black-btn">View</a>
                              </td>
                            </tr>
                            <tr>
                              <td>2</td>
                              <td>Katopeno Altuni</td>
                              <td>July 22, 2018</td>
                              <td>
                                <span style={{ color: '#fff', backgroundColor: '#6c757d' }}>Approved</span>
                              </td>
                              <td>$100</td>
                              <td>
                                <a href="#" className="ht-btn black-btn">View</a>
                              </td>
                            </tr>
                            <tr>
                              <td>3</td>
                              <td>Murikhete Paris</td>
                              <td>June 12, 2017</td>
                              <td>
                                <span style={{ color: '#fff', backgroundColor: '#dc3545' }}>On Hold</span>
                              </td>
                              <td>$99</td>
                              <td>
                                <a href="#" className="ht-btn black-btn">View</a>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                  {/* Single Tab Content End */}
                  {/* Single Tab Content Start */}
                  <div className="tab-pane fade" id="download" role="tabpanel">
                    <div className="myaccount-content">
                      <h3>Downloads</h3>
                      <div className="myaccount-table table-responsive text-center">
                        <table className="table table-bordered">
                          <thead className="thead-light">
                            <tr>
                              <th>Product</th>
                              <th>Date</th>
                              <th>Expire</th>
                              <th>Download</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td>Mostarizing Oil</td>
                              <td>Aug 22, 2018</td>
                              <td>Yes</td>
                              <td>
                                <a href="#" className="ht-btn black-btn">Download File</a>
                              </td>
                            </tr>
                            <tr>
                              <td>Katopeno Altuni</td>
                              <td>Sep 12, 2018</td>
                              <td>Never</td>
                              <td>
                                <a href="#" className="ht-btn black-btn">Download File</a>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                  {/* Single Tab Content End */}
                  {/* Single Tab Content Start */}
                  <div className="tab-pane fade" id="payment-method" role="tabpanel">
                    <div className="myaccount-content">
                      <h3>Transaction History</h3>
                      <div className="myaccount-table table-responsive text-center">
                        <table className="table table-bordered">
                          <thead className="thead-light">
                            <tr>
                              <th>Transaction Id</th>
                              <th>Amount</th>
                              <th>Date</th>
                              <th>Download</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td>#659835</td>
                              <td>239 $</td>
                              <td>Aug 22, 2018</td>
                              <td>
                                <a href="#" className="ht-btn black-btn">Download File</a>
                              </td>
                            </tr>
                            <tr>
                              <td>#853676</td>
                              <td>676 $</td>
                              <td>Sep 12, 2018</td>
                              <td>
                                <a href="#" className="ht-btn black-btn">Download File</a>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                  {/* Single Tab Content End */}
                  {/* Single Tab Content Start */}
                  <div className="tab-pane fade" id="address-edit" role="tabpanel">
                    <div className="myaccount-content">
                      <h3>Billing Address</h3>
                      <address>
                        <p><strong>Alex Tuntuni</strong></p>
                        <p>
                          1355 Market St, Suite 900 <br />
                          San Francisco, CA 94103
                        </p>
                        <p>Mobile: (123) 456-7890</p>
                      </address>
                      <button type="button" className="btn btn-success" data-toggle="modal" data-target="#editaddress"> Edit Address</button>
                      <button type="button" className="btn btn-success" data-toggle="modal" data-target="#addaddress">   Add Address</button>
                      {/*  <a href="#" class="ht-btn black-btn d-inline-block edit-address-btn"><i
                        class="fa fa-edit"></i>Edit Address</a> */}
                    </div>
                  </div>
                  {/* Single Tab Content End */}
                  {/* Modal */}
                  <div className="modal fade" id="editaddress" tabIndex={-1} role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog" role="document">
                      <div className="modal-content">
                        <div className="modal-header">
                          <h5 className="modal-title" id="exampleModalLabel">Edit Address</h5>
                          <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">×</span>
                          </button>
                        </div>
                        <div className="modal-body">
                          <form>
                            <div className="modal-body">
                              <div className="form-group">
                                <label>Name</label>
                                <input type="name" className="form-control" id="email1" aria-describedby="emailHelp" placeholder="Enter name" defaultValue="Alex Tuntuni" />
                              </div>
                              <div className="form-group">
                                <label>Address</label>
                                <input type="text" className="form-control" id="password1" placeholder="Address" defaultValue="1355 Market St, Suite 900
San Francisco, CA 94103" />
                              </div>
                              <div className="form-group">
                                <label>Mobile</label>
                                <input type="text" className="form-control" id="password2" placeholder="Mobile" defaultValue="(123) 456-7890" />
                              </div>
                            </div>
                          </form>
                        </div>
                        <div className="modal-footer">
                          <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                          <button type="button" className="btn btn-primary">Save changes</button>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* Modal */}
                  <div className="modal fade" id="addaddress" tabIndex={-1} role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog" role="document">
                      <div className="modal-content">
                        <div className="modal-header">
                          <h5 className="modal-title" id="exampleModalLabel">Add Address</h5>
                          <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">×</span>
                          </button>
                        </div>
                        <div className="modal-body">
                          <form>
                            <div className="modal-body">
                              <div className="form-group">
                                <label>Name</label>
                                <input type="name" className="form-control" id="email1" aria-describedby="emailHelp" placeholder="Enter name" defaultValue />
                              </div>
                              <div className="form-group">
                                <label>Address</label>
                                <input type="text" className="form-control" id="password1" placeholder="Address" defaultValue />
                              </div>
                              <div className="form-group">
                                <label>Mobile</label>
                                <input type="text" className="form-control" id="password2" placeholder="Mobile" defaultValue />
                              </div>
                            </div>
                          </form>
                        </div>
                        <div className="modal-footer">
                          <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                          <button type="button" className="btn btn-primary">ADD</button>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* Single Tab Content Start */}
                  <div className="tab-pane fade active show" id="account-info" role="tabpanel">
                    <div className="myaccount-content">
                      <h3>Account Details</h3>
                      <div className="account-details-form">
                        <form action="#">
                          <div className="row">
                            <div className="col-lg-6 col-12 mb-5">
                              <input id="first-name" placeholder="First Name" type="text" />
                            </div>
                            <div className="col-lg-6 col-12 mb-5">
                              <input id="last-name" placeholder="Last Name" type="text" />
                            </div>
                            <div className="col-12 mb-5">
                              <input id="display-name" placeholder="Display Name" type="text" />
                            </div>
                            <div className="col-12 mb-5">
                              <input id="email" placeholder="Email Address" type="email" />
                            </div>
                            <div className="col-12 mb-5">
                              <h4>Password change</h4>
                            </div>
                            <div className="col-12 mb-5">
                              <input id="current-pwd" placeholder="Current Password" type="password" />
                            </div>
                            <div className="col-lg-6 col-12 mb-5">
                              <input id="new-pwd" placeholder="New Password" type="password" />
                            </div>
                            <div className="col-lg-6 col-12 mb-5">
                              <input id="confirm-pwd" placeholder="Confirm Password" type="password" />
                            </div>
                            <div className="col-12">
                              <button className="btn btn-dark">Save Changes</button>
                            </div>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                  {/* Single Tab Content End */}
                </div>
              </div>
              {/* My Account Tab Content End */}
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

export default Myaccount