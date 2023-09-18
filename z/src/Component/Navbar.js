import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import './Shearchbar.css'
const Navbar = () => {

    const [isHeaderFixed, setIsHeaderFixed] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
          console.log('Scroll position:', window.scrollY);
          if (window.scrollY > 100) {
            setIsHeaderFixed(true);
          } else {
            setIsHeaderFixed(false);
          }
        };
      
        window.addEventListener('scroll', handleScroll);
        return () => {
          window.removeEventListener('scroll', handleScroll);
        };
      }, [isHeaderFixed]);

    return (
        <div>
            <header  style={{backgroundColor:"black",padding:"0px"}} className={`header ${isHeaderFixed ? 'fixed' : ''}`} >
                <div class="container position-relative">
                    <div class="row align-items-center">
                        <div class="col-md-8">
                            <ul class="main-menu">
                                <li class="main-menu-item position-relative">
                                    <Link class="main-menu-link text-white" to="/">Home</Link>
                                    {/* <!-- <ul class="sub-menu">
                                <li><a class="sub-menu-link" href="index.html">Home 1</a></li>
                                <li><a class="sub-menu-link" href="index-2.html">Home 2</a></li>
                                <li><a class="sub-menu-link" href="index-3.html">Home 3</a></li>
                                <li><a class="sub-menu-link" href="index-4.html">Home 4</a></li>
                            </ul> --> */}
                                </li>

                                <li class="main-menu-item position-static">
                                    <Link class="main-menu-link text-white" to="/shop"
                                    >shop</Link>
                                </li>

                                {/* <!--   <li class="main-menu-item position-relative">
                            <a class="main-menu-link" href="#">pages<i class="ion-ios-arrow-down"></i></a>
                            <ul class="sub-menu">
                                <li><a class="sub-menu-link" href="about-us.html">About Page</a></li>
                                <li><a class="sub-menu-link" href="cart.html">Cart Page</a></li>
                                <li><a class="sub-menu-link" href="checkout.html">Checkout Page</a></li>
                                <li><a class="sub-menu-link" href="compare.html">Compare Page</a></li>
                                <li><a class="sub-menu-link" href="login.html">Login &amp; Register Page</a></li>
                                <li><a class="sub-menu-link" href="myaccount.html">Account Page</a></li>
                                <li><a class="sub-menu-link" href="wishlist.html">Wishlist Page</a></li>
                            </ul>
                        </li>
--> */}
                                <li class="main-menu-item position-relative">
                                    <Link class="main-menu-link text-white" to="/shop_grid4"
                                    >Blog</Link
                                    >
                                </li>

                                <li class="main-menu-item position-relative">
                                    <Link class="main-menu-link text-white" to="/contect_us"
                                    >Contact us</Link
                                    >
                                </li>
                            </ul>
                        </div>
                        <div class="col-md-4">
                            <div class="contact-info">
                                <i class="las la-headset"></i>
                                <span>Call us:</span>
                                <a href="tel:0123456789">0123456789</a>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
          
        </div>
    )
}

export default Navbar