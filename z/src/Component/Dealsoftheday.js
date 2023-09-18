import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";
import { AiFillLeftCircle } from 'react-icons/ai'
import { AiFillRightCircle } from 'react-icons/ai'
import './Arowbutton.css'
function Dealsoftheday() {
  
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
    <section className="new-arrival-carousel-section section-mb">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12">
            <div className="row align-items-center">
              <div className="col-xl-3 col-md-4 col-12">
                <div className="section-title">
                  <h2 className="title">Deals Of the Day</h2>
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
        <div className="row">
          <div className="col-12 ">
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
                            <Link to="/single_products">
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
                              <a href="single-product.html">
                                lorette Sweet &amp; Crunchy
                              </a>
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
                          <Link to="/single_products">
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
                            <a href="single-product.html">
                              lorette Sweet &amp; Crunchy
                            </a>
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
                        <Link to="/single_products">
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
                          <a href="single-product.html">
                            lorette Sweet &amp; Crunchy
                          </a>
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
                      <Link to="/single_products">
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
                        <a href="single-product.html">
                          lorette Sweet &amp; Crunchy
                        </a>
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
                    <Link to="/single_products">
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
                      <a href="single-product.html">
                        lorette Sweet &amp; Crunchy
                      </a>
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
                  <Link to="/single_products">
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
                    <a href="single-product.html">
                      lorette Sweet &amp; Crunchy
                    </a>
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
                <Link to="/single_products">
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
                  <a href="single-product.html">
                    lorette Sweet &amp; Crunchy
                  </a>
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
                      {/* <li>Color: White</li> */}
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
                    <button className="btn btn-sm btn-dark me-1 mt-3 mt-sm-0" data-bs-dismiss="modal">Continue
                      shopping</button>
                    <button className="btn btn-sm btn-dark mt-3 mt-sm-0"><Link to="/checkout" style={{color : 'white'}}>Proceed to
                        checkout</Link></button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </section>
  );
}

export default Dealsoftheday;










