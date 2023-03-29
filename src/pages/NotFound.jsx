/*
Version: 1.2
Last edited by: Natalia Pakhomova
Last edit date: 29/03/2023
This script implements the 404 page
*/

import React from 'react'; // Import React modules
import {Container} from 'react-bootstrap'; // Import Bootstrap elements

const NotFound = () => {
    return (
        <div className="page-container notfound-page-container">
            {/* Start of 404 page */}
            <Container>
                <div className='page-text'>
                    {/* 404 page title */}
                    <h1>404</h1>
                    {/* 404 page text */}
                    <p>
                        Oops! It seems our digital compass went haywire, and we've landed on the mysterious 404 island.
                        Fear not, intrepid explorer, for this uncharted territory simply means the page you're seeking
                        has vanished into the cyber-abyss. While our team of elite code-ninjas embark on a daring rescue
                        mission, feel free to navigate back to the safety of our homepage or use the search bar to
                        uncover hidden treasures elsewhere. May the odds be ever in your favor!
                    </p>
                </div>
            </Container>
            {/* End of 404 page */}
        </div>
    )
}

export default NotFound