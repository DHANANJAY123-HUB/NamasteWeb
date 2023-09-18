import React from 'react'

function Downloadapp() {
  return (
    <div>
       <section className="news-letter-sectoin bg-success">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-8 col-xl-9">
              <div className="news-letter-wrap">
                <div className="news-letter-title">
                  <h3 className="title">DOWNLOAD OUR APP</h3>
                  <p>Download now to get more offers.</p>
                </div>
                {/* <form id="mc-form" class="news-letter-form" action="#">
							<input id="mc-email" class="form-control" name="email" type="email" placeholder="Your email address">
							<button class="sign-up-btn" type="submit">Sign up</button>
						</form> */}
              </div>
            </div>
            <div className="col-lg-4 col-xl-3">
              <div className="text-center text-lg-end mt-7 mt-lg-0">
                <a className="store-btn" href="#">
                  <img src="assets/images/icon/app_store.png" alt="images_not_found" />
                </a>
                <a className="store-btn" href="#">
                  <img src="assets/images/icon/google_play.png" alt="images_not_found" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Downloadapp
