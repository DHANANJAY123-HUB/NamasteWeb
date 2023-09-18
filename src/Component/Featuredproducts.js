import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";
import { AiFillLeftCircle } from 'react-icons/ai'
import { AiFillRightCircle } from 'react-icons/ai'
import './Arowbutton.css'
import { useEffect } from 'react';
import axios from 'axios';
import baseurl from './Baseurl'
import { useState } from 'react';
import secureLocalStorage from "react-secure-storage";

function Featuredproducts() {

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
  const CustomPrevArrow = (props) => (
    <button
      className="custom-prev-arrow common-swiper-button-next"
      style={{ right: "60px", top: "-50px", padding: "5px", zIndex: "0" }}
      onClick={props.onClick}>
      <i className="las la-angle-left" style={{ color: "black", border: "1px solid", padding: "5px", borderRadius: "20px", zIndex: "0" }} />
    </button>
  );

  const CustomNextArrow = (props) => (
    <button
      className="custom-next-arrow common-swiper-button-next"
      style={{ right: "20px", top: "-50px", padding: "5px", zIndex: "0" }}
      onClick={props.onClick}
    >
      <i className="las la-angle-right" style={{ color: "black", border: "1px solid", padding: "5px", borderRadius: "20px", zIndex: "0" }} />
    </button>
  );


  const settings = {
    autoplay: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,
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


    //useState
    let [featured_product_list, setfeatured_product_list] = useState()
    // get data category list fruits
    useEffect(() => {
      axios.get(`http://103.104.74.215:3014/website/featured_product_list`).then((res) => {
        if (res.data.result) {
       //  console.log(res.data.data)
          setfeatured_product_list(res.data.data)
        }
      })
    }, [])


     // sigle prodicts model
  let   Single_products_model = (singleproducts) => {
    //console.log(singleproducts)
   secureLocalStorage.setItem("n_singleproducts", singleproducts);
 }
  return (
    <section className="new-arrival-carousel-section section-mb">
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-12">
          <div className="row align-items-center">
            <div className="col-xl-3 col-md-4 col-12">
              <div className="section-title">
                <h2 className="title">Featured Products</h2>
              </div>
            </div>
            <div className="col-xl-9 col-md-8 col-12">
              <div className="badge bg-danger">
                <p id="demo" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <br />


      <div className="">


        <Slider {...settings} >
          {featured_product_list?.map((items) => {
            return (

              <div
                className="new-arrival-carousel-item swiper-slide swiper-slide-duplicate swiper-slide-duplicate-next"
                role="group"
                aria-label="6 / 7"
                style={{ width: "257.25px", }}
                data-swiper-slide-index={5}
              >
                {/* product-card-list start */}
                <div
                  className="product-card-list"
                  style={{}}
                >
                  {/* product-card start */}
                  <div className="product-card">
                    <span className="badge bg-success product-badge">
                      new
                    </span>
                    <div className="product-thumb-nail">
                      <Link to="/single_products">
                        <img
                          className="product-image p-2"
                          src={`http://103.104.74.215:3014/uploads/${items.product_image}`}
                          width={"100%"} height={"200px"} alt="image_not_found"
                        />
                        <img
                          className="product-image-hover-style p-5 shadow"
                          src={`http://103.104.74.215:3014/uploads/${items.product_image}`}
                          width={"100%"}  alt="image_not_found"

                        />
                      </Link>
                      <ul className="actions">
                        <li className="action whish-list">
                          <button
                            data-bs-toggle="modal"
                            data-bs-target="#product-modal-wishlist"
                          >
                            <i className="lar la-heart" />
                          </button>
                        </li>
                        {/* <li class="action compare">
                <button data-bs-toggle="modal" data-bs-target="#product-modal-compare"></button>
              </li> */}
                        <li className="action quick-view">
                          <button
                            data-bs-toggle="modal"
                            data-bs-target="#product-modal"
                          >
                            <i className="las la-eye"  onClick={() => Single_products_model(items._id)} />
                          </button>
                        </li>
                      </ul>
                    </div>
                    <div className="product-content">
                      <h4 className="product-sub-title">
                        <a href="#">{items.category_name}</a>
                      </h4>
                      <h3 className="product-title">
                        <Link to="/single_product">
                        <span style={{float:"left"}}>{items.product_name}</span>
                        </Link>
                      </h3>
                      <div className="product-price-wrapp">
                        <p style={{float:"left"}} className="product-price-on-sale">
                      <span>Price € {items.price}</span> <span className="pl-2"><s style={{color:"black"}}>{items.mrp}</s></span>
                        </p>
                      </div>
                      <div className="product-cart-btn-wrap">
                        <button
                          className="btn btn-dark add-to-cart-btn"
                          data-bs-toggle="modal"
                          data-bs-target="#addto-cart-modal"
                        >
                          Add to cart
                        </button>
                      </div>
                    </div>
                  </div>
                  {/* product-card end */}
                </div>
                {/* product-card-list end */}
              </div>
            )
          })}









        </Slider>



      </div>
    </div>


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
                    <Link to="/card" style={{ color: 'white' }}> <button className="btn btn-sm btn-dark mt-3 mt-sm-0"> View cart</button></Link>
                    <Link to="/checkout" style={{ color: 'white' }}><button className="btn btn-sm btn-dark mt-3 mt-sm-0">  Proceed to checkout</button></Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  )
}

export default Featuredproducts
