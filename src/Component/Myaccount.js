import React, { useEffect, useState } from 'react'
import Shearchbar from './Shearchbar'
import Downloadapp from './Downloadapp'
import Security from './Security'
import Footer from './Footer'
import Navbar from './Navbar'
import axios from "axios";
import secureLocalStorage from "react-secure-storage";
import baseurl from './Baseurl'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom'
import { BsFillCloudUploadFill } from 'react-icons/bs'
const Myaccount = () => {
  let Navigate = useNavigate()

  // useStatus
  let [get_user_profile, setget_user_profile] = useState([])
  let _id = secureLocalStorage.getItem("n_id");
  let token = secureLocalStorage.getItem("n_token");


  // get get_user_profile handel
  useEffect(() => {
    let items = {
      "user_id": _id
    }
    axios.post(`${baseurl[0].apiurl}get_user_profile`, items, {
      headers: {
        "token": token,
      }
    }
    ).then((res) => {
    //  console.log(res, "get_user_profile")
      if (res.data.result) {
        setget_user_profile(res.data.data)
      }
    }).catch((error) => {
      //  console.log(error)
    })
    // console.log(shwodealofday)
  }, [get_user_profile])


  // Add address Handel
  let [pincodemsg, setpincodemsg] = useState()
  let [add_address, setadd_address] = useState(
    {
      "user_id": _id,
      "landmark": "",
      "address": "",
      "city": "",
      "pin_code": "",
    }
  )
  let inpuHandel = (event) => {
    setadd_address({ ...add_address, [event.target.name]: event.target.value })
  }
  let FormHandel = (e) => {
    e.preventDefault()
    //console.log(add_address)
    if (add_address.pin_code.length == 6) {
      axios.post(`${baseurl[0].apiurl}/add_address`, add_address).then((res) => {
        if (res.data.result) {
          toast.success(res.data.msg)
          setadd_address(
            {

              "landmark": "",
              "address": "",
              "city": "",
              "pin_code": "",
            }
          )
        }
      }).catch((error) => {
        console.log(error)
      })
    } else {
      setpincodemsg("Not Valid Pincode")
    }
  }


  // get Address user
  let [show_address, setshow_address] = useState([])
  useEffect(() => {
    let items = {
      "user_id": _id
    }
    axios.post(`${baseurl[0].apiurl}get_address`, items, {
      headers: {
        "token": token,
      }
    }
    ).then((res) => {
      //console.log(res, "show_address")
      if (res.data.result) {
        setshow_address(res.data.data)
      }
    }).catch((error) => {
      //  console.log(error)
    })
    ///  console.log(show_address)
  }, [show_address])


  // edit address Handel
  let [editaddress, seteditaddress] = useState(
    {
      "address_id": "",
      "user_id": _id,
      "landmark": "",
      "address": "",
      "city": "",
      "pin_code": "",

    }
  )
  let eidtaddreddss = (_id, landmark, address, city, pin_code) => {
    //console.log(_id)
    let address_id = _id
    seteditaddress({ ...editaddress, address_id, landmark, address, city, pin_code })
  }
  let editinpuHandel = (e) => {
    seteditaddress({ ...editaddress, [e.target.name]: e.target.value })
  }
  let editFormHandel = (e) => {
    e.preventDefault()
    // console.log(editaddress)
    axios.post(`${baseurl[0].apiurl}update_address`, editaddress, {
      headers: {
        "token": token,
      }
    }
    ).then((res) => {
      // console.log(res)
      if (res.data.result) {
        toast.success(res.data.msg)
      }
    }).catch((error) => {
      //  console.log(error)
    })
  }


  // delete address handel
  let deleteaddress = (deleteaddress_id) => {
    let items = { "address_id ": deleteaddress_id, "user_id": _id }
    console.log(items)
    axios.post(`http://103.104.74.215:3014/website/delete_address`, items, {
      headers: {
        "token": token,
      }
    }).then((res) => {
      console.log(res)
    }).catch((error) => {
      console.log(error)
    })
  }

  // logout handel
  let Logout = () => {
    let item = {
      "_id": _id
    }
    axios.post(`${baseurl[0].apiurl}logout`, item).then((res) => {
      //console.log(res)
      if (res.data.result) {
        localStorage.removeItem("ssstoken");
        secureLocalStorage.removeItem("n_id");
        secureLocalStorage.removeItem("n_token");
        secureLocalStorage.removeItem("n_mobile_no");
        secureLocalStorage.removeItem("n_otp");
        Navigate(`/`)
      }
    }).catch((error) => {
      console.log(error)
    })
  }

  // profile update and show images profile 
  let [disablestatus, setdisablestatus] = useState(false)
  let [showp_image, setpimage] = useState()

  let [profilevalue, setprofilevalue] = useState(
    {
      "user_id": _id,
      "full_name": "",
      "email": "",
      "user_image": ""
    }
  )

  let editprofile = () => {
    setdisablestatus(true)
  }
  const Profile = (event) => {
    let user_image = event.target.files[0]
    setprofilevalue({ ...profilevalue, user_image })
    setpimage(URL.createObjectURL(event.target.files[0]))
  };

  let profil_input_Hanel = (e) => {
    setprofilevalue({ ...profilevalue, [e.target.name]: e.target.value })
  }

  let profile_form_handel = (e) => {
    e.preventDefault()
   // console.log(profilevalue)
    let formdata = new FormData()
    formdata.append("user_id", profilevalue.user_id)
    formdata.append("full_name", profilevalue.full_name)
    formdata.append("email", profilevalue.email)
    formdata.append("user_image", profilevalue.user_image)

    axios.post(`${baseurl[0].apiurl}update_user_profile`, formdata, {
      headers: {
        "token": token,
      }
    }).then((res) => {
      // console.log(res)
      if (res.data.result) {
        toast.success(res.data.msg)
      }
    }).catch((error) => {
      console.log(error)
    })

  }

  return (
    <div>
      <ToastContainer position='top-center' />
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
                  <a onClick={Logout}><i className="fa fa-sign-out" /> Logout</a>
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
                      <h3> Address</h3>
                      <button type="button" className="btn btn-success" data-toggle="modal" data-target="#addaddress">   Add Address</button>

                      <div className='row'>

                        {show_address?.map((items, index) => {
                          return (
                            <div className='col-lg-4 col-md-6 col-sm-12 mt-2 m-1'>

                              <div className='card'>
                                <div className='card-body'>
                                  <p style={{ textAlign: "left" }}>Location : {items.landmark}</p>
                                  <p style={{ textAlign: "left" }}>Address : {items.address}</p>
                                  <p style={{ textAlign: "left" }}>City : {items.city}</p>
                                  <p style={{ textAlign: "left" }}>Pincode : {items.pin_code}</p>
                                </div>
                                <div className='card-footer text-center pl-0'>
                                  <button type="button" style={{ width: "100%" }} className="btn btn-success m-2" data-toggle="modal" data-target="#editaddress" onClick={() => eidtaddreddss(items._id, items.landmark, items.address, items.city, items.pin_code)}>Edit Address</button>
                                  <button type="button" style={{ width: "100%" }} className="btn btn-danger m-2" onClick={() => deleteaddress(items._id)} >Delete Address</button>
                                </div>
                              </div>





                            </div>
                          )
                        })}

                      </div>




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
                          <form method='post'>
                            <div className="modal-body">
                              <div className="form-group">
                                <label>Location</label>
                                <input type="nme" className="form-control" defaultValue={editaddress.landmark} name='landmark' onChange={editinpuHandel} />
                              </div>
                              <div className="form-group">
                                <label>Address</label>
                                <input type="text" className="form-control" defaultValue={editaddress.address} name='address' onChange={editinpuHandel} />
                              </div>
                              <div className="form-group">
                                <label>City</label>
                                <input type="text" className="form-control" defaultValue={editaddress.city} name='city' onChange={editinpuHandel} />
                              </div>
                              <div className="form-group">
                                <label>Pincode</label>
                                <input type="number" maxLength="6" className="form-control" defaultValue={editaddress.pin_code} name='pin_code' onChange={editinpuHandel} />
                                <label style={{ color: "red", fontSize: "10px" }} >{pincodemsg}</label>
                              </div>
                            </div>
                            <div className="modal-footer">
                              <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                              <button type="button" className="btn btn-primary" onClick={editFormHandel}>Save changes</button>
                            </div>
                          </form>
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
                          <form method='post'>
                            <div className="modal-body">
                              <div className="form-group">
                                <label>Location</label>
                                <input type="nme" className="form-control" required name='landmark' onChange={inpuHandel} />
                              </div>
                              <div className="form-group">
                                <label>Address</label>
                                <input type="text" className="form-control" required name='address' onChange={inpuHandel} />
                              </div>
                              <div className="form-group">
                                <label>City</label>
                                <input type="text" className="form-control" required name='city' onChange={inpuHandel} />
                              </div>
                              <div className="form-group">
                                <label>Pincode</label>
                                <input type="number" maxLength="6" className="form-control" required name='pin_code' onChange={inpuHandel} />
                                <label style={{ color: "red", fontSize: "10px" }} >{pincodemsg}</label>
                              </div>
                            </div>
                            <div className="modal-footer">
                              <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                              <button type="button" className="btn btn-primary" onClick={FormHandel}>ADD</button>
                            </div>
                          </form>
                        </div>

                      </div>
                    </div>
                  </div>
                  {/* Single Tab Content Start */}
                  <div className="tab-pane fade active show" id="account-info" role="tabpanel">
                    <div className="myaccount-content">
                      <input id="profilepic" onChange={Profile} type="file" style={{ opacity: "0" }} />
                      <button className='btn btn-primary' style={{ float: "right" }} onClick={editprofile}>Edit</button>
                      <h3>Account Details</h3>
                      <div className="account-details-form">

                        <div className="row">
                          <div className='col-lg-4 col-sm-12 col-md-6 row justify-content-center text-center'>
                            <div className='shadow text-center ' style={{ width: "60%", height: "180px", border: "1px solid", borderRadius: "170px" }}>

                              {disablestatus == true ? (<img className="channel-profile-img " height={"100%"} width={"100%"} style={{ borderRadius: "50%" }} src={showp_image} />) : (<img className="channel-profile-img " height={"100%"} width={"100%"} style={{ borderRadius: "50%" }} src={  get_user_profile?.user_image ? ( `http://103.104.74.215:3014/uploads/${get_user_profile?.user_image}`):("assets/images/logo/logo-dark.png")}/>)}

                            </div>

                            {disablestatus == true ? (<label className='' for="profilepic"><BsFillCloudUploadFill style={{ fontSize: "25px ", cursor: "pointer" }} /> </label>) : ("")}

                          </div>
                          <div className='col-lg-8 col-sm-12 col-md-6'>
                            {disablestatus == true ? (<form method='post' onSubmit={profile_form_handel}>
                              <div className="form-group">
                                <label htmlFor="name">Full Name:</label>
                                <input type="text" className="form-control" onChange={profil_input_Hanel} name='full_name' defaultValue={get_user_profile?.full_name} />
                              </div>
                              <div className="form-group">
                                <label htmlFor="pwd">Email:</label>
                                <input type="email" className="form-control" onChange={profil_input_Hanel} name='email' defaultValue={get_user_profile?.email} />
                              </div>
                              <div className="form-group">
                                <label htmlFor="num">Number:</label>
                                <input type="number" className="form-control" disabled defaultValue={get_user_profile?.mobile_no} />
                              </div>
                              <div className="col-12 text-center">
                                <button className="btn btn-dark">Save Changes</button>
                              </div>

                            </form>) : (<form method='post'>
                              <div className="form-group">
                                <label htmlFor="name">Full Name:</label>
                                <input type="text" className="form-control" disabled defaultValue={get_user_profile?.full_name} />
                              </div>
                              <div className="form-group">
                                <label htmlFor="pwd">Email:</label>
                                <input type="email" className="form-control" disabled defaultValue={get_user_profile?.email} />
                              </div>
                              <div className="form-group">
                                <label htmlFor="num">Number:</label>
                                <input type="number" className="form-control" disabled defaultValue={get_user_profile?.mobile_no} />
                              </div>
                              <div className="col-12 text-center">
                                <button disabled className="btn btn-dark">Save Changes</button>
                              </div>

                            </form>)}


                          </div>
                          {/*          <div className="col-lg-6 col-12 mb-5 row justify-content-center">

                              <div className='shadow text-center' style={{width:"30%",height:"80px",border:"1px solid"}}>

                              </div>
                              <label for="profilepic"><BsFillCloudUploadFill style={{ fontSize: "25px ", cursor: "pointer" }} /> </label>
                            
                            </div>
                            <div className="col-lg-6 col-12 mb-5">

                              <input id="last-name" defaultValue={get_user_profile?.full_name} type="text" />
                            </div>
                            <div className="col-12 mb-5">
                              <input id="display-name" defaultValue={get_user_profile?.mobile_no} type="number" />
                            </div>
                            <div className="col-12 mb-5">
                              <input id="email" defaultValue={get_user_profile?.email} type="email" />
                            </div> */}
                          {/* <div className="col-12 mb-5">
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
                            </div>*/}
                          {/* <div className="col-12">
                              <button className="btn btn-dark">Save Changes</button>
                            </div> */}
                        </div>

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