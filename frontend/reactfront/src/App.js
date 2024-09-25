import React from 'react';
import  Login  from  "./Login"
//import { useEffect, useState } from "react";
//import  Im  from  "./Im"
import  SData  from  "./SData"
//import  {BrowserRouter,Routes,Route}  from  "react-router-dom"
import  UploadForm   from  "./Formreact"
//import  {Router,Route,Routes}  from  "react-router-dom";
//{import { Link } from 'react-router-dom';
import  Home  from  "./Home";

function App() {
  //const  [mohamed,setmohamed]=useState(0)
  //const  [number,setnumber]=useState("")
/* const plushandler=()=>{
  setmohamed(mohamed + 1)
 }
 const minushandler=()=>{
  setmohamed(mohamed - 1)
 }*/

  return (
    <>
    <Login />
    <SData />
    <UploadForm />
    <Home />
 {/*  <Router>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/login">Login</Link></li>
          <li><Link to="/data">Afficher les données</Link></li>
        </ul>
      </nav>*/}

      {/* Définir les différentes routes */}
  {/*    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/data" element={<SData />} />
        <Route path="/data" element={<UploadForm />} />
      </Routes>
    </Router>*/}

 
   {/*
   
   <button  onClick={plushandler}>+</button>
   {mohamed}
   <button  onClick={minushandler}>+</button>
   <button  onClick={()=>{setnumber(number*2)}}>INCREMENT</button>
    {number}
    */}



  </>   
    );
  }


export default App;
