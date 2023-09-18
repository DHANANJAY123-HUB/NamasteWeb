import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";
import { AiFillLeftCircle } from 'react-icons/ai'
import { AiFillRightCircle } from 'react-icons/ai'
import './Arowbutton.css'

function Freshfruit() {
  const CustomPrevArrow = (props) => (
    <button
      className="custom-prev-arrow"
      style={{ backgroundColor: "blue", color: "white", right: "10px",top:"-50px",padding:"5px",borderRadius:"20px" }}
      onClick={props.onClick}
    >
      <AiFillLeftCircle />
    </button>
  );
  
  const CustomNextArrow = (props) => (
    <button
      className="custom-next-arrow"
      style={{ backgroundColor: "green", color: "white", right: "-30px" ,top:"-50px",padding:"5px",borderRadius:"20px"}}
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
      <section className="food-category-section" style={{ zIndex: "0" }}>
        <div className="container">
          <div className="row">
            <div className="col-12" style={{ zIndex: "0" }}>
              <div className="food-category-carousel">
                <Slider {...settings}>
                  {/* Slide 1 */}
                  <div className="food-category-item">
                    <Link to="/shop" className="food-catery-thumb">
                      <img
                        src="assets/images/food-category/1.png"
                        alt="Fresh Fruit"
                      />
                    </Link>
                    <h3 className="food-catery-title">
                      <Link to="/shop">Fresh Fruit</Link>
                    </h3>
                  </div>

                  {/* Slide 2 */}
                  <div className="food-category-item">
                    <Link to="/shop" className="food-catery-thumb">
                      <img
                        src="assets/images/food-category/2.png"
                        alt="Apples & Pears"
                      />
                    </Link>
                    <h3 className="food-catery-title">
                      <Link to="/shop">Apples & Pears</Link>
                    </h3>
                  </div>

                  {/* Slide 3 */}
                  <div className="food-category-item">
                    <Link to="/shop" className="food-catery-thumb">
                      <img
                        src="assets/images/food-category/3.png"
                        alt="Fresh Cream & Custard"
                      />
                    </Link>
                    <h3 className="food-catery-title">
                      <Link to="/shop">Fresh Cream & Custard</Link>
                    </h3>
                  </div>

                  {/* Slide 4 */}
                  <div className="food-category-item">
                    <Link to="/shop" className="food-catery-thumb">
                      <img
                        src="assets/images/food-category/4.png"
                        alt="Milk, Butter & Eggs"
                      />
                    </Link>
                    <h3 className="food-catery-title">
                      <Link to="/shop">Milk, Butter & Eggs</Link>
                    </h3>
                  </div>

                  {/* Slide 5 */}
                  <div className="food-category-item">
                    <Link to="/shop" className="food-catery-thumb">
                      <img
                        src="assets/images/food-category/5.png"
                        alt="Baking & Cooking"
                      />
                    </Link>
                    <h3 className="food-catery-title">
                      <Link to="/shop">Baking & Cooking</Link>
                    </h3>
                  </div>

                  {/* Slide 6 */}
                  <div className="food-category-item">
                    <Link to="/shop" className="food-catery-thumb">
                      <img
                        src="assets/images/food-category/6.png"
                        alt="Spreads & Margarine"
                      />
                    </Link>
                    <h3 className="food-catery-title">
                      <Link to="/shop">Spreads & Margarine</Link>
                    </h3>
                  </div>

                  {/* Slide 7 */}
                  <div className="food-category-item">
                    <Link to="/shop" className="food-catery-thumb">
                      <img
                        src="assets/images/food-category/7.png"
                        alt="Berries & Cherries"
                      />
                    </Link>
                    <h3 className="food-catery-title">
                      <Link to="/shop">Berries & Cherries</Link>
                    </h3>
                  </div>
                </Slider>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Freshfruit;
