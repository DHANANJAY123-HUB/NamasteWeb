import axios from 'axios';
import React, { useState } from 'react'
import { useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import secureLocalStorage from "react-secure-storage";
import baseurl from './Baseurl'
const Shearchbar = () => {
  let Navigate = useNavigate()
  // show userdata
  let [showprofile, setshowprofile] = useState([])



  let _id = secureLocalStorage.getItem("n_id");
  let token = secureLocalStorage.getItem("n_token");


  //get user profile
  useEffect(() => {
    let items = {
      "user_id": _id
    }
    axios.post(`${baseurl[0].apiurl}get_user_profile`, items,
      {
        headers: {
          "token": token,
        }
      }).then((res) => {
        //console.log(res.data.data)
        if (res.data.result) {
          setshowprofile(res.data.data)
        }
      }).catch((error) => {
        console.log(error)
      })

  }, [showprofile])

  // singout Handel
  let singout = () => {
    let item = {
      "_id": _id
    }
    axios.post(`${baseurl[0].apiurl}logout`, item).then((res) => {
      //console.log(res)
      if (res.data.result) {
        localStorage.removeItem("ssstoken");
        secureLocalStorage.removeItem("n_id");
        secureLocalStorage.removeItem("n_token");
        secureLocalStorage.removeItem("n_mobile_no");
        secureLocalStorage.removeItem("n_otp");
        Navigate(`/`)
      }
    }).catch((error) => {
      console.log(error)
    })


  }

// i have done Api intregation this much api signup , login , resend otp , verify_otp , logout , banner_list  ,category_list  , get_user_profile ,daily_product_list ,fruits_veg_product_list

  return (
    <div>

      <div id="active-sticky2" class="header-space bg-white">
        <div class="container">
          <div class="row align-items-center">
            <div class="col-6 col-sm-4 col-lg-7 col-xl-8">
              <div class="d-flex">
                <div class="flex-shrink-0">
                  <div class="d-flex align-items-center vertical-menu">

                    <div class="dropdown">
                      <button type="button" style={{ color: "white" }} class="menu-bars menu-btn d-none d-lg-block dropdown-toggle" data-toggle="dropdown">
                        <i class="las la-bars p-1" style={{ color: "black" }}></i>
                      </button>
                      <div class="dropdown-menu" style={{ paddingRight: "60px" }}>
                        <a class="dropdown-item" style={{ fontSize: "17px" }} href="#">Fresh Food</a>
                        <a class="dropdown-item" style={{ fontSize: "17px" }} href="#">Fresh Fruit</a>
                        <a class="dropdown-item" style={{ fontSize: "17px" }} href="#">Fresh Vegetables</a>
                        <a class="dropdown-item" style={{ fontSize: "17px" }} href="#">Apple & Pearse</a>
                        <a class="dropdown-item" style={{ fontSize: "17px" }} href="#">Berries & Charies</a>
                        <a class="dropdown-item" style={{ fontSize: "17px" }} href="#">orange & Citrues Fruits</a>
                        <a class="dropdown-item" style={{ fontSize: "17px" }} href="#">Grapes</a>
                        <a class="dropdown-item" style={{ fontSize: "17px" }} href="#">Onioun & Leeks</a>








                      </div>
                    </div>
                    {/* <button class="menu-bars menu-btn d-none d-lg-block">
               
                </button> */}
                    <Link class="logo" to="/"
                    ><img
                        src="assets/images/logo/logo-dark.png"
                        alt="image_not_found"
                      /></Link>

                    <ul class="dropdown-menu">
                      {/* <!-- <li class="menu-item">
                                        <a href="#"> Rice & Rice Products <i class="ion-ios-arrow-right"></i></a>
                                        <ul class="verticale-mega-menu flex-wrap">
                                            <li class="menu-item">
                                                <a href="#">
                                                    <span><strong>Rice</strong></span>
                                                </a>
                                                <ul class="submenu-item">
                                                    <li>
                                                        <a href="#"><span>Basmati Rice</span></a>
                                                    </li>
                                                    <li>
                                                        <a href="#">Sona Masoori Rice</a>
                                                    </li>
                                                    <li>
                                                        <a href="#">Rice Flakes(Poha)</a>
                                                    </li>
                                                    <li>
                                                        <a href="#"> Puffed Rice (Mamra) </a>
                                                    </li>
                                                    <li>
                                                        <a href="#">Other Rice</a>
                                                    </li>
                                                    <li>
                                                        <a href="#">All Rice Products</a>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li class="menu-item">
                                                <a href="#">
                                                    <span><strong>Fresh Salad & Dips</strong></span>
                                                </a>
                                                <ul class="submenu-item">
                                                    <li>
                                                        <a href="#">Potatoes Sweet Potatoes</a>
                                                    </li>
                                                    <li>
                                                        <a href="#">Onions Leeks</a>
                                                    </li>
                                                    <li>
                                                        <a href="#">Carrots Root Vegetables</a>
                                                    </li>
                                                    <li>
                                                        <a href="#">Broccoli Cauliflower</a>
                                                    </li>
                                                    <li>
                                                        <a href="#">Cabbages Greens</a>
                                                    </li>
                                                </ul>
                                            </li>

                                            <li>
                                                <a href="#">
                                                    <span><strong>Fresh Salad & Dips</strong></span>
                                                </a>

                                                <ul class="submenu-item">
                                                    <li>
                                                        <a href="#">Lettuce Salad bags</a>
                                                    </li>
                                                    <li>
                                                        <a href="#">Tomatoes</a>
                                                    </li>
                                                    <li>
                                                        <a href="#">Cucumber</a>
                                                    </li>
                                                    <li>
                                                        <a href="#">Celery</a>
                                                    </li>
                                                    <li>
                                                        <a href="#">Peppers</a>
                                                    </li>
                                                </ul>
                                            </li>

                                            <li>
                                                <a href="#">
                                                    <span><strong>Milk, Butter & Eggs</strong></span>
                                                </a>

                                                <ul class="submenu-item">
                                                    <li>
                                                        <a href="#">Milk</a>
                                                    </li>
                                                    <li>
                                                        <a href="#">Spreads Margarine</a>
                                                    </li>
                                                    <li>
                                                        <a href="#">Fresh Cream Custard</a>
                                                    </li>
                                                    <li>
                                                        <a href="#">Eggs</a>
                                                    </li>
                                                    <li>
                                                        <a href="#">Baking Cooking</a>
                                                    </li>
                                                </ul>
                                            </li>
                                        </ul>
                                        sub menu
                                                                                 </li> --> */}
                      <li class="menu-item">
                        <a href="shop-grid-left-sidebar.html">
                          Rice & Rice Products<i class="ion-ios-arrow-right"></i
                          ></a>
                        <ul class="verticale-sub-menu flex-wrap">
                          <li>
                            <ul class="submenu-item">
                              <li>
                                <a href="shop-grid-left-sidebar.html"
                                ><span>Basmati Rice</span></a
                                >
                              </li>
                              <li>
                                <a href="shop-grid-left-sidebar.html"
                                >Sona Masoori Rice</a
                                >
                              </li>
                              <li>
                                <a href="shop-grid-left-sidebar.html"
                                >Rice Flakes(Poha)</a
                                >
                              </li>
                              <li>
                                <a href="shop-grid-left-sidebar.html">
                                  Puffed Rice(Mamra)
                                </a>
                              </li>
                              <li>
                                <a href="shop-grid-left-sidebar.html"
                                >Other Rice</a
                                >
                              </li>
                              <li>
                                <a href="shop-grid-left-sidebar.html"
                                >All Rice Products</a
                                >
                              </li>
                            </ul>
                          </li>
                        </ul>
                      </li>
                      <li class="menu-item">
                        <a href="#"
                        >Flour & Flour Product<i
                          class="ion-ios-arrow-right"
                        ></i
                          ></a>
                        <ul class="verticale-sub-menu flex-wrap">
                          <li>
                            <ul class="submenu-item">
                              <li>
                                <a href="#">Wheat Flour(Atta)</a>
                              </li>
                              <li>
                                <a href="#">Gram Flour(Besan) & Semolina</a>
                              </li>
                              <li>
                                <a href="#">Roti, Naan & Papadum</a>
                              </li>
                              <li>
                                <a href="#">Rice Flour</a>
                              </li>
                              <li>
                                <a href="#">Other Flour</a>
                              </li>
                              <li>
                                <a href="#">All Flour Pro</a>
                              </li>
                            </ul>
                          </li>
                        </ul>
                      </li>
                      <li class="menu-item">
                        <a href="shop-grid-left-sidebar.html">
                          Pulses & Spices<i class="ion-ios-arrow-right"></i
                          ></a>
                        <ul class="verticale-sub-menu flex-wrap">
                          <li>
                            <ul class="submenu-item">
                              <li>
                                <a href="shop-grid-left-sidebar.html"
                                ><span>Green Beans(Moong Dal)</span></a
                                >
                              </li>
                              <li>
                                <a href="shop-grid-left-sidebar.html"
                                >Black Beans(Urid Dal)</a
                                >
                              </li>
                              <li>
                                <a href="shop-grid-left-sidebar.html"
                                >Red Lentils(Masoor Dal)</a
                                >
                              </li>
                              <li>
                                <a href="shop-grid-left-sidebar.html">
                                  Pigeon Peas(Toor Dal)
                                </a>
                              </li>
                              <li>
                                <a href="shop-grid-left-sidebar.html"
                                >Chickpeas(Chana Dal & kabuli Chana)</a
                                >
                              </li>
                              <li>
                                <a href="shop-grid-left-sidebar.html"
                                >Other Beans</a
                                >
                              </li>
                              <li>
                                <a href="shop-grid-left-sidebar.html"
                                >Spice Powder</a
                                >
                              </li>
                              <li>
                                <a href="shop-grid-left-sidebar.html"
                                >Whole Spices</a
                                >
                              </li>
                              <li>
                                <a href="shop-grid-left-sidebar.html"
                                >Spice Mix</a
                                >
                              </li>
                            </ul>
                          </li>
                        </ul>
                      </li>
                      <li class="menu-item">
                        <a href="shop-grid-left-sidebar.html">
                          Instant Food & Beverages<i
                            class="ion-ios-arrow-right"
                          ></i
                          ></a>
                        <ul class="verticale-sub-menu flex-wrap">
                          <li>
                            <ul class="submenu-item">
                              <li>
                                <a href="shop-grid-left-sidebar.html"
                                >Ready to Eat<span></span
                                ></a>
                              </li>
                              <li>
                                <a href="shop-grid-left-sidebar.html"
                                >Instant Noodles</a
                                >
                              </li>
                              <li>
                                <a href="shop-grid-left-sidebar.html"
                                >Instant Mix savoury & Sweet</a
                                >
                              </li>
                              <li>
                                <a href="shop-grid-left-sidebar.html">
                                  Vermicelli (Seviyan)
                                </a>
                              </li>
                              <li>
                                <a href="shop-grid-left-sidebar.html">
                                  Coffee & Tea</a
                                >
                              </li>
                              <li>
                                <a href="shop-grid-left-sidebar.html"
                                >Soft Drinks & Juices</a
                                >
                              </li>
                              <li>
                                <a href="shop-grid-left-sidebar.html"
                                >Milk Products</a
                                >
                              </li>
                              <li>
                                <a href="shop-grid-left-sidebar.html"
                                >Alcoholic Beverages</a
                                >
                              </li>
                              <li>
                                <a href="shop-grid-left-sidebar.html"
                                >All Instant Food & Beverages</a
                                >
                              </li>
                            </ul>
                          </li>
                        </ul>
                      </li>
                      <li class="menu-item">
                        <a href="shop-grid-left-sidebar.html">
                          Sauces Oil & Ghee<i class="ion-ios-arrow-right"></i
                          ></a>
                        <ul class="verticale-sub-menu flex-wrap">
                          <li>
                            <ul class="submenu-item">
                              <li>
                                <a href="shop-grid-left-sidebar.html"
                                >Butter Ghee<span></span
                                ></a>
                              </li>
                              <li>
                                <a href="shop-grid-left-sidebar.html">Oil</a>
                              </li>
                              <li>
                                <a href="shop-grid-left-sidebar.html"
                                >Seasoning Sauce</a
                                >
                              </li>
                              <li>
                                <a href="shop-grid-left-sidebar.html"
                                >All Sauces,Oil & Ghee
                                </a>
                              </li>
                            </ul>
                          </li>
                        </ul>
                      </li>
                      <li class="menu-item">
                        <a href="shop-grid-left-sidebar.html">
                          Pickles & Condiments
                          <i class="ion-ios-arrow-right"></i
                          ></a>
                        <ul class="verticale-sub-menu flex-wrap">
                          <li>
                            <ul class="submenu-item">
                              <li>
                                <a href="shop-grid-left-sidebar.html"
                                >Pickles & Chutneys Ghee<span></span
                                ></a>
                              </li>
                              <li>
                                <a href="shop-grid-left-sidebar.html">Pastes</a>
                              </li>
                              <li>
                                <a href="shop-grid-left-sidebar.html"
                                >Soy Products</a
                                >
                              </li>
                              <li>
                                <a href="shop-grid-left-sidebar.html"
                                >Puls & Jam
                                </a>
                              </li>
                              <li>
                                <a href="shop-grid-left-sidebar.html"
                                >Coconut Products
                                </a>
                              </li>
                              <li>
                                <a href="shop-grid-left-sidebar.html"
                                >Essentials Flavour Extracts
                                </a>
                              </li>
                              <li>
                                <a href="shop-grid-left-sidebar.html"
                                >All Pickles & Condiments
                                </a>
                              </li>
                            </ul>
                          </li>
                        </ul>
                      </li>
                      <li class="menu-item">
                        <a href="shop-grid-left-sidebar.html">
                          Snacks & Sweets <i class="ion-ios-arrow-right"></i
                          ></a>
                        <ul class="verticale-sub-menu flex-wrap">
                          <li>
                            <ul class="submenu-item">
                              <li>
                                <a href="shop-grid-left-sidebar.html"
                                >Snacks & Chips<span></span
                                ></a>
                              </li>
                              <li>
                                <a href="shop-grid-left-sidebar.html"
                                >Biscuits,Cookies & Rusk</a
                                >
                              </li>
                              <li>
                                <a href="shop-grid-left-sidebar.html"
                                >Dry Fruits & Seeds</a
                                >
                              </li>
                              <li>
                                <a href="shop-grid-left-sidebar.html"
                                >Sweets
                                </a>
                              </li>
                              <li>
                                <a href="shop-grid-left-sidebar.html"
                                >All Snacks & Sweet</a
                                >
                              </li>
                            </ul>
                          </li>
                        </ul>
                      </li>
                      <li class="menu-item">
                        <a href="#"> Personalo & Home Care</a>
                      </li>
                      <li class="menu-item">
                        <a href="#"> Pooja(Worship) & fasting</a>
                      </li>
                      <li class="menu-item">
                        <a href="#"> Kitchen & Home Supply</a>
                      </li>
                      <li class="menu-item">
                        <a href="#"> Fruits & Veggies</a>
                      </li>
                      <li class="menu-item">
                        <a href="#"> Beverages</a>
                      </li>
                    </ul>
                    {/* <!-- menu content --> */}
                  </div>
                </div>
                <div class="flex-grow-1 d-none d-lg-block">
                  <form class="search-form position-relative" action="#">
                    <div class="input-group">
                      <input
                        class="form-control"
                        type="text"
                        placeholder="Enter your search key ... "
                      />
                      <div class="input-group-text">
                        <button class="search-btn btn-success">
                          <i class="ion-ios-search-strong"></i>
                        </button>
                      </div>
                    </div>

                    <select
                      class="form-select d-none d-xl-block"
                      id="autoSizingSelect"
                    >
                      <option value="0">All categories</option>
                      <option value="04">Fresh Food</option>
                      <option value="83">- - Fresh Fruit</option>
                      <option value="87">- - - - Bananas</option>
                      <option value="88">- - - - Apples &amp; Pears</option>
                      <option value="89">- - - - Berries &amp; Cherries</option>
                      <option value="90">
                        - - - - Oranges &amp; Citrus Fruit
                      </option>
                      <option value="91">- - - - Grapes</option>
                      <option value="84">- - Fresh Vegetables</option>
                      <option value="92">
                        - - - - Potatoes &amp; Sweet Potatoes
                      </option>
                      <option value="93">- - - - Onions &amp; Leeks</option>
                      <option value="94">
                        - - - - Carrots &amp; Root Vegetables
                      </option>
                      <option value="95">
                        - - - - Broccoli &amp; Cauliflower
                      </option>
                      <option value="96">- - - - Cabbages &amp; Greens</option>
                      <option value="85">- - Fresh Salad &amp; Dips</option>
                      <option value="97">
                        - - - - Lettuce &amp; Salad bags
                      </option>
                      <option value="98">- - - - Tomatoes</option>
                      <option value="99">- - - - Cucumber</option>
                      <option value="00">- - - - Celery</option>
                      <option value="01">- - - - Peppers</option>
                      <option value="86">- - Milk, Butter &amp; Eggs</option>
                      <option value="02">- - - - Milk</option>
                      <option value="03">
                        - - - - Spreads &amp; Margarine
                      </option>
                      <option value="04">
                        - - - - Fresh Cream &amp; Custard
                      </option>
                      <option value="05">- - - - Eggs</option>
                      <option value="06">- - - - Baking &amp; Cooking</option>
                    </select>
                  </form>
                </div>
              </div>
            </div>
            <div class="col-6 col-sm-8 col-lg-5 col-xl-4">
              <ul class="quick-links">
                {/* <!-- quick-link-item --> */}
                <li class="quick-link-item d-none d-md-inline-flex">
                  <span class="quick-link-icon flex-shrink-0">
                    <a href="#" class="quick-link">
                      <i style={{ marginTop: "8px" }} class="las la-user-circle"></i>
                    </a>
                  </span>
                  <span class="flex-grow-1">

                    {_id ? (<div> <Link to="/myaccount">{showprofile?.full_name}</Link> <br />
                      <Link onClick={singout}>Sign out</Link> </div>) :
                      (<div> <Link style={{ marginTop: "15px" }} to="/login" class="my-account">Register</Link>
                      </div>)}

                  </span>
                </li>
                {/* <!-- quick-link-item end -->
            <!-- quick-link-item -->

            <!-- quick-link-item end -->
            <!-- quick-link-item --> */}
                <li class="quick-link-item d-none d-sm-flex">
                  <Link to="/card" class="quick-link">
                    <span class="quick-link-icon flex-shrink-0">
                      <i class="lar la-heart"></i>
                      <span class="badge rounded-pill bg-success">3</span>
                    </span>
                  </Link>
                </li>
                {/* <!-- quick-link-item end -->
            <!-- quick-link-item --> */}
                <li class="quick-link-item">
                  <a style={{ marginTop: "6px" }} href="#" class="quick-link">
                    <span class="quick-link-icon flex-shrink-0">
                      <i class="las la-shopping-bag"></i>
                      <span class="badge rounded-pill bg-success">4</span>
                    </span>
                  </a>
                  <div class="checkout-cart">
                    <ul class="checkout-scroll">
                      <li class="checkout-cart-list">
                        <div class="checkout-img">
                          <img
                            class="product-image"
                            src="assets/images/mini-cart/1.jpg"
                            alt="img"
                          />
                          <span class="product-quantity">1x</span>
                        </div>
                        <div class="checkout-block">
                          <a class="product-name" href="#"
                          >Warburtons 9 Crumpets</a
                          >
                          <span class="product-price">$24.33</span>
                          <a class="remove-cart" href="#">
                            <i class="las la-times"></i>
                          </a>
                          <div class="product-size">
                            <span>Size: S</span>
                          </div>
                        </div>
                      </li>
                      <li class="checkout-cart-list">
                        <div class="checkout-img">
                          <img
                            class="product-image"
                            src="assets/images/mini-cart/2.jpg"
                            alt="img"
                          />
                          <span class="product-quantity">1x</span>
                        </div>
                        <div class="checkout-block">
                          <a href="#" class="product-name"
                          >Snacking Essentials Cashew</a
                          >
                          <span class="product-price">$23.33</span>
                          <a class="remove-cart" href="#">
                            <i class="las la-times"></i>
                          </a>
                          <div class="product-size">
                            <span>Size: S</span>
                          </div>
                        </div>
                      </li>
                    </ul>

                    <ul class="list-group checkout-sub-total">
                      <li class="list-group-item">
                        <span>Subtotal</span>
                        <span>$146.00</span>
                      </li>
                      <li class="list-group-item">
                        <span>shipping</span>
                        <span>$7.00</span>
                      </li>
                      <li class="list-group-item">
                        <strong>Total</strong>
                        <strong>$58.71</strong>
                      </li>
                    </ul>

                    {/* <!-- checkout-action button start --> */}
                    <div class="checkout-action">
                      <Link
                        to="/checkout"
                        class="btn btn-lg btn-dark d-block"
                      >Checkout</Link
                      >
                    </div>
                    {/* <!-- checkout-action button end --> */}
                  </div>
                </li>
                {/* <!-- quick-link-item end --> */}
                <li class="quick-link-item d-lg-none">
                  <button
                    class="toggle-menu"
                    data-bs-toggle="modal"
                    data-bs-target="#exampleModal"
                  >
                    <i class="las la-bars"></i>
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Shearchbar