// GoogleAuthButton.js
import React from 'react';
import  './GoogleAuthButton.css'
const GoogleAuthButton = () => {
  const handleClick = () => {
    window.location.href = 'https://localhost:8000/accounts/google/login/'; // Redirige vers l'URL de votre vue d'authentification Google
  };

  return (
    <div>
      <button onClick={handleClick} className="btn google-auth-btn">
        Connecter Google
      </button>
    </div>
  );
};

export default GoogleAuthButton;
