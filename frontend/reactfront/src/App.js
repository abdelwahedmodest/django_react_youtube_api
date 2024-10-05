import React from 'react';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import LoginPage from './Login';
import RegisterPage from './Register';
import InstagramLogin from './Logininsta';
import SData from "./SData";
import Home from "./Home";
import UploadVideoForm from './Components/ApiForm';
import "./Style/style.css";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <BrowserRouter>
      {/* Navbar Bootstrap */}
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <Link className="navbar-brand" to="/">Logo</Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/data">Display</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/formdata">Upload</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/insta">Social</Link>
            </li>
          </ul>
          {/* Liens de connexion et d'inscription à droite */}
          <div className="ml-auto">
            <Link className="btn btn-outline-primary mx-2" to="/login">Login</Link>
            <Link className="btn btn-outline-secondary" to="/register">Register</Link>
          </div>
        </div>
      </nav>

      {/* Routes de l'application */}
      <Routes>
        <Route path="/" element={<Home />} />  
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/data" element={<SData />} />
        <Route path="/formdata" element={<UploadVideoForm />} />  
        <Route path="/insta" element={<InstagramLogin />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
