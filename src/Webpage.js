import { useState, useEffect } from 'react';
import React from "react";
import  Button  from 'react-bootstrap/Button';
import { Route, Routes, useParams, useNavigate, useLocation } from 'react-router-dom';
import './webpage.css';
import Card from 'react-bootstrap/Card';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Container, Navbar } from 'react-bootstrap';
import Nav from 'react-bootstrap/Nav';


const Home = () => {

    const navigate = useNavigate();
    const handleLogin = (event) => {
        event.preventDefault();
        navigate('/Login')
    };
        const handleRegister = (event) => {
            event.preventDefault();
            navigate('/Register')
        };
    return(
        
        <div>
            <div>
            <div className='lgnhdr'>
            <Navbar bg='light' expand="lg">
                    <Container>
                        <Navbar.Brand href="/home">Kailen's Webpage</Navbar.Brand>
                        <Navbar.Toggle aria-controls='basic-navbar-nav' />
                        <Navbar.Collapse id='basic-navbar-nav'>
                            <Nav className='me-auto'>
                                <Nav.Link href='/home'>Home</Nav.Link>
                                <Nav.Link href='/Login'>Login</Nav.Link>
                                <Nav.Link href='profile'>Profile</Nav.Link>
                                <NavDropdown title="Settings" id="basic-nav-dropdown">
                                </NavDropdown>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </div>
            <h1 className='header'>Welcome Home </h1>
            <Button variant='outline-secondary' type='submit' onClick={handleLogin}>Login</Button>{" "}
            <Button variant='outline-secondary' type='submit' onClick={handleRegister}>Register</Button>
            </div>
            
        </div>
    );
}


const Login = () => {
    const [username, setUsername] = useState("");
    const [password, setpassword] = useState("");
    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();
        navigate('/profile')
    };
    return(
            <div className='lgnhdr'>
                <Navbar bg='light' expand="lg">
                    <Container>
                        <Navbar.Brand href="/home">Kailen's Webpage</Navbar.Brand>
                        <Navbar.Toggle aria-controls='basic-navbar-nav' />
                        <Navbar.Collapse id='basic-navbar-nav'>
                            <Nav className='me-auto'>
                                <Nav.Link href='/home'>Home</Nav.Link>
                                <Nav.Link href='/login'>Login</Nav.Link>
                                <Nav.Link href='profile'>Profile</Nav.Link>
                                <NavDropdown title="Settings" id="basic-nav-dropdown">
                                </NavDropdown>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
                <div className='lgnDiv'>
            <Card className='loginbackground'>
            <h1>Login</h1>
            <br></br>
            <p>Enter Username</p>
            <input id="username1" value={username} onChange={(e) => setUsername(e.target.value)} placeholder="Enter Username" ></input>
            <br></br>
            <p>Enter Password</p>
            <input id="password" value={password} onChange={(e) => setpassword(e.target.value)} placeholder="Enter Password"></input>
            <form onSubmit={UserProfile}> <br></br>
            <Button variant='outline-secondary'type='submit' onClick={handleSubmit}>Login</Button>
            </form>
            <br></br>
            </Card>
            </div>
            </div>
    );
}
const UserProfile = () => {
    return(
        <div>
            <div className='lgnhdr'>
            <Navbar bg='light' expand="lg">
                    <Container>
                        <Navbar.Brand href="/home">Kailen's Webpage</Navbar.Brand>
                        <Navbar.Toggle aria-controls='basic-navbar-nav' />
                        <Navbar.Collapse id='basic-navbar-nav'>
                            <Nav className='me-auto'>
                                <Nav.Link href='/home'>Home</Nav.Link>
                                <Nav.Link href='/login'>Login</Nav.Link>
                                <Nav.Link href='profile'>Profile</Nav.Link>
                                <NavDropdown title="Settings" id="basic-nav-dropdown">
                                </NavDropdown>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </div>
            <h1>Welcome To Your profile {Login.username}</h1>
        </div>
    )
}


const Routing = () => {
    return(
        <div>
            <div>
                
            </div>
            <Routes>
                <Route path='/Profile' element={<UserProfile />} />
                <Route path='/Login' element={<Login />}/>
                <Route path='/Home' element={<Home />} />
            </Routes>
        </div>
    );
}
export default Routing;

