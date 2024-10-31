
// YouTubeAuthButton.js
import React from 'react';
import './YouTubeAuthButton.css'; // Import du fichier CSS

const YouTubeAuthButton = () => {
  const handleClick = () => {
    window.location.href = 'https://localhost:8000/youtube/oauth/'; // Redirige vers l'URL de votre vue d'authentification YouTube
  };

  return (
    <div className="auth-button-container"> {/* Utilisation de la classe CSS pour le conteneur */}
      <button onClick={handleClick} className="btn btn-primary">
        Connecter YouTube
      </button>
    </div>
  );
};

export default YouTubeAuthButton;
