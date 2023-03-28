/*
Version: 1.3
Last edited by: Natalia Pakhomova
Last edit date: 25/03/2022
This script implements the projects page
*/

import React from 'react';

// Import npm packages
import Container from 'react-bootstrap/Container';
import ProjectList from '../components/projects/ProjectList';


const Projects = () => {
    return (
        <>
            {/* Start of projects page, render full-screen intro block */}
            <div className="page-container projects-page-container">
                <Container>
                    <div className='projects-page-text'>
                        {/* Render Projects page intro text */}
                        <p>
                            Discover the captivating array of projects that grace my portfolio, each meticulously
                            crafted to showcase my technical prowess and creative ingenuity. These masterpieces stand as
                            a testament to my dedication to delivering high-quality, tailor-made solutions that leave
                            clients in awe. Immerse yourself in the compelling fusion of functionality and visual
                            appeal, as you explore the diverse range of projects that exemplify my commitment to
                            exceeding expectations and pushing the boundaries of what's possible in the digital realm.
                        </p>
                    </div>
                </Container>
            </div>
            {/* End of full-screen intro block, render my project list */}
            <div className='my-projects'>
                <Container>
                    {/* Render My projects title */}
                    <h2>My Projects</h2>
                    {/* Render My projects text */}
                    <p>Behold the impressive array of projects that illuminate my professional journey, each reflecting
                        a unique blend of technical excellence and imaginative design. Dive into this curated collection
                        and witness firsthand the remarkable outcomes achieved through my unwavering commitment to
                        client satisfaction and innovative thinking.</p>
                    {/* Render project list component */}
                    <ProjectList/>
                </Container>
            </div>
            {/* End of project list */}
        </>
    )
}

export default Projects