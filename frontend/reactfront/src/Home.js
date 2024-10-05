import React, { useState, useEffect } from 'react';
import './Homepage.css'; // Import the CSS file
//import AuthIcons from './Auth'; // Assurez-vous de bien importer votre composant

const Homepage = () => {
    const [isAuthenticated, setIsAuthenticated] = useState(false); // State for login/logout

    useEffect(() => {
        // Check if the user is authenticated (based on token in localStorage)
        const token = localStorage.getItem('access_token');
        if (token) {
            setIsAuthenticated(true); // User is logged in
        }
    }, []);

    const handleLogout = () => {
        localStorage.removeItem('access_token'); // Remove token from localStorage
        setIsAuthenticated(false); // Update state to reflect logout
    };

    return (
        <div className="homepage-container">
             <div className="home-container">
     
    </div>
            <header className="homepage-header">
                <h1>Welcome to the App</h1>
                <p>Your gateway to amazing content and videos</p>
            </header>
            
            <div className="button-container">
                <a href="/register" className="btn btn-primary">Register</a>
                {isAuthenticated ? (
                    <button onClick={handleLogout} className="btn btn-secondary">Logout</button>
                ) : (
                    <a href="/login" className="btn btn-secondary">Login</a>
                )}
            </div>
        </div>
    );
}

export default Homepage;
