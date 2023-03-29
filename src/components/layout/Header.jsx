/*
Version: 1.3
Last edited by: Natalia Pakhomova
Last edit date: 25/03/2023
This script implements the common page header component
*/

import React from 'react'; // Import React modules
import {Link, useLocation} from 'react-router-dom'; // Import Link and useLocation form React Router modules

// Import Bootstrap modules
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';

// Import logo asset
import Logo from '../../assets/NatAI.svg';

// Import contact icons
import PhoneIcon from '../../assets/Icons/telephone-call.svg';
import EmailIcon from '../../assets/Icons/email.svg';
import LinkedInIcon from '../../assets/Icons/linkedin.svg';
import InstagramIcon from '../../assets/Icons/instagram.svg';
import FacebookIcon from '../../assets/Icons/facebook.svg';
import WhatsAppIcon from '../../assets/Icons/messenger.svg';
import TelegramIcon from '../../assets/Icons/telegram.svg';

const Header = () => {
    // Get current location
    const location = useLocation();
    // Extract pathname from location
    const {pathname} = location;
    // Split path by slash to get array of page names
    const splitLocation = pathname.split("/");

    // Setup contact array, for each contact provide link, title and icon
    const Contacts = [
        {
            "link": "tel:0478947388",
            "title": "Phone",
            "image": PhoneIcon
        },
        {
            "link": "mailto:natalia@zappli.com.au",
            "title": "Email",
            "image": EmailIcon
        },
        {
            "link": "https://www.linkedin.com/in/nataliapakhomova/",
            "title": "LinkedIn",
            "image": LinkedInIcon
        },
        {
            "link": "https://www.instagram.com/owlphotographyau/",
            "title": "Instagram",
            "image": InstagramIcon
        },
        {
            "link": "https://www.facebook.com/natalia.kudriavceva.owlphotography",
            "title": "Facebook",
            "image": FacebookIcon
        },
        {
            "link": "https://wa.me/+61478947388",
            "title": "WhatsApp",
            "image": WhatsAppIcon
        },
        {
            "link": "https://t.me/trinity_nataly",
            "title": "Telegram",
            "image": TelegramIcon
        },
    ]


    return (
        <>
            {/* Begin header navigation block */}
            <div className='header-nav'>
                <Container>
                    {/* Logo block (centered on top of the page) */}
                    <div className='text-center'>
                        <a href="/" className='logo'>{/* Link to home page */}
                            {/* Render Logo image */}
                            <img src={Logo} alt="NatAi"/>
                        </a>
                    </div>
                    {/* End of logo block */}
                    {/* Top menu navigation (centered on top of the page) */}
                    <Nav className="justify-content-center mt-1">
                       {/* Render links to home, about and projects pages, check for splitLocation to highlight active page */}
                        <Nav.Link as={Link} to="/"
                                  className={splitLocation[1] === "" ? "active" : ""}>Home</Nav.Link> {/* Link to home page */}
                        <Nav.Link as={Link} to="/about"
                                  className={splitLocation[1] === "about" ? "active" : ""}>About</Nav.Link> {/* Link to about page */}
                        <Nav.Link as={Link} to="/projects"
                                  className={splitLocation[1] === "projects" ? "active" : ""}>Projects</Nav.Link> {/* Link to projects page */}
                    </Nav>
                    {/* End of top menu navigation */}
                </Container>
            </div>
            {/* End of header navigation block */}
            {/* Floated contacts block */}
            <div className='contacts'>
                {/* Render contact icons */}
                <Nav>
                    {/* Map through contacts array and render each contact icon */}
                    {Contacts.map((contact, index) => (
                        <Nav.Link key={index} as={Link} to={contact.link}><img src={contact.image} title={contact.title}
                                                                               alt={contact.title}/></Nav.Link>
                    ))}
                </Nav>
            </div>
            {/* End of floated contacts block */}
        </>
    )
}

export default Header