import React, { useEffect, useState } from 'react';
import {
  Button,
  Container,
  Row,
  Alert,
  Col,
  Card
} from 'react-bootstrap';
import Sidebar from '../common/sidebar';
import { AiOutlineSend } from "react-icons/ai";
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import { RiLockPasswordLine } from "react-icons/ri";
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useDispatch, useSelector } from 'react-redux';
import type { AppDispatch } from '../../redux/store';
import { forgotRequest } from './redux/forgotActions';
import { RootState } from '../../redux/reducers';
import { LoadingPage } from '../../components/loader';
import { ForgotResetFailed, ForgotResetSuccess } from './loader';
import logo from '../../images/logo.png';

const ForgotSchema = Yup.object().shape({
    email: Yup
      .string()
      .email('Invalid email')
      .required('Email is required!'),
    confirm: Yup
      .bool()
      .oneOf([true], "Please confirm")
      .required("Please confirm"),
});

const Forgot: React.FC = () => {
  const [isSmallScreen, setIsSmallScreen] = useState(false);
  const loading = useSelector((state: RootState) => state.ForgotReducer.loading);
  const success = useSelector((state: RootState) => state.ForgotReducer.user);
  const failed = useSelector((state: RootState) => state.ForgotReducer.error);
  const [randomString, setRandomString] = useState<string>('');

  const dispatch = useDispatch<AppDispatch>();

  const generateRandomString = (length: number): string => {
    const characters = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    let result = '';
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * characters.length);
      result += characters.charAt(randomIndex);
    }
    return result;
  };

  useEffect(() => {
      const generatedString = generateRandomString(10);
      setRandomString(generatedString);
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

  const handleSubmit = (values: any) => {
    const payload = {
        email: values.email,
        password: randomString,
      }
      dispatch(forgotRequest(payload));
    };

  return (
    <Formik
      initialValues={{ 
        email: '',  
        confirm: false, 
      }}
      validationSchema={ForgotSchema}
      onSubmit={handleSubmit}
    >
      {({ errors, touched }) => (
      <Container fluid data-bs-theme="dark">
        {loading?<LoadingPage/>:""}
        {failed?<ForgotResetFailed/>:""}
        {success?<ForgotResetSuccess/>:""}
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
                                To reset your password :<br/>&nbsp; ○ Input your email address. <br/>&nbsp; ○ Check your email for your temporary password.
                            </p>
                        </Alert>
                        <br/>
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
                              <br/>
                              <Row>
                                <Col sm>                       
                                    <label>
                                        <Field type="checkbox" name="confirm" />
                                        &nbsp;Please confirm to reset.
                                    </label>
                                    <ErrorMessage name="confirm">
                                        {msg => <div style={{color:'rgb(234,109,84)',padding:'5px'}}>{msg}</div>}
                                    </ErrorMessage>
                                </Col>
                                </Row>
                              <br/>
                            <div className="d-grid gap-2">
                                <Button  type='submit' className="btn btn-primary btn-block rounded-pill mb-5" >
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
