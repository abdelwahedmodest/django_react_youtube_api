
// AuthIcons.js

import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGoogle, faGithub, faFacebook, faYoutube } from '@fortawesome/free-brands-svg-icons'; // Importez les icônes souhaitées
import './AuthIcons.css'; // Importez votre fichier CSS
import  {useNavigate}   from  'react-router-dom'

const AuthIcons = () => {

  
  const handleAuth = (provider) => {
    console.log(`Authenticating with ${provider}`);
    // Ajoutez la logique d'authentification ici
    window.location.href='http://127.0.0.1:8000/accounts/facebook/login/';
  };

  return (
    <div className="auth-icons-container">
      <h3>Connectez-vous avec :</h3>
      <div className="auth-icons">
        <FontAwesomeIcon 
          icon={faGoogle} 
          className="auth-icon" 
          onClick={() => handleAuth('Google')} 
          title="Se connecter avec Google"
        />
        <FontAwesomeIcon 
          icon={faGithub} 
          className="auth-icon" 
          onClick={() => handleAuth('GitHub')} 
          title="Se connecter avec GitHub"
        />
        <FontAwesomeIcon 
          icon={faFacebook} 
          className="auth-icon" 
          onClick={() => handleAuth('Facebook')} 
          title="Se connecter avec Facebook"
        />
        <FontAwesomeIcon 
          icon={faYoutube} 
          className="auth-icon" 
          onClick={() => handleAuth('YouTube')} 
          title="Se connecter avec YouTube"
        />
      </div>
    </div>
  );
};

export default AuthIcons;
