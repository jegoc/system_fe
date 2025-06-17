
import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { RootState } from '../../redux/reducers';
import { LoadingPage } from '../../components/loader';
import { LoginFailed } from './loader';
import { LoginOtp } from './login_otp';
import { Button, Container, Row, Card, Alert, Col } from 'react-bootstrap';
import Sidebar from '../common/sidebar';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import { AiOutlineLogin, AiOutlineSend } from "react-icons/ai";
import { Link } from 'react-router-dom';
import { PiEyeLight } from "react-icons/pi";
import { PiEyeSlash } from "react-icons/pi";
import { FcGoogle } from "react-icons/fc";
import { BsFacebook } from "react-icons/bs";
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { encryptPath } from '../../components/encryptor';
import logo from '../../images/logo.png';
import { useDispatch } from 'react-redux';
import { loginRequest } from './redux/loginActions';
import type { AppDispatch } from '../../redux/store';

const LoginSchema = Yup.object().shape({
  email: Yup
    .string()
    .email('Invalid email')
    .required('Email is required!'),
  password: Yup
    .string()
    .required('Password is required!'),
});

const User_Login: React.FC = () => {
  const redirectPath = useSelector((state: RootState) => state.LoginReducer.redirectPath);
  const failed = useSelector((state: RootState) => state.LoginReducer.error);
  const loading = useSelector((state: RootState) => state.LoginReducer.loading);
  const [isSmallScreen, setIsSmallScreen] = useState(false);
  const [showPassword, setShowPassword] = useState(false); // State for password visibility
  const navigate = useNavigate();
  const dispatch = useDispatch<AppDispatch>();
  const signupPath = encryptPath('/sign_up');
  const forgotPath = encryptPath('/forgot');

  // Start Genrate OTP
  const [randomString, setRandomString] = useState<any>('');

  const generateRandomString = (length: number): string => {
    const characters = '0123456789';
    let result = '';
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * characters.length);
      result += characters.charAt(randomIndex);
    }
    return result;
  };

  useEffect(() => {
      const generatedString = generateRandomString(6);
      setRandomString(generatedString);
  }, []);
  // End Geerate OTP

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
    const payload = {
      email: values.email,
      password: values.password,
      otp: randomString,
    }
    dispatch(loginRequest(payload));
  };

  const togglePasswordVisibility = () => {
    setShowPassword(prevState => !prevState); // Toggle password visibility
  };

  return (
    <Formik
      initialValues={{ email: '', password: '' }}
      validationSchema={LoginSchema}
      onSubmit={handleSubmit}
    >
      {({ errors, touched }) => (
        <Container fluid className='' data-bs-theme="dark">
          {loading?<LoadingPage/>:""}
          {failed?<LoginFailed/>:""}
          {redirectPath=='/login_otp'?<LoginOtp/>:""}

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
                          <Alert.Heading><AiOutlineLogin size="25" /> User Login</Alert.Heading>
                        </Alert>
                        <Form>
                          <Row>
                            <Col sm>
                              <FloatingLabel
                                controlId="floatingInput"
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
                              <FloatingLabel label="Password">
                                  <Field
                                    type={showPassword ? 'text' : 'password'} 
                                    name="password"
                                    placeholder="Password"
                                    className={`w-100 form-control ${touched.password && errors.password ? 'is-invalid' : touched.password ? 'is-valid' : ''}`}
                                  />
                                  <span 
                                    onClick={togglePasswordVisibility}
                                    style={{
                                      position: 'absolute',
                                      right: '30px',
                                      top: '50%',
                                      transform: 'translateY(-50%)',
                                      cursor: 'pointer',
                                      color: '#6c757d' 
                                    }}
                                  >
                                    {showPassword ? <PiEyeSlash size='25' /> : <PiEyeLight size='25' />}
                                  </span>
                                <ErrorMessage name="password">
                                  {msg => <div className="invalid-feedback">{msg}</div>}
                                </ErrorMessage>
                              </FloatingLabel>
                            </Col>
                          </Row>

                          {/* <br /> */}
                          <div className="mb-4 mt-3">
                            <Link
                              to={`/${forgotPath}`}
                              onClick={() => {
                                handleItemClick(`/${forgotPath}`);
                                window.scrollTo(0, 0);
                              }}
                              style={{ textDecoration: 'none', color: 'rgb(253,185,19)', cursor: 'pointer' }}
                            >
                              &nbsp;Forgot your password?
                            </Link>
                            
                          </div>
                          
                          <div className="d-grid gap-2">
                            <Button variant="primary" type="submit" className="btn btn-primary btn-block rounded-pill mb-2">
                              <AiOutlineSend size="20" /> Login
                            </Button>
                          </div>
                          <div className="mb-4 mt-2">
                            Don't have an account? 
                            <Link
                              to={`/${signupPath}`}
                              onClick={() => {
                                handleItemClick(`/${signupPath}`);
                                window.scrollTo(0, 0);
                              }}
                              style={{ textDecoration: 'none', color: 'rgb(37,189,190)', cursor: 'pointer' }}
                            >
                              &nbsp;Create Account
                            </Link>
                          </div>

                          <div className="d-flex align-items-center my-4">
                            <div className="flex-grow-1 border-top"></div>
                            <span className="mx-2 text-muted small">or</span>
                            <div className="flex-grow-1 border-top"></div>
                          </div>

                          <div className="d-grid gap-2">
                            <Button variant="primary" type="submit" className="btn btn-light btn-block rounded-pill mb-2" disabled>
                              <FcGoogle size="20" /> Sign in with Google
                            </Button>
                          </div>
                          <div className="d-grid gap-2">
                            <Button variant="primary" type="submit" className="btn btn-light btn-block rounded-pill mb-2" disabled>
                              <BsFacebook size="20" style={{ color: 'rgb(30, 106, 246)'}} /> Sign in with Facebook
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

export default User_Login;