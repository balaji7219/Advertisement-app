import React from "react";

import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="land-container footer-background container">
        <footer id="footer" className="footer-1 me-auto py-1">
          <div className="row ">
            <div className="col-lg-3 col-md-4 col-sm-6 col-12">
              <div className="row">
                <div className="px-md-5 px-0 mb-2 mb-md-0">
                  <img
                    alt=""
                    src="http://192.168.29.2:8000/front_img/icon/logo.svg"
                    width="220"
                    className="d-inline-block align-top mt-1 f-logo"
                  />
                  <p className="px-2" style={{ color: "rgb(36, 12, 12)" }}>
                    Right People, Right Platform.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-9 col-md-8 col-12">
              <div className="row">
                <div className="col-lg-3 col-md-3 col-sm-6 col-12">
                  <div>
                    <h5 className="footer-title">About</h5>
                    <ul className="footer-ul">
                      <li>
                        <a href="/#.">Contact Us</a>
                      </li>
                      <li>
                        <a href="/#.">About Us</a>
                      </li>
                      <li>
                        <a href="/#.">Sell On Letmegrab</a>
                      </li>
                      <li>
                        <a href="/#.">Letmegrab Stories</a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-lg-3 col-md-3 col-sm-6 col-12">
                  <div>
                    <h5 className="footer-title">Help</h5>
                    <ul className="footer-ul">
                      <li>
                        <a href="/helpSupport">Help &amp; Support</a>
                      </li>
                      <li>
                        <a href="/#.">Payment</a>
                      </li>
                      <li>
                        <a href="/#.">Cancellation &amp; Return</a>
                      </li>
                      <li>
                        <a href="/#.">FAQ</a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-lg-3 col-md-3 col-sm-6 col-12">
                  <div>
                    <h5 className="footer-title">Policy</h5>
                    <ul className="footer-ul">
                      <li>
                        <a href="/#.">Terms &amp; Condition</a>
                      </li>
                      <li>
                        <a href="/#.">Security</a>
                      </li>
                      <li>
                        <a href="/#.">Privacy Policy</a>
                      </li>
                      <li>
                        <a href="/#.">Return Policy</a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-lg-3 col-md-3 col-sm-6 col-12">
                  <div>
                    <h5 className="footer-title">Information</h5>
                    <ul className="footer-ul">
                      <li>
                        <div className="d-flex align-items-center">
                          <div>
                            <svg
                              stroke="currentColor"
                              fill="#696969"
                              strokeWidth="0"
                              viewBox="0 0 24 24"
                              height="1em"
                              width="1em"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path fill="none" d="M0 0h24v24H0V0z"></path>
                              <path d="M17 1.01L7 1c-1.1 0-2 .9-2 2v18c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V3c0-1.1-.9-1.99-2-1.99zM17 19H7V5h10v14z"></path>
                            </svg>
                          </div>
                          <div>
                            <a
                              className="footer-text px-1"
                              href="tel:+91 88888 00000"
                            >
                              +47 333 78 901
                            </a>
                          </div>
                        </div>
                      </li>
                      <li>
                        <div className="d-flex align-items-center">
                          <div>
                            <svg
                              stroke="currentColor"
                              fill="#696969"
                              strokeWidth="0"
                              viewBox="0 0 24 24"
                              height="1em"
                              width="1em"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path fill="none" d="M0 0h24v24H0V0z"></path>
                              <path d="M22 6c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6zm-2 0l-8 4.99L4 6h16zm0 12H4V8l8 5 8-5v10z"></path>
                            </svg>
                          </div>
                          <div>
                            <a
                              href="mailto: support@letmegrab.com"
                              className="footer-text px-1"
                            >
                              support@letmegrab.com
                            </a>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </footer>
  );
};

export default Footer;
