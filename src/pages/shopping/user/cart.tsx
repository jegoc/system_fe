import React, { useState, useEffect } from 'react';
import { 
  Container, 
  Card,
  Row,
  Col,
  Alert,
  Button
} from 'react-bootstrap';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { Link } from 'react-router-dom';
import Sidebar  from './../../common/sidebar';
import booking from '../../images/products/post-thumb-1.jpg';
import shopping from '../../images/products/product-thumb-11.jpg';
import billing from '../../images/products/thumb-tuna.jpg';
import enrollment from '../../images/products/post-thumb-2.jpg';
import produc from '../../images/products/product-thumb-12.jpg';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import { SiSearxng } from "react-icons/si";

import { FaCartPlus } from "react-icons/fa6";
import { IoStarSharp } from "react-icons/io5";
import './css/shop.css';

const LoginSchema = Yup.object().shape({
  email: Yup
    .string()
    .email('Invalid email')
    .required('Email is required!'),
  password: Yup
    .string()
    .required('Password is required!'),
});

const Shop: React.FC = () =>{
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

  const handleSubmit = (values: any) => {
    const { email, password } = values;
    // Perform login action
  };

  return (
    <Formik
          initialValues={{ email: '', password: '' }}
          validationSchema={LoginSchema}
          onSubmit={handleSubmit}
        >
          {({ errors, touched }) => (
    <Container fluid data-bs-theme="dark" >
        <Row>
          <Col >      
            <Sidebar  />
          </Col>
          <Col xs={12} className={`mt-5 pt-4 ${isSmallScreen ? '' : 'ps-5'}`}> {/* Conditional rendering for ps-5 class */}
            <div style={{width:"400px"}}></div>
              <div className={`mt-3 ${isSmallScreen ? '' : 'ms-4 me-1'}`}> {/* Conditional rendering for ms-4 class */}

            {/* <Form>
                <Alert variant='dark' className='text-light'>
                <Row >
                    <Col>
                        <FloatingLabel
                            controlId="floatingInput"
                            label="Search"
                            className="mb-3"
                        >
                        <Field
                            type="search"
                            name="email"
                            placeholder="Search"
                            className={`w-100 form-control ${touched.email && errors.email ? 'is-invalid' : touched.email ? 'is-valid' : ''}`}
                        />
                        <ErrorMessage name="email">
                            {msg => <div className="invalid-feedback">{msg}</div>}
                        </ErrorMessage>
                        </FloatingLabel>
                    </Col>
                </Row>
                </Alert>
            </Form> */}
            
<Row >
<Col>
    <div className="col-sm-6 offset-sm-2 offset-md-0 col-lg-12 ps-3 pe-3 d-lg-block">
            <div className="search-bar row bg-dark p-2 pt-3 my-2 rounded-2">
              <div className="col-md-2  d-md-block">
                <select className="form-select border-0">
                  <option>All Categories</option>
                  <option>Groceries</option>
                  <option>Drinks</option>
                  <option>Chocolates</option>
                </select>
              </div>
              <div className="col-10 col-md-9">
              <Field
                            type="text"
                            name="email"
                            className="form-control border-0 bg-transparent" placeholder="Search for more products!"
                            // className={`w-100 form-control ${touched.email && errors.email ? 'is-invalid' : touched.email ? 'is-valid' : ''}`}
                        />
                {/* <form id="search-form" className="text-center" action="index.html" method="post">
                  <input type="text" className="form-control border-0 bg-transparent" placeholder="Search for more products!" />
                </form> */}
              </div>
              <div className="col-1 col-md-1">
                <Button variant="" type="submit" className='text-light'>
                    <SiSearxng size="25" />
                </Button>
              </div>
            </div>
          </div>
</Col>
</Row>

                <Row xs={1} md={6} className="g-1 m-1">
                  <Col>
                    <Card className="m-1 rounded shadow-lg zoom-image">
                        <Link to="/booking_menu" style={{ textDecoration: 'none'}} className='text-light'>
                            <Card.Img variant="top" src={booking} height="200px"  />
                        </Link>
                        <Card.Body>
                            <Card.Title>
                                <div className="d-flex align-items-center justify-content-between">
                                    <span className="text-secondary fs-6">Citrus Fruits</span>
                                </div>
                                <div className="d-flex align-items-center justify-content-between mt-2">
                                    <>&nbsp;</>
                                    <div>
                                        ₱ 100.00
                                    </div>
                                </div>
                            </Card.Title>
                        </Card.Body>
                        <Card.Footer>
                            <div className="d-flex align-items-center justify-content-between">
                                <Link to="/login" style={{ textDecoration: 'none'}} className='text-light'>
                                            <IoStarSharp size='20' style={{ color: 'rgb(255, 196, 63)'}}/> 5.0
                                        </Link>
                                <Link to="/login" style={{ textDecoration: 'none'}} className='text-info'>
                                    <FaCartPlus size='20' className='text-info' /> Add to Cart
                                </Link>
                            </div>
                        </Card.Footer>
                    </Card>
                  </Col>

                  <Col>
                    <Card className="m-1 rounded shadow-lg zoom-image">
                        <Link to="/booking_menu" style={{ textDecoration: 'none'}} className='text-light'>
                            <Card.Img variant="top" src={shopping} height="200px" />
                        </Link>
                        <Card.Body>
                            <Card.Title>
                                <div className="d-flex align-items-center justify-content-between">
                                    <span className="text-secondary fs-6">Honey</span>
                                </div>
                                <div className="d-flex align-items-center justify-content-between mt-2">
                                    <>&nbsp;</>
                                    <div>
                                        ₱ 100.00
                                    </div>
                                </div>
                            </Card.Title>
                        </Card.Body>
                        <Card.Footer>
                            <div className="d-flex align-items-center justify-content-between">
                                <Link to="/login" style={{ textDecoration: 'none'}} className='text-light'>
                                            <IoStarSharp size='20' style={{ color: 'rgb(255, 196, 63)'}}/> 5.0
                                        </Link>
                                <Link to="/login" style={{ textDecoration: 'none'}} className='text-info'>
                                    <FaCartPlus size='20' className='text-info' /> Add to Cart
                                </Link>
                            </div>
                        </Card.Footer>
                    </Card>
                  </Col>

                  <Col>
                    <Card className="m-1 rounded shadow-lg zoom-image">
                        <Link to="/booking_menu" style={{ textDecoration: 'none'}} className='text-light'>
                            <Card.Img variant="top" src={billing} height="200px" />
                        </Link>
                        <Card.Body>
                            <Card.Title>
                                <div className="d-flex align-items-center justify-content-between">
                                    <span className="text-secondary fs-6">Tuna</span>
                                </div>
                                <div className="d-flex align-items-center justify-content-between mt-2">
                                    <>&nbsp;</>
                                    <div>
                                        ₱ 100.00
                                    </div>
                                </div>
                            </Card.Title>
                        </Card.Body>
                        <Card.Footer>
                            <div className="d-flex align-items-center justify-content-between">
                                <Link to="/login" style={{ textDecoration: 'none'}} className='text-light'>
                                            <IoStarSharp size='20' style={{ color: 'rgb(255, 196, 63)'}}/> 5.0
                                        </Link>
                                <Link to="/login" style={{ textDecoration: 'none'}} className='text-info'>
                                    <FaCartPlus size='20' className='text-info' /> Add to Cart
                                </Link>
                            </div>
                        </Card.Footer>
                    </Card>
                  </Col>

                  <Col>
                    <Card className="m-1 rounded shadow-lg zoom-image">
                        <Link to="/booking_menu" style={{ textDecoration: 'none'}} className='text-light'>
                            <Card.Img variant="top" src={enrollment} height="200px" />
                        </Link>
                        <Card.Body>
                            <Card.Title>
                                <div className="d-flex align-items-center justify-content-between">
                                    <span className="text-secondary fs-6">Cashew Butter</span>
                                </div>
                                <div className="d-flex align-items-center justify-content-between mt-2">
                                    <>&nbsp;</>
                                    <div>
                                        ₱ 100.00
                                    </div>
                                </div>
                            </Card.Title>
                        </Card.Body>
                        <Card.Footer>
                            <div className="d-flex align-items-center justify-content-between">
                                <Link to="/login" style={{ textDecoration: 'none'}} className='text-light'>
                                            <IoStarSharp size='20' style={{ color: 'rgb(255, 196, 63)'}}/> 5.0
                                        </Link>
                                <Link to="/login" style={{ textDecoration: 'none'}} className='text-info'>
                                    <FaCartPlus size='20' className='text-info' /> Add to Cart
                                </Link>
                            </div>
                        </Card.Footer>
                    </Card>
                  </Col>

                  <Col>
                    <Card className="m-1 rounded shadow-lg zoom-image">
                        <Link to="/booking_menu" style={{ textDecoration: 'none'}} className='text-light'>
                            <Card.Img variant="top" src={produc} height="200px" />
                        </Link>
                        <Card.Body>
                            <Card.Title>
                                <div className="d-flex align-items-center justify-content-between">
                                    <span className="text-secondary fs-6">Spices</span>
                                </div>
                                <div className="d-flex align-items-center justify-content-between mt-2">
                                    <>&nbsp;</>
                                    <div>
                                        ₱ 100.00
                                    </div>
                                </div>
                            </Card.Title>
                        </Card.Body>
                        <Card.Footer>
                            <div className="d-flex align-items-center justify-content-between">
                                <Link to="/login" style={{ textDecoration: 'none'}} className='text-light'>
                                            <IoStarSharp size='20' style={{ color: 'rgb(255, 196, 63)'}}/> 5.0
                                        </Link>
                                <Link to="/login" style={{ textDecoration: 'none'}} className='text-info'>
                                    <FaCartPlus size='20' className='text-info' /> Add to Cart
                                </Link>
                            </div>
                        </Card.Footer>
                    </Card>
                  </Col>

                  <Col>
                    <Card className="m-1 rounded shadow-lg zoom-image">
                        <Link to="/booking_menu" style={{ textDecoration: 'none'}} className='text-light'>
                            <Card.Img variant="top" src={produc} height="200px" />
                        </Link>
                        <Card.Body>
                            <Card.Title>
                                <div className="d-flex align-items-center justify-content-between">
                                    <span className="text-secondary fs-6">Spices</span>
                                </div>
                                <div className="d-flex align-items-center justify-content-between mt-2">
                                    <>&nbsp;</>
                                    <div>
                                        ₱ 100.00
                                    </div>
                                </div>
                            </Card.Title>
                        </Card.Body>
                        <Card.Footer>
                            <div className="d-flex align-items-center justify-content-between">
                                <Link to="/login" style={{ textDecoration: 'none'}} className='text-light'>
                                            <IoStarSharp size='20' style={{ color: 'rgb(255, 196, 63)'}}/> 5.0
                                        </Link>
                                <Link to="/login" style={{ textDecoration: 'none'}} className='text-info'>
                                    <FaCartPlus size='20' className='text-info' /> Add to Cart
                                </Link>
                            </div>
                        </Card.Footer>
                    </Card>
                  </Col>
                </Row>

                <Row xs={1} md={5} className="g-1 m-1">
                  <Col>
                    <Card className="m-1 rounded shadow-lg zoom-image">
                        <Link to="/booking_menu" style={{ textDecoration: 'none'}} className='text-light'>
                            <Card.Img variant="top" src={booking} height="200px"  />
                        </Link>
                        <Card.Body>
                            <Card.Title>
                                <div className="d-flex align-items-center justify-content-between">
                                    <span className="text-secondary fs-6">Citrus Fruits</span>
                                </div>
                                <div className="d-flex align-items-center justify-content-between mt-2">
                                    <>&nbsp;</>
                                    <div>
                                        ₱ 100.00
                                    </div>
                                </div>
                            </Card.Title>
                        </Card.Body>
                        <Card.Footer>
                            <div className="d-flex align-items-center justify-content-between">
                                <Link to="/login" style={{ textDecoration: 'none'}} className='text-light'>
                                            <IoStarSharp size='20' style={{ color: 'rgb(255, 196, 63)'}}/> 5.0
                                        </Link>
                                <Link to="/login" style={{ textDecoration: 'none'}} className='text-info'>
                                    <FaCartPlus size='20' className='text-info' /> Add to Cart
                                </Link>
                            </div>
                        </Card.Footer>
                    </Card>
                  </Col>

                  <Col>
                    <Card className="m-1 rounded shadow-lg zoom-image">
                        <Link to="/booking_menu" style={{ textDecoration: 'none'}} className='text-light'>
                            <Card.Img variant="top" src={shopping} height="200px" />
                        </Link>
                        <Card.Body>
                            <Card.Title>
                                <div className="d-flex align-items-center justify-content-between">
                                    <span className="text-secondary fs-6">Honey</span>
                                </div>
                                <div className="d-flex align-items-center justify-content-between mt-2">
                                    <>&nbsp;</>
                                    <div>
                                        ₱ 100.00
                                    </div>
                                </div>
                            </Card.Title>
                        </Card.Body>
                        <Card.Footer>
                            <div className="d-flex align-items-center justify-content-between">
                                <Link to="/login" style={{ textDecoration: 'none'}} className='text-light'>
                                            <IoStarSharp size='20' style={{ color: 'rgb(255, 196, 63)'}}/> 5.0
                                        </Link>
                                <Link to="/login" style={{ textDecoration: 'none'}} className='text-info'>
                                    <FaCartPlus size='20' className='text-info' /> Add to Cart
                                </Link>
                            </div>
                        </Card.Footer>
                    </Card>
                  </Col>

                  <Col>
                    <Card className="m-1 rounded shadow-lg zoom-image">
                        <Link to="/booking_menu" style={{ textDecoration: 'none'}} className='text-light'>
                            <Card.Img variant="top" src={billing} height="200px" />
                        </Link>
                        <Card.Body>
                            <Card.Title>
                                <div className="d-flex align-items-center justify-content-between">
                                    <span className="text-secondary fs-6">Tuna</span>
                                </div>
                                <div className="d-flex align-items-center justify-content-between mt-2">
                                    <>&nbsp;</>
                                    <div>
                                        ₱ 100.00
                                    </div>
                                </div>
                            </Card.Title>
                        </Card.Body>
                        <Card.Footer>
                            <div className="d-flex align-items-center justify-content-between">
                                <Link to="/login" style={{ textDecoration: 'none'}} className='text-light'>
                                            <IoStarSharp size='20' style={{ color: 'rgb(255, 196, 63)'}}/> 5.0
                                        </Link>
                                <Link to="/login" style={{ textDecoration: 'none'}} className='text-info'>
                                    <FaCartPlus size='20' className='text-info' /> Add to Cart
                                </Link>
                            </div>
                        </Card.Footer>
                    </Card>
                  </Col>

                  <Col>
                    <Card className="m-1 rounded shadow-lg zoom-image">
                        <Link to="/booking_menu" style={{ textDecoration: 'none'}} className='text-light'>
                            <Card.Img variant="top" src={enrollment} height="200px" />
                        </Link>
                        <Card.Body>
                            <Card.Title>
                                <div className="d-flex align-items-center justify-content-between">
                                    <span className="text-secondary fs-6">Cashew Butter</span>
                                </div>
                                <div className="d-flex align-items-center justify-content-between mt-2">
                                    <>&nbsp;</>
                                    <div>
                                        ₱ 100.00
                                    </div>
                                </div>
                            </Card.Title>
                        </Card.Body>
                        <Card.Footer>
                            <div className="d-flex align-items-center justify-content-between">
                                <Link to="/login" style={{ textDecoration: 'none'}} className='text-light'>
                                            <IoStarSharp size='20' style={{ color: 'rgb(255, 196, 63)'}}/> 5.0
                                        </Link>
                                <Link to="/login" style={{ textDecoration: 'none'}} className='text-info'>
                                    <FaCartPlus size='20' className='text-info' /> Add to Cart
                                </Link>
                            </div>
                        </Card.Footer>
                    </Card>
                  </Col>

                  <Col>
                    <Card className="m-1 rounded shadow-lg zoom-image">
                        <Link to="/booking_menu" style={{ textDecoration: 'none'}} className='text-light'>
                            <Card.Img variant="top" src={produc} height="200px" />
                        </Link>
                        <Card.Body>
                            <Card.Title>
                                <div className="d-flex align-items-center justify-content-between">
                                    <span className="text-secondary fs-6">Spices</span>
                                </div>
                                <div className="d-flex align-items-center justify-content-between mt-2">
                                    <>&nbsp;</>
                                    <div>
                                        ₱ 100.00
                                    </div>
                                </div>
                            </Card.Title>
                        </Card.Body>
                        <Card.Footer>
                            <div className="d-flex align-items-center justify-content-between">
                                <Link to="/login" style={{ textDecoration: 'none'}} className='text-light'>
                                            <IoStarSharp size='20' style={{ color: 'rgb(255, 196, 63)'}}/> 5.0
                                        </Link>
                                <Link to="/login" style={{ textDecoration: 'none'}} className='text-info'>
                                    <FaCartPlus size='20' className='text-info' /> Add to Cart
                                </Link>
                            </div>
                        </Card.Footer>
                    </Card>
                  </Col>
                </Row>





              </div>
          </Col> 
      </Row>
    </Container>
     )}
    </Formik>
  );
};

export default Shop;