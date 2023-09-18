import React, { useEffect, useState } from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import 'animate.css';
import { Link, useNavigate } from 'react-router-dom';
import { AiFillLeftCircle } from 'react-icons/ai'
import { AiFillRightCircle } from 'react-icons/ai'
import axios from "axios";
import secureLocalStorage from "react-secure-storage";
import baseurl from './Baseurl'

import './Arowbutton.css'
const Newarrivals = () => {
  let navigate = useNavigate()

  const [slideIndex, setSlideIndex] = useState(0);

  const images = [
    'assets/images/products/product-1.jpg',
    'assets/images/products/product-6.jpg',
    'assets/images/products/product-15.jpg',
    'assets/images/products/product-6.1.jpg',
  ];

  const plusSlides = (n) => {
    const newIndex = (slideIndex + n + images.length) % images.length;
    setSlideIndex(newIndex);
  };

  const currentSlide = (n) => {
    setSlideIndex(n);
  };
  const [slider1, setSlider1] = useState(null);
  const [slider2, setSlider2] = useState(null);


  const CustomPrevArrow = (props) => (
    <button
      className="custom-prev-arrow " style={{ right: "60px", top: "-50px", padding: "5px", zIndex: "0" }} onClick={props.onClick}>
      <i className="las la-angle-left" style={{
        color: "black",
        border: "1px solid",
        padding: "5px",
        borderRadius: "20px",
        zIndex: "0",
      }} /></button>
  );

  const CustomNextArrow = (props) => (
    <button
      className="custom-next-arrow "
      style={{ right: "20px", top: "-50px", padding: "5px", zIndex: "0" }}
      onClick={props.onClick}
    >
      <i
        className="las la-angle-right"
        style={{
          color: "black",
          border: "1px solid",
          padding: "5px",
          borderRadius: "20px",
          zIndex: "0",
        }}
      />
    </button>
  );


  const slider1Settings = {
    autoplay: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    asNavFor: slider2,
    nextArrow: <CustomNextArrow />,
    prevArrow: <CustomPrevArrow />,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  const slider2Settings = {
    autoplay: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    asNavFor: slider1,

    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };



  // useStatus
  let [new_arrivals_product_list, setnew_arrivals_product_list] = useState([])

  let token = secureLocalStorage.getItem("n_token");
  // get dealofday handel
  useEffect(() => {
    axios.get(`http://103.104.74.215:3014/website/new_arrivals_product_list`
    ).then((res) => {
      // console.log(res, "new_arrivals_product_list")
      if (res.data.result) {
        setnew_arrivals_product_list(res.data.data)
      }
    }).catch((error) => {
      //  console.log(error)
    })
    // console.log(shwodealofday)
  }, [new_arrivals_product_list])

  // sigle prodicts model
  let Single_products_model = (singleproducts) => {
  //  console.log(singleproducts)
    secureLocalStorage.setItem("n_singleproducts", singleproducts);
    navigate(`/single_products`)
  }
  return (
    <div>
      <section className="product-tab-section">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-xl-5 col-md-4 col-12">
              <div className="section-title">
                <h2 className="title">New Araaivals</h2>
              </div>
            </div>
            <div className="col-xl-7 col-md-8 col-12">
              <ul className="nav nav-pills product-tab-nav" id="pills-tab" role="tablist">
                <li className="nav-item" role="presentation">
                  <button className="nav-link active" id="pills-home-tab" data-bs-toggle="pill" data-bs-target="#pills-home" type="button" role="tab" aria-selected="true">Fresh Fruit</button>
                </li>
                <li className="nav-item" role="presentation">
                  <button className="nav-link" id="pills-profile-tab" data-bs-toggle="pill" data-bs-target="#pills-profile" type="button" role="tab">Fresh
                    Vegetables</button>
                </li>
                <li className="nav-item" role="presentation">
                  <button className="nav-link" id="pills-contact-tab" data-bs-toggle="pill" data-bs-target="#pills-contact" type="button" role="tab">Fresh Salad &amp;
                    Dips</button>
                </li>
              </ul>
            </div>
          </div>
          <div className="row justify-content-center "   >
            <div className="col-12">


              <Slider ref={(slider) => setSlider1(slider)} {...slider1Settings}>
                {new_arrivals_product_list?.map((items) => {
                  return (
                    <div className="product-tab-card">
                      <div className='row' >
                        <div className="col-lg-2 product-tab-thumb-nail text-center">
                          <span onClick={() => Single_products_model(items._id)} className='text-center'>
                            <img className="product-tab-image" width={"100%"} height={"120px"} src={`http://103.104.74.215:3014/uploads/${items.product_image}`} alt="image_not_found" />
                          </span>
                          <Link className="quick-view-btn-wrap">
                            <button className="quick-view-btn" data-bs-toggle="modal" data-bs-target="#product-modal">
                              <i className="las la-eye" onClick={() => Single_products_model(items._id)} />
                            </button>
                          </Link>
                        </div>
                        <div className="col-lg-2 product-tab-content mt-5 text-center">
                          <h4 style={{ float: "left" }} className="product-sub-title">
                            <a href="#">{items.category_name}</a>
                          </h4> <br />
                          <h3 style={{ float: "left" }} className="product-title">
                            <Link to="/single_product">
                              <span>{items.product_name}</span>
                            </Link></h3> <br />
                          <h3 style={{ float: "left" }} className="product-title">
                            <Link to="/single_product">
                              <span style={{ float: "left" }}>Price €{items.price}</span>
                            </Link></h3>
                          <h3 style={{ float: "left" }} className="product-title">
                            <s style={{ color: "black" }}>Mrp €{items.mrp}</s>
                          </h3>


                        </div>
                      </div>
                    </div>
                  )
                })}



              </Slider>

              <Slider ref={(slider) => setSlider2(slider)} {...slider2Settings} >

                {new_arrivals_product_list.reverse()?.map((items) => {
                  return (
                    <div className="product-tab-card" onClick={() => Single_products_model(items._id)}>
                      <div className='row' >
                        <div className="col-lg-2 product-tab-thumb-nail text-center">
                          <span onClick={() => Single_products_model(items._id)} className='text-center'>
                            <img className="product-tab-image" width={"100%"} height={"120px"} src={`http://103.104.74.215:3014/uploads/${items.product_image}`} alt="image_not_found" />
                          </span>
                          <Link className="quick-view-btn-wrap">
                            <button className="quick-view-btn" data-bs-toggle="modal" data-bs-target="#product-modal">
                              <i className="las la-eye" onClick={() => Single_products_model(items._id)} />
                            </button>
                          </Link>
                        </div>
                        <div className="col-lg-2 product-tab-content mt-5 text-center">
                          <h4 style={{ float: "left" }} className="product-sub-title">
                            <a href="#">{items.category_name}</a>
                          </h4> <br />
                          <h3 style={{ float: "left" }} className="product-title">
                            <Link to="/single_product">
                              <span>{items.product_name}</span>
                            </Link></h3> <br />
                          <h3 style={{ float: "left" }} className="product-title">
                            <Link to="/single_product">
                              <span style={{ float: "left" }}>Price € {items.price}</span>
                            </Link></h3>
                          <h3 style={{ float: "left" }} className="product-title">
                            <s style={{ color: "black" }}>{items.mrp}</s>
                          </h3>


                        </div>
                      </div>
                    </div>
                  )
                })}



              </Slider>

            </div>
          </div>
        </div>
      </section>




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
                      <span className="badge bg-success product-badge">new</span>
                      <div>
                        <h2 style={{ textAlign: 'center' }}>Image Gallery</h2>
                        <div className="container">
                          <div className="mySlides">
                            <div className="numbertext">
                              {slideIndex + 1} / {images.length}
                            </div>
                            <img src={images[slideIndex]} style={{ width: '100%' }} alt={`Image ${slideIndex + 1}`} />
                          </div>
                          <a className="prev" style={{ cursor: "pointer" }} onClick={() => plusSlides(-1)}>❮</a>
                          <a className="next" style={{ float: "right", cursor: "pointer" }} onClick={() => plusSlides(1)}>❯</a>
                          <div className="row justify-content-center">
                            {images.map((image, index) => (

                              <img
                                className={`demo cursor${index === slideIndex ? ' active' : ''}`}
                                src={image}
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
                      <span className="product-regular-price-lg">$43.80</span>
                      <span className="product-price-on-sale-lg">$39.42</span>
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
                        {/*  <a class="product-add-to-card-item" href="#"><i class="las la-sync"></i> My wishlist</a> */}
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
                      <button className="btn btn-sm btn-dark mt-3 mt-sm-0"><a href="/card" style={{ color: 'white' }}> View cart</a></button>
                      <button className="btn btn-sm btn-dark mt-3 mt-sm-0"><a href="/checkout" style={{ color: 'white' }}>  Proceed to checkout</a></button>
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

export default Newarrivals