import React, { useState, useEffect } from 'react';
import { 
  Container, 
  Card,
  Row,
  Col,
  Alert,
  Button,
  Image,
} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Sidebar  from './sidebar';
import booking from '../../images/booking.jpg';
import shopping from '../../images/shopping.jpg';
import billing from '../../images/billing.jpg';
import dtr from '../../images/dtr.jpg';
import payroll from '../../images/payroll.png';
import enrollment from '../../images/enrollment.jpg';
import linao from '../../images/linao.png';
import south from '../../images/south.png';
import sched from '../../images/sched.png';
import addition from '../../images/addition.png';
import subtraction from '../../images/subtraction.png';
import multiplication from '../../images/multiplication.png';
import division from '../../images/division.png';
import text from '../../images/text.png';
import ordering from '../../images/ordering.png';
import inventory from '../../images/inventory.png';
import avatar from '../../images/me.jpg'; 
import { FaLinkedin } from "react-icons/fa";
import { FaFilePdf } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import './css/common.css';

const Home: React.FC = () =>{
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setAnimate(true), 100); // delay start
    return () => clearTimeout(timer);
  }, []);

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
    <Container fluid data-bs-theme="dark">
        <Row>
          <Col >      
            <Sidebar  />
          </Col>
          <Col xs={12} className={`mt-5 pt-4 ${isSmallScreen ? '' : 'ps-5'}`}> {/* Conditional rendering for ps-5 class */}
            <div style={{width:"400px"}}></div>
              <div className={`mt-3 ${isSmallScreen ? '' : 'ms-4 me-1'}`}> {/* Conditional rendering for ms-4 class */}

                

                <Row xs={1} md={4} className="g-1 m-1">
                  <Col>
                    <Card className="m-1 rounded shadow-lg zoom-image">
                      <Link to="/booking_menu" onClick={() => window.scrollTo(0, 0)} style={{ textDecoration: 'none'}} className='text-light'>
                        <Card.Img variant="top" src={booking} height="200px" />
                        <Card.Body>
                          <Card.Title>Booking Calendar</Card.Title>
                        </Card.Body>
                        <Card.Footer>
                          <small className="text-muted">Booking system for your business</small>
                        </Card.Footer>
                      </Link>
                    </Card>
                  </Col>

                  <Col>
                    <Card className="m-1 rounded shadow-lg zoom-image">
                      <Link to="/shop" onClick={() => window.scrollTo(0, 0)} style={{ textDecoration: 'none'}} className='text-light'>
                        <Card.Img variant="top" src={shopping} height="200px" />
                        <Card.Body>
                          <Card.Title>Shopping Cart</Card.Title>
                        </Card.Body>
                        <Card.Footer>
                          <small className="text-muted">Online shopping for your store</small>
                        </Card.Footer>
                      </Link>
                    </Card>
                  </Col>

                  <Col>
                    <Card className="m-1 rounded shadow-lg zoom-image">
                      <Link to="https://billing.pearsportal.com/" onClick={() => window.scrollTo(0, 0)} style={{ textDecoration: 'none'}} className='text-light'>
                        <Card.Img variant="top" src={billing} height="200px" />
                        <Card.Body>
                          <Card.Title>Billing System</Card.Title>
                        </Card.Body>
                        <Card.Footer>
                          <small className="text-muted">Generate your bills</small>
                        </Card.Footer>
                      </Link>
                    </Card>
                  </Col>

                  <Col>
                    <Card className="m-1 rounded shadow-lg zoom-image">
                      <Link to="/enroll" onClick={() => window.scrollTo(0, 0)} style={{ textDecoration: 'none'}} className='text-light'>
                        <Card.Img variant="top" src={enrollment} height="200px" />
                        <Card.Body>
                          <Card.Title>Online Enrollment</Card.Title>
                        </Card.Body>
                        <Card.Footer>
                          <small className="text-muted">School record online</small>
                        </Card.Footer>
                      </Link>
                    </Card>
                  </Col>
                </Row>

                <Row xs={1} md={4} className="g-1 m-1">
                  <Col>
                    <Card className="m-1 rounded shadow-lg zoom-image">
                      <Link to="/#" onClick={() => window.scrollTo(0, 0)} style={{ textDecoration: 'none'}} className='text-light'>
                        <Card.Img variant="top" src={inventory} height="200px" />
                        <Card.Body>
                          <Card.Title>Inventory</Card.Title>
                        </Card.Body>
                        <Card.Footer>
                          <small className="text-muted">Inventory Managment System</small>
                        </Card.Footer>
                      </Link>
                    </Card>
                  </Col>

                  <Col>
                    <Card className="m-1 rounded shadow-lg zoom-image">
                      <Link to="/#" onClick={() => window.scrollTo(0, 0)} style={{ textDecoration: 'none'}} className='text-light'>
                        <Card.Img variant="top" src={ordering} height="200px" />
                        <Card.Body>
                          <Card.Title>Order System</Card.Title>
                        </Card.Body>
                        <Card.Footer>
                          <small className="text-muted">Restaurant ordering system</small>
                        </Card.Footer>
                      </Link>
                    </Card>
                  </Col>
                  
                  <Col>
                    <Card className="m-1 rounded shadow-lg zoom-image">
                      <Link to="/#" onClick={() => window.scrollTo(0, 0)} style={{ textDecoration: 'none'}} className='text-light'>
                        <Card.Img variant="top" src={dtr} height="200px" />
                        <Card.Body>
                          <Card.Title>DTR</Card.Title>
                        </Card.Body>
                        <Card.Footer>
                          <small className="text-muted">Daily time record</small>
                        </Card.Footer>
                      </Link>
                    </Card>
                  </Col>

                  <Col>
                    <Card className="m-1 rounded shadow-lg zoom-image">
                      <Link to="/#" onClick={() => window.scrollTo(0, 0)} style={{ textDecoration: 'none'}} className='text-light'>
                        <Card.Img variant="top" src={payroll} height="200px" />
                        <Card.Body>
                          <Card.Title>Payroll System</Card.Title>
                        </Card.Body>
                        <Card.Footer>
                          <small className="text-muted">Payslip and more</small>
                        </Card.Footer>
                      </Link>
                    </Card>
                  </Col>


                </Row>

                <Alert variant="white" className='text-light mt-5'>
                    <Alert.Heading>Projects</Alert.Heading>
                    <hr />
                </Alert>
                
                <Row>
                  <Col xs={6} md={2} className='text-center text-light mb-5'>
                    <Card className="m-1 rounded shadow-lg"   style={{background:'transparent', border:'none'}}>
                      <Link to="https://billing.pearsportal.com/" style={{ textDecoration: 'none'}} className='text-light'>
                        <Card.Img variant="top" src={linao} height="150px" className='mt-3' />
                        <Card.Body>
                          <Card.Title>Billing System</Card.Title>
                        </Card.Body>
                        <Card.Footer>
                          <i className='text-muted'>By: Joseph Bryan Egoc</i>
                        </Card.Footer>
                      </Link>
                    </Card>
                  </Col>

                  <Col xs={6} md={2} className='text-center text-light mb-5'>
                    <Card className="m-1 rounded shadow-lg"   style={{background:'transparent', border:'none'}}>
                      <Link to="https://billing.pearsportal.com/" style={{ textDecoration: 'none'}} className='text-light'>
                        <Card.Img variant="top" src={south} height="150px"  className='mt-3'/>
                        <Card.Body>
                          <Card.Title>Billing System</Card.Title>
                        </Card.Body>
                        <Card.Footer>
                          <i className='text-muted'>By: Joseph Bryan Egoc</i>
                        </Card.Footer>
                      </Link>
                    </Card>
                  </Col>

                  <Col xs={6} md={2} className='text-center text-light mb-5'>
                    <Card className="m-1 rounded shadow-lg"   style={{background:'transparent', border:'none'}}>
                      <Link to="/upload_text" onClick={() => window.scrollTo(0, 0)} style={{ textDecoration: 'none'}} className='text-light'>
                        <Card.Img variant="top" src={text} height="150px" style={{width:"150px"}} className='mt-3' />
                        <Card.Body>
                          <Card.Title>Text File Repo</Card.Title>
                        </Card.Body>
                        <Card.Footer>
                          <i className='text-muted'>By: Joseph Bryan Egoc</i>
                        </Card.Footer>
                      </Link>
                    </Card>
                  </Col>

                  <Col xs={6} md={2} className='text-center text-light mb-5'>
                    <Card className="m-1 rounded shadow-lg"   style={{background:'transparent', border:'none'}}>
                      <Link to="/scheduler" onClick={() => window.scrollTo(0, 0)} style={{ textDecoration: 'none'}} className='text-light'>
                        <Card.Img variant="top" src={sched} height="150px" style={{width:"150px"}} className='mt-3' />
                        <Card.Body>
                          <Card.Title>Scheduler</Card.Title>
                        </Card.Body>
                        <Card.Footer>
                          <i className='text-muted'>By: Joseph Bryan Egoc</i>
                        </Card.Footer>
                      </Link>
                    </Card>
                  </Col>
                 
                  <Col xs={6} md={2} className='text-center text-light mb-5'>
                    <Card className="m-1 rounded shadow-lg"   style={{background:'transparent', border:'none'}}>
                      <Link to="/scheduler" onClick={() => window.scrollTo(0, 0)} style={{ textDecoration: 'none'}} className='text-light'>
                        <Card.Img variant="top" src={addition} height="150px" style={{width:"150px"}} className='mt-3'/>
                        <Card.Body>
                          <Card.Title>Addition</Card.Title>
                        </Card.Body>
                        <Card.Footer>
                          <i className='text-muted'>By: Joseph Bryan Egoc</i>
                        </Card.Footer>
                      </Link>
                    </Card>
                  </Col>

                  <Col xs={6} md={2} className='text-center text-light mb-5'>
                    <Card className="m-1 rounded shadow-lg"   style={{background:'transparent', border:'none'}}>
                      <Link to="/scheduler" onClick={() => window.scrollTo(0, 0)} style={{ textDecoration: 'none'}} className='text-light'>
                        <Card.Img variant="top" src={subtraction} height="150px" style={{width:"150px"}} className='mt-3'/>
                        <Card.Body>
                          <Card.Title>Subtraction</Card.Title>
                        </Card.Body>
                        <Card.Footer>
                          <i className='text-muted'>By: Joseph Bryan Egoc</i>
                        </Card.Footer>
                      </Link>
                    </Card>
                  </Col>

                  <Col xs={6} md={2} className='text-center text-light mb-5'>
                    <Card className="m-1 rounded shadow-lg"   style={{background:'transparent', border:'none'}}>
                      <Link to="/scheduler" onClick={() => window.scrollTo(0, 0)} style={{ textDecoration: 'none'}} className='text-light'>
                        <Card.Img variant="top" src={multiplication} height="150px" style={{width:"150px"}} className='mt-3'/>
                        <Card.Body>
                          <Card.Title>Multiplication</Card.Title>
                        </Card.Body>
                        <Card.Footer>
                          <i className='text-muted'>By: Joseph Bryan Egoc</i>
                        </Card.Footer>
                      </Link>
                    </Card>
                  </Col>

                  <Col xs={6} md={2} className='text-center text-light mb-5'>
                    <Card className="m-1 rounded shadow-lg"   style={{background:'transparent', border:'none'}}>
                      <Link to="/scheduler" onClick={() => window.scrollTo(0, 0)} style={{ textDecoration: 'none'}} className='text-light'>
                        <Card.Img variant="top" src={division} height="150px" style={{width:"150px"}} className='mt-3'/>
                        <Card.Body>
                          <Card.Title>Division</Card.Title>
                        </Card.Body>
                        <Card.Footer>
                          <i className='text-muted'>By: Joseph Bryan Egoc</i>
                        </Card.Footer>
                      </Link>
                    </Card>
                  </Col>
                </Row>

                


              </div>
          </Col> 
      </Row>
    </Container>
  );
};

export default Home;