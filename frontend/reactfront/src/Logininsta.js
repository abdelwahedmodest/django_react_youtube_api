import React from 'react';
import { useNavigate } from 'react-router-dom'; // Ensure you have react-router-dom installed
import  "./Loginista.css"

const InstagramLogin = () => {
    const navigate = useNavigate();

    const handleLogin = () => {
        // Redirect to the Django Instagram login endpoint
        navigate('http://127.0.0.1:8000/accounts/instagram/login/'); // Change '/home' to your desired route
       // window.location.href = 'http://127.0.0.1:8000/accounts/instagram/login/';
    };

    return (
        <div className="login-container" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
            <div className="login-card" style={{ padding: '20px', borderRadius: '8px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', textAlign: 'center' }}>
                <h2 style={{ marginBottom: '20px' }}>Login with Instagram</h2>
                <button 
                    onClick={handleLogin} 
                    style={{ padding: '10px 20px', borderRadius: '5px', border: 'none', backgroundColor: '#E1306C', color: 'white', cursor: 'pointer', fontSize: '16px' }}>
                    Login with Instagram
                </button>
            </div>
           
        </div>
    );
};

export default InstagramLogin;
