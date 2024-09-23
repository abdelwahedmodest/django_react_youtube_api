import  Login  from  "./Login"
import { useEffect, useState } from "react";
//import  Im  from  "./Im"
import  Data  from  "./Data"

function App() {
  const  [mohamed,setmohamed]=useState(0)
  const  [number,setnumber]=useState(1)
 const plushandler=()=>{
  setmohamed(mohamed + 1)
 }
 const minushandler=()=>{
  setmohamed(mohamed - 1)
 }
 useEffect(()=>{
  console.log("test")
 },[number])
  return (
    <>
   <button  onClick={plushandler}>+</button>
   {mohamed}
   <button  onClick={minushandler}>+</button>
   <button  onClick={()=>{setnumber(number*2)}}>INCREMENT</button>
    {number}
    {/*<Im/>*/}

<Login />
<Data />
  </>   
    );
  }


export default App;
