import React, { useEffect, useState } from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { AiFillLeftCircle } from 'react-icons/ai'
import { AiFillRightCircle } from 'react-icons/ai'
import './Arowbutton.css'
import { Link, useNavigate } from 'react-router-dom';
import axios from "axios";
import secureLocalStorage from "react-secure-storage";
import baseurl from './Baseurl'

const FruitsandVagetables = () => {
let navigate=useNavigate()
    const [slider1, setSlider1] = useState(null);
    const [slider2, setSlider2] = useState(null);


    const CustomPrevArrow = (props) => (
        <button
            className="custom-prev-arrow"
            style={{ right: "60px", top: "-50px", padding: "5px", zIndex: "0" }}
            onClick={props.onClick}
        >
            <i
                className="las la-angle-left"
                style={{
                    color: "black",
                    border: "1px solid",
                    padding: "5px",
                    borderRadius: "20px",
                    zIndex: "0",
                }}
            />
        </button>
    );

    const CustomNextArrow = (props) => (
        <button
            className="custom-next-arrow"
            style={{ right: "20px", top: "-50px", padding: "5px", zIndex: "0" }}
            onClick={props.onClick}
        >
            <i
                className="las la-angle-right"
                style={{
                    color: "black",
                    border: "1px solid",
                    padding: "5px",
                    borderRadius: "20px",
                    zIndex: "0",
                }}
            />
        </button>
    );



    const slider1Settings = {
        autoplay: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        asNavFor: slider2,
        nextArrow: <CustomNextArrow />,
        prevArrow: <CustomPrevArrow />,
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

    const slider2Settings = {
        autoplay: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        asNavFor: slider1,

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

    // useStatus
    let [fruits_veg_product_list, setfruits_veg_product_list] = useState([])
    let [fruits_veg_product_list2, setfruits_veg_product_list2] = useState([])

    let token = secureLocalStorage.getItem("n_token");
    useEffect(() => {
        axios.get(`http://103.104.74.215:3014/website/fruits_veg_product_list`
           
        
        ).then((res) => {
            //console.log(res)
            if (res.data.result) {
                setfruits_veg_product_list(res.data.data)
                setfruits_veg_product_list2(res.data.data)
            }
        }).catch((error) => {
            console.log(error)
        })
        //console.log(fruits_veg_product_list)
    }, [fruits_veg_product_list])

    let   Single_products_model = (singleproducts) => {
        //console.log(singleproducts)
       secureLocalStorage.setItem("n_singleproducts", singleproducts);
    
     }

    return (

        <div>
            <section className="product-carousel">
                <div className="container position-relative">
                    <div className="row">
                        <div className="section-title">
                            <h2 className="title">Fruits and Vegetables</h2>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12">
                            <div className="custom-container">
                                <div className="custom-col-left">
                                    <aside className="sidebar-widgets">
                                        <div className="widget">
                                            <div className="product-box">
                                                <Link to="/shop" className="banner-box-animation">
                                                    <img src="assets/images/banner/sidebar1.jpg" alt="images_not_found" />
                                                </Link>
                                                <ul className="sidebar-menu">
                                                    <li className="sidebar-menu-item"><a className="sidebar-menu-nav-link" href="#">Bananas</a></li>
                                                    <li className="sidebar-menu-item"><a className="sidebar-menu-nav-link" href="#">Apples Pears</a></li>
                                                    <li className="sidebar-menu-item"><a className="sidebar-menu-nav-link" href="#">Berries Cherries</a></li>
                                                    <li className="sidebar-menu-item"><a className="sidebar-menu-nav-link" href="#">Oranges Citrus Fruit</a>
                                                    </li>
                                                    <li className="sidebar-menu-item"><a className="sidebar-menu-nav-link" href="#">Onions Leeks</a></li>
                                                    <li className="sidebar-menu-item"><a className="sidebar-menu-nav-link" href="#">Carrots Root
                                                        Vegetables</a>
                                                    </li>
                                                    <li className="sidebar-menu-item"><a className="sidebar-menu-nav-link" href="#">Tomatoes</a></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </aside>
                                </div>
                                <div className="custom-col-right">
                                    <div className="row justify-content-center">
                                        <div className="col-12">


                                            <Slider ref={(slider) => setSlider1(slider)} {...slider1Settings}>
                                                {fruits_veg_product_list?.map((items) => {
                                                    return (
                                                        <div
                                                            className="new-arrival-carousel-item swiper-slide swiper-slide-duplicate swiper-slide-duplicate-next"
                                                            role="group"
                                                            aria-label="6 / 7"
                                                            style={{ width: "257.25px", zIndex: "1" }}
                                                            data-swiper-slide-index={5}
                                                        >
                                                            {/* product-card-list start */}
                                                            <div
                                                                className="product-card-list"
                                                                style={{}}
                                                            >
                                                                {/* product-card start */}
                                                                <div className="product-card">
                                                                    <span className="badge bg-success product-badge">
                                                                        new
                                                                    </span>
                                                                    <div className="product-thumb-nail">
                                                                        <span onClick={() => Single_products_model(items._id)}>
                                                                            <img
                                                                                className="product-image p-2"
                                                                                src={`http://103.104.74.215:3014/uploads/${items.product_image}`}
                                                                                width={"100%"} height={"200px"} alt="image_not_found"
                                                                            />
                                                                            <img
                                                                                className="product-image-hover-style p-5 shadow"
                                                                                src={`http://103.104.74.215:3014/uploads/${items.product_image}`}
                                                                                width={"100%"} alt="image_not_found"

                                                                            />
                                                                        </span>
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
                                                                                    <i className="las la-eye" onClick={() => Single_products_model(items._id)}/>
                                                                                </button>
                                                                            </li>
                                                                        </ul>
                                                                    </div>
                                                                    <div className="product-content" style={{}}>
                                                                        <h4 className="product-sub-title">
                                                                            <a href="#">{items.category_name}</a>
                                                                        </h4>
                                                                        <h3 className="product-title">
                                                                            <Link to="/single_product">
                                                                                <span>{items.product_name}</span>
                                                                            </Link>
                                                                        </h3>
                                                                        <div className="product-price-wrapp">
                                                                            <p className="product-price-on-sale">
                                                                                <span>Price € {items.price}</span> <span className="pl-2"><s style={{ color: "black" }}>{items.mrp}</s></span>
                                                                            </p>
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

                                                    )
                                                })}

                                            </Slider>


                                            <Slider ref={(slider) => setSlider2(slider)} {...slider2Settings} >



                                                {fruits_veg_product_list.reverse()?.map((items) => {
                                                    return (
                                                        <div
                                                            className="new-arrival-carousel-item swiper-slide swiper-slide-duplicate swiper-slide-duplicate-next"
                                                            role="group"
                                                            aria-label="6 / 7"
                                                            style={{ width: "257.25px", zIndex: "1" }}
                                                            data-swiper-slide-index={5}
                                                        >
                                                            {/* product-card-list start */}
                                                            <div
                                                                className="product-card-list"
                                                                style={{}}
                                                            >
                                                                {/* product-card start */}
                                                                <div className="product-card">
                                                                    <span className="badge bg-success product-badge">
                                                                        new
                                                                    </span>
                                                                    <div className="product-thumb-nail">
                                                                        <span onClick={() => Single_products_model(items._id)}>
                                                                            <img
                                                                                className="product-image p-2"
                                                                                src={`http://103.104.74.215:3014/uploads/${items.product_image}`}
                                                                                width={"100%"} height={"200px"} alt="image_not_found"
                                                                            />
                                                                            <img
                                                                                className="product-image-hover-style p-5 shadow"
                                                                                src={`http://103.104.74.215:3014/uploads/${items.product_image}`}
                                                                                width={"100%"} alt="image_not_found"

                                                                            />
                                                                        </span>
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
                                                                                    <i className="las la-eye" onClick={() => Single_products_model(items._id)} />
                                                                                </button>
                                                                            </li>
                                                                        </ul>
                                                                    </div>
                                                                    <div className="product-content" style={{}}>
                                                                        <h4 className="product-sub-title">
                                                                            <a href="#">{items.category_name}</a>
                                                                        </h4>
                                                                        <h3 className="product-title">
                                                                            <Link to="/single_product">
                                                                                <span>{items.product_name}</span>
                                                                            </Link>
                                                                        </h3>
                                                                        <div className="product-price-wrapp">
                                                                            <p className="product-price-on-sale">
                                                                                <span>Price € {items.price}</span> <span className="pl-2"><s style={{ color: "black" }}>{items.mrp}</s></span>
                                                                            </p>
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

                                                    )
                                                })}


                                            </Slider>


                                        </div>
                                        {/* swiper navigation */}

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    )
}

export default FruitsandVagetables