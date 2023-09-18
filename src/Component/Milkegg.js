import React, { useEffect, useState } from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from 'react-router-dom';
import axios from 'axios';
import baseurl from './Baseurl'
import secureLocalStorage from "react-secure-storage";


function Milkegg() {

  const NextArrow = (props) => (
    <button className="arrow next-arrow " onClick={props.onClick}>
      <i className="las la-angle-right" style={{ color: "black", border: "1px solid", borderRadius: "20px", zIndex: "0" }} />
    </button>

  );

  const PrevArrow = (props) => (
    <button className="arrow prev-arrow " onClick={props.onClick}>
      <i className="las la-angle-left" style={{ color: "black", border: "1px solid", borderRadius: "20px", zIndex: "0" }} />
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


  //useState
  let [category_product_list, setcategory_product_list] = useState([])

  // get data category list fruits
  useEffect(() => {
    axios.get(`http://103.104.74.215:3014/website/category_product_list`).then((res) => {
      if (res.data.result) {
        console.log(res.data.data[0].products[0].product_name, "category_product_list")
        setcategory_product_list(res.data.data)
      }
    })

    // console.log(category_product_list[6])
    console.log(category_product_list[6]?.products[0])
  }, [category_product_list])


  // const settings = {
  //   dots: true,
  //   infinite: true,
  //   speed: 500,
  //   slidesToShow: 3,
  //   slidesToScroll: 1,
  //   vertical: false, // Set vertical to false to slide right and left
  //   verticalSwiping: false, // Disable vertical swiping
  //   swipeToSlide: true, // Enable swipe to slide
  // };

  return (
    <div>
      <section className="categories-section section-mb">
        <div className="container">
          <div className="row">
            <div className="col-xl-9">
              <div className="row mb-n7">

                <div className="col-lg-4 mb-7 " style={{ zIndex: "0" }}>
                  <div className="section-title categories">
                    <h2 className="title">{category_product_list[0]?.category_name}</h2>
                  </div>

                  <div className="categories-carousel">
                    <div className="swiper-container">
                      <div className="swiper-wrapper">

                        <div className="categories-carousel-item swiper-slide">


                          <Slider {...setting3}>

                            <div>

                              <div className="categories-card-list">
                                {/* categories-card start */}
                                <div className="categories-card">
                                  <div className="categories-thumb-nail">
                                    <Link to="/single_products">
                                      <img className="categories-image" height={"80px"} width={"90%"} src={`http://103.104.74.215:3014/uploads/${category_product_list[6]?.products[0]?.product_image}`} alt="image_not_found" />
                                    </Link>
                                    <div className="quick-view-btn-wrap">
                                      <button className="quick-view-btn" data-bs-toggle="modal" data-bs-target="#product-modal">
                                        <i className="las la-eye" />
                                      </button>
                                    </div>
                                  </div>
                                  <div className="categories-content">
                                    <h4 className="product-sub-title"><a href="#">Fresh Vegetables</a></h4>
                                    <h3 className="product-title"><Link to="single_products">{category_product_list[6]?.products[0]?.product_name}</Link></h3>
                                    <div className="product-price-wrapp">
                                      <span className="product-regular-price">€{category_product_list[6]?.products[0]?.mrp}</span>
                                      <span className="product-price-on-sale">€{category_product_list[6]?.products[0]?.price}</span>
                                    </div>
                                  </div>
                                </div>
                                {/* categories-card end */}
                              </div>

                              <div className="categories-card-list">
                                {/* categories-card start */}
                                <div className="categories-card">
                                  <div className="categories-thumb-nail">
                                    <Link to="/single_products">
                                      <img className="categories-image" height={"80px"} width={"90%"} src={`http://103.104.74.215:3014/uploads/${category_product_list[6]?.products[0]?.product_image}`} alt="image_not_found" />
                                    </Link>
                                    <div className="quick-view-btn-wrap">
                                      <button className="quick-view-btn" data-bs-toggle="modal" data-bs-target="#product-modal">
                                        <i className="las la-eye" />
                                      </button>
                                    </div>
                                  </div>
                                  <div className="categories-content">
                                    <h4 className="product-sub-title"><a href="#">Fresh Vegetables</a></h4>
                                    <h3 className="product-title"><Link to="single_products">{category_product_list[6]?.products[0]?.product_name}</Link></h3>
                                    <div className="product-price-wrapp">
                                      <span className="product-regular-price">€{category_product_list[6]?.products[0]?.mrp}</span>
                                      <span className="product-price-on-sale">€{category_product_list[6]?.products[0]?.price}</span>
                                    </div>
                                  </div>
                                </div>
                                {/* categories-card end */}
                              </div>

                              <div className="categories-card-list">
                                {/* categories-card start */}
                                <div className="categories-card">
                                  <div className="categories-thumb-nail">
                                    <Link to="/single_products">
                                      <img className="categories-image" height={"80px"} width={"90%"} src={`http://103.104.74.215:3014/uploads/${category_product_list[6]?.products[0]?.product_image}`} alt="image_not_found" />
                                    </Link>
                                    <div className="quick-view-btn-wrap">
                                      <button className="quick-view-btn" data-bs-toggle="modal" data-bs-target="#product-modal">
                                        <i className="las la-eye" />
                                      </button>
                                    </div>
                                  </div>
                                  <div className="categories-content">
                                    <h4 className="product-sub-title"><a href="#">Fresh Vegetables</a></h4>
                                    <h3 className="product-title"><Link to="single_products">{category_product_list[6]?.products[0]?.product_name}</Link></h3>
                                    <div className="product-price-wrapp">
                                      <span className="product-regular-price">€{category_product_list[6]?.products[0]?.mrp}</span>
                                      <span className="product-price-on-sale">€{category_product_list[6]?.products[0]?.price}</span>
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
                                    <Link to="/single_products">
                                      <img className="categories-image" height={"80px"} width={"90%"} src={`http://103.104.74.215:3014/uploads/${category_product_list[6]?.products[0]?.product_image}`} alt="image_not_found" />
                                    </Link>
                                    <div className="quick-view-btn-wrap">
                                      <button className="quick-view-btn" data-bs-toggle="modal" data-bs-target="#product-modal">
                                        <i className="las la-eye" />
                                      </button>
                                    </div>
                                  </div>
                                  <div className="categories-content">
                                    <h4 className="product-sub-title"><a href="#">Fresh Vegetables</a></h4>
                                    <h3 className="product-title"><Link to="single_products">{category_product_list[6]?.products[0]?.product_name}</Link></h3>
                                    <div className="product-price-wrapp">
                                      <span className="product-regular-price">€{category_product_list[6]?.products[0]?.mrp}</span>
                                      <span className="product-price-on-sale">€{category_product_list[6]?.products[0]?.price}</span>
                                    </div>
                                  </div>
                                </div>
                                {/* categories-card end */}
                              </div>

                              <div className="categories-card-list">
                                {/* categories-card start */}
                                <div className="categories-card">
                                  <div className="categories-thumb-nail">
                                    <Link to="/single_products">
                                      <img className="categories-image" height={"80px"} width={"90%"} src={`http://103.104.74.215:3014/uploads/${category_product_list[6]?.products[0]?.product_image}`} alt="image_not_found" />
                                    </Link>
                                    <div className="quick-view-btn-wrap">
                                      <button className="quick-view-btn" data-bs-toggle="modal" data-bs-target="#product-modal">
                                        <i className="las la-eye" />
                                      </button>
                                    </div>
                                  </div>
                                  <div className="categories-content">
                                    <h4 className="product-sub-title"><a href="#">Fresh Vegetables</a></h4>
                                    <h3 className="product-title"><Link to="single_products">{category_product_list[6]?.products[0]?.product_name}</Link></h3>
                                    <div className="product-price-wrapp">
                                      <span className="product-regular-price">€{category_product_list[6]?.products[0]?.mrp}</span>
                                      <span className="product-price-on-sale">€{category_product_list[6]?.products[0]?.price}</span>
                                    </div>
                                  </div>
                                </div>
                                {/* categories-card end */}
                              </div>

                              <div className="categories-card-list">
                                {/* categories-card start */}
                                <div className="categories-card">
                                  <div className="categories-thumb-nail">
                                    <Link to="/single_products">
                                      <img className="categories-image" height={"80px"} width={"90%"} src={`http://103.104.74.215:3014/uploads/${category_product_list[6]?.products[0]?.product_image}`} alt="image_not_found" />
                                    </Link>
                                    <div className="quick-view-btn-wrap">
                                      <button className="quick-view-btn" data-bs-toggle="modal" data-bs-target="#product-modal">
                                        <i className="las la-eye" />
                                      </button>
                                    </div>
                                  </div>
                                  <div className="categories-content">
                                    <h4 className="product-sub-title"><a href="#">Fresh Vegetables</a></h4>
                                    <h3 className="product-title"><Link to="single_products">{category_product_list[6]?.products[0]?.product_name}</Link></h3>
                                    <div className="product-price-wrapp">
                                      <span className="product-regular-price">€{category_product_list[6]?.products[0]?.mrp}</span>
                                      <span className="product-price-on-sale">€{category_product_list[6]?.products[0]?.price}</span>
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



                  </div>
                </div>
                <div className="col-lg-4 mb-7 " style={{ zIndex: "0" }}>
                  <div className="section-title categories">
                    <h2 className="title">{category_product_list[1]?.category_name}</h2>
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
                                    <Link to="/single_products">
                                      <img className="categories-image" height={"80px"} width={"90%"} src={`http://103.104.74.215:3014/uploads/${category_product_list[6]?.products[0]?.product_image}`} alt="image_not_found" />
                                    </Link>
                                    <div className="quick-view-btn-wrap">
                                      <button className="quick-view-btn" data-bs-toggle="modal" data-bs-target="#product-modal">
                                        <i className="las la-eye" />
                                      </button>
                                    </div>
                                  </div>
                                  <div className="categories-content">
                                    <h4 className="product-sub-title"><a href="#">Fresh Vegetables</a></h4>
                                    <h3 className="product-title"><Link to="single_products">{category_product_list[6]?.products[0]?.product_name}</Link></h3>
                                    <div className="product-price-wrapp">
                                      <span className="product-regular-price">€{category_product_list[6]?.products[0]?.mrp}</span>
                                      <span className="product-price-on-sale">€{category_product_list[6]?.products[0]?.price}</span>
                                    </div>
                                  </div>
                                </div>
                                {/* categories-card end */}
                              </div>

                              <div className="categories-card-list">
                                {/* categories-card start */}
                                <div className="categories-card">
                                  <div className="categories-thumb-nail">
                                    <Link to="/single_products">
                                      <img className="categories-image" height={"80px"} width={"90%"} src={`http://103.104.74.215:3014/uploads/${category_product_list[6]?.products[0]?.product_image}`} alt="image_not_found" />
                                    </Link>
                                    <div className="quick-view-btn-wrap">
                                      <button className="quick-view-btn" data-bs-toggle="modal" data-bs-target="#product-modal">
                                        <i className="las la-eye" />
                                      </button>
                                    </div>
                                  </div>
                                  <div className="categories-content">
                                    <h4 className="product-sub-title"><a href="#">Fresh Vegetables</a></h4>
                                    <h3 className="product-title"><Link to="single_products">{category_product_list[6]?.products[0]?.product_name}</Link></h3>
                                    <div className="product-price-wrapp">
                                      <span className="product-regular-price">€{category_product_list[6]?.products[0]?.mrp}</span>
                                      <span className="product-price-on-sale">€{category_product_list[6]?.products[0]?.price}</span>
                                    </div>
                                  </div>
                                </div>
                                {/* categories-card end */}
                              </div>

                              <div className="categories-card-list">
                                {/* categories-card start */}
                                <div className="categories-card">
                                  <div className="categories-thumb-nail">
                                    <Link to="/single_products">
                                      <img className="categories-image" height={"80px"} width={"90%"} src={`http://103.104.74.215:3014/uploads/${category_product_list[6]?.products[0]?.product_image}`} alt="image_not_found" />
                                    </Link>
                                    <div className="quick-view-btn-wrap">
                                      <button className="quick-view-btn" data-bs-toggle="modal" data-bs-target="#product-modal">
                                        <i className="las la-eye" />
                                      </button>
                                    </div>
                                  </div>
                                  <div className="categories-content">
                                    <h4 className="product-sub-title"><a href="#">Fresh Vegetables</a></h4>
                                    <h3 className="product-title"><Link to="single_products">{category_product_list[6]?.products[0]?.product_name}</Link></h3>
                                    <div className="product-price-wrapp">
                                      <span className="product-regular-price">€{category_product_list[6]?.products[0]?.mrp}</span>
                                      <span className="product-price-on-sale">€{category_product_list[6]?.products[0]?.price}</span>
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
                                    <Link to="/single_products">
                                      <img className="categories-image" height={"80px"} width={"90%"} src={`http://103.104.74.215:3014/uploads/${category_product_list[6]?.products[0]?.product_image}`} alt="image_not_found" />
                                    </Link>
                                    <div className="quick-view-btn-wrap">
                                      <button className="quick-view-btn" data-bs-toggle="modal" data-bs-target="#product-modal">
                                        <i className="las la-eye" />
                                      </button>
                                    </div>
                                  </div>
                                  <div className="categories-content">
                                    <h4 className="product-sub-title"><a href="#">Fresh Vegetables</a></h4>
                                    <h3 className="product-title"><Link to="single_products">{category_product_list[6]?.products[0]?.product_name}</Link></h3>
                                    <div className="product-price-wrapp">
                                      <span className="product-regular-price">€{category_product_list[6]?.products[0]?.mrp}</span>
                                      <span className="product-price-on-sale">€{category_product_list[6]?.products[0]?.price}</span>
                                    </div>
                                  </div>
                                </div>
                                {/* categories-card end */}
                              </div>

                              <div className="categories-card-list">
                                {/* categories-card start */}
                                <div className="categories-card">
                                  <div className="categories-thumb-nail">
                                    <Link to="/single_products">
                                      <img className="categories-image" height={"80px"} width={"90%"} src={`http://103.104.74.215:3014/uploads/${category_product_list[6]?.products[0]?.product_image}`} alt="image_not_found" />
                                    </Link>
                                    <div className="quick-view-btn-wrap">
                                      <button className="quick-view-btn" data-bs-toggle="modal" data-bs-target="#product-modal">
                                        <i className="las la-eye" />
                                      </button>
                                    </div>
                                  </div>
                                  <div className="categories-content">
                                    <h4 className="product-sub-title"><a href="#">Fresh Vegetables</a></h4>
                                    <h3 className="product-title"><Link to="single_products">{category_product_list[6]?.products[0]?.product_name}</Link></h3>
                                    <div className="product-price-wrapp">
                                      <span className="product-regular-price">€{category_product_list[6]?.products[0]?.mrp}</span>
                                      <span className="product-price-on-sale">€{category_product_list[6]?.products[0]?.price}</span>
                                    </div>
                                  </div>
                                </div>
                                {/* categories-card end */}
                              </div>

                              <div className="categories-card-list">
                                {/* categories-card start */}
                                <div className="categories-card">
                                  <div className="categories-thumb-nail">
                                    <Link to="/single_products">
                                      <img className="categories-image" height={"80px"} width={"90%"} src={`http://103.104.74.215:3014/uploads/${category_product_list[6]?.products[0]?.product_image}`} alt="image_not_found" />
                                    </Link>
                                    <div className="quick-view-btn-wrap">
                                      <button className="quick-view-btn" data-bs-toggle="modal" data-bs-target="#product-modal">
                                        <i className="las la-eye" />
                                      </button>
                                    </div>
                                  </div>
                                  <div className="categories-content">
                                    <h4 className="product-sub-title"><a href="#">Fresh Vegetables</a></h4>
                                    <h3 className="product-title"><Link to="single_products">{category_product_list[6]?.products[0]?.product_name}</Link></h3>
                                    <div className="product-price-wrapp">
                                      <span className="product-regular-price">€{category_product_list[6]?.products[0]?.mrp}</span>
                                      <span className="product-price-on-sale">€{category_product_list[6]?.products[0]?.price}</span>
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
                    <h2 className="title">{category_product_list[2]?.category_name}</h2>
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
                                    <Link to="/single_products">
                                      <img className="categories-image" height={"80px"} width={"90%"} src={`http://103.104.74.215:3014/uploads/${category_product_list[6]?.products[0]?.product_image}`} alt="image_not_found" />
                                    </Link>
                                    <div className="quick-view-btn-wrap">
                                      <button className="quick-view-btn" data-bs-toggle="modal" data-bs-target="#product-modal">
                                        <i className="las la-eye" />
                                      </button>
                                    </div>
                                  </div>
                                  <div className="categories-content">
                                    <h4 className="product-sub-title"><a href="#">Fresh Vegetables</a></h4>
                                    <h3 className="product-title"><Link to="single_products">{category_product_list[6]?.products[0]?.product_name}</Link></h3>
                                    <div className="product-price-wrapp">
                                      <span className="product-regular-price">€{category_product_list[6]?.products[0]?.mrp}</span>
                                      <span className="product-price-on-sale">€{category_product_list[6]?.products[0]?.price}</span>
                                    </div>
                                  </div>
                                </div>
                                {/* categories-card end */}
                              </div>

                              <div className="categories-card-list">
                                {/* categories-card start */}
                                <div className="categories-card">
                                  <div className="categories-thumb-nail">
                                    <Link to="/single_products">
                                      <img className="categories-image" height={"80px"} width={"90%"} src={`http://103.104.74.215:3014/uploads/${category_product_list[6]?.products[0]?.product_image}`} alt="image_not_found" />
                                    </Link>
                                    <div className="quick-view-btn-wrap">
                                      <button className="quick-view-btn" data-bs-toggle="modal" data-bs-target="#product-modal">
                                        <i className="las la-eye" />
                                      </button>
                                    </div>
                                  </div>
                                  <div className="categories-content">
                                    <h4 className="product-sub-title"><a href="#">Fresh Vegetables</a></h4>
                                    <h3 className="product-title"><Link to="single_products">{category_product_list[6]?.products[0]?.product_name}</Link></h3>
                                    <div className="product-price-wrapp">
                                      <span className="product-regular-price">€{category_product_list[6]?.products[0]?.mrp}</span>
                                      <span className="product-price-on-sale">€{category_product_list[6]?.products[0]?.price}</span>
                                    </div>
                                  </div>
                                </div>
                                {/* categories-card end */}
                              </div>

                              <div className="categories-card-list">
                                {/* categories-card start */}
                                <div className="categories-card">
                                  <div className="categories-thumb-nail">
                                    <Link to="/single_products">
                                      <img className="categories-image" height={"80px"} width={"90%"} src={`http://103.104.74.215:3014/uploads/${category_product_list[6]?.products[0]?.product_image}`} alt="image_not_found" />
                                    </Link>
                                    <div className="quick-view-btn-wrap">
                                      <button className="quick-view-btn" data-bs-toggle="modal" data-bs-target="#product-modal">
                                        <i className="las la-eye" />
                                      </button>
                                    </div>
                                  </div>
                                  <div className="categories-content">
                                    <h4 className="product-sub-title"><a href="#">Fresh Vegetables</a></h4>
                                    <h3 className="product-title"><Link to="single_products">{category_product_list[6]?.products[0]?.product_name}</Link></h3>
                                    <div className="product-price-wrapp">
                                      <span className="product-regular-price">€{category_product_list[6]?.products[0]?.mrp}</span>
                                      <span className="product-price-on-sale">€{category_product_list[6]?.products[0]?.price}</span>
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
                                    <Link to="/single_products">
                                      <img className="categories-image" height={"80px"} width={"90%"} src={`http://103.104.74.215:3014/uploads/${category_product_list[6]?.products[0]?.product_image}`} alt="image_not_found" />
                                    </Link>
                                    <div className="quick-view-btn-wrap">
                                      <button className="quick-view-btn" data-bs-toggle="modal" data-bs-target="#product-modal">
                                        <i className="las la-eye" />
                                      </button>
                                    </div>
                                  </div>
                                  <div className="categories-content">
                                    <h4 className="product-sub-title"><a href="#">Fresh Vegetables</a></h4>
                                    <h3 className="product-title"><Link to="single_products">{category_product_list[6]?.products[0]?.product_name}</Link></h3>
                                    <div className="product-price-wrapp">
                                      <span className="product-regular-price">€{category_product_list[6]?.products[0]?.mrp}</span>
                                      <span className="product-price-on-sale">€{category_product_list[6]?.products[0]?.price}</span>
                                    </div>
                                  </div>
                                </div>
                                {/* categories-card end */}
                              </div>

                              <div className="categories-card-list">
                                {/* categories-card start */}
                                <div className="categories-card">
                                  <div className="categories-thumb-nail">
                                    <Link to="/single_products">
                                      <img className="categories-image" height={"80px"} width={"90%"} src={`http://103.104.74.215:3014/uploads/${category_product_list[6]?.products[0]?.product_image}`} alt="image_not_found" />
                                    </Link>
                                    <div className="quick-view-btn-wrap">
                                      <button className="quick-view-btn" data-bs-toggle="modal" data-bs-target="#product-modal">
                                        <i className="las la-eye" />
                                      </button>
                                    </div>
                                  </div>
                                  <div className="categories-content">
                                    <h4 className="product-sub-title"><a href="#">Fresh Vegetables</a></h4>
                                    <h3 className="product-title"><Link to="single_products">{category_product_list[6]?.products[0]?.product_name}</Link></h3>
                                    <div className="product-price-wrapp">
                                      <span className="product-regular-price">€{category_product_list[6]?.products[0]?.mrp}</span>
                                      <span className="product-price-on-sale">€{category_product_list[6]?.products[0]?.price}</span>
                                    </div>
                                  </div>
                                </div>
                                {/* categories-card end */}
                              </div>

                              <div className="categories-card-list">
                                {/* categories-card start */}
                                <div className="categories-card">
                                  <div className="categories-thumb-nail">
                                    <Link to="/single_products">
                                      <img className="categories-image" height={"80px"} width={"90%"} src={`http://103.104.74.215:3014/uploads/${category_product_list[6]?.products[0]?.product_image}`} alt="image_not_found" />
                                    </Link>
                                    <div className="quick-view-btn-wrap">
                                      <button className="quick-view-btn" data-bs-toggle="modal" data-bs-target="#product-modal">
                                        <i className="las la-eye" />
                                      </button>
                                    </div>
                                  </div>
                                  <div className="categories-content">
                                    <h4 className="product-sub-title"><a href="#">Fresh Vegetables</a></h4>
                                    <h3 className="product-title"><Link to="single_products">{category_product_list[6]?.products[0]?.product_name}</Link></h3>
                                    <div className="product-price-wrapp">
                                      <span className="product-regular-price">€{category_product_list[6]?.products[0]?.mrp}</span>
                                      <span className="product-price-on-sale">€{category_product_list[6]?.products[0]?.price}</span>
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