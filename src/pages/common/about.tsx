import React, { useState, useEffect } from 'react';
import { 
  Container, 
  Tab , 
  Tabs,
  Row,
  Col,
  Alert,
  Card
} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Sidebar  from './sidebar';
import avatar from '../../images/me.jpg'; 
import reactjs from '../../images/reactjs.png';
import cpanel from '../../images/cpanel.png';
import mysql from '../../images/mysql.png';
import postgre from '../../images/postgre.jpeg';
import native from '../../images/native.png';
import node from '../../images/node.jpg';
import javascript from '../../images/javascript.png';
import typescript from '../../images/typescript.png';
import html from '../../images/html.png';
import mongo from '../../images/mongo.jpg';
import spring from '../../images/spring.jpeg';

const About: React.FC = () =>{
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
    <Container fluid className='' data-bs-theme="dark">
        <Row>
          <Col xs={1}>      
            <Sidebar  />
          </Col>
          <Col xs={12} className={`mt-5 pt-4 ${isSmallScreen ? '' : 'ps-5'}`}> {/* Conditional rendering for ps-5 class */}
            <div style={{width:"400px"}}></div>
              <div className={`mt-3 ${isSmallScreen ? '' : 'ms-4 me-1'}`}> {/* Conditional rendering for ms-4 class */}

                <Tabs
                    defaultActiveKey="portal"
                    id="fill-tab-example"
                    className="mb-3"
                    fill
                    >
                    <Tab eventKey="portal" title="Portal" className='text-light pe-3 ps-3'>
                      <Row xs={1} md={2} className="g-1 m-1">
                        <Col>
                          <Alert variant="white">
                              <Alert.Heading>Pears Portal System</Alert.Heading>
                              <hr />
                              <p>
                                  Founded : March 2021
                              </p>
                          </Alert>
                          <Alert variant="light" className='text-light'>
                              <Alert.Heading>Mission</Alert.Heading>
                              <hr />
                              <p>
                                  Pears Portal is dedicated to help organization and professionals manage their business. We believe that everyone should have access to information, services, products and more.
                              </p>
                          </Alert>
                          <Alert variant="light" className='text-light'>
                              <Alert.Heading>Vision</Alert.Heading>
                              <hr />
                              <p>
                                  To be the benchmark of System Development Services in the small business, recognized for the integrity of our client, the ethics of our development practices and the quality of our service. 
                              </p>
                          </Alert>
                          <Alert variant="light" className='text-light'>
                              <Alert.Heading>Values</Alert.Heading>
                              <hr />
                              <p>
                                  Innovation, Quality, Reliability, Trust, Teamwork
                              </p>
                          </Alert>
                        </Col>
                        <Col>
                          <Alert variant="white">
                              <Alert.Heading>Technology</Alert.Heading>
                              <hr />
                              <p>
                                  Technology used to create and maintain our systems.
                              </p>
                          </Alert>
                          <Row xs={1} md={3} className="g-2 m-2">
                            <Col>
                              <img
                                className="d-block mr-2 rounded"
                                width="100%" 
                                src={native}
                                />
                            </Col>
                            <Col>
                              <img
                                className="d-block mr-2 rounded"
                                width="100%" 
                                src={reactjs}
                                />
                            </Col>
                            <Col>
                              <img
                                className="d-block mr-2 rounded"
                                width="100%"
                                src={node}
                                />
                            </Col>
                          </Row>

                          <Row xs={1} md={3} className="g-2 m-2">
                            <Col>
                              <img
                                className="d-block mr-2 rounded"
                                width="100%"
                                height="100%"
                                src={cpanel}
                                />
                            </Col>
                            <Col>
                              <img
                                className="d-block mr-2 rounded"
                                width="100%" 
                                src={mysql}
                                />
                            </Col>
                            <Col>
                              <img
                                className="d-block mr-2 rounded"
                                width="100%"
                                src={postgre}
                                />
                            </Col>
                          </Row>

                          <Row xs={1} md={3} className="g-2 m-2">
                            <Col>
                              <img
                                className="d-block mr-2 rounded"
                                width="100%" 
                                src={typescript}
                                />
                            </Col>
                            <Col>
                              <img
                                className="d-block mr-2 rounded"
                                width="100%" 
                                src={javascript}
                                />
                            </Col>
                            <Col>
                              <img
                                className="d-block mr-2 rounded"
                                width="100%"
                                src={html}
                                />
                            </Col>
                          </Row>

                          <Row xs={1} md={3} className="g-2 m-2">
                            <Col>
                              <img
                                className="d-block mr-2 rounded"
                                width="100%" 
                                src={spring}
                                />
                            </Col>
                            <Col>
                              <img
                                className="d-block mr-2 rounded"
                                width="100%" 
                                src={mongo}
                                />
                            </Col>
                            {/* <Col>
                              <img
                                className="d-block mr-2 rounded"
                                width="100%"
                                src={html}
                                />
                            </Col> */}
                          </Row>
                        </Col>
                      </Row>
                    </Tab>
                    <Tab eventKey="team" title="The Team"  className='text-light pe-3 ps-3'>
                      <Alert variant="white" className='text-light'>
                          <Alert.Heading>The Team</Alert.Heading>
                          <hr />
                      </Alert>
                      <Row xs={1} md={5} className="g-1 m-1">
                        
                        <Col>
                          <Card className="rounded shadow-lg">
                            <Link to="/" style={{ textDecoration: 'none'}} className='text-light'>
                              <Card.Img variant="top" src={avatar} height="300px" style={{background:"#000000"}} />
                              <Card.Body>
                                <Card.Title>Joseph Bryan Egoc</Card.Title>
                              </Card.Body>
                              <Card.Footer>
                                <small className="text-muted">CEO / System Developer</small>
                              </Card.Footer>
                            </Link>
                          </Card>
                        </Col>

                        <Col>
                        </Col>

                        <Col>
                        </Col>
                        
                      </Row>
                    </Tab>
                </Tabs>

              </div>
          </Col> 
      </Row>
    </Container>
  );
};

export default About;