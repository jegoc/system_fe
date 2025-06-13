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
import text from '../../images/text.png';
import ordering from '../../images/ordering.png';
import inventory from '../../images/inventory.png';
import avatar from '../../images/me.jpg'; 
import { FaLinkedin } from "react-icons/fa";
import { FaFilePdf } from "react-icons/fa";
import './css/common.css';

const Home: React.FC = () =>{
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
    <Container fluid data-bs-theme="dark">
        <Row>
          <Col >      
            <Sidebar  />
          </Col>
          <Col xs={12} className={`mt-5 pt-4 ${isSmallScreen ? '' : 'ps-5'}`}> {/* Conditional rendering for ps-5 class */}
            <div style={{width:"400px"}}></div>
              <div className={`mt-3 ${isSmallScreen ? '' : 'ms-4 me-1'}`}> {/* Conditional rendering for ms-4 class */}

                <Row  md={2} className='mb-5' >
                  <Col md={2}>
                    <Card className="rounded shadow-lg">
                        <Card.Img variant="top" src={avatar} height="250px" style={{background:"#000000"}} />
                        <Card.Body>
                          <Card.Title>Joseph Bryan Egoc</Card.Title>
                        </Card.Body>
                        <Card.Footer>
                          <small className="text-muted">Application Systems Engineer / Full-stack Developer</small>
                        </Card.Footer>
                    </Card>
                    <div className="d-grid gap-2 mt-2">
                      <Button href="/resume.pdf"  target='_blank' variant="primary" size="sm">
                        <FaFilePdf size={16}/> Download Resume
                      </Button>
                      <Button href="https://www.linkedin.com/in/joseph-bryan-egoc" target='_blank' variant="secondary" size="sm">
                        <FaLinkedin size={16}/> View LinkedIn Profile
                      </Button>
                    </div>
                  </Col>

                  <Col md={10} className="rounded shadow-lg p-3 text-light">
                    <h5>SUMMARY</h5>
                    <p>Full-stack web developer with over 5 years of experience in designing, developing, and maintaining robust web applications. Proficient in modern technologies including TypeScript, JavaScript, React, Node.js (Express.js), MySQL, MongoDB, and RESTful APIs, with a strong focus on performance, scalability, and accessibility standards.</p>
                    <p>Hands-on experience in cloud development projects, particularly on Fujitsu Cloud, with working knowledge of Microsoft Azure including cloud data management, security protocols, and networking fundamentals.</p>
                    <p>Proven expertise across the Programing (PG), Testing (PT), and Implementation (IT) phases of software development, along with practical skills in networking and security.</p>
                    <p>Demonstrated ability to collaborate effectively in multicultural teams, maintaining a professional and supportive attitude with colleagues and supervisors of diverse nationalities. Committed to delivering quality results and capable of working extended hours when required.</p>

                        <h5 className='mt-5'>TECH STACK LEVELS</h5>
                        <hr />
                        <Row>
                      <Col md={6}>
                      <div className="mt-3">
                        <h5 className='text-info'>Front-End</h5>
                        {[
                          { label: "Javascript", level: 8 },
                          { label: "Typescript", level: 7 },
                          { label: "React", level: 7 },
                          { label: "React Native", level: 3 },
                          { label: "Redux", level: 7 },
                          { label: "HTML", level: 9 },
                          { label: "CSS", level: 9 },
                          { label: "Bootstrap", level: 8 },
                        ].map((skill, idx) => (
                          <div key={idx} className="mb-2">
                            <div className="d-flex justify-content-between">
                              <span>{skill.label}</span>
                            </div>
                            <div className="d-flex gap-1 mt-1">
                              {Array.from({ length: 10 }).map((_, i) => (
                                <div
                                  key={i}
                                  style={{
                                    width: "50px",
                                    height: "6px",
                                    borderRadius: "3px",
                                    backgroundColor: i < skill.level ? "#f6bd05" : "#446d7b",
                                    opacity: i < skill.level ? 1 : 0.9,
                                  }}
                                />
                              ))}
                            </div>
                          </div>
                        ))}
                      </div>

                      <div className="mt-5">
                        <h5 className='text-info'>Back-End</h5>
                        {[
                          { label: "Node JS (Express JS)", level: 8 },
                          { label: "Springboot", level: 5 },
                        ].map((skill, idx) => (
                          <div key={idx} className="mb-2">
                            <div className="d-flex justify-content-between">
                              <span>{skill.label}</span>
                            </div>
                            <div className="d-flex gap-1 mt-1">
                              {Array.from({ length: 10 }).map((_, i) => (
                                <div
                                  key={i}
                                  style={{
                                    width: "50px",
                                    height: "6px",
                                    borderRadius: "3px",
                                    backgroundColor: i < skill.level ? "#f6bd05" : "#446d7b",
                                    opacity: i < skill.level ? 1 : 0.9,
                                  }}
                                />
                              ))}
                            </div>
                          </div>
                        ))}
                      </div>

                      </Col>
<Col md={6}>
                      <div className="mt-3">
                        <h5 className='text-info'>Database</h5>
                        {[
                          { label: "MySQL", level: 8 },
                          { label: "PostgreSQL", level: 5 },
                          { label: "MongoDB", level: 3 },
                        ].map((skill, idx) => (
                          <div key={idx} className="mb-2">
                            <div className="d-flex justify-content-between">
                              <span>{skill.label}</span>
                            </div>
                            <div className="d-flex gap-1 mt-1">
                              {Array.from({ length: 10 }).map((_, i) => (
                                <div
                                  key={i}
                                  style={{
                                    width: "50px",
                                    height: "6px",
                                    borderRadius: "3px",
                                    backgroundColor: i < skill.level ? "#f6bd05" : "#446d7b",
                                    opacity: i < skill.level ? 1 : 0.9,
                                  }}
                                />
                              ))}
                            </div>
                          </div>
                          ))}
                        </div>

                        <div className="mt-5">
                        <h5 className='text-info'>Cloud Services and Others</h5>
                        {[
                          { label: "Java", level: 5 },
                          { label: "GitHub", level: 6 },
                          { label: "C-Panel", level: 8 },
                          { label: "Microsoft Office", level: 9 },
                          { label: "VBA Macro", level: 8 },
                          { label: "PostFujitsu Cloud-O", level: 6 },
                          { label: "Azure", level: 5 },
                          { label: "AWS", level: 5 },
                        ].map((skill, idx) => (
                          <div key={idx} className="mb-2">
                            <div className="d-flex justify-content-between">
                              <span>{skill.label}</span>
                            </div>
                            <div className="d-flex gap-1 mt-1">
                              {Array.from({ length: 10 }).map((_, i) => (
                                <div
                                  key={i}
                                  style={{
                                    width: "50px",
                                    height: "6px",
                                    borderRadius: "3px",
                                    backgroundColor: i < skill.level ? "#f6bd05" : "#446d7b",
                                    opacity: i < skill.level ? 1 : 0.9,
                                  }}
                                />
                              ))}
                            </div>
                          </div>
                        ))}
                      </div>
                      </Col>
</Row>
                  </Col>
                </Row>

                <Row xs={1} md={4} className="g-1 m-1">
                  <Col>
                    <Card className="m-1 rounded shadow-lg zoom-image">
                      <Link to="/booking_menu" style={{ textDecoration: 'none'}} className='text-light'>
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
                      <Link to="/shop" style={{ textDecoration: 'none'}} className='text-light'>
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
                      <Link to="https://billing.pearsportal.com/" style={{ textDecoration: 'none'}} className='text-light'>
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
                      <Link to="/#" style={{ textDecoration: 'none'}} className='text-light'>
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
                      <Link to="/#" style={{ textDecoration: 'none'}} className='text-light'>
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
                      <Link to="/#" style={{ textDecoration: 'none'}} className='text-light'>
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
                      <Link to="/#" style={{ textDecoration: 'none'}} className='text-light'>
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
                      <Link to="/#" style={{ textDecoration: 'none'}} className='text-light'>
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
                        <Card.Img variant="top" src={linao} height="150px" />
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
                        <Card.Img variant="top" src={south} height="150px" />
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
                      <Link to="/upload_text" style={{ textDecoration: 'none'}} className='text-light'>
                        <Card.Img variant="top" src={text} height="150px" style={{width:"150px"}} />
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
                      <Link to="/scheduler" style={{ textDecoration: 'none'}} className='text-light'>
                        <Card.Img variant="top" src={sched} height="150px" style={{width:"150px"}} />
                        <Card.Body>
                          <Card.Title>Scheduler</Card.Title>
                        </Card.Body>
                        <Card.Footer>
                          <i className='text-muted'>By: Joseph Bryan Egoc</i>
                        </Card.Footer>
                      </Link>
                    </Card>
                  </Col>


                  {/* <Col xs={6} md={2} className='text-center text-light mb-5'>
                    <Link to="https://billing.pearsportal.com/" style={{ textDecoration: 'none'}}>
                      <Image src={linao} rounded style={{width:'200px', height:'200px'}}/>
                      <b className='text-muted'>Billing System</b><br/>
                      
                    </Link>
                  </Col> */}
                  {/* <Col xs={6} md={2} className='text-center text-light mb-5'>
                    <Link to="#" style={{ textDecoration: 'none'}}>
                      <Image src={south} rounded style={{width:'200px', height:'200px'}}/>
                      <b className='text-muted'>Billing System</b><br/>
                      <i className='text-muted'>By: Joseph Bryan Egoc</i>
                    </Link>
                    
                  </Col> */}
                 
                  <Col xs={6} md={2}>
                    {/* <Image src={south} roundedCircle className='w-100'/> */}
                  </Col>
                  <Col xs={6} md={2}>
                    {/* <Image src={linao} rounded className='w-100'/> */}
                  </Col>
                  <Col xs={6} md={2}>
                    {/* <Image src={south} roundedCircle className='w-100'/> */}
                  </Col>
                </Row>

                


              </div>
          </Col> 
      </Row>
    </Container>
  );
};

export default Home;