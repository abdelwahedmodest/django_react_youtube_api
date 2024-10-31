//import 'bootstrap/dist/css/bootstrap.min.css';
//import InstagramLogin from './Logininsta';
//import UploadVideoForm from './Components/ApiForm';
import React from 'react';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import "./Style/style.css";
import LoginPage from './Login';
import RegisterPage from './Register';
import SData from "./SData";
import Home from "./Home";
import VideoUploadForm from './Components/YoutubeForm';
//import SchedulePage from './Components/SchedulePage';
import YouTubeAuthButton from './Components/YouTubeAuthButton';
import GoogleAuthButton from './Components/GoogleAuthButton';
import  UserProfileDetail from  './Components/UserDetail';
import UserProfileList from './Components/User';
import AnnualCalendar from './Components/AnualCalendrier';
import Tableau from './Components/TableauEditable';
import TableauEditable from './Components/TableauEditable';
//import FormComponent from './Components/FormComponent';
//import  CandidateForm  from  './Components/Dispo'


function App() {
  return (
    <BrowserRouter>
      {/* Navbar Bootstrap */}
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <Link className="navbar-brand" to="/"><img  src="images/logo.jpg"  alt="wait  for  logo"/></Link>
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
              <Link className="nav-link" to="/table">Tableau</Link>
            </li>
          <li className="nav-item">
              <Link className="nav-link" to="/youtube">Youtube</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/calender">calender</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/authyoutube">authyoutube</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/authgoogle">authgoogle</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/user">user</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/userdetail">userdetail</Link>
            </li>
           
          </ul>
          {/* Liens de connexion et d'inscription à droite */}
          <div className="ml-auto">
            <Link className="btn btn-outline-primary mx-2" to="/login">Login</Link>
            <Link className="btn btn-outline-primary mx-2" to="/register">Register</Link>
          </div>
        </div>
      </nav>

      {/* Routes de l'application */}
      <Routes>
        <Route path="/" element={<Home />} />  
       <Route path="/login" element={<LoginPage />} />
       <Route path="/table" element={<TableauEditable />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/data" element={<SData />} />
         <Route path="/youtube" element={<VideoUploadForm/>} />  
         
         <Route path="/authgoogle" element={<GoogleAuthButton />} /> 
         <Route path="/authyoutube" element={<YouTubeAuthButton />} /> 
         <Route path="/user" element={<UserProfileList/>} /> 
         <Route path="/userdetail" element={<UserProfileDetail/>} /> 
         <Route path="/calender" element={<AnnualCalendar/>} />
       {/*<Route path="/insta" element={<InstagramLogin />} />*/}
       {/*<Route path="/formdata" element={<UploadVideoForm />} />*/}
       {/*<Route path="/dispo" element={<CandidateForm />} />
       <Route path="/calender" element={<SchedulePage/>} /> */}  
      </Routes>
    </BrowserRouter>
  );
}

export default App;
