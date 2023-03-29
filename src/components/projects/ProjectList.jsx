/*
Version: 1.12
Last edited by: Natalia Pakhomova
Last edit date: 28/03/2023
This script implements the project list
*/

import React, {useState} from 'react'; // Import React modules

// Import Bootstrap elements
import Row from 'react-bootstrap/Row';
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";

// Import project screenshots
import Aurumdata from '../../assets/screenshots/aurumdata.jpg';
import Bizloansfast from '../../assets/screenshots/bizloansfast.jpg';
import Endurego from '../../assets/screenshots/endurego.jpg';
import Golftec from '../../assets/screenshots/golftec.jpg';
import Mideco from '../../assets/screenshots/mideco.jpg';
import Mrbet from '../../assets/screenshots/mrbet.jpg';
import Owlphotography from '../../assets/screenshots/owlphotography.jpg';
import Spotterlife from '../../assets/screenshots/spotterlife.jpg';
import Sriomkara from '../../assets/screenshots/sriomkara.jpg';
import Thegreen from '../../assets/screenshots/thegreen.jpg';

const ProjectList = () => {

    // Create variable to store and update active project index, set default to -1 (no active project)
    const [activeProject, setActiveProject] = useState(-1);
    // Create variable to store and update active tag, default to empty string (no active tag)
    const [activeTag, setActiveTag] = useState("");

    // Function to hande project click and update active project
    function handleProjectClick(index) {
        // Do on update if the clicked project is already active
        if (index !== activeProject) {
            // Update active project
            setActiveProject(index);
        }
    }

    // Function to handle tag click and update active tag
    function handleTagClick(tag) {
        // Check if the clicked tag is already active
        if (tag !== activeTag) {
            // If not - set active tag to clicked tag
            setActiveTag(tag);
        } else {
            // If yes - clean active tag
            setActiveTag("");
        }
    }

    // Setup array of projects
    const projects = [
        {
            title: "Aurum Data",
            summary: "Data valuation service website",
            description: "Aurum data believes data will only reach its full potential when it is properly valuated. They are a team of data scientists, engineers, and analysts who are passionate about data and its value. Their mission is to help understand the value of data and how to monetize it. The website where created to promote Aurum Data solutions and. It was built with Wordpress and Elementor plugin. A CRM integration module where developed in PHP.",
            image: Aurumdata,
            link: "https://aurumdata.io",
            tags: ["Wordpress", "Elementor", "Design", "SEO", "jQuery", "PHP"]
        },
        {
            title: "BizLoansFast",
            summary: "Short-term business loans company website",
            description: "BizLoansFast is a short-term business loan provider that offers fast and easy access to business loans. They are a team of business loan experts who are passionate about helping small businesses grow and succeed. The company is in business in Australia and New Zealand for two decades. They required a new website for updated branding. Th website where developed using Wordpress and Elementor plugin.",
            image: Bizloansfast,
            link: "https://www.bizloansfast.com.au",
            tags: ["Wordpress", "Elementor", "Design", "SEO", "jQuery", "PHP"]
        },
        {
            title: "EndureGo",
            summary: "Professional CPA tax accountants website",
            description: "EndureGo is a professional CPA tax accountants and tax agents. From a humble beginning in 2006, where the first office was in a rented home office in Adelaide, EndureGo has grown into a national company with offices across Australia. The company required a better website, that is optimised for mobile devices and modern technologies. Th website where developed using Wordpress and Elementor plugin.",
            image: Endurego,
            link: "https://www.endurego.com.au",
            tags: ["Wordpress", "Elementor", "Design", "SEO", "jQuery", "PHP"]
        },
        {
            title: "Golftec Member Section",
            summary: "An app to connect golfers with their coaches",
            description: "This project where created for Golftec Australia who are a team of golf coaches who are passionate about helping golfers improve their game. The app is a member section where golfers can connect with their coaches and get access to their lessons, videos, and other resources. The frontend where developed using React and Bootstrap, while the backend is built with Python and Django. The app is hosted on AWS.",
            image: Golftec,
            link: "https://members.golftec.com.au",
            tags: ["React", "Python", "Django", "Bootstrap", "AWS"]
        },
        {
            title: "Mideco",
            summary: "Industrial dust collection solutions company",
            description: "Australian-owned and operated, Mideco is an international leader in the design and manufacture of industrial dust collection solutions. The website where created to promote Mideco business and connect to their customers. The website is built with Wordpress and Elementor. Several custom modules where created for the store section.",
            image: Mideco,
            link: "https://midecohse.com",
            tags: ["Wordpress", "Elementor", "Design", "SEO", "jQuery", "PHP"]
        },
        {
            title: "Mr Bet",
            summary: "A tipping service application",
            description: "Mr Bet is a tipping service application that provides tips for several sports, such as horse and dog racing, AFL, NBA and Tennis. The app is built with React and Bootstrap framework. The backend is built with Node, Express, and MongoDB. The app is hosted on AWS.",
            image: Mrbet,
            link: "https://www.mrbet.com.au",
            tags: ["React", "Bootstrap", "Node", "Express", "MongoDB"]
        },
        {
            title: "Owl Photograhpy",
            summary: "Photography service website",
            description: "Owl Photography is a photography service website that provides photography services for weddings, events, and portraits. The website is built with HTML5 and CSS3, using Bootstrap framework. PHP is used to produce the contact form.",
            image: Owlphotography,
            link: "https://owlphotography.com.au",
            tags: ["HTML5", "CSS3", "jQuery", "PHP", "Bootstrap"]
        },
        {
            title: "Spotter Life",
            summary: "Insurance broker website",
            description: "Spotter Life is an insurance broker website that provides insurance services for individuals and businesses. They required an updated website for better modern technology support and better mobile support. The website is built with Wordpress and Elementor plugin. A custom module was created for the quote form and CRM integration.",
            image: Spotterlife,
            link: "https://www.spotterlife.com.au",
            tags: ["Wordpress", "Elementor", "Design", "SEO", "jQuery", "PHP"]
        },
        {
            title: "Sriomkara Yoga",
            summary: "Yoga instructor website",
            description: "Sriomkara Yoga is a yoga instructor website that provides yoga classes and workshops. The owner needed a simple and friendly website to promote the spirit of the yoga studio and connect to their customers. The website is built with Wordpress and Elementor plugin.",
            image: Sriomkara,
            link: "https://www.sriomkara.com",
            tags: ["Wordpress", "Elementor", "Design", "SEO", "jQuery"]
        },
        {
            title: "The Green Academy",
            summary: "Online English language school website",
            description: "The Green Academy is an online English language school that provides English language courses for students from all over the world. The website is built with Wordpress and Elementor plugin. CRM integration module where configured for lesson booking.",
            image: Thegreen,
            link: "https://the-green.au",
            tags: ["Wordpress", "Elementor", "Design", "SEO", "jQuery"]
        }
    ]

    // Get list of all used tags in all projects
    const tags = [];
    projects.map((project) => project.tags.map((tag) => tags.push(tag)));
    // Clean up duplicates from the list of tags
    const uniqueTags = [...new Set(tags)];


    return (
        <>
            {/* Begin list of tags for all projects */}
            <Row>
                <Col>

                    <div className="tag-list">
                        {/* Map through all tags and create a button for each tag, connect onclick action */}
                        {uniqueTags.sort().map((tag, index) => <button
                            key={index}
                            className={(tag === activeTag) ? "active" : ""}
                            onClick={() => handleTagClick(tag)}
                        >{tag}</button>)}
                    </div>

                </Col>
            </Row>
            {/* End list of tags for all projects */}
            {/* Begin list of all projects */}
            <Row>
                {/* Map through all projects */}
                {projects.map((project, index) => (
                    <>
                        {/* if activeTag is set, only show projects that have the active tag */}
                        {(!activeTag || project.tags.includes(activeTag)) ? <Col key={index} md={6} className="mb-3"> {/* render projects two per row on desktop, one per row on mobile */}
                            {/* If this project is the active project, show the expanded version */}
                            <div className={`project-card${index === activeProject ? ' expanded' : ''}`}
                                 onClick={() => handleProjectClick(index)}> {/* If project card is clicked - set it as expanded */}
                                <Card>
                                    {/* If project card is expanded, show the close button, if button is clicked, set active project to -1 (no active project) */}
                                    <button onClick={() => handleProjectClick(-1)} className="close">X</button>
                                    {/* Render screenshot image full-width */}
                                    <Card.Img variant="top" src={project.image}/>
                                    {/* Render card body which adds a gap %*/}
                                    <Card.Body>
                                        {/* Render project title */}
                                        <Card.Title className="mb-0, headline">{project.title}</Card.Title>
                                        {/* Render list of project tags */}
                                        <div className="tags">{project.tags.sort().map((tag, index) => <span key={index}
                                                                                                             className="mr-1">{tag}</span>)}</div>
                                        {/* Render project summary or description depending on if project is expanded or not */}
                                        <Card.Text>{index === activeProject ? project.description : project.summary}</Card.Text>
                                        {/* If project is expanded, show the link to the project */}
                                        {index === activeProject ?
                                            <a href={project.link} className="project-link" target='_blank'
                                               rel="noreferrer">Visit {project.title}</a> : null}
                                        {/* End of project card */}
                                    </Card.Body>
                                </Card>
                            </div>
                            {/* End of project card */}
                        </Col> : null}
                        {/* End of project loop */}
                    </>
                ))}
            </Row>
            {/* End list of all projects */}
        </>
    )
}

export default ProjectList