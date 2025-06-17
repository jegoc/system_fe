import React, { useState, useEffect } from 'react';
import { 
  Container, 
  Tab , 
  Tabs,
  Row,
  Col,
  Alert,
  Button,
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
import { FaLinkedin } from "react-icons/fa";
import { FaFilePdf } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import './css/common.css';

const About: React.FC = () =>{
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
                      
                        <Row  md={2}>
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
                              <Button href="https://github.com/jegoc" target='_blank' variant="secondary" size="sm">
                                <FaGithub size={16}/> View GitHub Profile
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
                                    { label: "Redux", level: 7 },
                                    { label: "HTML", level: 9 },
                                    { label: "CSS", level: 9 },
                                    { label: "Bootstrap", level: 9 },
                                  ].map((skill, idx) => (
                                    <div key={idx} className="mb-2">
                                      <div className="d-flex justify-content-between">
                                        <span>{skill.label}</span>
                                      </div>
                                      <div className="d-flex gap-1 mt-1">
                                        {Array.from({ length: 10 }).map((_, i) => (
                                          <div
                                            key={i}
                                            className={`skill-bar ${animate && i < skill.level ? 'active' : ''}`}
                                            style={{ transitionDelay: `${i * 100}ms` }}
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
                                            className={`skill-bar ${animate && i < skill.level ? 'active' : ''}`}
                                            style={{ transitionDelay: `${i * 100}ms` }}
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
                                    { label: "PostgreSQL", level: 7 },
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
                                            className={`skill-bar ${animate && i < skill.level ? 'active' : ''}`}
                                            style={{ transitionDelay: `${i * 100}ms` }}
                                          />
                                        ))}
                                      </div>
                                    </div>
                                    ))}
                                  </div>
        
                                  <div className="mt-5">
                                  <h5 className='text-info'>Repositories, Cloud Services and Others</h5>
                                  {[
                                    { label: "GitHub", level: 7 },
                                    { label: "C-Panel", level: 8 },
                                    { label: "Microsoft Office", level: 9 },
                                    { label: "VBA Macro", level: 8 },
                                    { label: "PostFujitsu Cloud-O", level: 6 },
                                    { label: "Azure", level: 5 },
                                    { label: "AWS", level: 5 },
                                    { label: "Java", level: 5 },
                                  ].map((skill, idx) => (
                                    <div key={idx} className="mb-2">
                                      <div className="d-flex justify-content-between">
                                        <span>{skill.label}</span>
                                      </div>
                                      <div className="d-flex gap-1 mt-1">
                                        {Array.from({ length: 10 }).map((_, i) => (
                                          <div
                                            key={i}
                                            className={`skill-bar ${animate && i < skill.level ? 'active' : ''}`}
                                            style={{ transitionDelay: `${i * 100}ms` }}
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
                    </Tab>
                </Tabs>

              </div>
          </Col> 
      </Row>
    </Container>
  );
};

export default About;