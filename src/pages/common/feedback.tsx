import React, { useState, useEffect } from 'react';
import {
    Button,
    Container,
    Row,
    Card,
    Col,
    Form,
  } from 'react-bootstrap';
import Sidebar from '../common/sidebar';
import { AiOutlineSend } from "react-icons/ai";
import { FaStar } from 'react-icons/fa';
import { MdFeedback } from "react-icons/md";

const Feedback: React.FC = () => {
  const [isSmallScreen, setIsSmallScreen] = useState(false);
  const [rating, setRating] = useState<number>(0);
  const [hover, setHover] = useState<number | null>(null);
  const [comment, setComment] = useState<string>("");

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth <= 768);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Submitted Rating:', rating);
    console.log('Comment:', comment);
    // You can send this to a backend API
    alert("Thank you for your feedback!");
    setRating(0);
    setHover(null);
    setComment("");
  };

  return (
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

                        <Form onSubmit={handleSubmit}>
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

                        {/* Comment Field */}
                        <Form.Group className="mb-4" controlId="feedbackText">
                            <Form.Label className="text-light">Kindly take a moment to tell us what you think.</Form.Label>
                            <Form.Control
                            as="textarea"
                            rows={6}
                            placeholder="Write something..."
                            value={comment}
                            onChange={(e) => setComment(e.target.value)}
                            />
                        </Form.Group>

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
  );
};

export default Feedback;
