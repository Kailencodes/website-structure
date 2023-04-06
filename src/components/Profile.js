import { useEffect } from 'react';
import React from "react";
import  Button  from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';
import './webpage.css';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Container, Navbar } from 'react-bootstrap';
import Nav from 'react-bootstrap/Nav';
const UserProfile = () => {
    const isRegistered = false;
    const navigate = useNavigate();


    useEffect(() => {
        if(isRegistered){
            alert("please log in")
            navigate('/Login')
        }
    });
    const handleSubmit = (event) => {
        event.preventDefault();
        navigate('/Login')
    };

    return(
        
        <div>
            <div></div>
            <div className='lgnhdr'>
            <Navbar bg='light' expand="lg">
                    <Container>
                        <Navbar.Brand href="/home"style={{fontFamily: 'Myriad Pro Regular'}}>Zine</Navbar.Brand>
                        <Navbar.Toggle aria-controls='basic-navbar-nav' />
                        <Navbar.Collapse id='basic-navbar-nav'>
                            <Nav className='me-auto' style={{fontFamily: 'Myriad Pro Regular'}}>
                                <Nav.Link href='/home' >Home</Nav.Link>
                                <Nav.Link href='/login'>Login</Nav.Link>
                                <Nav.Link href='profile'>Profile</Nav.Link>
                                <NavDropdown title="Settings" id="basic-nav-dropdown">
                                </NavDropdown>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </div>
            <h1 style={{fontFamily: 'Myriad Pro Regular'}}>Welcome To Your profile</h1>
            <Button style={{fontFamily: 'Myriad Pro Regular'}} variant='outline-secondary'type='submit' onClick={handleSubmit}>Go To Login</Button>
        </div>
    );
}
export default UserProfile;