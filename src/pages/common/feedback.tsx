import React, { useState, useEffect } from 'react';
import {
    Button,
    Container,
    Row,
    Card,
    Col,
  } from 'react-bootstrap';
import Sidebar from '../common/sidebar';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import { AiOutlineSend } from "react-icons/ai";
import { FaStar } from 'react-icons/fa';
import { MdFeedback } from "react-icons/md";
import { useDispatch } from 'react-redux';
import { feedbackRequest } from './redux/feedbackActions';
import type { AppDispatch } from '../../redux/store';

const ForgotSchema = Yup.object().shape({
    email: Yup
      .string()
      .email('Invalid email')
      .required('Email is required!'),
    comment: Yup
      .string()
      .min(2, 'Too Short!')
      .max(1000, 'Too Long!')
      .required('Comment is required!'),
});

const Feedback: React.FC = () => {
  const [isSmallScreen, setIsSmallScreen] = useState(false);
  const [rating, setRating] = useState<number>(1);
  const [hover, setHover] = useState<number | null>(null);
  const [comment, setComment] = useState<string>("");
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth <= 768);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleSubmit = (values: any) => {
    const payload = {
      rating: rating,
      email: values.email,
      comment: values.comment,
    }
    dispatch(feedbackRequest(payload));
    // console.log('Feedback submitted:', payload);
    // Reset form fields
    setRating(1);
    setHover(null);
    setComment("");
  };

  return (
    <Formik
          initialValues={{ 
            email: '',
            comment:'',
          }}
          validationSchema={ForgotSchema}
          onSubmit={handleSubmit}
        >
          {({ errors, touched }) => (
            <Container fluid data-bs-theme="dark">
              <Row>
                <Col>
                  <Sidebar />
                </Col>
                <Col xs={12} className={`mt-5 pt-4 ${isSmallScreen ? '' : 'ps-5'}`}>
                  <div className={`mt-3 ${isSmallScreen ? '' : 'ms-4 me-1'}`}>
                    <Row xs={12} className="g-1 m-1 p-2">
                        <Col className='text-light'>
                            <h4><MdFeedback size="30" className='text-warning'/> Feedback</h4>
                        </Col>
                    </Row>
                    
                    <Row xs={12} md={3} className="g-1 m-1" >
                    <Col sm></Col>
                    <Col md={5} className="p-3 text-center">
                        <Card className="shadow-sm">
                          <Card.Body>
                            <Card.Title className="fw-bold">We value your opinion.</Card.Title>
                              <Form>
                                <p>
                                    How would you rate your overall experience with us?
                                </p>
                                {/* Star Rating */}
                                <div className="mb-4">
                                    {[...Array(5)].map((_, index) => {
                                    const starValue = index + 1;
                                    return (
                                        <label key={index}>
                                        <input
                                            type="radio"
                                            name="rating"
                                            value={starValue}
                                            onClick={() => setRating(starValue)}
                                            style={{ display: 'none' }}
                                        />
                                        <FaStar
                                            size={30}
                                            style={{ cursor: 'pointer', transition: 'color 200ms' }}
                                            color={(hover || rating) >= starValue ? "#ffc107" : "#555"}
                                            onMouseEnter={() => setHover(starValue)}
                                            onMouseLeave={() => setHover(null)}
                                        />
                                        </label>
                                    );
                                    })}
                                </div>
                                <Row>
                                  <Col sm>
                                      <FloatingLabel
                                          label="Email address"
                                          className="mb-3"
                                      >
                                          <Field
                                          type="email"
                                          name="email"
                                          maxLength={100}
                                          placeholder="E-mail"
                                          className={`w-100 form-control ${touched.email && errors.email ? 'is-invalid' : touched.email ? 'is-valid' : ''}`}
                                          />
                                          <ErrorMessage name="email">
                                          {msg => <div className="invalid-feedback">{msg}</div>}
                                          </ErrorMessage>
                                      </FloatingLabel> 
                                  </Col>
                                </Row>
                                    <Col sm>
                                    <span className="text-light">Kindly take a moment to tell us what you think.</span>
                                      <FloatingLabel controlId="floatingmessage" label="Message" className="mb-3">
                                        <Field
                                          name="comment"
                                          placeholder="Comment"
                                          as="textarea"
                                          style={{ height: '200px' }}
                                          className={`w-100 form-control ${touched.comment && errors.comment ? 'is-invalid' : touched.comment ? 'is-valid' : ''}`}
                                        />
                                        <ErrorMessage name="comment">
                                          {msg => <div className="invalid-feedback">{msg}</div>}
                                        </ErrorMessage>
                                      </FloatingLabel>
                                    </Col>

                                {/* Submit */}
                                    <div className="d-grid gap-2 mt-3">
                                        <Button variant="primary" type="submit" className="btn btn-primary btn-block rounded-pill mb-3">
                                            <AiOutlineSend size="20" /> Submit Feedback
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

export default Feedback;
