import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import './Header.css';
import logo from '../../../../src/Images/HomePage/Logo.png';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <Navbar className='navBarColor' collapseOnSelect expand="lg" bg="light" variant="light">
                <Container>
                    <Navbar.Brand href="#home" className='logoImg'>
                        <img src={logo} alt="" />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav" className='navSpace'>
                        <Nav className="me-auto middleLink">
                            <Nav.Link as={Link} to="/home" className='navName'>HOME</Nav.Link>
                            <Nav.Link as={Link} to="/about" className='navName'>ABOUT</Nav.Link>
                            <Nav.Link as={Link} to="/services" className='navName'>SERVICES</Nav.Link>
                            <Nav.Link as={Link} to="/contact" className='navName'>CONTACT</Nav.Link>
                        </Nav>
                        <Nav>
                            <button className='bookBtn'>BOOK NOW</button>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;