import React from "react";
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';

const MyNavBar = () => (
    <div>
        <Navbar bg="dark" variant="dark">
            <Container>
                <Navbar.Brand href="#home">APOD</Navbar.Brand>
                <Nav className="justify-content-end">
                    <Nav.Link href="#home">Help</Nav.Link>
                    <Nav.Link href="#link">About</Nav.Link>
                </Nav>
            </Container>
        </Navbar>
    </div>
);

export default MyNavBar;
