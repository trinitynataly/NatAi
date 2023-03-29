/*
Version: 1.1
Last edited by: Natalia Pakhomova
Last edit date: 20/03/2023
This script implements the main layout for the app
*/

import React from 'react'; // Import React modules
import {Outlet} from 'react-router-dom'; // Import React Router outlet component
import Header from './Header'; // Import Header component
import Footer from './Footer'; // Import Footer component

// Main layout for the app
const Layout = () => (
    <>
        {/* Start of layout */}
        <Header/> {/* Render header component */}
        <Outlet/> {/* Insert content of the page here */}
        <Footer/> {/* Render footer component */}
        {/* End of layout */}
    </>
);

export default Layout