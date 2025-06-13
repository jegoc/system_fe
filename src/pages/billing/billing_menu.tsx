import React, { useState, useEffect } from 'react';
import { 
  Container, 
  Card,
  Row,
  Col,
} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Sidebar  from '../common/sidebar';
import linao from '../../images/linao.png';
import south from '../../images/south.png';

const Billing_Menu: React.FC = () =>{
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

  return (
    <Container fluid className='' data-bs-theme="dark">
        <Row>
          <Col >      
            <Sidebar  />
          </Col>
          <Col xs={12} className={`mt-5 pt-4 ${isSmallScreen ? '' : 'ps-5'}`}> {/* Conditional rendering for ps-5 class */}
            <div style={{width:"400px"}}></div>
              <div className={`mt-3 ${isSmallScreen ? '' : 'ms-4 me-1'}`}> {/* Conditional rendering for ms-4 class */}

                <Row xs={1} md={4} className="g-1 m-1">
                  <Col>
                  </Col>
                  <Col>
                    <Card className="m-1 rounded shadow-lg">
                      <Link to="https://billing.pearsportal.com/" style={{ textDecoration: 'none'}} className='text-light'>
                        <Card.Img variant="top" src={linao} height="200px" className='bg-secondary'/>
                        <Card.Body>
                          <Card.Title>Casa Mira - Linao</Card.Title>
                        </Card.Body>
                        <Card.Footer>
                          <small className="text-muted">Billing System</small>
                        </Card.Footer>
                      </Link>
                    </Card>
                  </Col>

                  <Col>
                    <Card className="m-1 rounded shadow-lg">
                      <Link to="https://billing.pearsportal.com/" style={{ textDecoration: 'none'}} className='text-light'>
                        <Card.Img variant="top" src={south} height="200px" className='bg-secondary' />
                        <Card.Body>
                          <Card.Title>Casa Mira - South</Card.Title>
                        </Card.Body>
                        <Card.Footer>
                          <small className="text-muted">Billing System</small>
                        </Card.Footer>
                      </Link>
                    </Card>
                  </Col>
                  <Col>
                  </Col>
                </Row>

              </div>
          </Col> 
      </Row>
    </Container>
  );
};

export default Billing_Menu;