import React from 'react';
import {Container, Nav, Navbar} from "react-bootstrap";

const Navigation = () => {
    return (
        <Navbar bg="light" variant="light" collapseOnSelect expand="md">
            <Container>
                <Navbar.Brand href="/">PEꟼ</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
                <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-end">
                    <Nav>
                        <Nav.Link href={"/"}>Home</Nav.Link>
                        <Nav.Link href={"/search"}>Search</Nav.Link>
                        <Nav.Link href={"/queue"}>Queue</Nav.Link>
                        <Nav.Link href={"/summary"}>Summary</Nav.Link>
                        <Navbar.Text><span className="badge bg-primary">Signed in as Ola N.</span></Navbar.Text>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}
export default Navigation;