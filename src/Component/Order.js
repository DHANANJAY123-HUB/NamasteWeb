import React from 'react'

const Order = () => {
  return (
    <div>
    
    
<div>
  {/* header section start */}
  {/* Modal */}
  {/* header section end */}
  {/* main content start */}
  {/* bread crumb section start */}
  <nav className="breadcrumb-section">
    <div className="container">
      <div className="row">
        <div className="col-12" style={{textAlign: 'center'}}>
          {/* <img src="assets/images/logo/logo-dark.png" alt="image_not_found"> */}
          <h3>
            Thank you. Your order has been recevied.</h3>
          {/* <ol class="breadcrumb bg-transparent m-0 p-0 align-items-center">
              <li class="breadcrumb-item"><a href="index.html">Home</a></li>
              <li class="breadcrumb-item active" aria-current="page">my account</li>
          </ol> */}
        </div>
      </div>
    </div>
  </nav>
  {/* bread crumb section end */}
  <section>
    <table style={{marginLeft: 200, marginRight: 200}}>
      <tbody><tr>
          <th style={{width: 250, textAlign: 'center'}}>ORDER NUMBER<br />#6555</th>
          <th style={{width: 250, textAlign: 'center'}}>DATE<br /> july 26, 2023</th> 
          <th style={{width: 250, textAlign: 'center'}}>TOTAL <br /> $ 329</th>
          <th style={{width: 250, textAlign: 'center'}}>PAYMENT METHOD <br /> Cash on delivery</th>
        </tr>
      </tbody></table>
    <h6 style={{textAlign: 'center', color: 'skyblue'}}>Pay with cash upon delivery</h6>
  </section>
  <section>
    <div className="container">
      <div className="col-lg-12 mt-4">
        {/* <div class="col-lg-6"> */}
        <div className="your-order-area">
          <h3 className="title" style={{textAlign: 'center'}}>Order Detail</h3>
          <div className="your-order-wrap gray-bg-4" style={{width: 600, marginLeft: 300}}>
            <div className="your-order-product-info">
              <div className="your-order-top">
                <ul>
                  <li>Product</li>
                  <li>Total</li>
                </ul>
              </div>
              <div className="col-3" />
              <div className="col-3" />
              <div className="col-3" />
              <div className="your-order-middle">
                <ul>
                  <li>
                    <span className="order-middle-left">Product Name X 1</span>
                    <span className="order-price">$329 </span>
                  </li>
                  <li>
                    <span className="order-middle-left">Product Name X 1</span>
                    <span className="order-price">$329 </span>
                  </li>
                </ul>
              </div>
              <div className="your-order-bottom">
                <ul>
                  <li className="your-order-shipping">Payment Method</li>
                  <li>Cash on delivery</li>
                </ul>
              </div>
              <div className="your-order-bottom"><hr />
                <ul>
                  <li className="your-order-shipping">Shipping</li>
                  <li>Free shipping</li>
                </ul>
              </div>
              <div className="your-order-total">
                <ul>
                  <li className="order-total">Total</li>
                  <li>$329</li>
                </ul>
              </div>
            </div>
            <div className="payment-method">
              <div className="payment-accordion element-mrg">
                <div className="panel-group" id="accordion">
                  <div className="panel payment-accordion">
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* </div> */}
      </div> 
    </div>       
  </section>
  {/* news letter section start */}
  {/* news letter section end */}
  {/* service section start */}
  {/* service section end */}
  {/* main content end */}
  {/* footer section start */}
  {/* footer section end */}
  {/* Modal */}
  <div className="modal fade" id="product-modal">
    <div className="modal-dialog modal-dialog-centered product-modal-dialog">
      <div className="modal-content">
        <div className="modal-header">
          <button type="button" className="btn-close" data-bs-dismiss="modal" />
        </div>
        <div className="modal-body">
          <div className="row mb-n7">
            <div className="col-md-5 mb-7">
              <div className="modal-gallery-slider">
                <div className="product-modal-gallery">
                  <div className="swiper-container">
                    <div className="swiper-wrapper">
                      <div className="swiper-slide product-modal-gallery-item">
                        <img src="assets/images/products/product-2.1.jpg" alt="image_not_found" />
                      </div>
                      <div className="swiper-slide product-modal-gallery-item">
                        <img src="assets/images/products/product-2.jpg" alt="image_not_found" />
                      </div>
                      <div className="swiper-slide product-modal-gallery-item">
                        <img src="assets/images/products/product-4.jpg" alt="image_not_found" />
                      </div>
                      <div className="swiper-slide product-modal-gallery-item">
                        <img src="assets/images/products/product-9.jpg" alt="image_not_found" />
                      </div>
                      <div className="swiper-slide product-modal-gallery-item">
                        <img src="assets/images/products/product-13.jpg" alt="image_not_found" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="product-modal-gallery-thumbs">
                  <div className="swiper-container">
                    <div className="swiper-wrapper">
                      <div className="swiper-slide product-modal-gallery-thumbs-item">
                        <a href="#?">
                          <img src="assets/images/products/product-2.1.jpg" alt="image_not_found" />
                        </a>
                      </div>
                      <div className="swiper-slide product-modal-gallery-thumbs-item">
                        <a href="#?"> <img src="assets/images/products/product-2.jpg" alt="image_not_found" /></a>
                      </div>
                      <div className="swiper-slide product-modal-gallery-thumbs-item">
                        <a href="#?"> <img src="assets/images/products/product-4.jpg" alt="image_not_found" /></a>
                      </div>
                      <div className="swiper-slide product-modal-gallery-thumbs-item">
                        <a href="#?"> <img src="assets/images/products/product-9.jpg" alt="image_not_found" /></a>
                      </div>
                      <div className="swiper-slide product-modal-gallery-thumbs-item">
                        <a href="#?"> <img src="assets/images/products/product-13.jpg" alt="image_not_found" /></a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-7 mb-7">
              <div className="modal-product-des">
                <h3 className="modal-product-title">Tropical Juice Drink</h3>
                <h3 className="modal-product-sub-title">Reference: demo_3</h3>
                <div className="reviews">
                  <span className="las la-star" />
                  <span className="las la-star" />
                  <span className="las la-star" />
                  <span className="las la-star" />
                  <span className="las la-star" />
                </div>
                <div className="product-price-wrapp-lg">
                  <span className="product-regular-price-lg">€43.80</span>
                  <span className="product-price-on-sale-lg">€39.42</span>
                  <span className="badge badge-lg bg-dark">Save 8%</span>
                </div>
                <div className="product-description-short">
                  <ul>
                    <li>
                      Score extra points when it comes to your sporty look with the Juicy Couture™ Juicy Quilted Terry
                      Track Jacket.
                    </li>
                    <li>
                      Soft terry construction in a quilted design.
                    </li>
                    <li>
                      Front zipper closure.
                    </li>
                    <li>
                      61% cotton, 39% polyester;<br />Lining: 58% cotton, 42% polyester.
                    </li>
                  </ul>
                </div>
                <div className="product-variants">
                  <div className="product-variants-item">
                    <span className="control-label">Size</span>
                    <select className="form-control form-control-select">
                      <option value={1} title="S" selected="selected">S</option>
                      <option value={2} title="M">M</option>
                      <option value={3} title="L">L</option>
                      <option value={4} title="XL">XL</option>
                    </select>
                  </div>
                  <div className="product-variants-item">
                    <span className="control-label">color</span>
                    <ul>
                      <li className="input-container">
                        <label>
                          <input className="input-color" type="checkbox" />
                          <span className="color" />
                        </label>
                      </li>
                      <li className="input-container">
                        <label>
                          <input className="input-color" type="checkbox" defaultChecked="checked" />
                          <span className="color" />
                        </label>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="product-add-to-cart">
                  <span className="control-label">Quantity</span>
                  <div className="product-count style d-flex my-4">
                    <div className="count d-flex">
                      <input type="number" min={1} max={100} step={1} defaultValue={1} />
                      <div className="button-group">
                        <button className="count-btn increment">
                          <span className="las la-angle-up" />
                        </button>
                        <button className="count-btn decrement">
                          <span className="las la-angle-down" />
                        </button>
                      </div>
                    </div>
                    <div>
                      <button data-bs-toggle="modal" data-bs-target="#add-to-cart" className="modal-add-to-cart-btn">
                        Add to cart
                      </button>
                    </div>
                  </div>
                  <div className="product-add-to-card">
                    <a className="product-add-to-card-item" href="#"><i className="lar la-heart" /> Add to wishlist</a>
                    <a className="product-add-to-card-item" href="#"><i className="las la-sync" /> My wishlist</a>
                  </div>
                  <div className="product-social-sharing">
                    <span>Share</span>
                    <ul>
                      <li className="facebook"><a href="#" target="_blank"><i className="lab la-facebook-f" /></a></li>
                      <li className="twitter"><a href="#" target="_blank"><i className="lab la-twitter" /></a></li>
                      <li className="pinterest"><a href="#" target="_blank"><i className="lab la-pinterest" /></a></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* Modal */}
  <div className="modal fade" id="product-modal-compare">
    <div className="modal-dialog modal-dialog-centered compare-modal-dialog">
      <div className="modal-content">
        <div className="modal-header">
          <button type="button" className="btn-close" data-bs-dismiss="modal" />
        </div>
        <div className="modal-body">
          <p> <i className="las la-check" /> Product added to compare.</p>
        </div>
      </div>
    </div>
  </div>
  {/* Modal */}
  <div className="modal fade" id="product-modal-wishlist">
    <div className="modal-dialog modal-dialog-centered wishlist-modal-dialog">
      <div className="modal-content">
        <div className="modal-header">
          <button type="button" className="btn-close" data-bs-dismiss="modal" />
        </div>
        <div className="modal-body">
          <p> You must be logged in to manage your wishlist.</p>
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
                    <li>€23.06</li>
                    <li>Color: White</li>
                    <li>Quantity:1</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-lg-7">
              <div className="cart-content">
                <p className="title">There are 3 items in your cart.</p>
                <p><span>Total products:</span>€23.06</p>
                <p><span>Total shipping:</span>Free</p>
                <p><span>Taxes:</span> €0.00</p>
                <p><span>Total:</span> €23.06 (tax excl.)</p>
                <div className="cart-content-btn">
                  <button className="btn btn-sm btn-dark me-1 mt-3 mt-sm-0" data-bs-dismiss="modal">Continue
                    shopping</button>
                  <button className="btn btn-sm btn-dark mt-3 mt-sm-0">Proceed to
                    checkout</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

    </div>
  )
}

export default Order