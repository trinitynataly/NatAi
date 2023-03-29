/*
Version: 1.1
Last edited by: Natalia Pakhomova
Last edit date: 20/02/2023
Main script of the application
*/

import React from 'react'; // Import React modules
import ReactDOM from 'react-dom/client'; // Import React-DOM modules
import {BrowserRouter} from 'react-router-dom'; // Import React-Router-DOM modules

// Import main stylesheet
import './scss/main.scss';

// Import root component
import App from './App';

// Render the root component
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <BrowserRouter>
            <App/>
        </BrowserRouter>
    </React.StrictMode>
);