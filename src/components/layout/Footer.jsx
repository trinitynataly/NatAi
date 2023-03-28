/*
Version: 1.1
Last edited by: Natalia Pakhomova
Last edit date: 25/03/2022
This script implements the common page footer component
*/


import React from 'react'; // Import React modules
import {Link} from 'react-router-dom'; // Import Link from React Router modules

// Import Bootstrap elements
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';

// Import logo asset
import Logo from '../../assets/NatAI.svg';

const Footer = () => {
    // Get current year from Date object for footer copyright text
    const getCurrentYear = () => {
        return new Date().getFullYear();
    };

    return (
        <>
            {/* Start of footer */}
            <footer className='footer-style'>
                {/* Start of footer navigation */}
                <div className='footer-nav'>
                    <Container>
                        {/* Start of footer logo */}
                        <div className='text-center'>
                            <a href="/" className='logo'> {/* Link to home page */}
                                <img src={Logo} alt="NatAi"/> {/* Logo image */}
                            </a>
                        </div>
                        {/* End of footer logo */}
                        {/* Start of footer navigation */}
                        <Nav className="justify-content-center mt-1">
                            <Nav.Link as={Link} to="/">Home</Nav.Link> {/* Link to home page */}
                            <Nav.Link as={Link} to="/about">About</Nav.Link> {/* Link to about page */}
                            <Nav.Link as={Link} to="/projects">Projects</Nav.Link> {/* Link to projects page */}
                        </Nav>
                        {/* End of footer navigation */}
                        {/* Start of footer copyright */}
                        <div className='footer-text'>
                            {/* Copyright text with current year calculated from the function */}
                            &copy; {getCurrentYear()} Natalia Pakhomova Portfolio All Rights Reserved
                        </div>
                        {/* End of footer copyright */}
                    </Container>
                </div>
            </footer>
            {/* End of footer */}
        </>
    )
}

export default Footer