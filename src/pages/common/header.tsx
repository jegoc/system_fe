import React from 'react';
import { 
    Button, 
    Container, 
    Nav,
    Navbar,
    Offcanvas
} from 'react-bootstrap';
import logo_head from '../../images/logo.png';
import { FaHome } from "react-icons/fa";
import { MdOutlineInfo } from "react-icons/md";
import { GrServices } from "react-icons/gr";
import { IoMdPricetags } from "react-icons/io";
import { BiSolidPhoneCall } from "react-icons/bi";
import { getLocalStorageVariable, setLocalStorageVariable } from '../../components/localStorage';

const Home: React.FC = () =>{
    const email = getLocalStorageVariable<string>('loginEmail');
    const userId = getLocalStorageVariable<string>('userId');

    // ****** Navigate to path when click *****
    const handleItemClick = (path: string) => {
    // setSessionVariable('setSelectedItem', path);
    // navigate(path);
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
                                {/* <NavDropdown
                                    title="Dropdown"
                                    id={`offcanvasNavbarDropdown-expand-${expand}`}
                                >
                                    <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                                    <NavDropdown.Item href="#action4">
                                        Another action
                                    </NavDropdown.Item>
                                    <NavDropdown.Divider />
                                    <NavDropdown.Item href="#action5">
                                        Something else here
                                    </NavDropdown.Item>
                                </NavDropdown> */}
                            </Nav>
                            {/* <Form className="d-flex">
                                <Form.Control
                                    type="search"
                                    placeholder="Search"
                                    className="me-2"
                                    aria-label="Search"
                                />
                                <Button variant="outline-success">Search</Button>
                            </Form> */}
                            {/* <Nav className="ms-auto">
                                <Button onClick={() => handleItemClick('/login')} variant="light" type="submit" className="btn btn-block rounded-pill m-1" >
                                    Log In
                                </Button>
                                <Button onClick={() => handleItemClick('/activation')} variant="primary" type="submit" className="btn btn-block rounded-pill m-1" >
                                    Sign Up
                                </Button>
                            </Nav> */}
                            {userId!='' && userId!=null?
                                <Nav.Link className="ms-auto" href="/logout">
                                    {/* <Button onClick={() => handleItemClick('/login')} variant="success" type="submit" className="btn btn-block rounded-pill m-1" >
                                        Log In
                                    </Button> */}
                                    <div className="d-grid gap-2">
                                        <Button variant="light" type="submit" className="btn btn-block rounded-pill m-1" >
                                            Log Out
                                        </Button>
                                    </div>
                                </Nav.Link>
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