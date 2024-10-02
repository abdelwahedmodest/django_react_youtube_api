import React from 'react';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Login from "./Login";
import InstagramLogin from './Logininsta';
import SData from "./SData";
import UploadForm from "./Formreact";
import Home from "./Home";

function App() {
  return (
    <BrowserRouter>
      {/* Navbar Bootstrap */}
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <Link className="navbar-brand" to="/">MyApp</Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/login">Login</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/data">Afficher les données</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/formdata">Formulaire de téléchargement</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/insta">Login Instagram</Link>
            </li>
          </ul>
        </div>
      </nav>

      {/* Routes de l'application */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/data" element={<SData />} />
        <Route path="/formdata" element={<UploadForm />} />
        <Route path="/insta" element={<InstagramLogin />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
