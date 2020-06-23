import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import { Nav, Navbar } from 'react-bootstrap';
import styled from 'styled-components';
import Resume from '../media/RumbaoaResume2020.pdf';

const Styles = styled.div`
    .navbar {
        background-color: #222
    }
    
    .navbar-brand, .navbar-nav .nav-link {
        color: #bbb;


        &:hover {
            color: white;
        }
    }
`;

export class Navigation extends Component {
    render() {
        return (
            <Styles>
                <Navbar expand="lg">
                    <Navbar.Brand href="/">A|R</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav"  />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ml-auto">
                            <Nav.Item>
                                <Nav.Link>
                                    <Link to="/">Home</Link>
                                </Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link href="/about">
                                    <Link to="/about">About</Link>
                                </Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link>
                                    <Link to="/portfolio">Portfolio</Link>
                                </Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link href={Resume}>
                                    Resume
                                </Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link href="/contact">
                                    <Link to="/contact">Contact</Link>
                                </Nav.Link>
                            </Nav.Item>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </Styles>
        )
    }
}

export default Navigation;