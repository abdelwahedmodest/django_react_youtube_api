// Home.js
import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom

const Home = () => {
    return (
        <div style={{ padding: '20px', textAlign: 'center' }}>
            <div style={{ marginTop: '20px' }}>
                <Link to="/login">
                    <button style={buttonStyle}>Login</button>
                </Link>
                <Link to="/data">
                    <button style={buttonStyle}>View Data</button>
                </Link>
                <Link to="/formdata">
                    <button style={buttonStyle}>Upload Form</button>
                </Link>
                <Link to="/insta">
                    <button style={buttonStyle}>Login with Instagram</button>
                </Link>
            </div>
        </div>
    );
};

// Optional: Define styles for buttons
const buttonStyle = {
    padding: '10px 20px',
    borderRadius: '5px',
    border: 'none',
    backgroundColor: '#E1306C',
    color: 'white',
    cursor: 'pointer',
    fontSize: '16px',
    margin: '10px',
    transition: 'background-color 0.3s ease',
};

export default Home;



