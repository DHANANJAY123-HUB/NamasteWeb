import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import 'animate.css';
import { useEffect } from 'react';
import axios from 'axios';
import baseurl from './Baseurl'
import { useState } from 'react';

function Slidere() {

  const CustomPrevArrow = (props) => (
    <button
      className="custom-prev-arrow "
      style={{
        color: "white",
        fontSize: "35px",
        left: "-opx", // Change 'right' to 'left'
        top: "200px",
        padding: "5px",
        borderRadius: "20px",
        zIndex: "1"
      }}
      onClick={props.onClick}
    >
      <i className="las la-angle-left" />
    </button>
  );

  const CustomNextArrow = (props) => (
    <button
      className="custom-next-arrow"
      style={{
        color: "white",
        fontSize: "35px",
        right: "0px", // Change the value to '10px'
        top: "200px",
        padding: "5px",
        borderRadius: "20px",
        zIndex: "0"
      }}
      onClick={props.onClick}
    >
      <i className="las la-angle-right" />
    </button>
  );

  const settings = {
    autoplay: true,
    infinite: true,
    // dots:true,
    speed: 500,
    slidesToShow: 1,
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

  //userState 
  let [showbanner,setshowbanner]=useState()

  // get banner data
  useEffect(() => {
    axios.get(`${baseurl[0].apiurl}banner_list`).then((res) => {
      if (res.data.result) {
      //  console.log(res.data.data)
        setshowbanner(res.data.data)
      }
    })
  }, [])

  return (
    <div style={{ zIndex: "0", }}>
      <div className='maintext' style={{ zIndex: "0", boxShadow: " 0 4px 2px -2px rgba(0, 0, 0, 0.2)" }} >
        <Slider {...settings}>
        {showbanner?.map((items,index)=>{
          return(
            <div >
            <img className='bannerimg' src={`http://103.104.74.215:3014/uploads/${items.banner_image}`} height={"450px"} width={"100%"} alt="" />
          </div>
          )
        })}
        </Slider>
      </div>
    </div>
  )
}

export default Slidere



// import React from 'react'
// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import 'animate.css';
// import baseurl from './Baseurl';



// function Slidere() {

// 	var settings = {
// 		dots: false,
// 		infinite: true,
// 		speed: 500,
// 		slidesToShow: 1,
// 		slidesToScroll: 1,
// 		autoplay: true,
// 	};
// 	return (
// 		<div>
// <section className="hero-section">
	
//   <Slider {...settings}>
   
//       <div className="hero-slide-item slider-height1 swiper-slide animate-style1">
//         <div className="container">
//           <div className="row">
//             <div className="col-12">
//               <div className="hero-slide-content">
//                 <h2 className="title text-white wow delay1 animated animate__animated animate__fadeInLeft">
//                   Healthy Organic
//                 </h2>
//                 <br />
//                 <h2 className="title text-white wow delay2 animated animate__animated animate__fadeInLeft">
//                   Roasted Cashews
//                 </h2>
//                 <br />
//                 <p className="text text-white wow animated animate__animated animate__fadeInLeft">
//                   Free Shipping On Qualified Orders Over $35
//                 </p>
//                 <br />
//                 <a href="shop-grid-3-column.html" className="btn animated btn-light animate__animated animate__fadeInLeft">Shop Now</a>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//       <div className="hero-slide-item slider-height1 swiper-slide animate-style2 slide-bg2">
//         <div className="container">
//           <div className="row">
//             <div className="col-12">
//               <div className="hero-slide-content">
//                 <h2 className="title text-white wow delay1 animated animate__animated animate__fadeInLeft">
//                   Potato Chips
//                 </h2>
//                 <br />
//                 <h2 className="title text-white delay2 animated animate__animated animate__fadeInLeft">
//                   &amp; Peppers
//                 </h2>
//                 <br />
//                 <p className="text text-white animated animate__animated animate__fadeInLeft">
//                   Awesome Single-Serve Snacks For Only $19.95
//                 </p>
//                 <br />
//                 <a href="shop-grid-3-column.html" className="btn animated btn-light animate__animated animate__fadeInLeft">Shop Now</a>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
   
//   </Slider>
// </section>

// 		</div>
// 	)
// }

// export default Slidere

