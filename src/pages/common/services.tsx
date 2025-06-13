import React, { useState, useEffect } from 'react';
import {
  Container,
  Row,
  Col,
} from 'react-bootstrap';
import Sidebar from './sidebar';
import { FaLaptopCode, FaMobileAlt, FaBullhorn, FaTools } from "react-icons/fa";

const serviceData = [
  {
    id: 1,
    title: "Web Development",
    description: "We build fast, responsive, SEO-friendly websites to help grow your business.",
    icon: <FaLaptopCode size={60} style={{color:'rgb(37,189,190)'}} />,
  },
  {
    id: 2,
    title: "Mobile App",
    description: "Cross-platform mobile app solutions that are scalable and secure.",
    icon: <FaMobileAlt size={60} style={{color:'rgb(141,198,63)'}} />,
  },
  {
    id: 3,
    title: "Digital Marketing",
    description: "Boost your brand with our SEO, social media, and content strategies.",
    icon: <FaBullhorn size={60} style={{color:'rgb(247,148,30)'}} />,
  },
  {
    id: 4,
    title: "Maintenance & Support",
    description: "Reliable post-launch support to keep your systems running smoothly.",
    icon: <FaTools size={60} style={{color:'rgb(253,185,19)'}} />,
  }
];

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
            <h2 className="text-white text-center fw-bold mb-5">Our Services</h2>
            <Row className="d-flex justify-content-center">
              {serviceData.map((service, idx) => (
                <Col key={idx} md={6} lg={3} className="mb-5 d-flex justify-content-center">
                  <div style={{
                    backgroundColor: 'rgb(33,37,41)',
                    borderRadius: '10px',
                    padding: '30px 20px',
                    textAlign: 'center',
                    width: '100%',
                    maxWidth: '400px',
                    border: '1px solid rgb(154, 157, 158)',
                    boxShadow: '0 4px 20px rgba(0,0,0,0.5)',
                    color: '#ffffff',
                    position: 'relative'
                  }}>
                    {/* Icon */}
                    <div style={{
                      backgroundColor: 'transparent',
                      borderRadius: '50%',
                      width: '100px',
                      height: '100px',
                      margin: '0 auto 15px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}>
                      {service.icon}
                    </div>

                    {/* Title */}
                    <h3 className="fw-bold mt-3">{service.title}</h3>

                    {/* Description */}
                    <p style={{ fontSize: '0.9rem' }}>{service.description}</p>

                    {/* Number Badge */}
                    <div style={{
                      position: 'absolute',
                      top: '-15px',
                      left: '15px',
                      backgroundColor: '#00bfff',
                      borderRadius: '50%',
                      width: '35px',
                      height: '35px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontWeight: 'bold',
                      color: '#000'
                    }}>
                      {service.id < 10 ? `0${service.id}` : service.id}
                    </div>
                  </div>
                </Col>
              ))}
            </Row>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Services;
