import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";
import { AiFillLeftCircle } from 'react-icons/ai'
import { AiFillRightCircle } from 'react-icons/ai'
import './Arowbutton.css'

function Featuredproducts() {
  const CustomPrevArrow = (props) => (
    <button
      className="custom-prev-arrow"
      style={{ backgroundColor: "blue", color: "white", right: "60px",top:"-50px",padding:"5px",borderRadius:"20px" , zIndex:"0" }}
      onClick={props.onClick}
    >
      <AiFillLeftCircle />
    </button>
  );
  
  const CustomNextArrow = (props) => (
    <button
      className="custom-next-arrow"
      style={{ backgroundColor: "green", color: "white", right: "20px" ,top:"-50px",padding:"5px",borderRadius:"20px" , zIndex:"0"}}
      onClick={props.onClick}
    >
      <AiFillRightCircle />
    </button>
  );
  

  const settings = {
    autoplay: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
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


  return (
    <div>
      <section className="featured-carousel-section">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="section-title">
                <h2 className="title">Featured products</h2>
              </div>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-12">
              <div className="">
                <div className="category-slider arrow-slider">
                <Slider {...settings} >
                  <div >
                    <div
                      className="new-arrival-carousel-item swiper-slide swiper-slide-duplicate swiper-slide-duplicate-next"
                      role="group"
                      aria-label="6 / 7"
                      style={{ width: "257.25px", marginRight: "10px" }}
                      data-swiper-slide-index={5}
                    >
                      {/* product-card-list start */}
                      <div
                        className="product-card-list"
                        style={{ marginRight: "-10px" }}
                      >
                        {/* product-card start */}
                        <div className="product-card">
                          <span className="badge bg-success product-badge">
                            new
                          </span>
                          <div className="product-thumb-nail">
                            <Link to="single_products">
                              <img
                                className="product-image"
                                src="assets/images/products/product-11.jpg"
                                alt="image_not_found"
                              />
                              <img
                                className="product-image-hover-style"
                                src="assets/images/products/product-11.1.jpg"
                                alt="image_not_found"
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
                                  <i className="las la-eye" />
                                </button>
                              </li>
                            </ul>
                          </div>
                          <div className="product-content">
                            <h4 className="product-sub-title">
                              <a href="#">Fresh Vegetables</a>
                            </h4>
                            <h3 className="product-title">
                              <Link to="/single_products">
                                lorette Sweet &amp; Crunchy
                              </Link>
                            </h3>
                            <div className="product-price-wrapp">
                              <span className="product-price-on-sale">
                                $39.42
                              </span>
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
                  </div>
                  <div >
                  <div
                    className="new-arrival-carousel-item swiper-slide swiper-slide-duplicate swiper-slide-duplicate-next"
                    role="group"
                    aria-label="6 / 7"
                    style={{ width: "257.25px", marginRight: "10px" }}
                    data-swiper-slide-index={5}
                  >
                    {/* product-card-list start */}
                    <div
                      className="product-card-list"
                      style={{ marginRight: "-10px" }}
                    >
                      {/* product-card start */}
                      <div className="product-card">
                        <span className="badge bg-success product-badge">
                          new
                        </span>
                        <div className="product-thumb-nail">
                          <Link to="single_products">
                            <img
                              className="product-image"
                              src="assets/images/products/product-11.jpg"
                              alt="image_not_found"
                            />
                            <img
                              className="product-image-hover-style"
                              src="assets/images/products/product-11.1.jpg"
                              alt="image_not_found"
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
                                <i className="las la-eye" />
                              </button>
                            </li>
                          </ul>
                        </div>
                        <div className="product-content">
                          <h4 className="product-sub-title">
                            <a href="#">Fresh Vegetables</a>
                          </h4>
                          <h3 className="product-title">
                            <Link to="/single_products">
                              lorette Sweet &amp; Crunchy
                            </Link>
                          </h3>
                          <div className="product-price-wrapp">
                            <span className="product-price-on-sale">
                              $39.42
                            </span>
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
                </div>
                <div >
                <div
                  className="new-arrival-carousel-item swiper-slide swiper-slide-duplicate swiper-slide-duplicate-next"
                  role="group"
                  aria-label="6 / 7"
                  style={{ width: "257.25px", marginRight: "10px" }}
                  data-swiper-slide-index={5}
                >
                  {/* product-card-list start */}
                  <div
                    className="product-card-list"
                    style={{ marginRight: "-10px" }}
                  >
                    {/* product-card start */}
                    <div className="product-card">
                      <span className="badge bg-success product-badge">
                        new
                      </span>
                      <div className="product-thumb-nail">
                        <Link to="single_products">
                          <img
                            className="product-image"
                            src="assets/images/products/product-11.jpg"
                            alt="image_not_found"
                          />
                          <img
                            className="product-image-hover-style"
                            src="assets/images/products/product-11.1.jpg"
                            alt="image_not_found"
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
                              <i className="las la-eye" />
                            </button>
                          </li>
                        </ul>
                      </div>
                      <div className="product-content">
                        <h4 className="product-sub-title">
                          <a href="#">Fresh Vegetables</a>
                        </h4>
                        <h3 className="product-title">
                          <Link to="/single_products">
                            lorette Sweet &amp; Crunchy
                          </Link>
                        </h3>
                        <div className="product-price-wrapp">
                          <span className="product-price-on-sale">
                            $39.42
                          </span>
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
              </div>
              <div >
              <div
                className="new-arrival-carousel-item swiper-slide swiper-slide-duplicate swiper-slide-duplicate-next"
                role="group"
                aria-label="6 / 7"
                style={{ width: "257.25px", marginRight: "10px" }}
                data-swiper-slide-index={5}
              >
                {/* product-card-list start */}
                <div
                  className="product-card-list"
                  style={{ marginRight: "-10px" }}
                >
                  {/* product-card start */}
                  <div className="product-card">
                    <span className="badge bg-success product-badge">
                      new
                    </span>
                    <div className="product-thumb-nail">
                      <Link to="single_products">
                        <img
                          className="product-image"
                          src="assets/images/products/product-11.jpg"
                          alt="image_not_found"
                        />
                        <img
                          className="product-image-hover-style"
                          src="assets/images/products/product-11.1.jpg"
                          alt="image_not_found"
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
                            <i className="las la-eye" />
                          </button>
                        </li>
                      </ul>
                    </div>
                    <div className="product-content">
                      <h4 className="product-sub-title">
                        <a href="#">Fresh Vegetables</a>
                      </h4>
                      <h3 className="product-title">
                        <Link to="/single_products">
                          lorette Sweet &amp; Crunchy
                        </Link>
                      </h3>
                      <div className="product-price-wrapp">
                        <span className="product-price-on-sale">
                          $39.42
                        </span>
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
            </div>
            <div >
            <div
              className="new-arrival-carousel-item swiper-slide swiper-slide-duplicate swiper-slide-duplicate-next"
              role="group"
              aria-label="6 / 7"
              style={{ width: "257.25px", marginRight: "10px" }}
              data-swiper-slide-index={5}
            >
              {/* product-card-list start */}
              <div
                className="product-card-list"
                style={{ marginRight: "-10px" }}
              >
                {/* product-card start */}
                <div className="product-card">
                  <span className="badge bg-success product-badge">
                    new
                  </span>
                  <div className="product-thumb-nail">
                    <Link to="single_products">
                      <img
                        className="product-image"
                        src="assets/images/products/product-11.jpg"
                        alt="image_not_found"
                      />
                      <img
                        className="product-image-hover-style"
                        src="assets/images/products/product-11.1.jpg"
                        alt="image_not_found"
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
                          <i className="las la-eye" />
                        </button>
                      </li>
                    </ul>
                  </div>
                  <div className="product-content">
                    <h4 className="product-sub-title">
                      <a href="#">Fresh Vegetables</a>
                    </h4>
                    <h3 className="product-title">
                      <Link to="/single_products">
                        lorette Sweet &amp; Crunchy
                      </Link>
                    </h3>
                    <div className="product-price-wrapp">
                      <span className="product-price-on-sale">
                        $39.42
                      </span>
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
          </div>
          <div >
          <div
            className="new-arrival-carousel-item swiper-slide swiper-slide-duplicate swiper-slide-duplicate-next"
            role="group"
            aria-label="6 / 7"
            style={{ width: "257.25px", marginRight: "10px" }}
            data-swiper-slide-index={5}
          >
            {/* product-card-list start */}
            <div
              className="product-card-list"
              style={{ marginRight: "-10px" }}
            >
              {/* product-card start */}
              <div className="product-card">
                <span className="badge bg-success product-badge">
                  new
                </span>
                <div className="product-thumb-nail">
                  <Link to="single_products">
                    <img
                      className="product-image"
                      src="assets/images/products/product-11.jpg"
                      alt="image_not_found"
                    />
                    <img
                      className="product-image-hover-style"
                      src="assets/images/products/product-11.1.jpg"
                      alt="image_not_found"
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
                        <i className="las la-eye" />
                      </button>
                    </li>
                  </ul>
                </div>
                <div className="product-content">
                  <h4 className="product-sub-title">
                    <a href="#">Fresh Vegetables</a>
                  </h4>
                  <h3 className="product-title">
                    <Link to="/single_products">
                      lorette Sweet &amp; Crunchy
                    </Link>
                  </h3>
                  <div className="product-price-wrapp">
                    <span className="product-price-on-sale">
                      $39.42
                    </span>
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
        </div>
           <div >
                    <div
                      className="new-arrival-carousel-item swiper-slide swiper-slide-duplicate swiper-slide-duplicate-next"
                      role="group"
                      aria-label="6 / 7"
                      style={{ width: "257.25px", marginRight: "10px" }}
                      data-swiper-slide-index={5}
                    >
                      {/* product-card-list start */}
                      <div
                        className="product-card-list"
                        style={{ marginRight: "-10px" }}
                      >
                        {/* product-card start */}
                        <div className="product-card">
                          <span className="badge bg-success product-badge">
                            new
                          </span>
                          <div className="product-thumb-nail">
                            <Link to="single_products">
                              <img
                                className="product-image"
                                src="assets/images/products/product-11.jpg"
                                alt="image_not_found"
                              />
                              <img
                                className="product-image-hover-style"
                                src="assets/images/products/product-11.1.jpg"
                                alt="image_not_found"
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
                                  <i className="las la-eye" />
                                </button>
                              </li>
                            </ul>
                          </div>
                          <div className="product-content">
                            <h4 className="product-sub-title">
                              <a href="#">Fresh Vegetables</a>
                            </h4>
                            <h3 className="product-title">
                              <Link to="/single_products">
                                lorette Sweet &amp; Crunchy
                              </Link>
                            </h3>
                            <div className="product-price-wrapp">
                              <span className="product-price-on-sale">
                                $39.42
                              </span>
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
                  </div>
               

                </Slider>
                </div>
                {/* swiper navigation */}
              
              </div>
            </div>
          </div>
        </div>
      </section>
      
    </div>
  )
}

export default Featuredproducts
