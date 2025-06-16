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
 frequency: Yup.string()
    .trim()
    .oneOf(['month', 'week', 'day'], 'You must select a valid frequency') // Only allow valid frequency values
    .required('Frequency is required'),
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
  cellphone: Yup.string()
    .trim()
    .matches(/^[0-9]{11}$/, "Please input valid cellphone # ex: 09XXXXXXXX")
    .required("Cellphone number is required"),
  email: Yup
    .string()
    .email('Invalid email')
    .required('Email is required!'),
  password: Yup
    .string()
    .required('Password is required!')
    .min(8, "Password length must be at least 8 characters"),
  confirm_password: Yup.string()
    .required("Confirm Password is required")
    .min(8, "Password length must be at least 8 characters")
    .oneOf([Yup.ref("password")], "Passwords do not match"),
  confirm: Yup
    .bool()
    .oneOf([true], "Please confirm")
    .required("Please confirm"),
});

const Scheduler: React.FC = () => {
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
        frequency: '',
        monthly: '',
        week: '',
        day: '',
        address: '',
        address2: '',
        landmark: '',
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
                    <h4><FaCalendarAlt size="25" /> Scheduler</h4>
                    ○ To reserve a schedule input all the required details below.
                  </Col>
                </Row>
                <Row xs={12} className="g-1 m-1">
                  <Col>
                    <Card className="m-1 rounded shadow">
                      <Card.Body>
                        {/* <Alert variant="light">
                            <Alert.Heading><FaCalendarAlt size="25" /> Scheduler</Alert.Heading>
                            ○ To reserve a schedule input all the required details below.
                        </Alert> */}
                            <Form>
                                <Row>
                                    <Col sm>
                                        <FloatingLabel controlId="floatingInput" label="Frequency" className="mb-3">
                                        <Field
                                            as="select"
                                            name="frequency"
                                            className={`w-100 form-select ${touched.frequency && errors.frequency ? 'is-invalid' : touched.frequency ? 'is-valid' : ''}`}
                                           
                                        >
                                            <option value="">Open this select menu</option>
                                            <option value="month">Monthly</option>
                                            <option value="week">Weekly</option>
                                            <option value="day">Daily</option>
                                        </Field>
                                        <ErrorMessage name="frequency">
                                            {msg => <div className="invalid-feedback">{msg}</div>}
                                        </ErrorMessage>
                                        </FloatingLabel>
                                    </Col>
                                    <Col sm></Col>
                                    <Col sm></Col>

                                </Row>
                                <Row>

                                    {/* Conditional rendering for Monthly field */}
                                    {values.frequency === 'month' && (
                                        <Col sm>
                                        <FloatingLabel controlId="floatingInput" label="Monthly" className="mb-3">
                                            <Field
                                            type="text"
                                            name="monthly"
                                            placeholder="Monthly"
                                            className={`w-100 form-control ${touched.monthly && errors.monthly ? 'is-invalid' : touched.monthly ? 'is-valid' : ''}`}
                                            />
                                            <ErrorMessage name="monthly">
                                            {msg => <div className="invalid-feedback">{msg}</div>}
                                            </ErrorMessage>
                                        </FloatingLabel>
                                        </Col>
                                    )}

                                    {/* Conditional rendering for Weekly field */}
                                    {values.frequency === 'week' && (
                                        <Col sm>
                                        <FloatingLabel controlId="floatingInput" label="Weekly" className="mb-3">
                                            <Field
                                            type="text"
                                            name="week"
                                            placeholder="Weekly"
                                            className={`w-100 form-control ${touched.week && errors.week ? 'is-invalid' : touched.week ? 'is-valid' : ''}`}
                                            />
                                            <ErrorMessage name="week">
                                            {msg => <div className="invalid-feedback">{msg}</div>}
                                            </ErrorMessage>
                                        </FloatingLabel>
                                        </Col>
                                    )}

                                    {/* Conditional rendering for Daily field */}
                                    {values.frequency === 'day' && (
                                        <Col sm>
                                        <FloatingLabel controlId="floatingInput" label="Daily" className="mb-3">
                                            <Field
                                            type="text"
                                            name="day"
                                            placeholder="Daily"
                                            className={`w-100 form-control ${touched.day && errors.day ? 'is-invalid' : touched.day ? 'is-valid' : ''}`}
                                            />
                                            <ErrorMessage name="day">
                                            {msg => <div className="invalid-feedback">{msg}</div>}
                                            </ErrorMessage>
                                        </FloatingLabel>
                                        </Col>
                                    )}
                                </Row>

                            <Row>
                                <Col sm>
                                  <FloatingLabel controlId="floatingInput" label="Address Line 1" className="mb-3">
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
                                <Col sm>
                                  <FloatingLabel controlId="floatingInput" label="Address Line 2" className="mb-3">
                                      <Field 
                                        type="text" 
                                        name="address2" 
                                        placeholder="Address Line 2"
                                        className={`w-100 form-control ${touched.address2 && errors.address2 ? 'is-invalid' : touched.address2 ? 'is-valid' : ''}`}
                                      />
                                      <ErrorMessage name="address2">
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
                                <FloatingLabel controlId="floatingInput" label="Cellphone Number" className="mb-3">
                                    <Field 
                                        type="text" 
                                        name="cellphone" 
                                        placeholder="Cellphone Number"
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
                                <FloatingLabel controlId="floatingInput" label="Email address" className="mb-3">
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
                                  <FloatingLabel controlId="floatingPassword" label="Password" className="mb-3">
                                    <Field 
                                        type="password" 
                                        name="password" 
                                        placeholder="Password"
                                        className={`w-100 form-control ${touched.password && errors.password ? 'is-invalid' : touched.password ? 'is-valid' : ''}`}
                                        />
                                    <ErrorMessage name="password">
                                      {msg => <div className="invalid-feedback">{msg}</div>}
                                    </ErrorMessage>
                                  </FloatingLabel>
                                </Col>
                                <Col sm>   
                                  <FloatingLabel controlId="floatingPassword" label="Confirm Password" className="mb-3">
                                    <Field 
                                        type="password" 
                                        name="confirm_password" 
                                        placeholder="Confirm Password"
                                        className={`w-100 form-control ${touched.confirm_password && errors.confirm_password ? 'is-invalid' : touched.confirm_password ? 'is-valid' : ''}`}
                                        />
                                    <ErrorMessage name="confirm_password">
                                      {msg => <div className="invalid-feedback">{msg}</div>}
                                    </ErrorMessage>
                                  </FloatingLabel>
                                </Col>
                            </Row>
                            <br/>
                            <Col sm>
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

export default Scheduler;