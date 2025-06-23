import React from 'react';
import { 
    Button, 
    Container, 
    Nav,
    Navbar,
    Offcanvas,
    Dropdown,
    NavDropdown
} from 'react-bootstrap';
import { encryptPath } from '../../components/encryptor';
import { useNavigate } from 'react-router-dom';
import logo_head from '../../images/logo.png';
import avatar from '../../images/me.jpg'; 
import { RiFeedbackLine } from "react-icons/ri";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineBell, AiOutlineComment, AiOutlineLogout, AiOutlineIdcard, AiOutlineDashboard } from "react-icons/ai";
import { FaHome } from "react-icons/fa";
import { MdOutlineInfo } from "react-icons/md";
import { GrServices } from "react-icons/gr";
import { IoMdPricetags } from "react-icons/io";
import { BiSolidPhoneCall } from "react-icons/bi";
import { getLocalStorageVariable, setLocalStorageVariable } from '../../components/localStorage';

const Home: React.FC = () =>{
    const email = getLocalStorageVariable<string>('loginEmail');
    const userId = getLocalStorageVariable<string>('userId');
    const navigate = useNavigate();
    const encryptedDashboardPath = encryptPath('/user_dashboard');
    const encryptedFeedbackdPath = encryptPath('/feedback');

    // ****** Navigate to path when click *****
    // ****** Navigate to path when click *****
    const handleItemClick = (path: string) => {
        // setShow(false);
        // setSessionVariable('setSelectedItem', path);
        navigate(path);
    };

  return (
    <Container fluid className='bg-dark' data-bs-theme="dark" style={{position:'fixed', zIndex: 9}}>
        {['sm'].map((expand, index) => (
            <Navbar  key={index} expand={expand}  bg="dark" data-bs-theme="dark" className="shadow-lg ps-5">
                <Container fluid>
                    <Navbar.Brand href="/">
                        <img src={logo_head} alt="" width="40" height="40"/>
                        &nbsp;Pears Portal
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
                    <Navbar.Offcanvas
                        id={`offcanvasNavbar-expand-${expand}`}
                        aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
                        placement="end"
                        data-bs-theme="dark"
                    >
                        <Offcanvas.Header closeButton>
                            <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                                Pears Portal
                            </Offcanvas.Title>
                        </Offcanvas.Header>
                        <Offcanvas.Body>
                            <Nav className="justify-content-end flex-grow-1 pe-3">
                                <Nav.Link href="/"><FaHome size={15}/> Home</Nav.Link>
                                <Nav.Link href="/about"><MdOutlineInfo size={15}/> About Us</Nav.Link>
                                <Nav.Link href="/services"><GrServices size={15}/> Services</Nav.Link>
                                {/* <Nav.Link href="/pricing"><IoMdPricetags size={15}/> Pricing</Nav.Link> */}
                                <Nav.Link href="/contact"><BiSolidPhoneCall size={15}/> Contact Us</Nav.Link>
                            </Nav>
                            {userId!='' && userId!=null?
                                <>
                                    <NavDropdown
                                        // title={<Image src={userAvatar || '/static/media/default.d1c5ffe2b3cea9d80c7b.jpg'} width="35" height="35" roundedCircle />}
                                        title={
                                            <span>
                                            <GiHamburgerMenu size={20} />&nbsp;
                                            <img src={avatar} alt="User Avatar" width="35" height="35" className="rounded-circle" />
                                            </span>
                                        }
                                        id="dropdown-button-drop-start"
                                        drop='start'
                                        className="btn btn-block rounded-pill" 
                                    >
                                        {/* {userAuth!='client'?
                                        <>
                                            <NavDropdown.Item onClick={() => handleItemClick(`/${encryptedAdminDashboardPath}`)}><AiOutlineDashboard size="20" /> &nbsp;Dashboard</NavDropdown.Item>
                                            <NavDropdown.Divider />
                                            <NavDropdown.Item onClick={() => handleItemClick('/admin_profile')}><AiOutlineIdcard size="20" /> &nbsp;Profile</NavDropdown.Item>
                                            {/* <NavDropdown.Item onClick={() => handleItemClick('/admin_notifications')}><AiOutlineBell size="20" /> &nbsp;Notifications</NavDropdown.Item>
                                            <NavDropdown.Item onClick={() => handleItemClick('/admin_messages')}><AiOutlineComment size="20" /> &nbsp;Messages</NavDropdown.Item> */}
                                           
                                        {/* </>:<> */} 
                                            <NavDropdown.Item onClick={() => handleItemClick(`${encryptedDashboardPath}`)}><AiOutlineDashboard size="20" /> &nbsp;Dashboard</NavDropdown.Item>
                                            <NavDropdown.Divider />
                                            <NavDropdown.Item onClick={() => handleItemClick('/profile')}><AiOutlineIdcard size="20" /> &nbsp;Profile</NavDropdown.Item>
                                            <Dropdown.Item onClick={() => handleItemClick(`/feedback`)}><RiFeedbackLine size="20" /> &nbsp;Feedback</Dropdown.Item>
                                        {/* </>
                                        } */}
                                        <NavDropdown.Divider />
                                        <NavDropdown.Item onClick={() => handleItemClick('/logout')}><AiOutlineLogout size="20" /> &nbsp;Logout</NavDropdown.Item>
                                  </NavDropdown>
                                </>
                            :
                                <Nav.Link className="ms-auto" href="/login">
                                    {/* <Button onClick={() => handleItemClick('/login')} variant="success" type="submit" className="btn btn-block rounded-pill m-1" >
                                        Log In
                                    </Button> */}
                                    <div className="d-grid gap-2">
                                        <Button variant="light" type="submit" className="btn btn-block rounded-pill m-1" >
                                            Log In
                                        </Button>
                                    </div>
                                </Nav.Link>
                            }

                                {/* <Nav.Link className="ms-auto" href="/sign_up">
                                <Button variant="primary" type="submit" className="btn btn-block rounded-pill m-1" >
                                    Sign Up
                                </Button>
                            </Nav.Link> */}
                        </Offcanvas.Body>
                    </Navbar.Offcanvas>
                </Container>
            </Navbar>
        ))}
    </Container>
  );
};

export default Home;