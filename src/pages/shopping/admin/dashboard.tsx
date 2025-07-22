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
import Sidebar  from '../../common/sidebar';
import { AiOutlineDashboard, AiOutlineDollar, AiOutlineGroup } from "react-icons/ai";
import { IoWaterOutline } from "react-icons/io5";
import { MdOutlineBalance } from "react-icons/md";
import '../../common/css/common.css';

const Dashboard: React.FC = () =>{
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

  const handleItemClick = (path: string) => {
      // setSessionVariable('setSelectedItem', path);
      // navigate(path);
  };

  return (
    <Container fluid data-bs-theme="dark">
        <Row>
          <Col >      
            <Sidebar  />
          </Col>
          <Col xs={12} className={`mt-5 pt-4 ${isSmallScreen ? '' : 'ps-5'}`}> {/* Conditional rendering for ps-5 class */}
            <div style={{width:"400px"}}></div>
              <div className={`mt-3 ${isSmallScreen ? '' : 'ms-4 me-1'}`}> {/* Conditional rendering for ms-4 class */}
                <Row xs={12} className="g-1 m-1 p-2">
                    <Col className='text-light'>
                        <h4><AiOutlineDashboard size="30" className='text-warning'/> Dashboard</h4>
                    </Col>
                </Row>
                  <Col >
                      <Alert style={{border: "1px solid rgb(128, 128, 128)"}} className=' shadow mb-0'>
                        <Row>
                          <Col sm={2} className='text-center'>
                            {/* <Image src={userAvatar || '/static/media/default.d1c5ffe2b3cea9d80c7b.jpg'} width="100" height="100" roundedCircle /><br/> */}
                          </Col>
                          <Col sm={9}>
                            <Row >
                                <Col sm={2} className='text-muted'>
                                    Account #
                                </Col>
                                <Col sm>
                                    <strong>0000</strong>
                                </Col>
                            </Row>
                            <Row >
                                <Col sm={2} className='text-muted'>
                                    Name
                                </Col>
                                <Col sm>
                                    <strong>Joseph Bryan Egoc</strong>
                                </Col>
                            </Row>
                            <Row >
                                <Col sm={2} className='text-muted'>
                                    Address
                                </Col>
                                <Col sm>
                                  <strong>Phase 1 Block 2 Lot 3</strong>
                                </Col>
                            </Row>
                            <Row >
                                <Col sm={2} className='text-muted'>
                                    Email 
                                </Col>
                                <Col sm>
                                    <strong>email</strong>
                                </Col>
                                <Col sm={2} className='text-muted'>
                                    Cellphone
                                </Col>
                                <Col sm>
                                    <strong>cellphone</strong>
                                </Col>
                            </Row>
                          </Col>
                        </Row>
                      </Alert>
                  </Col>
                

                <Row xs={1} md={4} className="g-4 mt-0">
                      <Col>
                        <div onClick={() => handleItemClick(`/`)} style={{ textDecoration: 'none', cursor: 'pointer'}}>
                          <Card className="m-1 rounded shadow">
                            <Card.Body>
                              <div style={{ position: 'absolute', height: '10px', left: 30, top: 50 }}>
                                  <AiOutlineGroup size="50" className="text-success"/>
                              </div>
                              {/* <Card.Title><h3>{totinv.toLocaleString("en-US", { maximumFractionDigits: 2, minimumFractionDigits: 2 })}</h3></Card.Title> */}
                              <Card.Title className='text-end'>
                                <h3>
                                  0.00
                                </h3>
                              </Card.Title>
                                <Card.Text className='pt-3 text-end'>
                                  Total Amount
                                </Card.Text>
                            </Card.Body>
                            <Card.Footer className="bg-success">
                              <big className="text-light">Association</big>
                            </Card.Footer>
                          </Card>
                        </div>
                      </Col>
                      <Col>
                        <div onClick={() => handleItemClick(`/`)} style={{ textDecoration: 'none', cursor: 'pointer'}}>
                          <Card className="m-1 rounded shadow">
                            <Card.Body className='text-right'>
                              <div style={{ position: 'absolute', height: '10px', left: 30, top: 50 }}>
                                  {/* <FeatherIcon icon="droplet" size="40" className="text-success" stroke-width="1" /> */}
                                  <IoWaterOutline size="50" className="text-info"/>
                              </div>
                              <Card.Title className='text-end'>
                                <h3>
                                  0.00
                                </h3>
                              </Card.Title>
                                <Card.Text className='pt-3 text-end'>
                                  Total Amount
                                </Card.Text>
                            </Card.Body>
                            <Card.Footer className="bg-info">
                              <big className="text-light">Water</big>
                            </Card.Footer>
                          </Card>
                        </div>
                      </Col>
                      <Col>
                        <div onClick={() => handleItemClick(`/`)} style={{ textDecoration: 'none', cursor: 'pointer'}}>
                          <Card className="m-1 rounded shadow">
                            <Card.Body className='text-right'>
                              <div style={{ position: 'absolute', height: '10px', left: 30, top: 50 }}>
                                  {/* <FeatherIcon icon="dollar-sign" size="40" className="text-warning" stroke-width="1" /> */}
                                  <AiOutlineDollar size="50" className="text-danger"/>
                              </div>
                              <Card.Title className='text-end'>
                                <h3>
                                  0.00
                                </h3>
                              </Card.Title>
                                <Card.Text className='pt-3 text-end'>
                                  Total Amount
                                </Card.Text>
                            </Card.Body>
                            <Card.Footer className="bg-danger">
                              <big className="text-light">Payment</big>
                            </Card.Footer>
                          </Card>
                        </div>
                      </Col>
                      <Col>
                        <div onClick={() => handleItemClick(`/`)} style={{ textDecoration: 'none', cursor: 'pointer'}}>
                          <Card className="m-1 rounded shadow">
                            <Card.Body className='text-right'>
                              <div style={{ position: 'absolute', height: '10px', left: 30, top: 50 }}>
                                  {/* <FeatherIcon icon="book" size="40" className="text-danger" stroke-width="1" /> */}
                                  <MdOutlineBalance size="50" className="text-warning"/>
                              </div>
                              <Card.Title className='text-end'>
                                <h3>
                                  0.00
                                </h3>
                              </Card.Title>
                                <Card.Text className='pt-3 text-end'>
                                  Total Amount
                                </Card.Text>
                            </Card.Body>
                            <Card.Footer className="bg-warning">
                              <big className="text-light">Balance</big>
                            </Card.Footer>
                          </Card>
                        </div>
                      </Col>
                    </Row>

              </div>
          </Col> 
      </Row>
    </Container>
  );
};

export default Dashboard;