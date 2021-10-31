import React from 'react';
import {Link} from "react-router-dom";
//import {Container, Nav} from "react-bootstrap";

const Navbar = () => {
    return (
        /* bootstrap nav did not work, look at it later and fix it
        <Navbar bg="light" variant="light">
            <Container>
                <Navbar.Brand as={Link} to="/">KYC</Navbar.Brand>
                <Nav className="me-auto">
                    <Nav.Link as={Link} to="/">Home</Nav.Link>
                    <Nav.Link as={Link} to="/search">Search</Nav.Link>
                    <Nav.Link as={Link} to="/queue">Queue</Nav.Link>
                    <Nav.Link as={Link} to="/summary">Summary</Nav.Link>
                </Nav>
            </Container>
        </Navbar>*/
        <div>
            <li>
                <Link to="/">Home</Link>
            </li>
            <li>
                <Link to="/search">Search</Link>
            </li>
            <li>
                <Link to="/queue">Queue</Link>
            </li>
            <li>
                <Link to="/summary">Summary</Link>
            </li>
        </div>
    );
}
export default Navbar;