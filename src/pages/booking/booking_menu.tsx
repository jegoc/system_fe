import React, { useState, useEffect } from 'react';
import { 
  Container, 
  Row,
  Col,
} from 'react-bootstrap';
import Sidebar  from '../common/sidebar';
import Calendar from 'react-calendar';
// import 'react-calendar/dist/Calendar.css';
import '../../styles/calendar.css';

type ValuePiece = Date | null;
type Value = ValuePiece | [ValuePiece, ValuePiece];

const Booking_Menu: React.FC = () =>{
  const [isSmallScreen, setIsSmallScreen] = useState(false);
  const [value, onChange] = useState<Value>(new Date());
  const [selectedDate, setSelectedDate] = useState<Date | Date[]>(new Date());

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

    
  const handleDateChange = (date: Date | Date[] | null) => {
      if (date !== null) {
      setSelectedDate(date);
      }
  };

  return (
    <Container fluid className='' data-bs-theme="dark">
        <Row>
          <Col >      
            <Sidebar  />
          </Col>
          <Col xs={12} className={`mt-5 pt-4 ${isSmallScreen ? '' : 'ps-5'}`}> {/* Conditional rendering for ps-5 class */}            
              <div className={`mt-3 ${isSmallScreen ? '' : 'ms-4 me-1'}`}> {/* Conditional rendering for ms-4 class */}
                <Row xs={12} md={2} className="g-1 m-1" >
                    <Col md={4} className="p-3 text-center">
                      <div className='p-3' >
                          {/* <Calendar onChange={handleDateChange} value={selectedDate} /> */}
                          <Calendar onChange={onChange} calendarType='gregory'  value={value} />
                          {/* {Array.isArray(selectedDate) ? null : <ReservationForm selectedDate={selectedDate as Date} />} */}
                          {/* <Button variant="outline-primary" className='mt-2 w-100'><LuCalendarPlus size='20' /> &nbsp;Reservation</Button><br/> */}
                      </div>
                    </Col>
                    <Col md={8} className="p-3 text-center">
                        <div className='p-3 text-light rounded' style={{backgroundColor:'rgb(43,48,53)'}} >
                          All schedules will display here
                          <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
                      </div>
                    </Col>
                </Row>
              </div>
          </Col> 
      </Row>
    </Container>
  );
};

export default Booking_Menu;