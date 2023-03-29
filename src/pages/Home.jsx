/*
Version: 1.5
Last edited by: Natalia Pakhomova
Last edit date: 29/03/2023
This script implements the home page
*/

import React from 'react'; // Import React modules

// Import Bootstrap elements
import Container from 'react-bootstrap/Container';
import {Col, Row} from 'react-bootstrap';

// Import feature images
import TimingFeature from '../assets/features/timing.svg';
import ClientNeedsFeature from '../assets/features/heart.svg';
import DetailFeature from '../assets/features/insight.svg';
import ExperiencedFeature from '../assets/features/rating.svg';
import DeadlineDrivenFeature from '../assets/features/fire.svg';
import MultipleProjectsTimingFeature from '../assets/features/effective.svg';
import CommunicatingFeature from '../assets/features/artificial-intelligence.svg';
import DevelopmentFeature from '../assets/features/optimization.svg';

const Home = () => {
    // Build array of features with descriptions and images
    const Features = [
        {
            "title": "Timely and budget-conscious project delivery with high-quality standards",
            "image": TimingFeature
        },
        {
            "title": "Focused on meeting client needs and exceeding expectations",
            "image": ClientNeedsFeature
        },
        {
            "title": "Strong attention to detail and ability to catch errors before they become problems",
            "image": DetailFeature
        },
        {
            "title": "Experienced in conducting thorough testing and quality assurance",
            "image": ExperiencedFeature
        },
        {
            "title": "Comfortable working in a fast-paced, deadline-driven environment",
            "image": DeadlineDrivenFeature
        },
        {
            "title": "Effective at managing multiple projects and priorities simultaneously",
            "image": MultipleProjectsTimingFeature
        },
        {
            "title": "Skilled in communicating technical concepts to non-technical stakeholders",
            "image": CommunicatingFeature
        },
        {
            "title": "Dedicated to continuous learning and professional development",
            "image": DevelopmentFeature
        }

    ]
    return (
        <>
            {/* Start of home page, render full-screen intro block */}
            <div className="page-container home-page-container">
                <Container>
                    <div className='page-text'>
                        {/* Render intro text */}
                        <p>
                            Welcome to my portfolio, where creativity meets functionality. As a skilled web developer
                            and programmer, I bring your visions to life with innovative designs and seamless code that
                            engage and inspire.
                        </p>
                    </div>
                </Container>
            </div>
            {/* End of full-screen intro block */}
            {/* Start of my strengths block */}
            <div className='text-container'>
                <Container>
                    {/* Render my strengths title */}
                    <h2>My strengths</h2>
                    {/* Render my strengths description */}
                    <p>Delivering outstanding web development and programming solutions with
                        a client-focused approach, exceptional attention to detail, and a commitment to on-time
                        delivery.</p>
                    {/* Render my strengths list */}
                    <Row className='feature-list'>
                        {/* Map through Features array and render strength blocks */}
                        {Features.map((item, index) => (
                            <Col lg={3} sm={6} className="mb-3">
                                <div className="feature">
                                    <img src={item.image} alt=""/>
                                    <p>{item.title}</p>
                                </div>
                            </Col>
                        ))}
                    </Row>
                </Container>
            </div>
            {/* End of my strengths block */}
            {/* Start of my proficiencies block */}
            <div className='text-container block-proficiencies'>
                <Container>
                    {/* Render my proficiencies title */}
                    <h2>Technical Proficiencies</h2>
                    {/* Render my proficiencies description, highlight all keywords with special style */}
                    <p>As a multifaceted developer, I pride myself on my extensive technical proficiency, which
                        encompasses a wide range of technologies and languages. With a firm grasp on <strong
                            className='text-highlight'>PHP</strong> and <strong
                            className='text-highlight'>MySQL</strong>, I am adept at creating powerful, data-driven web
                        applications. My expertise in AWS allows me to deploy and manage scalable cloud infrastructure,
                        ensuring seamless performance. Fluent in <strong
                            className='text-highlight'>HTML5</strong>, <strong className='text-highlight'>CSS3</strong>,
                        and <strong className='text-highlight'>JavaScript</strong>, I can craft responsive and visually
                        appealing websites that stand out. My experience with <strong
                            className='text-highlight'>Node.js</strong> and <strong
                            className='text-highlight'>React</strong> enables me to build cutting-edge, full-stack
                        applications that cater to diverse user needs. Additionally, my <strong
                            className='text-highlight'>Python</strong> and <strong
                            className='text-highlight'>Django</strong> skills empower me to develop robust and efficient
                        backend systems. Not only am I well-versed in the technical realm, but I also excel in popular
                        content management systems such as <strong
                            className='text-highlight'>WordPress</strong> and <strong
                            className='text-highlight'>Elementor</strong>, allowing me to deliver fully-customized web
                        solutions with ease. Overall, my technical proficiency is the driving force behind my ability to
                        deliver outstanding results in every project I undertake.</p>
                </Container>
            </div>
            {/* End of my proficiencies block */}
        </>
    )
}

export default Home