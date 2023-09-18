import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import 'animate.css';
import { Link } from 'react-router-dom';
import { AiFillLeftCircle } from 'react-icons/ai'
import { AiFillRightCircle } from 'react-icons/ai'
import './Arowbutton.css'
const Newarrivals = () => {

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
      <section className="product-tab-section">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-xl-5 col-md-4 col-12">
              <div className="section-title">
                <h2 className="title">New Arrivals</h2>
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
          <div className="row justify-content-center">
            <div className="col-12">

          
<Slider {...settings}>


<div className="product-tab-card">
<div className='row justify-content-center'> 
  <div className="product-tab-thumb-nail">
    <Link to="/single_products">
      <img className="product-tab-image" src="assets/images/products/product-10.jpg" alt="image_not_found" />
    </Link>
    <div className="quick-view-btn-wrap">
      <button className="quick-view-btn" data-bs-toggle="modal" data-bs-target="#product-modal">
        <i className="las la-eye" />
      </button>
    </div>
  </div>
  <div className="product-tab-content mt-5">
    <h4 className="product-sub-title"><a href="#">Fresh Vegetables</a></h4>
    <h3 className="product-title"><a href="single-product.html">Mini Corn Cobs 625g</a></h3>
    <div className="product-price-wrapp">
      <span className="product-regular-price">$43.80</span>
      <span className="product-price-on-sale">$39.42</span>
    </div>
  </div>
</div>
<div className='row justify-content-center'> 
  <div className="product-tab-thumb-nail">
    <a href="single-product.html">
      <img className="product-tab-image" src="assets/images/products/product-10.jpg" alt="image_not_found" />
    </a>
    <div className="quick-view-btn-wrap">
      <button className="quick-view-btn" data-bs-toggle="modal" data-bs-target="#product-modal">
        <i className="las la-eye" />
      </button>
    </div>
  </div>
  <div className="product-tab-content mt-5">
    <h4 className="product-sub-title"><a href="#">Fresh Vegetables</a></h4>
    <h3 className="product-title"><a href="single-product.html">Mini Corn Cobs 625g</a></h3>
    <div className="product-price-wrapp">
      <span className="product-regular-price">$43.80</span>
      <span className="product-price-on-sale">$39.42</span>
    </div>
  </div>
</div>
</div>

<div className="product-tab-card">
<div className='row justify-content-center'> 
  <div className="product-tab-thumb-nail">
    <Link to="/single_products">
      <img className="product-tab-image" src="assets/images/products/product-10.jpg" alt="image_not_found" />
    </Link>
    <div className="quick-view-btn-wrap">
      <button className="quick-view-btn" data-bs-toggle="modal" data-bs-target="#product-modal">
        <i className="las la-eye" />
      </button>
    </div>
  </div>
  <div className="product-tab-content mt-5">
    <h4 className="product-sub-title"><a href="#">Fresh Vegetables</a></h4>
    <h3 className="product-title"><a href="single-product.html">Mini Corn Cobs 625g</a></h3>
    <div className="product-price-wrapp">
      <span className="product-regular-price">$43.80</span>
      <span className="product-price-on-sale">$39.42</span>
    </div>
  </div>
</div>
<div className='row justify-content-center'> 
  <div className="product-tab-thumb-nail">
    <a href="single-product.html">
      <img className="product-tab-image" src="assets/images/products/product-10.jpg" alt="image_not_found" />
    </a>
    <div className="quick-view-btn-wrap">
      <button className="quick-view-btn" data-bs-toggle="modal" data-bs-target="#product-modal">
        <i className="las la-eye" />
      </button>
    </div>
  </div>
  <div className="product-tab-content mt-5">
    <h4 className="product-sub-title"><a href="#">Fresh Vegetables</a></h4>
    <h3 className="product-title"><a href="single-product.html">Mini Corn Cobs 625g</a></h3>
    <div className="product-price-wrapp">
      <span className="product-regular-price">$43.80</span>
      <span className="product-price-on-sale">$39.42</span>
    </div>
  </div>
</div>
</div>

<div className="product-tab-card">
<div className='row justify-content-center'> 
  <div className="product-tab-thumb-nail">
    <Link to="/single_products">
      <img className="product-tab-image" src="assets/images/products/product-10.jpg" alt="image_not_found" />
    </Link>
    <div className="quick-view-btn-wrap">
      <button className="quick-view-btn" data-bs-toggle="modal" data-bs-target="#product-modal">
        <i className="las la-eye" />
      </button>
    </div>
  </div>
  <div className="product-tab-content mt-5">
    <h4 className="product-sub-title"><a href="#">Fresh Vegetables</a></h4>
    <h3 className="product-title"><a href="single-product.html">Mini Corn Cobs 625g</a></h3>
    <div className="product-price-wrapp">
      <span className="product-regular-price">$43.80</span>
      <span className="product-price-on-sale">$39.42</span>
    </div>
  </div>
</div>
<div className='row justify-content-center'> 
  <div className="product-tab-thumb-nail">
    <a href="single-product.html">
      <img className="product-tab-image" src="assets/images/products/product-10.jpg" alt="image_not_found" />
    </a>
    <div className="quick-view-btn-wrap">
      <button className="quick-view-btn" data-bs-toggle="modal" data-bs-target="#product-modal">
        <i className="las la-eye" />
      </button>
    </div>
  </div>
  <div className="product-tab-content mt-5">
    <h4 className="product-sub-title"><a href="#">Fresh Vegetables</a></h4>
    <h3 className="product-title"><a href="single-product.html">Mini Corn Cobs 625g</a></h3>
    <div className="product-price-wrapp">
      <span className="product-regular-price">$43.80</span>
      <span className="product-price-on-sale">$39.42</span>
    </div>
  </div>
</div>
</div>

<div className="product-tab-card">
<div className='row'> 
  <div className="product-tab-thumb-nail">
    <Link to="/single_products">
      <img className="product-tab-image" src="assets/images/products/product-10.jpg" alt="image_not_found" />
    </Link>
    <div className="quick-view-btn-wrap">
      <button className="quick-view-btn" data-bs-toggle="modal" data-bs-target="#product-modal">
        <i className="las la-eye" />
      </button>
    </div>
  </div>
  <div className="product-tab-content mt-5">
    <h4 className="product-sub-title"><a href="#">Fresh Vegetables</a></h4>
    <h3 className="product-title"><a href="single-product.html">Mini Corn Cobs 625g</a></h3>
    <div className="product-price-wrapp">
      <span className="product-regular-price">$43.80</span>
      <span className="product-price-on-sale">$39.42</span>
    </div>
  </div>
</div>
<div className='row justify-content-center'> 
  <div className="product-tab-thumb-nail">
    <a href="single-product.html">
      <img className="product-tab-image" src="assets/images/products/product-10.jpg" alt="image_not_found" />
    </a>
    <div className="quick-view-btn-wrap">
      <button className="quick-view-btn" data-bs-toggle="modal" data-bs-target="#product-modal">
        <i className="las la-eye" />
      </button>
    </div>
  </div>
  <div className="product-tab-content mt-5">
    <h4 className="product-sub-title"><a href="#">Fresh Vegetables</a></h4>
    <h3 className="product-title"><a href="single-product.html">Mini Corn Cobs 625g</a></h3>
    <div className="product-price-wrapp">
      <span className="product-regular-price">$43.80</span>
      <span className="product-price-on-sale">$39.42</span>
    </div>
  </div>
</div>
</div>

<div className="product-tab-card">
<div className='row justify-content-center'> 
  <div className="product-tab-thumb-nail">
    <Link to="/single_products">
      <img className="product-tab-image" src="assets/images/products/product-10.jpg" alt="image_not_found" />
    </Link>
    <div className="quick-view-btn-wrap">
      <button className="quick-view-btn" data-bs-toggle="modal" data-bs-target="#product-modal">
        <i className="las la-eye" />
      </button>
    </div>
  </div>
  <div className="product-tab-content mt-5">
    <h4 className="product-sub-title"><a href="#">Fresh Vegetables</a></h4>
    <h3 className="product-title"><a href="single-product.html">Mini Corn Cobs 625g</a></h3>
    <div className="product-price-wrapp">
      <span className="product-regular-price">$43.80</span>
      <span className="product-price-on-sale">$39.42</span>
    </div>
  </div>
</div>
<div className='row justify-content-center'> 
  <div className="product-tab-thumb-nail">
    <a href="single-product.html">
      <img className="product-tab-image" src="assets/images/products/product-10.jpg" alt="image_not_found" />
    </a>
    <div className="quick-view-btn-wrap">
      <button className="quick-view-btn" data-bs-toggle="modal" data-bs-target="#product-modal">
        <i className="las la-eye" />
      </button>
    </div>
  </div>
  <div className="product-tab-content mt-5">
    <h4 className="product-sub-title"><a href="#">Fresh Vegetables</a></h4>
    <h3 className="product-title"><a href="single-product.html">Mini Corn Cobs 625g</a></h3>
    <div className="product-price-wrapp">
      <span className="product-regular-price">$43.80</span>
      <span className="product-price-on-sale">$39.42</span>
    </div>
  </div>
</div>
</div>

<div className="product-tab-card">
<div className='row'> 
  <div className="product-tab-thumb-nail">
    <Link to="/single_products">
      <img className="product-tab-image" src="assets/images/products/product-10.jpg" alt="image_not_found" />
    </Link>
    <div className="quick-view-btn-wrap">
      <button className="quick-view-btn" data-bs-toggle="modal" data-bs-target="#product-modal">
        <i className="las la-eye" />
      </button>
    </div>
  </div>
  <div className="product-tab-content mt-5">
    <h4 className="product-sub-title"><a href="#">Fresh Vegetables</a></h4>
    <h3 className="product-title"><a href="single-product.html">Mini Corn Cobs 625g</a></h3>
    <div className="product-price-wrapp">
      <span className="product-regular-price">$43.80</span>
      <span className="product-price-on-sale">$39.42</span>
    </div>
  </div>
</div>
<div className='row justify-content-center'> 
  <div className="product-tab-thumb-nail">
    <a href="single-product.html">
      <img className="product-tab-image" src="assets/images/products/product-10.jpg" alt="image_not_found" />
    </a>
    <div className="quick-view-btn-wrap">
      <button className="quick-view-btn" data-bs-toggle="modal" data-bs-target="#product-modal">
        <i className="las la-eye" />
      </button>
    </div>
  </div>
  <div className="product-tab-content mt-5">
    <h4 className="product-sub-title"><a href="#">Fresh Vegetables</a></h4>
    <h3 className="product-title"><a href="single-product.html">Mini Corn Cobs 625g</a></h3>
    <div className="product-price-wrapp">
      <span className="product-regular-price">$43.80</span>
      <span className="product-price-on-sale">$39.42</span>
    </div>
  </div>
</div>
</div>

<div className="product-tab-card">
<div className='row justify-content-center'> 
  <div className="product-tab-thumb-nail">
    <Link to="/single_products">
      <img className="product-tab-image" src="assets/images/products/product-10.jpg" alt="image_not_found" />
    </Link>
    <div className="quick-view-btn-wrap">
      <button className="quick-view-btn" data-bs-toggle="modal" data-bs-target="#product-modal">
        <i className="las la-eye" />
      </button>
    </div>
  </div>
  <div className="product-tab-content mt-5">
    <h4 className="product-sub-title"><a href="#">Fresh Vegetables</a></h4>
    <h3 className="product-title"><a href="single-product.html">Mini Corn Cobs 625g</a></h3>
    <div className="product-price-wrapp">
      <span className="product-regular-price">$43.80</span>
      <span className="product-price-on-sale">$39.42</span>
    </div>
  </div>
</div>
<div className='row justify-content-center'> 
  <div className="product-tab-thumb-nail">
    <a href="single-product.html">
      <img className="product-tab-image" src="assets/images/products/product-10.jpg" alt="image_not_found" />
    </a>
    <div className="quick-view-btn-wrap">
      <button className="quick-view-btn" data-bs-toggle="modal" data-bs-target="#product-modal">
        <i className="las la-eye" />
      </button>
    </div>
  </div>
  <div className="product-tab-content mt-5">
    <h4 className="product-sub-title"><a href="#">Fresh Vegetables</a></h4>
    <h3 className="product-title"><a href="single-product.html">Mini Corn Cobs 625g</a></h3>
    <div className="product-price-wrapp">
      <span className="product-regular-price">$43.80</span>
      <span className="product-price-on-sale">$39.42</span>
    </div>
  </div>
</div>
</div>

<div className="product-tab-card">
<div className='row justify-content-center'> 
  <div className="product-tab-thumb-nail">
    <Link to="/single_products">
      <img className="product-tab-image" src="assets/images/products/product-10.jpg" alt="image_not_found" />
    </Link>
    <div className="quick-view-btn-wrap">
      <button className="quick-view-btn" data-bs-toggle="modal" data-bs-target="#product-modal">
        <i className="las la-eye" />
      </button>
    </div>
  </div>
  <div className="product-tab-content mt-5">
    <h4 className="product-sub-title"><a href="#">Fresh Vegetables</a></h4>
    <h3 className="product-title"><a href="single-product.html">Mini Corn Cobs 625g</a></h3>
    <div className="product-price-wrapp">
      <span className="product-regular-price">$43.80</span>
      <span className="product-price-on-sale">$39.42</span>
    </div>
  </div>
</div>
<div className='row justify-content-center'> 
  <div className="product-tab-thumb-nail">
    <a href="single-product.html">
      <img className="product-tab-image" src="assets/images/products/product-10.jpg" alt="image_not_found" />
    </a>
    <div className="quick-view-btn-wrap">
      <button className="quick-view-btn" data-bs-toggle="modal" data-bs-target="#product-modal">
        <i className="las la-eye" />
      </button>
    </div>
  </div>
  <div className="product-tab-content mt-5">
    <h4 className="product-sub-title"><a href="#">Fresh Vegetables</a></h4>
    <h3 className="product-title"><a href="single-product.html">Mini Corn Cobs 625g</a></h3>
    <div className="product-price-wrapp">
      <span className="product-regular-price">$43.80</span>
      <span className="product-price-on-sale">$39.42</span>
    </div>
  </div>
</div>
</div>

<div className="product-tab-card">
<div className='row justify-content-center'> 
  <div className="product-tab-thumb-nail">
    <Link to="/single_products">
      <img className="product-tab-image" src="assets/images/products/product-10.jpg" alt="image_not_found" />
    </Link>
    <div className="quick-view-btn-wrap">
      <button className="quick-view-btn" data-bs-toggle="modal" data-bs-target="#product-modal">
        <i className="las la-eye" />
      </button>
    </div>
  </div>
  <div className="product-tab-content mt-5">
    <h4 className="product-sub-title"><a href="#">Fresh Vegetables</a></h4>
    <h3 className="product-title"><a href="single-product.html">Mini Corn Cobs 625g</a></h3>
    <div className="product-price-wrapp">
      <span className="product-regular-price">$43.80</span>
      <span className="product-price-on-sale">$39.42</span>
    </div>
  </div>
</div>
<div className='row justify-content-center'> 
  <div className="product-tab-thumb-nail">
    <a href="single-product.html">
      <img className="product-tab-image" src="assets/images/products/product-10.jpg" alt="image_not_found" />
    </a>
    <div className="quick-view-btn-wrap">
      <button className="quick-view-btn" data-bs-toggle="modal" data-bs-target="#product-modal">
        <i className="las la-eye" />
      </button>
    </div>
  </div>
  <div className="product-tab-content mt-5">
    <h4 className="product-sub-title"><a href="#">Fresh Vegetables</a></h4>
    <h3 className="product-title"><a href="single-product.html">Mini Corn Cobs 625g</a></h3>
    <div className="product-price-wrapp">
      <span className="product-regular-price">$43.80</span>
      <span className="product-price-on-sale">$39.42</span>
    </div>
  </div>
</div>
</div>


</Slider>

              
              

     
            </div>
          </div>
        </div>
      </section>


    </div>
  )
}

export default Newarrivals