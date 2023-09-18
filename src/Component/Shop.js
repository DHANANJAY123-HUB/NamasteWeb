import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Shearchbar from './Shearchbar'
import Navbar from './Navbar'
import Footer from './Footer'
import { useEffect } from 'react';
import axios from 'axios';
import baseurl from './Baseurl'
import secureLocalStorage from "react-secure-storage";

const Shop = () => {
  let navigate = useNavigate()

  const [slideIndex, setSlideIndex] = useState(0);
  let [images, setimages] = useState([])
  //console.log(images,"imggggggggggggggggg")
  // const images = [
  //     'assets/images/products/product-1.jpg',
  //     'assets/images/products/product-6.jpg',
  //     'assets/images/products/product-15.jpg',
  //     'assets/images/products/product-6.1.jpg',
  // ];

  const plusSlides = (n) => {
    const newIndex = (slideIndex + n + images.length) % images.length;
    setSlideIndex(newIndex);
  };

  const currentSlide = (n) => {
    setSlideIndex(n);
  };


  // useStatus
  let [product_details, setproduct_details] = useState([])
  // let products_id = secureLocalStorage.getItem("freshfruits_category_id");
  let token = secureLocalStorage.getItem("n_token");


  // get all products handel
  useEffect(() => {
    axios.get(`http://103.104.74.215:3014/website/all_product_list`
    ).then((res) => {
      console.log(res, "all products")
      if (res.data.result) {
        setproduct_details(res.data.data)
      }
    }).catch((error) => {
      //  console.log(error)
    })
  }, [product_details])

//single model handel
  let Single_products_model = (singleproducts) => {
    console.log(singleproducts)
    secureLocalStorage.setItem("n_singleproducts", singleproducts);
    navigate(`/single_products`)
  }
  

    // useStatus
    let [model_product_details, setmodel_product_details] = useState([])
    //let token = secureLocalStorage.getItem("n_token");
    let productsdetails = secureLocalStorage.getItem("n_singleproducts");
  
    // get product_details handel
    useEffect(() => {
      let items = {
        "product_id": productsdetails
      }
  
      axios.post(`http://103.104.74.215:3014/website/product_details`, items, {
        headers: {
          "token": token,
        }
      }
      ).then((res) => {
        //  console.log(res.data.data, "product_details")
        if (res.data.result) {
          setimages(res.data.data.product_image)
          setmodel_product_details(res.data.data)
        }
      }).catch((error) => {
        console.log(error)
      })
      //  console.log(product_details)
    }, [model_product_details, productsdetails])


 // Single_products handel
 let Single_products = (singleproducts) => {
  console.log(singleproducts)
  secureLocalStorage.setItem("n_singleproducts", singleproducts);
  navigate(`/single_products`)

}

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
                  <li className="breadcrumb-item active" aria-current="page">Fresh Food</li>
                </ol>
              </div>
            </div>
          </div>
        </nav>


        <div className="col-lg-12">
          <div className="grid-nav-wraper bg-lighten2 mb-30">
            <div className="row align-items-center">
              <div className="col-12 col-md-6 mb-3 mb-md-0">
                <nav className="shop-grid-nav">
                  <ul className="nav nav-tabs align-items-center" id="myTab" role="tablist">
                    <li className="nav-item" role="presentation">
                      <a className="nav-link active" id="home-tab" data-bs-toggle="tab" href="#home" role="tab">
                        <i className="ion-grid" /></a>
                    </li>
                    <li className="nav-item" role="presentation">
                      <a className="nav-link" id="profile-tab" data-bs-toggle="tab" href="#profile" role="tab"><i className="ion-android-menu" /></a>
                    </li>
                    <li>
                      <span className="total-products text-capitalize">There are 16 products.</span>
                    </li>
                  </ul>
                </nav>
              </div>
              <div className="col-12 col-md-6 position-relative">
                <div className="shop-grid-button d-flex align-items-center">
                  <span className="sort-by">Sort by:</span>
                  <span className="chevron-arrow-down ion-android-arrow-dropdown" />
                  <select className="form-select" aria-label="Default select example">
                    <option selected value={1}>Relevance</option>
                    <option value={2}>Name, A to Z</option>
                    <option value={3}>Name, Z to A</option>
                    <option value={4}>Price, low to high</option>
                    <option value={5}>Price, low to low</option>
                    <option value={6}>Relevance</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
          <div className="tab-content" id="myTabContent">
            <div className="tab-pane fade show active" id="home" role="tabpanel">
              <div className="row grid-view mb-n7">

                {product_details?.map((items) => {
                  return (
                    <div  className="col-sm-6 col-md-4 col-lg-4 col-xl-3 mb-7"  style={{ zIndex: "0" }}>
                      {/* product-card  style={{zIndex:"0"}}start */}
                      <div className="product-card" onClick={() => Single_products_model(items._id)} style={{ zIndex: "0", paddingBottom: "50px" }}>
                        <span className="badge bg-success product-badge mt-1 ml-1">Offer</span>
                        <div className="product-thumb-nail">
                          <span   >
                            <img className="product-image p-2" src={`http://103.104.74.215:3014/uploads/${items.product_image[0]}`} width={"100%"} height={"250px"} alt="image_not_found" />
                          </span>
                          <ul className="actions">
                            <li className="action whish-list">
                              <button data-bs-toggle="modal" data-bs-target="#product-modal-wishlist"><i className="lar la-heart" /></button>
                            </li>
                            {/* <li class="action compare">
            <button data-bs-toggle="modal" data-bs-target="#product-modal-compare"><i class="las la-sync"></i></button>
          </li> */}
                            <li className="action quick-view">
                              <button data-bs-toggle="modal" data-bs-target="#product-modal"><i className="las la-eye" onClick={() => Single_products_model(items._id)} /></button>
                            </li>
                          </ul>
                        </div>
                        <div className="product-content">
                          <h4 className="product-sub-title"><a href="#">Fresh Vegetables</a></h4>
                          <h3 className="product-title"><Link to="/single_products">{items.product_name}</Link></h3>
                          <div className="product-price-wrapp">
                            <span className="product-regular-price">€{items.mrp}</span>
                            <span className="product-price-on-sale">€{items.price}</span>
                            <span className="badge bg-success">-{items.offer_percent}%</span>
                          </div>
                          <div className="product-cart-btn-wrap">
                            <button data-bs-toggle="modal" data-bs-target="#addto-cart-modal" className="btn btn-dark add-to-cart-btn">Add to cart</button>
                          </div>
                        </div>
                      </div>
                      {/* product-card  style={{zIndex:"0"}}end */}
                    </div>
                  )
                })}


                <div className="col-12 mt-7 mb-7">
                  <nav aria-label="Page navigation">
                    <ul className="pagination justify-content-center">
                      <li className="page-item active">
                        <a className="page-link" href="#">
                          <span className="ion-ios-arrow-left" />
                        </a>
                      </li>
                      <li className="page-item"><a className="page-link" href="#">1</a></li>
                      <li className="page-item"><a className="page-link" href="#">2</a></li>
                      <li className="page-item"><a className="page-link" href="#">3</a></li>
                      <li className="page-item">
                        <a className="page-link" href="#">
                          <span className="ion-ios-arrow-right" />
                        </a>
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>
            </div>
            <div className="tab-pane fade" id="profile" role="tabpanel">
              <div className="row grid-view-list overflow-hidden">
                <div className="row grid-view-list mb-n7">
                  <div className="col-12 mb-7">
                    {/* product-card  style={{zIndex:"0"}}start */}
                    <div className="product-card" style={{ zIndex: "0" }}>
                      <span className="badge bg-success product-badge">new</span>
                      <div className="product-thumb-nail">
                        <Link to="/single_products">
                          <img className="product-image" src="assets/images/products/product-1.jpg" alt="image_not_found" />
                        </Link>
                        <ul className="actions">
                          <li className="action whish-list">
                            <button data-bs-toggle="modal" data-bs-target="#product-modal-wishlist"><i className="lar la-heart" /></button>
                          </li>
                          <li className="action compare">
                            <button data-bs-toggle="modal" data-bs-target="#product-modal-compare"><i className="las la-sync" /></button>
                          </li>
                          <li className="action quick-view">
                            <button data-bs-toggle="modal" data-bs-target="#product-modal"><i className="las la-eye" /></button>
                          </li>
                        </ul>
                      </div>
                      <div className="product-content">
                        <h4 className="product-sub-title"><a href="#">Fresh Vegetables</a></h4>
                        <h3 className="product-title"><Link to="/single_products">Warburtons 9 Crumpets</Link></h3>
                        <div className="product-price-wrapp">
                          <span className="product-regular-price">$43.80</span>
                          <span className="product-price-on-sale">$39.42</span>
                          <span className="badge bg-success">-20%</span>
                        </div>
                        <p> Create a cool and sporty look with the FILA® Locker Room Varsity Jacket.
                          Comfortable cotton-blend fabrication.
                          Classic varsity jacket features brand details throughout.
                          Flat knit collar.</p>
                        <div className="product-cart-btn-wrap">
                          <button data-bs-toggle="modal" data-bs-target="#addto-cart-modal" className="btn btn-dark add-to-cart-btn">Add to cart</button>
                        </div>
                      </div>
                    </div>
                    {/* product-card  style={{zIndex:"0"}}end */}
                  </div>
                  <div className="col-12 mb-7">
                    {/* product-card  style={{zIndex:"0"}}start */}
                    <div className="product-card" style={{ zIndex: "0" }}>
                      <span className="badge bg-success product-badge">new</span>
                      <div className="product-thumb-nail">
                        <Link to="/single_products">
                          <img className="product-image" src="assets/images/products/product-6.jpg" alt="image_not_found" />
                          <img className="product-image-hover-style" src="assets/images/products/product-6.1.jpg" alt="image_not_found" />
                        </Link>
                        <ul className="actions">
                          <li className="action whish-list">
                            <button data-bs-toggle="modal" data-bs-target="#product-modal-wishlist"><i className="lar la-heart" /></button>
                          </li>
                          <li className="action compare">
                            <button data-bs-toggle="modal" data-bs-target="#product-modal-compare"><i className="las la-sync" /></button>
                          </li>
                          <li className="action quick-view">
                            <button data-bs-toggle="modal" data-bs-target="#product-modal"><i className="las la-eye" /></button>
                          </li>
                        </ul>
                      </div>
                      <div className="product-content">
                        <h4 className="product-sub-title"><a href="#">Fresh Fruits</a></h4>
                        <h3 className="product-title"><Link to="/single_products">Walkers Meaty Variety Crisps</Link></h3>
                        <div className="product-price-wrapp">
                          <span className="product-regular-price">$43.80</span>
                          <span className="product-price-on-sale">$39.42</span>
                          <span className="badge bg-danger">-20%</span>
                        </div>
                        <p> Create a cool and sporty look with the FILA® Locker Room Varsity Jacket.
                          Comfortable cotton-blend fabrication.
                          Classic varsity jacket features brand details throughout.
                          Flat knit collar.</p>
                        <div className="product-cart-btn-wrap">
                          <button data-bs-toggle="modal" data-bs-target="#addto-cart-modal" className="btn btn-dark add-to-cart-btn">Add to cart</button>
                        </div>
                      </div>
                    </div>
                    {/* product-card  style={{zIndex:"0"}}end */}
                  </div>
                  <div className="col-12 mb-7">
                    {/* product-card  style={{zIndex:"0"}}start */}
                    <div className="product-card" style={{ zIndex: "0" }}>
                      <span className="badge bg-success product-badge">new</span>
                      <div className="product-thumb-nail">
                        <Link to="/single_products">
                          <img className="product-image" src="assets/images/products/product-2.jpg" alt="image_not_found" />
                          <img className="product-image-hover-style" src="assets/images/products/product-2.1.jpg" alt="image_not_found" />
                        </Link>
                        <ul className="actions">
                          <li className="action whish-list">
                            <button data-bs-toggle="modal" data-bs-target="#product-modal-wishlist"><i className="lar la-heart" /></button>
                          </li>
                          <li className="action compare">
                            <button data-bs-toggle="modal" data-bs-target="#product-modal-compare"><i className="las la-sync" /></button>
                          </li>
                          <li className="action quick-view">
                            <button data-bs-toggle="modal" data-bs-target="#product-modal"><i className="las la-eye" /></button>
                          </li>
                        </ul>
                      </div>
                      <div className="product-content">
                        <h4 className="product-sub-title"><a href="#">Fresh Fruits</a></h4>
                        <h3 className="product-title"><Link to="/single_products">Walkers Meaty Variety Crisps</Link></h3>
                        <div className="product-price-wrapp">
                          <span className="product-regular-price">$43.80</span>
                          <span className="product-price-on-sale">$39.42</span>
                          <span className="badge bg-danger">-20%</span>
                        </div>
                        <p> Create a cool and sporty look with the FILA® Locker Room Varsity Jacket.
                          Comfortable cotton-blend fabrication.
                          Classic varsity jacket features brand details throughout.
                          Flat knit collar.</p>
                        <div className="product-cart-btn-wrap">
                          <button data-bs-toggle="modal" data-bs-target="#addto-cart-modal" className="btn btn-dark add-to-cart-btn">Add to cart</button>
                        </div>
                      </div>
                    </div>
                    {/* product-card  style={{zIndex:"0"}}end */}
                  </div>
                  <div className="col-12 mb-7">
                    {/* product-card  style={{zIndex:"0"}}start */}
                    <div className="product-card" style={{ zIndex: "0" }}>
                      <span className="badge bg-success product-badge">new</span>
                      <div className="product-thumb-nail">
                        <Link to="/single_products">
                          <img className="product-image" src="assets/images/products/product-7.jpg" alt="image_not_found" />
                          <img className="product-image-hover-style" src="assets/images/products/product-7.1.jpg" alt="image_not_found" />
                        </Link>
                        <ul className="actions">
                          <li className="action whish-list">
                            <button data-bs-toggle="modal" data-bs-target="#product-modal-wishlist"><i className="lar la-heart" /></button>
                          </li>
                          <li className="action compare">
                            <button data-bs-toggle="modal" data-bs-target="#product-modal-compare"><i className="las la-sync" /></button>
                          </li>
                          <li className="action quick-view">
                            <button data-bs-toggle="modal" data-bs-target="#product-modal"><i className="las la-eye" /></button>
                          </li>
                        </ul>
                      </div>
                      <div className="product-content">
                        <h4 className="product-sub-title"><a href="#">Fresh Fruits</a></h4>
                        <h3 className="product-title"><Link to="/single_products">Snacking Essentials Walnuts</Link></h3>
                        <div className="product-price-wrapp">
                          <span className="product-price-on-sale">$39.42</span>
                        </div>
                        <p> Create a cool and sporty look with the FILA® Locker Room Varsity Jacket.
                          Comfortable cotton-blend fabrication.
                          Classic varsity jacket features brand details throughout.
                          Flat knit collar.</p>
                        <div className="product-cart-btn-wrap">
                          <button data-bs-toggle="modal" data-bs-target="#addto-cart-modal" className="btn btn-dark add-to-cart-btn">Add to cart</button>
                        </div>
                      </div>
                    </div>
                    {/* product-card  style={{zIndex:"0"}}end */}
                  </div>
                  <div className="col-12 mb-7">
                    {/* product-card  style={{zIndex:"0"}}start */}
                    <div className="product-card" style={{ zIndex: "0" }}>
                      <span className="badge bg-success product-badge">new</span>
                      <div className="product-thumb-nail">
                        <Link to="/single_products">
                          <img className="product-image" src="assets/images/products/product-3.jpg" alt="image_not_found" />
                        </Link>
                        <ul className="actions">
                          <li className="action whish-list">
                            <button data-bs-toggle="modal" data-bs-target="#product-modal-wishlist"><i className="lar la-heart" /></button>
                          </li>
                          <li className="action compare">
                            <button data-bs-toggle="modal" data-bs-target="#product-modal-compare"><i className="las la-sync" /></button>
                          </li>
                          <li className="action quick-view">
                            <button data-bs-toggle="modal" data-bs-target="#product-modal"><i className="las la-eye" /></button>
                          </li>
                        </ul>
                      </div>
                      <div className="product-content">
                        <h4 className="product-sub-title"><a href="#">Fresh Vegetables</a></h4>
                        <h3 className="product-title"><Link to="/single_products">Snacking Essentials Cashew</Link></h3>
                        <div className="product-price-wrapp">
                          <span className="product-regular-price">$43.80</span>
                          <span className="product-price-on-sale">$39.42</span>
                          <span className="badge bg-success">-20%</span>
                        </div>
                        <p> Create a cool and sporty look with the FILA® Locker Room Varsity Jacket.
                          Comfortable cotton-blend fabrication.
                          Classic varsity jacket features brand details throughout.
                          Flat knit collar.</p>
                        <div className="product-cart-btn-wrap">
                          <button data-bs-toggle="modal" data-bs-target="#addto-cart-modal" className="btn btn-dark add-to-cart-btn">Add to cart</button>
                        </div>
                      </div>
                    </div>
                    {/* product-card  style={{zIndex:"0"}}end */}
                  </div>
                  <div className="col-12 mb-7">
                    {/* product-card  style={{zIndex:"0"}}start */}
                    <div className="product-card" style={{ zIndex: "0" }}>
                      <span className="badge bg-success product-badge">new</span>
                      <div className="product-thumb-nail">
                        <Link to="/single_products">
                          <img className="product-image" src="assets/images/products/product-8.jpg" alt="image_not_found" />
                          <img className="product-image-hover-style" src="assets/images/products/product-8.1.jpg" alt="image_not_found" />
                        </Link>
                        <ul className="actions">
                          <li className="action whish-list">
                            <button data-bs-toggle="modal" data-bs-target="#product-modal-wishlist"><i className="lar la-heart" /></button>
                          </li>
                          <li className="action compare">
                            <button data-bs-toggle="modal" data-bs-target="#product-modal-compare"><i className="las la-sync" /></button>
                          </li>
                          <li className="action quick-view">
                            <button data-bs-toggle="modal" data-bs-target="#product-modal"><i className="las la-eye" /></button>
                          </li>
                        </ul>
                      </div>
                      <div className="product-content">
                        <h4 className="product-sub-title"><a href="#">Fresh Fruits</a></h4>
                        <h3 className="product-title"><Link to="/single_products">Skips Prawn Cocktail Flavour</Link></h3>
                        <div className="product-price-wrapp">
                          <span className="product-price-on-sale">$39.42</span>
                        </div>
                        <p> Create a cool and sporty look with the FILA® Locker Room Varsity Jacket.
                          Comfortable cotton-blend fabrication.
                          Classic varsity jacket features brand details throughout.
                          Flat knit collar.</p>
                        <div className="product-cart-btn-wrap">
                          <button data-bs-toggle="modal" data-bs-target="#addto-cart-modal" className="btn btn-dark add-to-cart-btn">Add to cart</button>
                        </div>
                      </div>
                    </div>
                    {/* product-card  style={{zIndex:"0"}}end */}
                  </div>
                  <div className="col-12 mb-7">
                    {/* product-card  style={{zIndex:"0"}}start */}
                    <div className="product-card" style={{ zIndex: "0" }}>
                      <span className="badge bg-success product-badge">new</span>
                      <div className="product-thumb-nail">
                        <Link to="/single_products">
                          <img className="product-image" src="assets/images/products/product-4.jpg" alt="image_not_found" />
                          <img className="product-image-hover-style" src="assets/images/products/product-4.1.jpg" alt="image_not_found" />
                        </Link>
                        <ul className="actions">
                          <li className="action whish-list">
                            <button data-bs-toggle="modal" data-bs-target="#product-modal-wishlist"><i className="lar la-heart" /></button>
                          </li>
                          <li className="action compare">
                            <button data-bs-toggle="modal" data-bs-target="#product-modal-compare"><i className="las la-sync" /></button>
                          </li>
                          <li className="action quick-view">
                            <button data-bs-toggle="modal" data-bs-target="#product-modal"><i className="las la-eye" /></button>
                          </li>
                        </ul>
                      </div>
                      <div className="product-content">
                        <h4 className="product-sub-title"><a href="#">Fresh Vegetables</a></h4>
                        <h3 className="product-title"><Link to="/single_products">Salad Selection Pack</Link></h3>
                        <div className="product-price-wrapp">
                          <span className="product-regular-price">$43.80</span>
                          <span className="product-price-on-sale">$39.42</span>
                          <span className="badge bg-success">-20%</span>
                        </div>
                        <p> Create a cool and sporty look with the FILA® Locker Room Varsity Jacket.
                          Comfortable cotton-blend fabrication.
                          Classic varsity jacket features brand details throughout.
                          Flat knit collar.</p>
                        <div className="product-cart-btn-wrap">
                          <button data-bs-toggle="modal" data-bs-target="#addto-cart-modal" className="btn btn-dark add-to-cart-btn">Add to cart</button>
                        </div>
                      </div>
                    </div>
                    {/* product-card  style={{zIndex:"0"}}end */}
                  </div>
                  <div className="col-12 mb-7">
                    {/* product-card  style={{zIndex:"0"}}start */}
                    <div className="product-card" style={{ zIndex: "0" }}>
                      <span className="badge bg-success product-badge">new</span>
                      <div className="product-thumb-nail">
                        <Link to="/single_products">
                          <img className="product-image" src="assets/images/products/product-9.jpg" alt="image_not_found" />
                          <img className="product-image-hover-style" src="assets/images/products/product-9.1.jpg" alt="image_not_found" />
                        </Link>
                        <ul className="actions">
                          <li className="action whish-list">
                            <button data-bs-toggle="modal" data-bs-target="#product-modal-wishlist"><i className="lar la-heart" /></button>
                          </li>
                          <li className="action compare">
                            <button data-bs-toggle="modal" data-bs-target="#product-modal-compare"><i className="las la-sync" /></button>
                          </li>
                          <li className="action quick-view">
                            <button data-bs-toggle="modal" data-bs-target="#product-modal"><i className="las la-eye" /></button>
                          </li>
                        </ul>
                      </div>
                      <div className="product-content">
                        <h4 className="product-sub-title"><a href="#">Fresh Fruits</a></h4>
                        <h3 className="product-title"><Link to="/single_products">Red Seedless Grapes</Link></h3>
                        <div className="product-price-wrapp">
                          <span className="product-regular-price">$43.80</span>
                          <span className="product-price-on-sale">$39.42</span>
                        </div>
                        <p> Create a cool and sporty look with the FILA® Locker Room Varsity Jacket.
                          Comfortable cotton-blend fabrication.
                          Classic varsity jacket features brand details throughout.
                          Flat knit collar.</p>
                        <div className="product-cart-btn-wrap">
                          <button data-bs-toggle="modal" data-bs-target="#addto-cart-modal" className="btn btn-dark add-to-cart-btn">Add to cart</button>
                        </div>
                      </div>
                    </div>
                    {/* product-card  style={{zIndex:"0"}}end */}
                  </div>
                  <div className="col-12 mb-7">
                    {/* product-card  style={{zIndex:"0"}}start */}
                    <div className="product-card" style={{ zIndex: "0" }}>
                      <span className="badge bg-success product-badge">new</span>
                      <div className="product-thumb-nail">
                        <Link to="/single_products">
                          <img className="product-image" src="assets/images/products/product-5.jpg" alt="image_not_found" />
                          <img className="product-image-hover-style" src="assets/images/products/product-5.1.jpg" alt="image_not_found" />
                        </Link>
                        <ul className="actions">
                          <li className="action whish-list">
                            <button data-bs-toggle="modal" data-bs-target="#product-modal-wishlist"><i className="lar la-heart" /></button>
                          </li>
                          <li className="action compare">
                            <button data-bs-toggle="modal" data-bs-target="#product-modal-compare"><i className="las la-sync" /></button>
                          </li>
                          <li className="action quick-view">
                            <button data-bs-toggle="modal" data-bs-target="#product-modal"><i className="las la-eye" /></button>
                          </li>
                        </ul>
                      </div>
                      <div className="product-content">
                        <h4 className="product-sub-title"><a href="#">Fresh Vegetables</a></h4>
                        <h3 className="product-title"><Link to="/single_products">Pink Lady Apples 4 Pack</Link></h3>
                        <div className="product-price-wrapp">
                          <span className="product-regular-price">$43.80</span>
                          <span className="product-price-on-sale">$39.42</span>
                          <span className="badge bg-success">-20%</span>
                        </div>
                        <p> Create a cool and sporty look with the FILA® Locker Room Varsity Jacket.
                          Comfortable cotton-blend fabrication.
                          Classic varsity jacket features brand details throughout.
                          Flat knit collar.</p>
                        <div className="product-cart-btn-wrap">
                          <button data-bs-toggle="modal" data-bs-target="#addto-cart-modal" className="btn btn-dark add-to-cart-btn">Add to cart</button>
                        </div>
                      </div>
                    </div>
                    {/* product-card  style={{zIndex:"0"}}end */}
                  </div>
                  <div className="col-12 mb-7">
                    {/* product-card  style={{zIndex:"0"}}start */}
                    <div className="product-card" style={{ zIndex: "0" }}>
                      <span className="badge bg-success product-badge">new</span>
                      <div className="product-thumb-nail">
                        <Link to="/single_products">
                          <img className="product-image" src="assets/images/products/product-10.jpg" alt="image_not_found" />
                        </Link>
                        <ul className="actions">
                          <li className="action whish-list">
                            <button data-bs-toggle="modal" data-bs-target="#product-modal-wishlist"><i className="lar la-heart" /></button>
                          </li>
                          <li className="action compare">
                            <button data-bs-toggle="modal" data-bs-target="#product-modal-compare"><i className="las la-sync" /></button>
                          </li>
                          <li className="action quick-view">
                            <button data-bs-toggle="modal" data-bs-target="#product-modal"><i className="las la-eye" /></button>
                          </li>
                        </ul>
                      </div>
                      <div className="product-content">
                        <h4 className="product-sub-title"><a href="#">Fresh Fruits</a></h4>
                        <h3 className="product-title"><Link to="/single_products">Mini Corn Cobs 625g</Link></h3>
                        <div className="product-price-wrapp">
                          <span className="product-price-on-sale">$39.42</span>
                        </div>
                        <p> Create a cool and sporty look with the FILA® Locker Room Varsity Jacket.
                          Comfortable cotton-blend fabrication.
                          Classic varsity jacket features brand details throughout.
                          Flat knit collar.</p>
                        <div className="product-cart-btn-wrap">
                          <button data-bs-toggle="modal" data-bs-target="#addto-cart-modal" className="btn btn-dark add-to-cart-btn">Add to cart</button>
                        </div>
                      </div>
                    </div>
                    {/* product-card  style={{zIndex:"0"}}end */}
                  </div>
                  <div className="col-12 mb-7">
                    {/* product-card  style={{zIndex:"0"}}start */}
                    <div className="product-card" style={{ zIndex: "0" }}>
                      <span className="badge bg-success product-badge">new</span>
                      <div className="product-thumb-nail">
                        <Link to="/single_products">
                          <img className="product-image" src="assets/images/products/product-11.jpg" alt="image_not_found" />
                          <img className="product-image-hover-style" src="assets/images/products/product-11.1.jpg" alt="image_not_found" />
                        </Link>
                        <ul className="actions">
                          <li className="action whish-list">
                            <button data-bs-toggle="modal" data-bs-target="#product-modal-wishlist"><i className="lar la-heart" /></button>
                          </li>
                          <li className="action compare">
                            <button data-bs-toggle="modal" data-bs-target="#product-modal-compare"><i className="las la-sync" /></button>
                          </li>
                          <li className="action quick-view">
                            <button data-bs-toggle="modal" data-bs-target="#product-modal"><i className="las la-eye" /></button>
                          </li>
                        </ul>
                      </div>
                      <div className="product-content">
                        <h4 className="product-sub-title"><a href="#">Fresh Vegetables</a></h4>
                        <h3 className="product-title"><Link to="/single_products">lorette Sweet &amp; Crunchy</Link></h3>
                        <div className="product-price-wrapp">
                          <span className="product-price-on-sale">$39.42</span>
                        </div>
                        <p> Create a cool and sporty look with the FILA® Locker Room Varsity Jacket.
                          Comfortable cotton-blend fabrication.
                          Classic varsity jacket features brand details throughout.
                          Flat knit collar.</p>
                        <div className="product-cart-btn-wrap">
                          <button data-bs-toggle="modal" data-bs-target="#addto-cart-modal" className="btn btn-dark add-to-cart-btn">Add to cart</button>
                        </div>
                      </div>
                    </div>
                    {/* product-card  style={{zIndex:"0"}}end */}
                  </div>
                  <div className="col-12 mb-7">
                    {/* product-card  style={{zIndex:"0"}}start */}
                    <div className="product-card" style={{ zIndex: "0" }}>
                      <span className="badge bg-success product-badge">new</span>
                      <div className="product-thumb-nail">
                        <Link to="/single_products">
                          <img className="product-image" src="assets/images/products/product-12.jpg" alt="image_not_found" />
                          <img className="product-image-hover-style" src="assets/images/products/product-12.1.jpg" alt="image_not_found" />
                        </Link>
                        <ul className="actions">
                          <li className="action whish-list">
                            <button data-bs-toggle="modal" data-bs-target="#product-modal-wishlist"><i className="lar la-heart" /></button>
                          </li>
                          <li className="action compare">
                            <button data-bs-toggle="modal" data-bs-target="#product-modal-compare"><i className="las la-sync" /></button>
                          </li>
                          <li className="action quick-view">
                            <button data-bs-toggle="modal" data-bs-target="#product-modal"><i className="las la-eye" /></button>
                          </li>
                        </ul>
                      </div>
                      <div className="product-content">
                        <h4 className="product-sub-title"><a href="#">Fresh Fruits</a></h4>
                        <h3 className="product-title"><Link to="/single_products">Gilfresh Soup Vegetables</Link></h3>
                        <div className="product-price-wrapp">
                          <span className="product-regular-price">$43.80</span>
                          <span className="product-price-on-sale">$39.42</span>
                          <span className="badge bg-danger">-20%</span>
                        </div>
                        <p> Create a cool and sporty look with the FILA® Locker Room Varsity Jacket.
                          Comfortable cotton-blend fabrication.
                          Classic varsity jacket features brand details throughout.
                          Flat knit collar.</p>
                        <div className="product-cart-btn-wrap">
                          <button data-bs-toggle="modal" data-bs-target="#addto-cart-modal" className="btn btn-dark add-to-cart-btn">Add to cart</button>
                        </div>
                      </div>
                    </div>
                    {/* product-card  style={{zIndex:"0"}}end */}
                  </div>
                  <div className="col-12 mb-7">
                    {/* product-card  style={{zIndex:"0"}}start */}
                    <div className="product-card" style={{ zIndex: "0" }}>
                      <span className="badge bg-success product-badge">new</span>
                      <div className="product-thumb-nail">
                        <Link to="/single_products">
                          <img className="product-image" src="assets/images/products/product-4.jpg" alt="image_not_found" />
                          <img className="product-image-hover-style" src="assets/images/products/product-4.1.jpg" alt="image_not_found" />
                        </Link>
                        <ul className="actions">
                          <li className="action whish-list">
                            <button data-bs-toggle="modal" data-bs-target="#product-modal-wishlist"><i className="lar la-heart" /></button>
                          </li>
                          <li className="action compare">
                            <button data-bs-toggle="modal" data-bs-target="#product-modal-compare"><i className="las la-sync" /></button>
                          </li>
                          <li className="action quick-view">
                            <button data-bs-toggle="modal" data-bs-target="#product-modal"><i className="las la-eye" /></button>
                          </li>
                        </ul>
                      </div>
                      <div className="product-content">
                        <h4 className="product-sub-title"><a href="#">Fresh Vegetables</a></h4>
                        <h3 className="product-title"><Link to="/single_products">Salad Selection Pack</Link></h3>
                        <div className="product-price-wrapp">
                          <span className="product-regular-price">$43.80</span>
                          <span className="product-price-on-sale">$39.42</span>
                          <span className="badge bg-success">-20%</span>
                        </div>
                        <p> Create a cool and sporty look with the FILA® Locker Room Varsity Jacket.
                          Comfortable cotton-blend fabrication.
                          Classic varsity jacket features brand details throughout.
                          Flat knit collar.</p>
                        <div className="product-cart-btn-wrap">
                          <button data-bs-toggle="modal" data-bs-target="#addto-cart-modal" className="btn btn-dark add-to-cart-btn">Add to cart</button>
                        </div>
                      </div>
                    </div>
                    {/* product-card  style={{zIndex:"0"}}end */}
                  </div>
                  <div className="col-12 mb-7">
                    {/* product-card  style={{zIndex:"0"}}start */}
                    <div className="product-card" style={{ zIndex: "0" }}>
                      <span className="badge bg-success product-badge">new</span>
                      <div className="product-thumb-nail">
                        <span>
                          <img className="product-image" src="assets/images/products/product-9.jpg" alt="image_not_found" />
                          <img className="product-image-hover-style" src="assets/images/products/product-9.1.jpg" alt="image_not_found" />
                        </span>
                        <ul className="actions">
                          <li className="action whish-list">
                            <button data-bs-toggle="modal" data-bs-target="#product-modal-wishlist"><i className="lar la-heart" /></button>
                          </li>
                          <li className="action compare">
                            <button data-bs-toggle="modal" data-bs-target="#product-modal-compare"><i className="las la-sync" /></button>
                          </li>
                          <li className="action quick-view">
                            <button data-bs-toggle="modal" data-bs-target="#product-modal"><i className="las la-eye" /></button>
                          </li>
                        </ul>
                      </div>
                      <div className="product-content">
                        <h4 className="product-sub-title"><a href="#">Fresh Fruits</a></h4>
                        <h3 className="product-title">Red Seedless Grapes</h3>
                        <div className="product-price-wrapp">
                          <span className="product-regular-price">$43.80</span>
                          <span className="product-price-on-sale">$39.42</span>
                        </div>
                        <p> Create a cool and sporty look with the FILA® Locker Room Varsity Jacket.
                          Comfortable cotton-blend fabrication.
                          Classic varsity jacket features brand details throughout.
                          Flat knit collar.</p>
                        <div className="product-cart-btn-wrap">
                          <button data-bs-toggle="modal" data-bs-target="#addto-cart-modal" className="btn btn-dark add-to-cart-btn">Add to cart</button>
                        </div>
                      </div>
                    </div>
                    {/* product-card  style={{zIndex:"0"}}end */}
                  </div>
                  <div className="col-12 mb-7">
                    <nav aria-label="Page navigation">
                      <ul className="pagination justify-content-center">
                        <li className="page-item active">
                          <a className="page-link" href="#">
                            <span className="ion-ios-arrow-left" />
                          </a>
                        </li>
                        <li className="page-item"><a className="page-link" href="#">1</a></li>
                        <li className="page-item"><a className="page-link" href="#">2</a></li>
                        <li className="page-item"><a className="page-link" href="#">3</a></li>
                        <li className="page-item">
                          <a className="page-link" href="#">
                            <span className="ion-ios-arrow-right" />
                          </a>
                        </li>
                      </ul>
                    </nav>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer />
    
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
                    <div className="gallery position-relative">
                      {/* <span className="badge bg-success product-badge" style={{ zIndex: "0" }}>new</span> */}
                      <div>
                        {/* <h2 style={{ textAlign: 'center' }}>Image Gallery</h2> */}
                        <div className="container">
                          <div className="mySlides">
                            <div className="numbertext">
                              {slideIndex + 1} / {images.length}
                            </div>

                            <img src={`http://103.104.74.215:3014/uploads/${images[slideIndex]}`} style={{ width: '100%' }} alt={`Image ${slideIndex + 1}`} />
                          </div>
                          <a className="prev" style={{ cursor: "pointer" }} onClick={() => plusSlides(-1)}>❮</a>
                          <a className="next" style={{ float: "right", cursor: "pointer" }} onClick={() => plusSlides(1)}>❯</a>
                          <div className="row justify-content-center">
                            {images.map((image, index) => (

                              <img
                                className={`demo cursor${index === slideIndex ? ' active' : ''}`}
                                src={`http://103.104.74.215:3014/uploads/${image}`}
                                style={{ width: '20%' }}
                                onClick={() => currentSlide(index)}
                                alt={`Image ${index + 1}`}
                              />

                            ))}
                          </div>
                        </div>
                      </div>
                    </div>

                  </div>
                </div>
                <div className="col-md-7 mb-7">
                  <div className="modal-product-des" style={{ marginTop: "25px" }}>
                    <h3 className="modal-product-title">{model_product_details?.product_name}</h3>
                    <h3 className="modal-product-sub-title">Category: {model_product_details?.category_name}</h3>
                    <div className="reviews">
                      <span className="las la-star" />
                      <span className="las la-star" />
                      <span className="las la-star" />
                      <span className="las la-star" />
                      <span className="las la-star" />
                    </div>

                    <div className="pt-1">
                      <span className="" style={{ fontSize: "20px" }}> Offer</span>
                      <span className="badge badge-lg bg-dark">{model_product_details?.offer_percent}%</span>
                    </div>

                    <div className="product-price-wrapp-lg">
                      <span className="product-regular-price-lg">€{model_product_details?.mrp}</span>
                      <span className="product-price-on-sale-lg">€{model_product_details?.price}</span>
                      {/* <span className="badge badge-lg bg-dark">Save 8%</span> */}
                    </div>
                    <div className="product-description-short pb-7 mb-7">
                      <ul>
                        <li>
                          {model_product_details?.description}
                        </li>
                      </ul>

                      {/* //{product_details?.quantity.map((items) => {
                        //    return (
                        //        <button className='btn btn-success m-1'>
                        //            {items}
                        //        </button>
                        //    )
                        //})} */}

                      {/* <button className='btn btn-success m-1'>
                            {product_details?.quantity[1]}
                        </button> */}
                      {/* <button className='btn btn-success m-1'>
                        {product_details?.quantity[2]}
                        </button>
                        <button className='btn btn-success m-1'>
                            {product_details?.quantity[3]}
                        </button> */}



                    </div>
                    {/*  <div class="product-variants mb-7">
      <div class="product-variants-item">
          <span class="control-label">Size</span>
          <select class="form-control form-control-select">
              <option value="1" title="S" selected="selected">S</option>
              <option value="2" title="M">M</option>
              <option value="3" title="L">L</option>
              <option value="4" title="XL">XL</option>
          </select>
      </div>
      <div class="product-variants-item">
          <span class="control-label">color</span>
          <ul>
              <li class="input-container">
                  <label>
                      <input class="input-color" type="checkbox">
                      <span class="color"></span>
                  </label>
              </li>
              <li class="input-container">
                  <label>
                      <input class="input-color" type="checkbox" checked="checked">
                      <span class="color"></span>
                  </label>
              </li>
          </ul>
      </div>
  </div> */}
                    <div className="product-add-to-cart">
                      <span className="control-label">Quantity</span>
                      <div className="product-count style d-flex my-7">
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
                          {token ? (<button data-bs-toggle="modal" data-bs-target="#addto-cart-modal" className="modal-add-to-cart-btn">
                            Add to cart
                          </button>) : (<button className="modal-add-to-cart-btn">
                            Add to cart
                          </button>)}

                        </div>
                      </div>
                      <div className="product-add-to-card">
                        <a className="product-add-to-card-item" href="#"><i className="lar la-heart" /> Add to wishlist</a>
                        <a className="product-add-to-card-item" href="#"><i className="las la-sync" /> My wishlist</a>
                      </div>
                      <div className="product-social-sharing mt-7">
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
                    <div className="gallery position-relative">
                      {/* <span className="badge bg-success product-badge" style={{ zIndex: "0" }}>new</span> */}
                      <div>
                        {/* <h2 style={{ textAlign: 'center' }}>Image Gallery</h2> */}
                        <div className="container">
                          <div className="mySlides">
                            <div className="numbertext">
                              {slideIndex + 1} / {images.length}
                            </div>

                            <img src={`http://103.104.74.215:3014/uploads/${images[slideIndex]}`} style={{ width: '100%' }} alt={`Image ${slideIndex + 1}`} />
                          </div>
                          <a className="prev" style={{ cursor: "pointer" }} onClick={() => plusSlides(-1)}>❮</a>
                          <a className="next" style={{ float: "right", cursor: "pointer" }} onClick={() => plusSlides(1)}>❯</a>
                          <div className="row justify-content-center">
                            {images.map((image, index) => (

                              <img
                                className={`demo cursor${index === slideIndex ? ' active' : ''}`}
                                src={`http://103.104.74.215:3014/uploads/${image}`}
                                style={{ width: '20%' }}
                                onClick={() => currentSlide(index)}
                                alt={`Image ${index + 1}`}
                              />

                            ))}
                          </div>
                        </div>
                      </div>
                    </div>

                  </div>
                </div>
                <div className="col-md-7 mb-7">
                  <div className="modal-product-des" style={{ marginTop: "25px" }}>
                    <h3 className="modal-product-title">{product_details?.product_name}</h3>
                    <h3 className="modal-product-sub-title">Category: {product_details?.category_name}</h3>
                    <div className="reviews">
                      <span className="las la-star" />
                      <span className="las la-star" />
                      <span className="las la-star" />
                      <span className="las la-star" />
                      <span className="las la-star" />
                    </div>

                    <div className="pt-1">
                      <span className="" style={{ fontSize: "20px" }}> Offer</span>
                      <span className="badge badge-lg bg-dark">{product_details?.offer_percent}%</span>
                    </div>

                    <div className="product-price-wrapp-lg">
                      <span className="product-regular-price-lg">€{product_details?.mrp}</span>
                      <span className="product-price-on-sale-lg">€{product_details?.price}</span>
                      {/* <span className="badge badge-lg bg-dark">Save 8%</span> */}
                    </div>
                    <div className="product-description-short pb-7 mb-7">
                      <ul>
                        <li>
                          {product_details?.description}
                        </li>
                      </ul>

                      {/* //{product_details?.quantity.map((items) => {
                        //    return (
                        //        <button className='btn btn-success m-1'>
                        //            {items}
                        //        </button>
                        //    )
                        //})} */}

                      {/* <button className='btn btn-success m-1'>
                            {product_details?.quantity[1]}
                        </button> */}
                      {/* <button className='btn btn-success m-1'>
                        {product_details?.quantity[2]}
                        </button>
                        <button className='btn btn-success m-1'>
                            {product_details?.quantity[3]}
                        </button> */}



                    </div>
                    {/*  <div class="product-variants mb-7">
      <div class="product-variants-item">
          <span class="control-label">Size</span>
          <select class="form-control form-control-select">
              <option value="1" title="S" selected="selected">S</option>
              <option value="2" title="M">M</option>
              <option value="3" title="L">L</option>
              <option value="4" title="XL">XL</option>
          </select>
      </div>
      <div class="product-variants-item">
          <span class="control-label">color</span>
          <ul>
              <li class="input-container">
                  <label>
                      <input class="input-color" type="checkbox">
                      <span class="color"></span>
                  </label>
              </li>
              <li class="input-container">
                  <label>
                      <input class="input-color" type="checkbox" checked="checked">
                      <span class="color"></span>
                  </label>
              </li>
          </ul>
      </div>
  </div> */}
                    <div className="product-add-to-cart">
                      <span className="control-label">Quantity</span>
                      <div className="product-count style d-flex my-7">
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
                          <button data-bs-toggle="modal" data-bs-target="#addto-cart-modal" className="modal-add-to-cart-btn">
                            Add to cart
                          </button>
                        </div>
                      </div>
                      <div className="product-add-to-card">
                        <a className="product-add-to-card-item" href="#"><i className="lar la-heart" /> Add to wishlist</a>
                        <a className="product-add-to-card-item" href="#"><i className="las la-sync" /> My wishlist</a>
                      </div>
                      <div className="product-social-sharing mt-7">
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
                          <li>$23.06</li>
                          <li>Color: White</li>
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
                        {/*  <button class="btn btn-sm btn-dark  mt-3 mt-sm-0" data-bs-dismiss="modal"><a href="cart.html" style="color :white;">View cart</a></button> */}
                        <button className="btn btn-sm btn-dark mt-3 mt-sm-0"><Link to="/card" style={{ color: 'white' }}> View cart</Link></button>
                        <button className="btn btn-sm btn-dark mt-3 mt-sm-0"><Link to="/checkout" style={{ color: 'white' }}>  Proceed to checkout</Link></button>
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

export default Shop