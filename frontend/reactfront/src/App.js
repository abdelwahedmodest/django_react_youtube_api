import  Login  from  "./Login"
//import { useEffect, useState } from "react";
//import  Im  from  "./Im"
import  SData  from  "./SData"
//import  {BrowserRouter,Routes,Route}  from  "react-router-dom"

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
   {/*
   
   <button  onClick={plushandler}>+</button>
   {mohamed}
   <button  onClick={minushandler}>+</button>
   <button  onClick={()=>{setnumber(number*2)}}>INCREMENT</button>
    {number}
    */}

<SData />

  </>   
    );
  }


export default App;
