// src/components/LoginForm.tsx
import React, { useState, useEffect } from 'react';
import {
  Button,
  Container,
  Row,
  InputGroup,
  Card,
  Alert,
  Col,
  FormCheck
} from 'react-bootstrap';
import Sidebar  from '../common/sidebar';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import { FaUserPlus } from "react-icons/fa";
import { PiEyeLight } from "react-icons/pi";
import { PiEyeSlash } from "react-icons/pi";
import { AiOutlineLogin } from "react-icons/ai";
import { AiOutlineMail } from "react-icons/ai";
import { HiMiniUserPlus } from "react-icons/hi2";
import { FaCalendarAlt } from "react-icons/fa";
// import { AiOutlineKey } from "react-icons/ai";
import { AiOutlineSend } from "react-icons/ai";
import { RiLockPasswordLine } from "react-icons/ri";
import { Formik, Field, Form, ErrorMessage, getIn } from 'formik';
import * as Yup from 'yup';
// import { useDispatch } from 'react-redux';
// import { loginRequest } from './redux/loginActions';
import logo from '../../images/logo.png';
import { useNavigate } from 'react-router-dom';
// import { useSelector } from 'react-redux';
// import { RootState } from '../../../redux/reducers';
// import { LoadingPage,LoginFailed } from '../../../components/loader';
// import me from '../../../images/casa.jpg';
// import { getLocalStorageVariable } from '../../../components/localStorage';

const LoginSchema = Yup.object().shape({
  fname: Yup.string()
      .trim()
      .max(30, 'Must be 30 characters or less')
      .required("Firstname is required"),
  mi: Yup.string()
      .trim()
      .max(1, 'Must be 1 character only')
      .matches(/^([a-z\s A-Z])+$/, "Valid characters from A-Z only"),
  lname: Yup.string()
      .trim()
      .max(30, 'Must be 30 characters or less')
      .required("Lastname is required"),
  address: Yup.string()
      .trim()
      .required("Address is required"),
  city: Yup.string()
      .trim()
      .required("City is required"),
  province: Yup.string()
      .trim()
      .required("Province is required"),
  zip: Yup.string()
      .trim()
      .required("Zip Code is required"),
  cellphone: Yup.string()
      .trim()
      .matches(/^[0-9]{11}$/, "Please input valid cellphone # ex: 09XXXXXXXX")
      .required("Cellphone number is required"),
  email: Yup
      .string()
      .email('Invalid email')
      .required('Email is required!'),
  password: Yup.string()
      .required("Password is required")
      .min(8, "Password length must be at least 8 characters")
      .matches(/[a-z]/, "Password must contain at least one lowercase letter")
      .matches(/[A-Z]/, "Password must contain at least one uppercase letter")
      .matches(/[0-9]/, "Password must contain at least one number")
      .matches(/[@$!%*?&]/, "Password must contain at least one special character (@, $, !, %, *, ?, &)")
      .trim(),
  confirm_password: Yup.string()
      .required("Confirm Password is required")
      .oneOf([Yup.ref("password")], "Passwords do not match"),
  confirm: Yup
      .bool()
      .oneOf([true], "Please confirm")
      .required("Please confirm"),
});

const Sign_Up: React.FC = () => {
//   const redirectPath = useSelector((state: RootState) => state.LoginReducer.redirectPath);
//   const failed = useSelector((state: RootState) => state.LoginReducer.error);
//   const loading = useSelector((state: RootState) => state.LoginReducer.loading);
//   const navigate = useNavigate();
//   const dispatch = useDispatch();

//   useEffect(() => {
//     const userId = getLocalStorageVariable<string>('userId');
//     const userAuth = getLocalStorageVariable<string>('userAuth');
//     if (userId && userAuth=='client') {
//       navigate('/dashboard'); 
//     }

//     if (redirectPath) {
//       navigate(redirectPath);
//       window.location.reload();
//     }
//   }, [redirectPath, navigate, dispatch]);

  const [showConfirmPassword, setShowConfirmPassword] = useState(false); // State for password visibility
    const toggleConfirmPasswordVisibility = () => {
        setShowConfirmPassword(prevState => !prevState); // Toggle password visibility
    };

    const [showPassword, setShowPassword] = useState(false); // State for password visibility
    const togglePasswordVisibility = () => {
        setShowPassword(prevState => !prevState); // Toggle password visibility
    };

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
    console.log('Form values:', values);
  };

  const handleItemClick = (path: string) => {
    // setSessionVariable('setSelectedItem', path);
    // navigate(path);
  };

  const getStyles = (errors:any, fieldName:any) => {
    if (getIn(errors, fieldName)) {
      return {
        border: '1px solid red'
      }
    }
  }

  return (
    <Formik
      initialValues={{ 
        fname: '',
        mi: '',
        lname: '',
        address: '',
        city: '',
        province: '',
        zip: '',
        cellphone: "",
        email: '', 
        password: '', 
        confirm_password: '', 
        confirm: '', 
      }}
      validationSchema={LoginSchema}
      onSubmit={handleSubmit}
    >
    {({ values, handleChange, errors, touched }) => (
    <Container fluid className='' data-bs-theme="dark">
        {/* {loading?<LoadingPage/>:""}
        {failed?<LoginFailed/>:""} */}

        <Row >
          <Col >      
            <Sidebar  />
          </Col>

          <Col xs={12} className={`mt-5 pt-4 ${isSmallScreen ? '' : 'ps-5'}`}> {/* Conditional rendering for ps-5 class */}
            {/* <div style={{width:"400px"}}></div> */}
              <div className={`mt-3 ${isSmallScreen ? '' : 'ms-4 me-1'}`}> {/* Conditional rendering for ms-4 class */}
                <Row xs={12} className="g-1 m-1 p-2">
                  <Col className='text-light'>
                    <h4><FaUserPlus size="30" className='text-warning'/> Create Account</h4>
                    ○ To create new account, input all the required details below.
                  </Col>
                </Row>
                <Row xs={12} className="g-1 m-1">
                  <Col>
                    <Card className="m-1 rounded shadow">
                      <Card.Body>
                            <Form>
                              <Row>
                                <Col sm>
                                  <FloatingLabel controlId="floatingInput" label="Firstname" className="mb-3">
                                      <Field 
                                        type="text" 
                                        name="fname" 
                                        placeholder="Firstname"
                                        className={`w-100 form-control ${touched.fname && errors.fname ? 'is-invalid' : touched.fname ? 'is-valid' : ''}`}
                                      />
                                      <ErrorMessage name="fname">
                                        {msg => <div className="invalid-feedback">{msg}</div>}
                                      </ErrorMessage>
                                  </FloatingLabel>
                                </Col>
                                <Col sm>
                                    <FloatingLabel controlId="floatingInput" label="Middle Name" className="mb-3">
                                      <Field 
                                        type="text" 
                                        name="mi" 
                                        placeholder="Middle Name"
                                        className={`w-100 form-control ${touched.mi && errors.mi ? 'is-invalid' : touched.mi ? 'is-valid' : ''}`}
                                      />
                                      <ErrorMessage name="mi">
                                        {msg => <div className="invalid-feedback">{msg}</div>}
                                      </ErrorMessage>
                                    </FloatingLabel>
                                </Col>
                                <Col sm>
                                    <FloatingLabel controlId="floatingInput" label="Lastname" className="mb-3">
                                      <Field 
                                        type="text" 
                                        name="lname" 
                                        placeholder="Lastname"
                                        className={`w-100 form-control ${touched.lname && errors.lname ? 'is-invalid' : touched.lname ? 'is-valid' : ''}`}
                                      />
                                      <ErrorMessage name="lname">
                                        {msg => <div className="invalid-feedback">{msg}</div>}
                                      </ErrorMessage>
                                    </FloatingLabel>
                                </Col>
                            </Row>

                            <Row>
                                <Col sm>
                                  <FloatingLabel controlId="floatingInput" label="Address" className="mb-3">
                                      <Field 
                                        type="text" 
                                        name="address" 
                                        placeholder="Address Line1"
                                        className={`w-100 form-control ${touched.address && errors.address ? 'is-invalid' : touched.address ? 'is-valid' : ''}`}
                                      />
                                      <ErrorMessage name="address">
                                        {msg => <div className="invalid-feedback">{msg}</div>}
                                      </ErrorMessage>
                                  </FloatingLabel>
                                </Col>
                              </Row>

                              <Row>
                                <Col sm>
                                  <FloatingLabel controlId="floatingInput" label="City" className="mb-3">
                                      <Field 
                                        type="text" 
                                        name="city" 
                                        placeholder="City"
                                        className={`w-100 form-control ${touched.city && errors.city ? 'is-invalid' : touched.city ? 'is-valid' : ''}`}
                                      />
                                      <ErrorMessage name="city">
                                        {msg => <div className="invalid-feedback">{msg}</div>}
                                      </ErrorMessage>
                                  </FloatingLabel>
                                </Col>
                                <Col sm>
                                    <FloatingLabel controlId="floatingInput" label="Province" className="mb-3">
                                      <Field 
                                        type="text" 
                                        name="province" 
                                        placeholder="Province"
                                        className={`w-100 form-control ${touched.province && errors.province ? 'is-invalid' : touched.province ? 'is-valid' : ''}`}
                                      />
                                      <ErrorMessage name="province">
                                        {msg => <div className="invalid-feedback">{msg}</div>}
                                      </ErrorMessage>
                                    </FloatingLabel>
                                </Col>
                                <Col sm>
                                    <FloatingLabel controlId="floatingInput" label="Zip Code" className="mb-3">
                                      <Field 
                                        type="text" 
                                        name="zip" 
                                        placeholder="Zip Code"
                                        className={`w-100 form-control ${touched.zip && errors.zip ? 'is-invalid' : touched.zip ? 'is-valid' : ''}`}
                                      />
                                      <ErrorMessage name="zip">
                                        {msg => <div className="invalid-feedback">{msg}</div>}
                                      </ErrorMessage>
                                    </FloatingLabel>
                                </Col>
                            </Row>

                            <hr/>

                            <Row>
                              <Col sm>
                                <FloatingLabel controlId="floatingInput" label="Cellphone" className="mb-3">
                                    <Field 
                                        type="text" 
                                        name="cellphone" 
                                        placeholder="Cellphone"
                                        className={`w-100 form-control ${touched.cellphone && errors.cellphone ? 'is-invalid' : touched.cellphone ? 'is-valid' : ''}`}
                                    />
                                    <ErrorMessage name="cellphone">
                                      {msg => <div className="invalid-feedback">{msg}</div>}
                                    </ErrorMessage>
                                </FloatingLabel>
                              </Col>
                              <Col sm>
                              </Col>
                            </Row>

                            <Row>
                              <Col sm>
                                <FloatingLabel controlId="floatingInput" label="E-mail" className="mb-3">
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
                              <Col sm>
                              </Col>
                            </Row>

                            <Row>
                              <Col sm>
                                  <FloatingLabel label="Password" className="mb-2">
                                      <Field
                                          type={showPassword ? 'text' : 'password'} // Toggle between text and password
                                          name="password"
                                          placeholder="Password"
                                          maxLength="50"
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
                                                  color: '#6c757d' // Optional: adjust color as needed
                                              }}
                                              >
                                              {showPassword ? <PiEyeSlash size='25' /> : <PiEyeLight size='25' />}
                                          </span>
                                      <ErrorMessage name="password">
                                          {msg => <div className="invalid-feedback">{msg}</div>}
                                      </ErrorMessage>
                                  </FloatingLabel>
                              </Col>
                              <Col sm>
                                  <FloatingLabel label="Confirm Password" className="mb-2">
                                      <Field
                                          type={showConfirmPassword ? 'text' : 'password'} // Toggle between text and password
                                          name="confirm_password"
                                          placeholder="Confirm Password"
                                          maxLength="50"
                                          className={`w-100 form-control ${touched.confirm_password && errors.confirm_password ? 'is-invalid' : touched.confirm_password ? 'is-valid' : ''}`}
                                      />
                                          <span 
                                              onClick={toggleConfirmPasswordVisibility}
                                              style={{
                                                  position: 'absolute',
                                                  right: '30px',
                                                  top: '50%',
                                                  transform: 'translateY(-50%)',
                                                  cursor: 'pointer',
                                                  color: '#6c757d' // Optional: adjust color as needed
                                              }}
                                              >
                                              {showConfirmPassword ? <PiEyeSlash size='25' /> : <PiEyeLight size='25' />}
                                          </span>
                                      <ErrorMessage name="confirm_password">
                                          {msg => <div className="invalid-feedback">{msg}</div>}
                                      </ErrorMessage>
                                  </FloatingLabel>
                              </Col>
                          </Row>

                            <br/>
                            {/* <Col sm>
                              <FormCheck 
                                type="checkbox" 
                                id="confirmCheckbox" 
                                label="Agree to terms and conditions." 
                                name="confirm"
                                // onChange={handleChange}
                                isInvalid={!!errors.confirm}
                                feedback={errors.confirm}
                                feedbackType="invalid"
                                as={Field}
                              />
                              <ErrorMessage name="confirm">
                                {msg => <div className="invalid-feedback">{msg}</div>}
                              </ErrorMessage>
                            </Col> */}
                            <Col sm> 
                                
                                <label>
                                    <Field type="checkbox" name="confirm" />
                                    &nbsp;Please confirm if your agree the
                                    <Button variant="link" onClick={() => handleItemClick('/terms')} style={{textDecoration: 'none', color: 'rgb(253,185,19)', cursor: 'pointer'}}>Terms and Conditions</Button>
                                </label>
                                <ErrorMessage name="confirm">
                                    {msg => <div style={{color:'rgb(234,109,84)',padding:'5px'}}>{msg}</div>}
                                </ErrorMessage>
                            </Col>

                            <br/>
                            <div className="d-grid gap-2">
                                <Button variant="primary" type="submit" className="btn btn-primary btn-block rounded-pill mb-5" >
                                    <AiOutlineSend size="20"/> Submit
                                </Button>
                            </div>
                        </Form>
                      </Card.Body>
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

export default Sign_Up;