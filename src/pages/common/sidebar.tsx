import React, { useState } from 'react';
import { 
  Row, 
  ListGroup, 
  Col 
} from 'react-bootstrap';
import '../../styles/sidebar.css';
import { FaHome } from "react-icons/fa";
import { AiFillDashboard } from "react-icons/ai";
import { MdShoppingCart } from "react-icons/md";
import { IoCalendar } from "react-icons/io5";
import { FaRegCreditCard } from "react-icons/fa";
import { RiMenuUnfoldFill } from "react-icons/ri";
import { PiPackageFill } from "react-icons/pi";
import { IoRestaurantSharp } from "react-icons/io5";
import { IoIosSchool } from "react-icons/io";
import { MdAccessTimeFilled } from "react-icons/md";
import { FaMoneyBillWave } from "react-icons/fa6";
import { IoCloseSharp } from "react-icons/io5";

const Sidebar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <div className="toggle-btn text-light" onClick={toggleSidebar}>
        {isOpen ? <div className='text-end' style={{left:'190px', position:'relative'}}><IoCloseSharp size={30} /></div>: <div className='text-end'><RiMenuUnfoldFill size={30} /></div>}
      </div>
        
        <div className={`sidebar ${isOpen ? 'open' : ''}`}>
          <div className="sidebar-content">
            <Row>
                <Col sm={12}>
                    <ListGroup >
                        <ListGroup.Item key="home" action variant="dark" href="/">
                            {isOpen ? <div><FaHome size={25} /> &nbsp;Home</div> : <div className='text-end all-icon home-icon'><FaHome size={25} /></div>}
                        </ListGroup.Item>
                        {/* <ListGroup.Item key="dashboard" action variant="dark">
                            {isOpen ? <div><AiFillDashboard size={25} /> &nbsp;Dashboard</div> : <div className='text-end all-icon dashboard-icon'><AiFillDashboard size={25} /></div>}
                        </ListGroup.Item> */}
                        <ListGroup.Item key="booking" action variant="dark" href='/booking_menu'>
                            {isOpen ? <div><IoCalendar size={25} /> &nbsp;Booking</div> : <div className='text-end all-icon booking-icon'><IoCalendar size={25} /></div>}
                        </ListGroup.Item>
                        <ListGroup.Item key="shopping" action variant="dark" href="/shop">
                            {isOpen ? <div><MdShoppingCart size={25} /> &nbsp;Shopping</div> : <div className='text-end all-icon shopping-icon'><MdShoppingCart size={25} /></div>}
                        </ListGroup.Item>
                        <ListGroup.Item key="billing" action variant="dark" href='/billing_menu'>
                            {isOpen ? <div><FaRegCreditCard size={25} /> &nbsp;Billing</div> : <div className='text-end all-icon billing-icon'><FaRegCreditCard size={25} /></div>}
                        </ListGroup.Item>
                        <ListGroup.Item key="enrollment" action variant="dark">
                            {isOpen ? <div><IoIosSchool size={25} /> &nbsp;Enrollment</div> : <div className='text-end all-icon enrollment-icon'><IoIosSchool size={25} /></div>}
                        </ListGroup.Item>
                        <ListGroup.Item key="inventory" action variant="dark">
                            {isOpen ? <div><PiPackageFill size={25} /> &nbsp;Inventory</div> : <div className='text-end all-icon inventory-icon'><PiPackageFill size={25} /></div>}
                        </ListGroup.Item>
                        <ListGroup.Item key="order" action variant="dark">
                            {isOpen ? <div><IoRestaurantSharp size={25} /> &nbsp;Ordering</div> : <div className='text-end all-icon order-icon'><IoRestaurantSharp size={25} /></div>}
                        </ListGroup.Item>
                        <ListGroup.Item key="dtr" action variant="dark">
                            {isOpen ? <div><MdAccessTimeFilled size={25} /> &nbsp;DTR</div> : <div className='text-end all-icon dtr-icon'><MdAccessTimeFilled size={25} /></div>}
                        </ListGroup.Item>
                        <ListGroup.Item key="payroll" action variant="dark">
                            {isOpen ? <div><FaMoneyBillWave size={25} /> &nbsp;Payroll</div> : <div className='text-end all-icon payroll-icon'><FaMoneyBillWave size={25} /></div>}
                        </ListGroup.Item>
                    </ListGroup>
                </Col>
            </Row>
          </div>
        </div>
    </div>
  );
};

export default Sidebar;