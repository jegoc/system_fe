
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, Container, Row, Card, Alert, Col } from 'react-bootstrap';
import Sidebar from '../common/sidebar';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import { AiOutlineSend } from "react-icons/ai";
import { RiLockPasswordLine } from "react-icons/ri";
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { encryptPath } from '../../components/encryptor';
import logo from '../../images/logo.png';

const LoginSchema = Yup.object().shape({
  email: Yup
    .string()
    .email('Invalid email')
    .required('Email is required!'),
  password: Yup
    .string()
    .required('Password is required!'),
});

const Forgot: React.FC = () => {
  const [isSmallScreen, setIsSmallScreen] = useState(false);
  const [showPassword, setShowPassword] = useState(false); // State for password visibility
  const navigate = useNavigate();
  const forgotPath = encryptPath('/forgot');

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
    navigate(path);
  };

  const handleSubmit = (values: any) => {
    const { email, password } = values;
    // Perform login action
  };

  const togglePasswordVisibility = () => {
    setShowPassword(prevState => !prevState); // Toggle password visibility
  };

  return (
    <Formik
      initialValues={{ email: '', pin: '' }}
      validationSchema={LoginSchema}
      onSubmit={handleSubmit}
    >
      {({ errors, touched }) => (
        <Container fluid className='' data-bs-theme="dark">
          <Row>
            <Col><Sidebar /></Col>

            <Col xs={12} className={`mt-5 pt-4 ${isSmallScreen ? '' : 'ps-5'}`}>
              <div className={`mt-3 ${isSmallScreen ? '' : 'ms-4 me-1'}`}>
                <Row xs={12} md={3} className="g-1 m-1" >
                  <Col sm></Col>
                  <Col>
                    <Card className="m-1 rounded shadow">
                      <Card.Body>
                        <div className="text-info text-center mb-1">
                          <img src={logo} alt="logo" width="140" height="130" />
                        </div>
                        <Alert variant="light">
                            <Alert.Heading><RiLockPasswordLine size="25" /> Forgot Password?</Alert.Heading>
                                <hr />
                                <p className="mb-0">
                                    To reset your password :<br/>&nbsp; ○ Input your email address and PIN Code. <br/>&nbsp; ○ Check your email for your temporary password.
                                </p>
                        </Alert>
                        <Form>
                 
                        <Row>
                            <Col sm>
                                <FloatingLabel
                                    label="Email address"
                                    className="mb-3"
                                >
                                    <Field
                                    type="email"
                                    name="email"
                                    placeholder="E-mail"
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
                                <FloatingLabel
                                    label="PIN"
                                    className="mb-3"
                                >
                                    <Field
                                    type="text"
                                    name="pin"
                                    maxLength="6"
                                    placeholder="PIN"
                                    className={`w-100 form-control ${touched.pin && errors.pin ? 'is-invalid' : touched.pin ? 'is-valid' : ''}`}
                                    />
                                    <ErrorMessage name="pin">
                                    {msg => <div className="invalid-feedback">{msg}</div>}
                                    </ErrorMessage>
                                </FloatingLabel>
                            </Col>
                            </Row>
                            <br/>
                                <Col sm> 
                                    <label>
                                        <Field type="checkbox" name="confirm" />
                                        &nbsp;Please confirm to reset.
                                    </label>
                                    <ErrorMessage name="confirm">
                                        {msg => <div style={{color:'red',padding:'5px'}}>{msg}</div>}
                                    </ErrorMessage>
                                </Col>
                            <br/>
                        <div className="d-grid gap-2">
                            <Button variant="primary" type="submit" className="btn btn-primary btn-block rounded-pill mb-5" >
                                <AiOutlineSend size="20"/> Reset
                            </Button>
                        </div>
                        </Form>
                      </Card.Body>
                    </Card>
                  </Col>
                  <Col sm></Col>
                </Row>
              </div>
            </Col>
          </Row>
        </Container>
      )}
    </Formik>
  );
};

export default Forgot;