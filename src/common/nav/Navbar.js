import React from 'react'
import { Link } from 'react-router-dom'
import { Navbar,Nav, Container } from 'react-bootstrap'

import "./navbarStyle.css"


export default function NavbarComponent() {

    return(
        <Navbar bg="dark" className="myNavbar" expand="lg" variant="dark">
            <Container>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                    <Link className="nav-link" to="/LauWebPage/home">Home</Link>
                    <Link className="nav-link" to="/LauWebPage/pictures">Pictures</Link>
                    <Link className="nav-link" to="/LauWebPage/contact">Contacts</Link>
                    

                    
                </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
   
}





