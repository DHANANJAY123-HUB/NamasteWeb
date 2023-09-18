import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link, useNavigate } from "react-router-dom";
import { AiFillLeftCircle } from 'react-icons/ai'
import { GrNext } from 'react-icons/gr'
import './Arowbutton.css'
import { useEffect } from 'react';
import axios from 'axios';
import baseurl from './Baseurl'
import { useState } from 'react';
import secureLocalStorage from "react-secure-storage";


function Freshfruit() {
  let navigate = useNavigate()
  const CustomPrevArrow = (props) => (
    <button
      className="custom-prev-arrow "
      style={{

        color: "black",
        fontSize: "35px",
        left: "-20px", // Change 'right' to 'left'
        top: "60px",
        padding: "5px",
        borderRadius: "20px",
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

        color: "black",
        fontSize: "35px",
        right: "-20px", // Change the value to '10px'
        top: "60px",
        padding: "5px",
        borderRadius: "20px",
      }}
      onClick={props.onClick}
    >
      <i className="las la-angle-right" />
    </button>
  );

  const settings = {
    autoplay: false,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
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
  let [freshfruit, setfreshfruit] = useState()
  // get data category list fruits
  useEffect(() => {
    axios.get(`${baseurl[0].apiurl}category_list`).then((res) => {
      if (res.data.result) {
        // console.log(res.data.data)
        setfreshfruit(res.data.data)
      }
    })
  }, [])


  let categoryid = (category_id) => {
    console.log(category_id)
    secureLocalStorage.setItem("freshfruits_category_id", category_id);
    navigate(`/shopscategory`)
  }


  return (
    <div>
      <section className="food-category-section freshfruidsslider" style={{ zIndex: "0" }}>
        <div className="container-fluid">
          <div className="row">
            <div className="col-12 " style={{ zIndex: "0" }}>
              <div className="food-category-carousel mt-4 " style={{ boxShadow: " 0 4px 2px -2px rgba(0, 0, 0, 0.2)" }} >
                <Slider {...settings}>

                  {freshfruit?.map((items) => {
                    return (
                      <div className="food-category-item" >
                        <span className="food-catery-thumb" onClick={() => categoryid(items._id)}>
                          <img src={`http://103.104.74.215:3014/uploads/${items.category_image}`} height={"110px"} alt="Fresh Fruit" />
                        </span>
                        <h3 className="food-catery-title">
                          <Link to="/shop">{items.category_name}</Link>
                        </h3>
                      </div>

                    )
                  })}
















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
