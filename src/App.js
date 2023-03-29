/*
Version: 1.4
Last edited by: Natalia Pakhomova
Last edit date: 25/03/2023
This script implements application router
*/

import React from 'react'; // Import React modules
import {Routes, Route} from 'react-router-dom'; // Import React-Router-DOM modules

// Import page layout component
import Layout from './components/layout/Layout';

// Import page scripts
import Home from './pages/Home';
import About from './pages/About';
import Projects from "./pages/Projects";
import NotFound from './pages/NotFound';

// Define the application router
function App() {
    return (
        <div className="app">
            <Routes>
                {/* Init main layout and router children */}
                <Route path="/" element={<Layout/>}> {/* Use main layout for all pages */}
                    <Route index element={<Home/>}/> {/* Home page (served by default) */}
                    <Route path="about" element={<About/>}/> {/* About page */}
                    <Route path="projects" element={<Projects/>}/> {/* Projects page */}
                    <Route path="*" element={<NotFound/>}/> {/* 404 page */}
                </Route>
                {/* End of router */}
            </Routes>
        </div>
    );
}

export default App;