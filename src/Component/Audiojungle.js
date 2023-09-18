import React from 'react'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
function Audiojungle() {

    const settings = {
             dots: false,
             infinite: true,
            speed: 600,
            slidesToShow: 4,
             slidesToScroll: 1,
             autoplay: false,
           };
    return (

        <div className="brand-carousel-section section-mt section-mb">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div className="brand-carousel">
                  <div className="swiper-container swiper-container-initialized swiper-container-horizontal" style={{zIndex:"0"}}>
                    



                      <Slider {...settings}>


                      <div className="brand-carousel-item swiper-slide swiper-slide-duplicate" role="group" aria-label="8 / 14" style={{width: '262.25px', marginRight: '10px'}} data-swiper-slide-index={3}>
                        <a href="#">
                          <img src="assets/images/brand/4.jpg" alt="images_not_found" />
                        </a>
                      </div>
                      <div className="brand-carousel-item swiper-slide swiper-slide-duplicate" role="group" aria-label="9 / 14" style={{width: '262.25px', marginRight: '10px'}} data-swiper-slide-index={4}>
                        <a href="#">
                          <img src="assets/images/brand/5.jpg" alt="images_not_found" />
                        </a>
                      </div>
                      <div className="brand-carousel-item swiper-slide swiper-slide-duplicate" role="group" aria-label="10 / 14" style={{width: '262.25px', marginRight: '10px'}} data-swiper-slide-index={5}>
                        <a href="#">
                          <img src="assets/images/brand/6.jpg" alt="images_not_found" />
                        </a>
                      </div>
                      {/* swiper-slide start */}
                      <div className="brand-carousel-item swiper-slide swiper-slide-prev" role="group" aria-label="5 / 14" style={{width: '262.25px', marginRight: '10px'}} data-swiper-slide-index={0}>
                        <a href="#">
                          <img src="assets/images/brand/1.jpg" alt="images_not_found" />
                        </a>
                      </div>
                      {/* swiper-slide end*/}
                      {/* swiper-slide start */}
                      <div className="brand-carousel-item swiper-slide swiper-slide-active" role="group" aria-label="6 / 14" style={{width: '262.25px', marginRight: '10px'}} data-swiper-slide-index={1}>
                        <a href="#">
                          <img src="assets/images/brand/2.jpg" alt="images_not_found" />
                        </a>
                      </div>
                      {/* swiper-slide end*/}
                      {/* swiper-slide start */}
                      <div className="brand-carousel-item swiper-slide swiper-slide-next" role="group" aria-label="7 / 14" style={{width: '262.25px', marginRight: '10px'}} data-swiper-slide-index={2}>
                        <a href="#">
                          <img src="assets/images/brand/3.jpg" alt="images_not_found" />
                        </a>
                      </div>
                      {/* swiper-slide end*/}
                      {/* swiper-slide start */}
                      <div className="brand-carousel-item swiper-slide" role="group" aria-label="8 / 14" style={{width: '262.25px', marginRight: '10px'}} data-swiper-slide-index={3}>
                        <a href="#">
                          <img src="assets/images/brand/4.jpg" alt="images_not_found" />
                        </a>
                      </div>
                      {/* swiper-slide end*/}
                      {/* swiper-slide start */}
                      <div className="brand-carousel-item swiper-slide" role="group" aria-label="9 / 14" style={{width: '262.25px', marginRight: '10px'}} data-swiper-slide-index={4}>
                        <a href="#">
                          <img src="assets/images/brand/5.jpg" alt="images_not_found" />
                        </a>
                      </div>
                      {/* swiper-slide end*/}
                      {/* swiper-slide start */}
                      <div className="brand-carousel-item swiper-slide" role="group" aria-label="10 / 14" style={{width: '262.25px', marginRight: '10px'}} data-swiper-slide-index={5}>
                        <a href="#">
                          <img src="assets/images/brand/6.jpg" alt="images_not_found" />
                        </a>
                      </div>
                      </Slider>
                      {/* swiper-slide end*/}
                    
                      </div>
                    </div>
                  {/* swiper navigation */}
                 
                </div>
              </div>
            </div>
          </div>
        
      );
    }

export default Audiojungle





































// import React from 'react';
// import Slider from 'react-slick';
// import 'slick-carousel/slick/slick.css';
// import 'slick-carousel/slick/slick-theme.css';

// const Audiojungle = () => {
//   const settings = {
//     dots: true,
//     infinite: true,
//     speed: 600,
//     slidesToShow: 4,
//     slidesToScroll: 1,
//     autoplay: true,
//   };

  
//   return (
//     <div className="brand-carousel-section section-mt section-mb">
//       <div className="container">
//         <div className="row">
//           <div className="col-12">
//             <Slider {...settings}>
//               {/* Slide 1 */}
//               <div className="brand-carousel-item">
//                 <a href="#">
//                   <img src="assets/images/brand/1.jpg" alt="images_not_found" />
//                 </a>
//               </div>

//               {/* Slide 2 */}
//               <div className="brand-carousel-item">
//                 <a href="#">
//                   <img src="assets/images/brand/2.jpg" alt="images_not_found" />
//                 </a>
//               </div>

//               <div className="brand-carousel-item swiper-slide">
//                     <a href="#">
//                       <img src="assets/images/brand/3.jpg" alt="images_not_found" />
//                     </a>
//                   </div>

//                   <div className="brand-carousel-item swiper-slide">
//                     <a href="#">
//                       <img src="assets/images/brand/4.jpg" alt="images_not_found" />
//                     </a>
//                   </div>


//                   <div className="brand-carousel-item swiper-slide">
//                     <a href="#">
//                       <img src="assets/images/brand/5.jpg" alt="images_not_found" />
//                     </a>
//                   </div>




// <div className="brand-carousel-item swiper-slide">
//                     <a href="#">
//                       <img src="assets/images/brand/6.jpg" alt="images_not_found" />
//                     </a>
//                   </div>



//             </Slider>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Audiojungle;



























// import React from 'react'
// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// const Audiojungle = () => {

//     const settings = {
//         dots: true,
//         infinite: true,
//         speed: 600,
//         slidesToShow: 4,
//         slidesToScroll: 1,
//         autoplay:true
//       };

//   return (
//     <div>
         
//       <div className="brand-carousel-section section-mt section-mb">
//       <div className="container">
//         <div className="row">
//           <div className="col-12">
//           <Slider {...settings} >
//             <div className="brand-carousel">
           
//               <div className="swiper-container">
              
//                 <div className="swiper-wrapper">
                
//                   {/* swiper-slide start */}
//                   <div>
//                   <div className="brand-carousel-item swiper-slide">
//                     <a href="#">
//                       <img src="assets/images/brand/1.jpg" alt="images_not_found" />
//                     </a>
//                   </div>
//                   </div>
//                   {/* swiper-slide end*/}
//                   {/* swiper-slide start */}
//                   <div>
//                   <div className="brand-carousel-item swiper-slide">
//                     <a href="#">
//                       <img src="assets/images/brand/2.jpg" alt="images_not_found" />
//                     </a>
//                   </div>
//                   </div>
//                   {/* swiper-slide end*/}
//                   {/* swiper-slide start */}
//                   <div>
//                   <div className="brand-carousel-item swiper-slide">
//                     <a href="#">
//                       <img src="assets/images/brand/3.jpg" alt="images_not_found" />
//                     </a>
//                   </div>
//                   </div>
//                   {/* swiper-slide end*/}
//                   {/* swiper-slide start */}
//                   <div>
//                   <div className="brand-carousel-item swiper-slide">
//                     <a href="#">
//                       <img src="assets/images/brand/4.jpg" alt="images_not_found" />
//                     </a>
//                   </div>
//                   </div>
//                   {/* swiper-slide end*/}
//                   {/* swiper-slide start */}
//                   <div>
//                   <div className="brand-carousel-item swiper-slide">
//                     <a href="#">
//                       <img src="assets/images/brand/5.jpg" alt="images_not_found" />
//                     </a>
//                   </div>
//                   </div>
//                   {/* swiper-slide end*/}
//                   {/* swiper-slide start */}
//                   <div>
//                   <div className="brand-carousel-item swiper-slide">
//                     <a href="#">
//                       <img src="assets/images/brand/6.jpg" alt="images_not_found" />
//                     </a>
//                   </div>
//                   </div>
//                   {/* swiper-slide end*/}
                
                
//                 </div>
               
//               </div>
              
//               {/* swiper navigation */}
              
//             </div>
//             </Slider>
//           </div>
//         </div>
//       </div>
//     </div>
    
//     </div>
//   )
// }

// export default Audiojungle




















