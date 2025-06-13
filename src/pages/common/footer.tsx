import React, { useState, useEffect } from 'react';
import logo from '../../images/logo.png';
import {
    Col,
  } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FaFacebookF, FaTwitter, FaGoogle, FaInstagram, FaLinkedin, FaGithub, FaHome, FaEnvelope, FaPhoneAlt, FaMobileAlt } from "react-icons/fa";

const Footer: React.FC = () =>{
    const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth <= 768);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

    return (
        <div className='pt-5' data-bs-theme="dark">
            <Col xs={12} className={` ${isSmallScreen ? '' : 'ps-4'}`}>
                <div className={`${isSmallScreen ? '' : 'ms-4 me-1'}`}> 
                <footer className="text-center text-lg-start bg-body-tertiary text-muted">
                    <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
                        <div className="me-5 d-none d-lg-block">
                            <span>Get connected with us on social networks:</span>
                        </div>
                        <div>
                            <a href="#" className="me-4 text-reset">
                                <FaFacebookF  size="20"/>
                            </a>
                            {/* <a href="#" className="me-4 text-reset">
                                <FaTwitter size="20"/>
                            </a> */}
                            <a href="#" className="me-4 text-reset">
                                <FaGoogle  size="20"/>
                            </a>
                            <a href="#" className="me-4 text-reset">
                                <FaInstagram  size="20"/>
                            </a>
                            <a href="#" className="me-4 text-reset">
                                <FaLinkedin  size="20"/>
                            </a>
                            <a href="#" className="me-4 text-reset">
                                <FaGithub  size="20"/>
                            </a>
                        </div>
                    </section>

                    <section className="">
                        <div className="container text-center text-md-start mt-5">
                        <div className="row mt-3">
                            <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                            <h6 className="text-uppercase fw-bold mb-4">
                            <img src={`${logo}`} alt="" width="40" height="40"/> Pears Portal
                            </h6>
                            <p>
                                Pears Portal is dedicated to help organization and professionals manage their business. 
                                We believe that everyone should have access to information, services, products and more.
                            </p>
                            </div>
                            <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                                <h6 className="text-uppercase fw-bold mb-4">
                                    Services
                                </h6>
                                <p>
                                    <Link to="/contact" onClick={() => window.scrollTo(0, 0)} style={{ textDecoration: 'none'}} className='text-light'>Web Development</Link>
                                </p>
                                <p>
                                    <Link to="/contact" onClick={() => window.scrollTo(0, 0)} style={{ textDecoration: 'none'}} className='text-light'>Mobile App</Link>
                                </p>
                                <p>
                                    <Link to="/contact" onClick={() => window.scrollTo(0, 0)} style={{ textDecoration: 'none'}} className='text-light'>Digital Marketing</Link>
                                </p>
                                <p>
                                    <Link to="/contact" onClick={() => window.scrollTo(0, 0)} style={{ textDecoration: 'none'}} className='text-light'>Maintenance & Support</Link>
                                </p>
                            </div>
                            <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                                <h6 className="text-uppercase fw-bold mb-4">
                                    Useful links
                                </h6>
                                <p>
                                    <Link to="/faq" onClick={() => window.scrollTo(0, 0)} style={{ textDecoration: 'none'}} className='text-light'>FAQ</Link>
                                </p>
                                <p>
                                    <Link to="/feedback" onClick={() => window.scrollTo(0, 0)} style={{ textDecoration: 'none'}} className='text-light'>Feedback</Link>
                                </p>
                                <p>
                                    <Link to="/about" onClick={() => window.scrollTo(0, 0)} style={{ textDecoration: 'none'}} className='text-light'>About Us</Link>
                                </p>
                            </div>
                            <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                            <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
                            <p><FaHome size="20"/> Block 21, Lot 6, Casa Mira - Linao</p>
                            <p>
                            <FaEnvelope size="20"/> josephbryan1987@gmail.com
                            </p>
                            <p><FaMobileAlt size="20"/>  +63 920 5305 200</p>
                            <p><FaPhoneAlt size="20"/> +032 272 6752</p>
                            </div>
                        </div>
                        </div>
                    </section>

                    <div className="text-center p-4" style={{backgroundColor: 'rgba(0, 0, 0, 0.05)'}}>
                        &copy; Copyright. All Rights Reserved<br/>
                        Developed and Maintained by : &nbsp;
                        <a href='https://pearsportal.com/' style={{ textDecoration: 'none', color:'white'}}>Pears Portal</a>
                    </div>
                </footer>
            </div>
        </Col>
    </div>
    )
}

export default Footer;