import React, { useState, useEffect } from 'react';
import {
  Container,
  Row,
  Col,
  Accordion
} from 'react-bootstrap';
import Sidebar from '../../common/sidebar';
import { FaQuestionCircle } from "react-icons/fa";

const Services: React.FC = () => {
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth <= 768);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

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
                <h4><FaQuestionCircle size="30" className='text-warning'/> FAQ</h4>
                
                </Col>
            </Row>
            <Row className="d-flex justify-content-center">
              <Col>
                <Accordion defaultActiveKey="0" flush className="rounded">
                    <Accordion.Item eventKey="0">
                        <Accordion.Header>What are the benefits of the user by using the system?</Accordion.Header>
                        <Accordion.Body>
                          Tranparency - you can view and monitor your transaction anytime<br/>
                          Convenience - just a couple clicks away to pay your bills and no more capture of evidence<br/>
                          Safety - security in the client side and the server side is implemented to ensure the safety of your data<br/>
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="1">
                        <Accordion.Header>How do we contact for help?</Accordion.Header>
                        <Accordion.Body>
                          Via chat, Email or phone
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="2">
                        <Accordion.Header>How to avoid system failure?</Accordion.Header>
                        <Accordion.Body>
                          Conduct Regular Maintenance: Inspection and check-up of the IT systems, and software upgrades will help prevent most of the causes of system failure. 
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
              </Col>
            </Row>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Services;
