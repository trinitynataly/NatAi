/*
Version: 1.2
Last edited by: Natalia Pakhomova
Last edit date: 26/03/2022
This script implements the about page
*/

import React from 'react'; // Import React modules
import Container from 'react-bootstrap/Container'; // Import Container from React Bootstrap modules
import Photo from '../assets/photo.jpg'; // Import photo asset

const About = () => {
    return (
        <>
            {/* Start of about page, render full-screen top block with intro text */}
            <div className="page-container about-page-container">
                <Container>
                    <div className='about-page-text'>
                        <p>
                            Greetings, digital wanderer! Welcome to my little corner of the internet, where I fuse my
                            passions for programming, coding, design and photography into a delightful concoction of
                            creativity. As a code-wielding wizard, I transform mundane pixels into mesmerizing digital
                            landscapes that captivate the eye and dazzle the mind. When I'm not immersed in the
                            enigmatic world of ones and zeros, you can find me hunting for that perfect shot, capturing
                            fleeting moments in time through the lens of my trusty camera. So, sit back, relax, and
                            let's embark on a whimsical journey where professionalism, humor, and innovation
                            harmoniously blend together to weave the tapestry of my digital life. Enjoy the ride!
                        </p>
                    </div>
                </Container>
            </div>
            {/* End of full-screen block */}
            {/* Start of about me section */}
            <div className='about-me'>
                <Container>
                    {/* Render block header */}
                    <h2>About Me</h2>
                    {/* Render my photo centered */}
                    <p className="text-center"><img src={Photo} className="photo" alt=""/></p>
                    {/* Render about me text */}
                    <p>Welcome to my online sanctuary, where artistic flair and technical expertise unite to deliver
                        exceptional outcomes. As an accomplished programmer, designer, and web developer, I've dedicated
                        countless hours to perfecting my skills, driven by an unrelenting passion for my craft. My
                        strong work ethic is a reflection of my dedication and love for my profession. I excel at
                        building meaningful connections with clients and exceeding their expectations, all while
                        maintaining a focus on functionality and user-centric design.</p>
                    <p>Outside the world of coding and design, I find harmony and equilibrium through my love for yoga
                        and my devotion to volunteering at a local dog and cat shelter. This well-rounded approach to
                        life allows me to bring both compassion and an inventive mindset to every project I tackle. My
                        leadership abilities, problem-solving prowess, and timeliness further solidify my reputation as
                        a dependable and results-oriented professional.</p>
                    <p>When I'm not weaving digital masterpieces or championing the cause of our four-legged friends, I
                        can be found immersing myself in logic games and detective stories, channeling my inner
                        detective and delighting in the joy of solving enigmas. So, as you peruse my portfolio, get
                        ready for a journey that not only showcases my professional expertise but also offers a glimpse
                        into the essence of who I am.</p>
                    <p>In my work, I strive to strike the perfect balance between aesthetic appeal and practicality,
                        ensuring that each project is both visually stunning and highly functional. With a keen eye for
                        detail and a deep understanding of user experience, I craft digital solutions tailored to each
                        client's unique needs and preferences. My versatility and adaptability have enabled me to thrive
                        in various projects, leaving a trail of satisfied clients in my wake.</p>
                    <p>As you delve deeper into my portfolio, you'll uncover a treasure trove of creative endeavors that
                        span programming, design, and web development. Each piece serves as a testament to my unyielding
                        commitment to excellence, innovation, and client satisfaction. So, take your time and enjoy the
                        journey as you explore the many facets of my professional life, woven together with threads of
                        humor, curiosity, and passion.</p>
                    <p>Together, these five paragraphs offer a comprehensive and engaging glimpse into my life as a
                        programmer, designer, and web developer, as well as my personal interests and values. My
                        dedication to delivering outstanding results, combined with my diverse skills and experiences,
                        make me an ideal candidate for clients seeking exceptional digital solutions.</p>
                </Container>
            </div>
            {/* End of about me section */}
        </>
    )
}

export default About