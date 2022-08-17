import React from "react";
import { Outlet, Link } from "react-router-dom";
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';

const MyNavBar = () => (
    <div>
        <Navbar bg="dark" variant="dark">
            {/* This is how you set up links for react-router in Bootstrap  */}
            <Container>
                <Link to="/" className="navbar-brand text-decoration-none">APOD</Link>
                <Nav className="justify-content-end">
                    <Link to="/help" className="nav-link">Help</Link>
                    <Link to="/about" className="nav-link">About</Link>
                </Nav>
            </Container>
        </Navbar>
        <Outlet />
    </div>
);

export default MyNavBar;
