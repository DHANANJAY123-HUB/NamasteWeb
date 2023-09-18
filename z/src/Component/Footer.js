import React from 'react'

function Footer() {
  return (
    <div>
      <footer className="footer">
        <div className="container">
          <div className="row mb-n7">
            <div className="col-lg-4 col-sm-6 mb-7">
              <div className="footer-widget">
                <a className="footer-brand" href="index.html">
                  <img src="assets/images/logo/logo-dark.png" alt="images_not_found" />
                </a>
                <p>
                  We are a team of designers and developers that create high
                  quality Magento, Prestashop, Opencart.
                </p>
                <ul className="footer-des">
                  <li className="footer-des-list">
                    <i className="las la-map-marked" />
                    <span>4710-4890 Breckinridge USA</span>
                  </li>
                  <li className="footer-des-list">
                    <i className="las la-envelope-open" />
                    <a href="mailto:demo@hasthemes.com">demo@hasthemes.com</a>
                  </li>
                  <li className="footer-des-list">
                    <i className="las la-phone-volume" />
                    <a href="tel:+11238889999">+1 123 888 9999</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-2 col-sm-6 mb-7">
              <div className="footer-widget">
                <h4 className="title">Information</h4>
                <ul className="footer-menu">
                  <li className="footer-menu-items">
                    <a className="footer-menu-link" href="#">Delivery</a>
                  </li>
                  <li className="footer-menu-items">
                    <a className="footer-menu-link" href="about-us.html">About us</a>
                  </li>
                  <li className="footer-menu-items">
                    <a className="footer-menu-link" href="contact-us.html">Contact us</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-2 col-sm-6 mb-7">
              <div className="footer-widget">
                <h4 className="title">Information</h4>
                <ul className="footer-menu">
                  <li className="footer-menu-items">
                    <a className="footer-menu-link" href="#">Legal Notice</a>
                  </li>
                  <li className="footer-menu-items">
                    <a className="footer-menu-link" href="#">New products</a>
                  </li>
                  <li className="footer-menu-items">
                    <a className="footer-menu-link" href="#">Best sales</a>
                  </li>
                  <li className="footer-menu-items">
                    <a className="footer-menu-link" href="login.html">Login</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-2 col-sm-6 mb-7">
              <div className="footer-widget">
                <h4 className="title">Information</h4>
                <ul className="footer-menu">
                  <li className="footer-menu-items">
                    <a className="footer-menu-link" href="#"> About us</a>
                  </li>
                  <li className="footer-menu-items">
                    <a className="footer-menu-link" href="#">Privecy&amp; Policy</a>
                  </li>
                  <li className="footer-menu-items">
                    <a className="footer-menu-link" href="#">Addresses</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-2 col-sm-6 mb-7">
              <div className="footer-widget">
                <h4 className="title">Information</h4>
                <div className="social-links social-links-dark">
                  <a className="social-link facebook" href="#"><i className="lab la-facebook" /></a>
                  <a className="social-link twitter" href="#"><i className="lab la-twitter" /></a>
                  <a className="social-link youtube" href="#"><i className="lab la-youtube" /></a>
                  <a className="social-link instagram" href="#"><i className="lab la-instagram" /></a>
                </div>
                <a className="footer-payment" href="#">
                  <img src="assets/images/payment/payment.png" alt="images_not_found" />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="copy-right bg-dark">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <p>
                  © <span id="currentYear" /> Made With
                  <i className="las la-heart" /> By
                  <a href="https://Namasteasianfood.com/">Namaste Asian Food</a>
                  All Rights Reserved
                </p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Footer
