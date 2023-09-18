import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import 'animate.css';



function Slidere() {

  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
	autoplay:true,
  };
  return (
    <div>
    <section class="hero-section">
    
   

        <Slider {...settings}>
        <div class="hero-slide-item slider-height1 swiper-slide animate-style1 slide-bg1">
						<div class="container">
							<div class="row">
								<div class="col-12">
									<div class="hero-slide-content">
										<h2 class="title text-white delay1 animated animate__animated animate__fadeInLeft">
											Healthy Organic
										</h2>
										<br />
										<h2 class="title text-white delay2 animated animate__animated animate__fadeInLeft">
											Roasted Cashews
										</h2>
										<br />
										<p class="text text-white animated animate__animated animate__fadeInLeft">
											Free Shipping On Qualified Orders Over $35
										</p>

										<br />
										<a href="shop-grid-3-column.html" class="btn animated btn-light animate__animated animate__fadeInLeft">Shop Now</a>
									</div>
								</div>
							</div>
						</div>
					</div>

					<div class="hero-slide-item slider-height1 swiper-slide animate-style2 slide-bg2">
						<div class="container">
							<div class="row">
								<div class="col-12">
									<div class="hero-slide-content">
										<h2 class="title text-white delay1 animated animate__animated animate__fadeInLeft">
											Potato Chips
										</h2>
										<br />
										<h2 class="title text-white delay2 animated animate__animated animate__fadeInLeft">
											& Peppers
										</h2>
										<br />
										<p class="text text-white animated animate__animated animate__fadeInLeft" >
											Awesome Single-Serve Snacks For Only $19.95
										</p>
										<br />
										<a href="shop-grid-3-column.html" class="btn animated btn-light animate__animated animate__fadeInLeft">Shop Now</a>
									</div>
								</div>
							</div>
						</div>
					</div>
    </Slider>


      

   
  
  </section>

  
  </div>
  )
}

export default Slidere
