import React, { useState, useEffect } from 'react';
import {
  Button,
  Container,
  Row,
  Card,
  Col,
} from 'react-bootstrap';
import Sidebar from '../common/sidebar';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import { FaMobileAlt, FaMapMarkerAlt, FaPhoneAlt } from "react-icons/fa";
import { AiOutlineSend, AiOutlineMail } from "react-icons/ai";
import { Formik, Field, Form, ErrorMessage, getIn } from 'formik';
import * as Yup from 'yup';

const LoginSchema = Yup.object().shape({
  name: Yup.string()
    .trim()
    .matches(/^([a-z\s A-Z])+$/, "Valid characters from A-Z only"),
  email: Yup.string()
    .trim()
    .max(30, 'Must be 30 characters or less')
    .required("Lastname is required"),
  message: Yup.string()
    .trim()
    .required("Address is required"),
});

const Contact: React.FC = () => {
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
    // dispatch(loginRequest(email, password));
  };

  const getStyles = (errors: any, fieldName: any) => {
    if (getIn(errors, fieldName)) {
      return {
        border: '1px solid red'
      }
    }
  }

  return (
    <Formik
      initialValues={{
        name: '',
        email: '',
        message: '',
      }}
      validationSchema={LoginSchema}
      onSubmit={handleSubmit}
    >
      {({ values, handleChange, errors, touched }) => (
        <Container fluid className='' data-bs-theme="dark">
          <Row>
            <Col>
              <Sidebar />
            </Col>

            <Col xs={12} className={`mt-5 pt-4 ${isSmallScreen ? '' : 'ps-5'}`}>
              <div className={`mt-3 ${isSmallScreen ? '' : 'ms-4 me-1'}`}>

                {/* Info Cards Row */}
                <Row className="text-center position-relative z-2" style={{ marginBottom: '-60px' }}>
                  <Col md={3} className="p-3">
                    <Card className="h-100 shadow-sm">
                      <Card.Body>
                        <FaMapMarkerAlt size={30} className="mb-2" style={{color:'rgb(37,189,190)'}}/>
                        <Card.Title className="fw-bold">OUR MAIN OFFICE</Card.Title>
                        <Card.Text>Block 21, Lot 6, Casa Mira - Linao <br/>Minglanilla, Cebu 6046   </Card.Text>
                      </Card.Body>
                    </Card>
                  </Col>
                  <Col md={3} className="p-3">
                    <Card className="h-100 shadow-sm">
                      <Card.Body>
                        <FaMobileAlt size={30} className="mb-2" style={{color:'rgb(141,198,63)'}} />
                        <Card.Title className="fw-bold">CELLPHONE NUMBER</Card.Title>
                        <Card.Text>+63 920 5305 200</Card.Text>
                      </Card.Body>
                    </Card>
                  </Col>
                  <Col md={3} className="p-3">
                    <Card className="h-100 shadow-sm">
                      <Card.Body>
                        <FaPhoneAlt size={30} className="mb-2" style={{color:'rgb(247,148,30)'}} />
                        <Card.Title className="fw-bold">PHONE NUMBER</Card.Title>
                        <Card.Text>+032 272 6752</Card.Text>
                      </Card.Body>
                    </Card>
                  </Col>
                  <Col md={3} className="p-3">
                    <Card className="h-100 shadow-sm">
                      <Card.Body>
                        <AiOutlineMail size={30} className="mb-2" style={{color:'rgb(253,185,19)'}} />
                        <Card.Title className="fw-bold">EMAIL</Card.Title>
                        <Card.Text><a href="mailto:hello@theme.com">admin@pearsportal.com</a></Card.Text>
                      </Card.Body>
                    </Card>
                  </Col>
                </Row>

                <div className={`text-center ${isSmallScreen ? '' : 'p-5 m-5 mb-0 mt-0 pt-0'}`}>
                <div className="p-0" style={{
                  backgroundColor: 'rgb(33,37,41)',
                  borderRadius: '8px',
                  paddingTop: '80px',
                  position: 'relative',
                //   width: '80%',
                  zIndex: 1
                }}>
                  <Row xs={12} className="g-1 m-1 p-2">
                    <Col className='text-light pt-5'>
                      <h2 className="fw-bold text-center">Contact Us</h2>
                    </Col>
                  </Row>
                  <Row xs={12} className="g-1 m-1">
                    <Col>
                    <Card className="border-0">
                      <Card.Body>
                      <Form>
                        <Row>
                          <Col sm>
                            <FloatingLabel controlId="floatingInput" label="Name" className="mb-3">
                              <Field
                                type="text"
                                name="name"
                                placeholder="Name"
                                className={`w-100 form-control ${touched.name && errors.name ? 'is-invalid' : touched.name ? 'is-valid' : ''}`}
                              />
                              <ErrorMessage name="name">
                                {msg => <div className="invalid-feedback">{msg}</div>}
                              </ErrorMessage>
                            </FloatingLabel>
                          </Col>
                        </Row>

                        <Row>
                          <Col sm>
                            <FloatingLabel controlId="floatingInput" label="Email" className="mb-3">
                              <Field
                                type="email"
                                name="email"
                                placeholder="Email"
                                className={`w-100 form-control ${touched.email && errors.email ? 'is-invalid' : touched.email ? 'is-valid' : ''}`}
                              />
                              <ErrorMessage name="email">
                                {msg => <div className="invalid-feedback">{msg}</div>}
                              </ErrorMessage>
                            </FloatingLabel>
                          </Col>
                        </Row>

                        <Row>
                          <Col sm>
                            <FloatingLabel controlId="floatingmessage" label="Message" className="mb-3">
                              <Field
                                name="message"
                                placeholder="Message"
                                as="textarea"
                                style={{ height: '200px' }}
                                className={`w-100 form-control ${touched.message && errors.message ? 'is-invalid' : touched.message ? 'is-valid' : ''}`}
                              />
                              <ErrorMessage name="message">
                                {msg => <div className="invalid-feedback">{msg}</div>}
                              </ErrorMessage>
                            </FloatingLabel>
                          </Col>
                        </Row>

                        <div className="d-grid gap-2 mt-3">
                          <Button variant="primary" type="submit" className="btn btn-primary btn-block rounded-pill mb-3">
                            <AiOutlineSend size="20" /> Submit
                          </Button>
                        </div>
                      </Form>
                      </Card.Body>
                    </Card>
                    </Col>
                  </Row>
                </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      )}
    </Formik>
  );
};

export default Contact;
