import React, { useEffect } from 'react'

const Data = () => {
    useEffect(()=>{
        fetch("http://localhost:8000/Ab/")
        .then(response=>response.json())
        .then(json=>console.log(json))
    },[])
  return (
    <div>
      
    </div>
  )
}

export default Data
