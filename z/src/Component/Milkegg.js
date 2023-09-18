import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from 'react-router-dom';


function Milkegg() {

  const NextArrow = (props) => (
    <button className="arrow next-arrow" onClick={props.onClick}>
      <i className="las la-angle-right" />
    </button>


  );

  const PrevArrow = (props) => (
    <button className="arrow prev-arrow" onClick={props.onClick}>
      <i className="las la-angle-left" />
    </button>
  );



  var setting3 = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };


  return (
    <div>
      <section className="categories-section section-mb">
        <div className="container">
          <div className="row">
            <div className="col-xl-9">
              <div className="row mb-n7">

                <div className="col-lg-4 mb-7 " style={{ zIndex: "0" }}>
                  <div className="section-title categories">
                    <h2 className="title">Milk</h2>
                  </div>

                  <div className="categories-carousel">
                    <div className="swiper-container">
                      <div className="swiper-wrapper">
                        {/* swiper-slide start */}
                        <div className="categories-carousel-item swiper-slide">

                          {/* categories card-list start */}

                          <Slider {...setting3}>
                            <div>
                              <div className="categories-card-list">

                                <div className="categories-card">
                                  <div className="categories-thumb-nail">
                                    <Link to="single_products">
                                      <img className="categories-image" src="assets/images/products/product-8.jpg" alt="image_not_found" />
                                      <img className="categories-image-hover-style" src="assets/images/products/product-8.1.jpg" alt="image_not_found" />
                                    </Link>
                                    <div className="quick-view-btn-wrap">
                                      <button className="quick-view-btn" data-bs-toggle="modal" data-bs-target="#product-modal">
                                        <i className="las la-eye" />
                                      </button>
                                    </div>
                                  </div>
                                  <div className="categories-content">
                                    <h4 className="product-sub-title"><a href="#">Fresh Vegetables</a></h4>
                                    <h3 className="product-title"><a to="single_products">Skips Prawn Cocktail Flavour</a></h3>
                                    <div className="product-price-wrapp">
                                      <span className="product-regular-price">$43.80</span>
                                      <span className="product-price-on-sale">$39.42</span>
                                    </div>
                                  </div>
                                </div>
                                {/* categories-card end */}
                              </div>
                              {/* categories  card-list end */}
                              {/* categories card-list start */}
                              <div className="categories-card-list">
                                {/* categories-card start */}
                                <div className="categories-card">
                                  <div className="categories-thumb-nail">
                                    <Link to="single_products">
                                      <img className="categories-image" src="assets/images/products/product-7.jpg" alt="image_not_found" />
                                      <img className="categories-image-hover-style" src="assets/images/products/product-7.1.jpg" alt="image_not_found" />
                                    </Link>
                                    <div className="quick-view-btn-wrap">
                                      <button className="quick-view-btn" data-bs-toggle="modal" data-bs-target="#product-modal">
                                        <i className="las la-eye" />
                                      </button>
                                    </div>
                                  </div>
                                  <div className="categories-content">
                                    <h4 className="product-sub-title"><a href="#">Fresh Vegetables</a></h4>
                                    <h3 className="product-title"><Link to="single_products">Snacking Essentials Walnuts</Link></h3>
                                    <div className="product-price-wrapp">
                                      <span className="product-regular-price">$43.80</span>
                                      <span className="product-price-on-sale">$39.42</span>
                                    </div>
                                  </div>
                                </div>
                                {/* categories-card end */}
                              </div>
                              {/* categories card-list end */}
                              {/* categories card-list start */}
                              <div className="categories-card-list">
                                {/* categories-card start */}
                                <div className="categories-card">
                                  <div className="categories-thumb-nail">
                                    <Link to="single_products">
                                      <img className="categories-image" src="assets/images/products/product-5.jpg" alt="image_not_found" />
                                      <img className="categories-image-hover-style" src="assets/images/products/product-5.1.jpg" alt="image_not_found" />
                                    </Link>
                                    <div className="quick-view-btn-wrap">
                                      <button className="quick-view-btn" data-bs-toggle="modal" data-bs-target="#product-modal">
                                        <i className="las la-eye" />
                                      </button>
                                    </div>
                                  </div>
                                  <div className="categories-content">
                                    <h4 className="product-sub-title"><a href="#">Fresh Vegetables</a></h4>
                                    <h3 className="product-title"><Link to="single_products">Pink Lady Apples 4 Pack</Link></h3>
                                    <div className="product-price-wrapp">
                                      <span className="product-regular-price">$43.80</span>
                                      <span className="product-price-on-sale">$39.42</span>
                                    </div>
                                  </div>
                                </div>
                                {/* categories-card end */}
                              </div>
                            </div>
                            <div>
                              <div className="categories-card-list">
                                {/* categories-card start */}
                                <div className="categories-card">
                                  <div className="categories-thumb-nail">
                                    <Link to="single_products">
                                      <img className="categories-image" src="assets/images/products/product-3.jpg" alt="image_not_found" />
                                    </Link>
                                    <div className="quick-view-btn-wrap">
                                      <button className="quick-view-btn" data-bs-toggle="modal" data-bs-target="#product-modal">
                                        <i className="las la-eye" />
                                      </button>
                                    </div>
                                  </div>
                                  <div className="categories-content">
                                    <h4 className="product-sub-title"><a href="#">Fresh Vegetables</a></h4>
                                    <h3 className="product-title"><Link to="single_products">Snacking Essentials Cashew</Link></h3>
                                    <div className="product-price-wrapp">
                                      <span className="product-regular-price">$43.80</span>
                                      <span className="product-price-on-sale">$39.42</span>
                                    </div>
                                  </div>
                                </div>
                                {/* categories-card end */}
                              </div>
                              {/* categories card-list end */}
                              {/* categories card-list start */}
                              <div className="categories-card-list">
                                {/* categories-card start */}
                                <div className="categories-card">
                                  <div className="categories-thumb-nail">
                                    <Link to="single_products">
                                      <img className="categories-image" src="assets/images/products/product-2.jpg" alt="image_not_found" />
                                      <img className="categories-image-hover-style" src="assets/images/products/product-2.1.jpg" alt="image_not_found" />
                                    </Link>
                                    <div className="quick-view-btn-wrap">
                                      <button className="quick-view-btn" data-bs-toggle="modal" data-bs-target="#product-modal">
                                        <i className="las la-eye" />
                                      </button>
                                    </div>
                                  </div>
                                  <div className="categories-content">
                                    <h4 className="product-sub-title"><a href="#">Fresh Vegetables</a></h4>
                                    <h3 className="product-title"><Link to="single_products">Apple &amp; Raspberry Juice Drink</Link></h3>
                                    <div className="product-price-wrapp">
                                      <span className="product-regular-price">$43.80</span>
                                      <span className="product-price-on-sale">$39.42</span>
                                    </div>
                                  </div>
                                </div>
                                {/* categories-card end */}
                              </div>
                              {/* categories card-list end */}
                              {/* categories card-list start */}
                              <div className="categories-card-list">
                                {/* categories-card start */}
                                <div className="categories-card">
                                  <div className="categories-thumb-nail">
                                    <Link to="single_products">
                                      <img className="categories-image" src="assets/images/products/product-5.jpg" alt="image_not_found" />
                                      <img className="categories-image-hover-style" src="assets/images/products/product-5.1.jpg" alt="image_not_found" />
                                    </Link>
                                    <div className="quick-view-btn-wrap">
                                      <button className="quick-view-btn" data-bs-toggle="modal" data-bs-target="#product-modal">
                                        <i className="las la-eye" />
                                      </button>
                                    </div>
                                  </div>
                                  <div className="categories-content">
                                    <h4 className="product-sub-title"><a href="#">Fresh Vegetables</a></h4>
                                    <h3 className="product-title"><Link to="single_products">Pink Lady Apples 4 Pack</Link></h3>
                                    <div className="product-price-wrapp">
                                      <span className="product-regular-price">$43.80</span>
                                      <span className="product-price-on-sale">$39.42</span>
                                    </div>
                                  </div>
                                </div>
                                {/* categories-card end */}
                              </div>
                            </div>
                          </Slider>
                        </div>

                      </div>
                    </div>
                    {/* swiper navigation */}


                  </div>
                </div>
                <div className="col-lg-4 mb-7 " style={{ zIndex: "0" }}>
                  <div className="section-title categories">
                    <h2 className="title">Eggs</h2>
                  </div>
                  <div className="categories-carousel2">
                    <div className="swiper-container">
                      <div className="swiper-wrapper">
                        {/* swiper-slide start */}
                        <div className="categories-carousel-item swiper-slide">
                          {/* categories card-list start */}

                          <Slider {...setting3}>
                            <div>
                              <div className="categories-card-list">
                                {/* categories-card start */}
                                <div className="categories-card">
                                  <div className="categories-thumb-nail">
                                    <Link to="single_products">
                                      <img className="categories-image" src="assets/images/products/product-3.jpg" alt="image_not_found" />
                                    </Link>
                                    <div className="quick-view-btn-wrap">
                                      <button className="quick-view-btn" data-bs-toggle="modal" data-bs-target="#product-modal">
                                        <i className="las la-eye" />
                                      </button>
                                    </div>
                                  </div>
                                  <div className="categories-content">
                                    <h4 className="product-sub-title"><a href="#">Fresh Vegetables</a></h4>
                                    <h3 className="product-title"><Link to="single_products">Snacking Essentials Cashew</Link></h3>
                                    <div className="product-price-wrapp">
                                      <span className="product-regular-price">$43.80</span>
                                      <span className="product-price-on-sale">$39.42</span>
                                    </div>
                                  </div>
                                </div>
                                {/* categories-card end */}
                              </div>
                              {/* categories card-list end */}
                              {/* categories card-list start */}
                              <div className="categories-card-list">
                                {/* categories-card start */}
                                <div className="categories-card">
                                  <div className="categories-thumb-nail">
                                    <Link to="single_products">
                                      <img className="categories-image" src="assets/images/products/product-2.jpg" alt="image_not_found" />
                                      <img className="categories-image-hover-style" src="assets/images/products/product-2.1.jpg" alt="image_not_found" />
                                    </Link>
                                    <div className="quick-view-btn-wrap">
                                      <button className="quick-view-btn" data-bs-toggle="modal" data-bs-target="#product-modal">
                                        <i className="las la-eye" />
                                      </button>
                                    </div>
                                  </div>
                                  <div className="categories-content">
                                    <h4 className="product-sub-title"><a href="#">Fresh Vegetables</a></h4>
                                    <h3 className="product-title"><Link to="single_products">Apple &amp; Raspberry Juice Drink</Link></h3>
                                    <div className="product-price-wrapp">
                                      <span className="product-regular-price">$43.80</span>
                                      <span className="product-price-on-sale">$39.42</span>
                                    </div>
                                  </div>
                                </div>
                                {/* categories-card end */}
                              </div>
                              {/* categories card-list end */}
                              {/* categories card-list start */}
                              <div className="categories-card-list">
                                {/* categories-card start */}
                                <div className="categories-card">
                                  <div className="categories-thumb-nail">
                                    <Link to="single_products">
                                      <img className="categories-image" src="assets/images/products/product-5.jpg" alt="image_not_found" />
                                      <img className="categories-image-hover-style" src="assets/images/products/product-5.1.jpg" alt="image_not_found" />
                                    </Link>
                                    <div className="quick-view-btn-wrap">
                                      <button className="quick-view-btn" data-bs-toggle="modal" data-bs-target="#product-modal">
                                        <i className="las la-eye" />
                                      </button>
                                    </div>
                                  </div>
                                  <div className="categories-content">
                                    <h4 className="product-sub-title"><a href="#">Fresh Vegetables</a></h4>
                                    <h3 className="product-title"><Link to="single_products">Pink Lady Apples 4 Pack</Link></h3>
                                    <div className="product-price-wrapp">
                                      <span className="product-regular-price">$43.80</span>
                                      <span className="product-price-on-sale">$39.42</span>
                                    </div>
                                  </div>
                                </div>
                                {/* categories-card end */}
                              </div>
                            </div>

                            <div>
                              <div className="categories-card-list">
                                {/* categories-card start */}
                                <div className="categories-card">
                                  <div className="categories-thumb-nail">
                                    <Link to="single_products">
                                      <img className="categories-image" src="assets/images/products/product-8.jpg" alt="image_not_found" />
                                      <img className="categories-image-hover-style" src="assets/images/products/product-8.1.jpg" alt="image_not_found" />
                                    </Link>
                                    <div className="quick-view-btn-wrap">
                                      <button className="quick-view-btn" data-bs-toggle="modal" data-bs-target="#product-modal">
                                        <i className="las la-eye" />
                                      </button>
                                    </div>
                                  </div>
                                  <div className="categories-content">
                                    <h4 className="product-sub-title"><a href="#">Fresh Vegetables</a></h4>
                                    <h3 className="product-title"><a to="single_products">Skips Prawn Cocktail Flavour</a></h3>
                                    <div className="product-price-wrapp">
                                      <span className="product-regular-price">$43.80</span>
                                      <span className="product-price-on-sale">$39.42</span>
                                    </div>
                                  </div>
                                </div>
                                {/* categories-card end */}
                              </div>
                              {/* categories card-list end */}
                              {/* categories card-list start */}
                              <div className="categories-card-list">
                                {/* categories-card start */}
                                <div className="categories-card">
                                  <div className="categories-thumb-nail">
                                    <Link to="single_products">
                                      <img className="categories-image" src="assets/images/products/product-5.jpg" alt="image_not_found" />
                                      <img className="categories-image-hover-style" src="assets/images/products/product-5.1.jpg" alt="image_not_found" />
                                    </Link>
                                    <div className="quick-view-btn-wrap">
                                      <button className="quick-view-btn" data-bs-toggle="modal" data-bs-target="#product-modal">
                                        <i className="las la-eye" />
                                      </button>
                                    </div>
                                  </div>
                                  <div className="categories-content">
                                    <h4 className="product-sub-title"><a href="#">Fresh Vegetables</a></h4>
                                    <h3 className="product-title"><Link to="single_products">Pink Lady Apples 4 Pack</Link></h3>
                                    <div className="product-price-wrapp">
                                      <span className="product-regular-price">$43.80</span>
                                      <span className="product-price-on-sale">$39.42</span>
                                    </div>
                                  </div>
                                </div>
                                {/* categories-card end */}
                              </div>
                              {/* categories card-list end */}
                              {/* categories card-list start */}
                              <div className="categories-card-list">
                                {/* categories-card start */}
                                <div className="categories-card">
                                  <div className="categories-thumb-nail">
                                    <Link to="single_products">
                                      <img className="categories-image" src="assets/images/products/product-7.jpg" alt="image_not_found" />
                                      <img className="categories-image-hover-style" src="assets/images/products/product-7.1.jpg" alt="image_not_found" />
                                    </Link>
                                    <div className="quick-view-btn-wrap">
                                      <button className="quick-view-btn" data-bs-toggle="modal" data-bs-target="#product-modal">
                                        <i className="las la-eye" />
                                      </button>
                                    </div>
                                  </div>
                                  <div className="categories-content">
                                    <h4 className="product-sub-title"><a href="#">Fresh Vegetables</a></h4>
                                    <h3 className="product-title"><Link to="single_products">Snacking Essentials Walnuts</Link></h3>
                                    <div className="product-price-wrapp">
                                      <span className="product-regular-price">$43.80</span>
                                      <span className="product-price-on-sale">$39.42</span>
                                    </div>
                                  </div>
                                </div>
                                {/* categories-card end */}
                              </div>
                            </div>
                          </Slider>
                          {/* categories card-list end */}
                        </div>

                      </div>
                    </div>
                    {/* swiper navigation */}

                  </div>
                </div>
                <div className="col-lg-4 mb-7 " style={{ zIndex: "0" }}>
                  <div className="section-title categories">
                    <h2 className="title">Baking &amp; Cooking</h2>
                  </div>
                  <div className="categories-carousel3">
                    <div className="swiper-container">
                      <div className="swiper-wrapper">
                        {/* swiper-slide start */}
                        <div className="categories-carousel-item swiper-slide">
                          {/* categories card-list start */}

                          <Slider {...setting3}>
                            <div>

                              <div className="categories-card-list">
                                {/* categories-card start */}
                                <div className="categories-card">
                                  <div className="categories-thumb-nail">
                                    <Link to="single_products">
                                      <img className="categories-image" src="assets/images/products/product-13.jpg" alt="image_not_found" />
                                      <img className="categories-image-hover-style" src="assets/images/products/product-13.1.jpg" alt="image_not_found" />
                                    </Link>
                                    <div className="quick-view-btn-wrap">
                                      <button className="quick-view-btn" data-bs-toggle="modal" data-bs-target="#product-modal">
                                        <i className="las la-eye" />
                                      </button>
                                    </div>
                                  </div>
                                  <div className="categories-content">
                                    <h4 className="product-sub-title"><a href="#">Fresh Vegetables</a></h4>
                                    <h3 className="product-title"><Link to="single_products">Cranberry Juice Drink</Link></h3>
                                    <div className="product-price-wrapp">
                                      <span className="product-regular-price">$43.80</span>
                                      <span className="product-price-on-sale">$39.42</span>
                                    </div>
                                  </div>
                                </div>
                                {/* categories-card end */}
                              </div>
                              {/* categories card-list end */}
                              {/* categories card-list start */}
                              <div className="categories-card-list">
                                {/* categories-card start */}
                                <div className="categories-card">
                                  <div className="categories-thumb-nail">
                                    <Link to="single_products">
                                      <img className="categories-image" src="assets/images/products/product-9.jpg" alt="image_not_found" />
                                      <img className="categories-image-hover-style" src="assets/images/products/product-9.1.jpg" alt="image_not_found" />
                                    </Link>
                                    <div className="quick-view-btn-wrap">
                                      <button className="quick-view-btn" data-bs-toggle="modal" data-bs-target="#product-modal">
                                        <i className="las la-eye" />
                                      </button>
                                    </div>
                                  </div>
                                  <div className="categories-content">
                                    <h4 className="product-sub-title"><a href="#">Fresh Vegetables</a></h4>
                                    <h3 className="product-title"><Link to="single_products">Red Seedless Grapes</Link></h3>
                                    <div className="product-price-wrapp">
                                      <span className="product-regular-price">$43.80</span>
                                      <span className="product-price-on-sale">$39.42</span>
                                    </div>
                                  </div>
                                </div>
                                {/* categories-card end */}
                              </div>
                              {/* categories card-list end */}
                              {/* categories card-list start */}
                              <div className="categories-card-list">
                                {/* categories-card start */}
                                <div className="categories-card">
                                  <div className="categories-thumb-nail">
                                    <Link to="single_products">
                                      <img className="categories-image" src="assets/images/products/product-5.jpg" alt="image_not_found" />
                                      <img className="categories-image-hover-style" src="assets/images/products/product-5.1.jpg" alt="image_not_found" />
                                    </Link>
                                    <div className="quick-view-btn-wrap">
                                      <button className="quick-view-btn" data-bs-toggle="modal" data-bs-target="#product-modal">
                                        <i className="las la-eye" />
                                      </button>
                                    </div>
                                  </div>
                                  <div className="categories-content">
                                    <h4 className="product-sub-title"><a href="#">Fresh Vegetables</a></h4>
                                    <h3 className="product-title"><Link to="single_products">Pink Lady Apples 4 Pack</Link></h3>
                                    <div className="product-price-wrapp">
                                      <span className="product-regular-price">$43.80</span>
                                      <span className="product-price-on-sale">$39.42</span>
                                    </div>
                                  </div>
                                </div>
                                {/* categories-card end */}
                              </div>
                            </div>
                            <div>
                              <div className="categories-card-list">
                                {/* categories-card start */}
                                <div className="categories-card">
                                  <div className="categories-thumb-nail">
                                    <Link to="single_products">
                                      <img className="categories-image" src="assets/images/products/product-3.jpg" alt="image_not_found" />
                                    </Link>
                                    <div className="quick-view-btn-wrap">
                                      <button className="quick-view-btn" data-bs-toggle="modal" data-bs-target="#product-modal">
                                        <i className="las la-eye" />
                                      </button>
                                    </div>
                                  </div>
                                  <div className="categories-content">
                                    <h4 className="product-sub-title"><a href="#">Fresh Vegetables</a></h4>
                                    <h3 className="product-title"><Link to="single_products">Snacking Essentials Cashew</Link></h3>
                                    <div className="product-price-wrapp">
                                      <span className="product-regular-price">$43.80</span>
                                      <span className="product-price-on-sale">$39.42</span>
                                    </div>
                                  </div>
                                </div>
                                {/* categories-card end */}
                              </div>
                              {/* categories card-list end */}
                              {/* categories card-list start */}
                              <div className="categories-card-list">
                                {/* categories-card start */}
                                <div className="categories-card">
                                  <div className="categories-thumb-nail">
                                    <Link to="single_products">
                                      <img className="categories-image" src="assets/images/products/product-2.jpg" alt="image_not_found" />
                                      <img className="categories-image-hover-style" src="assets/images/products/product-2.1.jpg" alt="image_not_found" />
                                    </Link>
                                    <div className="quick-view-btn-wrap">
                                      <button className="quick-view-btn" data-bs-toggle="modal" data-bs-target="#product-modal">
                                        <i className="las la-eye" />
                                      </button>
                                    </div>
                                  </div>
                                  <div className="categories-content">
                                    <h4 className="product-sub-title"><a href="#">Fresh Vegetables</a></h4>
                                    <h3 className="product-title"><Link to="single_products">Apple &amp; Raspberry Juice Drink</Link></h3>
                                    <div className="product-price-wrapp">
                                      <span className="product-regular-price">$43.80</span>
                                      <span className="product-price-on-sale">$39.42</span>
                                    </div>
                                  </div>
                                </div>
                                {/* categories-card end */}
                              </div>
                              {/* categories card-list end */}
                              {/* categories card-list start */}
                              <div className="categories-card-list">
                                {/* categories-card start */}
                                <div className="categories-card">
                                  <div className="categories-thumb-nail">
                                    <Link to="single_products">
                                      <img className="categories-image" src="assets/images/products/product-5.jpg" alt="image_not_found" />
                                      <img className="categories-image-hover-style" src="assets/images/products/product-5.1.jpg" alt="image_not_found" />
                                    </Link>
                                    <div className="quick-view-btn-wrap">
                                      <button className="quick-view-btn" data-bs-toggle="modal" data-bs-target="#product-modal">
                                        <i className="las la-eye" />
                                      </button>
                                    </div>
                                  </div>
                                  <div className="categories-content">
                                    <h4 className="product-sub-title"><a href="#">Fresh Vegetables</a></h4>
                                    <h3 className="product-title"><Link to="single_products">Pink Lady Apples 4 Pack</Link></h3>
                                    <div className="product-price-wrapp">
                                      <span className="product-regular-price">$43.80</span>
                                      <span className="product-price-on-sale">$39.42</span>
                                    </div>
                                  </div>
                                </div>
                                {/* categories-card end */}
                              </div>
                            </div>
                          </Slider>
                          {/* categories card-list end */}
                        </div>

                      </div>
                    </div>
                    {/* swiper navigation */}

                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-3 d-none d-xl-block">
              <a href="shop-grid-4-column.html" className="banner-box-animation">
                <img src="assets/images/banner/sidebar2.jpg" alt="images_not_found" /></a>
            </div>



          </div>

        </div>
      </section>
    </div>
  )
}

export default Milkegg;