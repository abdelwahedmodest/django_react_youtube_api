import React, { useEffect } from 'react'

const Data = () => {
    const  mydata[];
    useEffect(() => {
        console.log("script  start...")
        // Retrieve the token from localStorage (or sessionStorage)
       const token = localStorage.getItem('access_token'); // Replace 'token' with the actual key you're using
       //console.log(token);
       //console.log("first_test");
       // Check if the token is available
       if (token) {
            //console.log(token);
            //console.log("second_test");
            
   fetch("http://localhost:8000/Ab/", {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}` // Include the token in the Authorization header
                }
            }) 
            
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(json => {
                mydata=json;
                console.log(mydata);
                console.log(mydata[0].description);
            
            })
            .catch(error => console.error('There was an error!', error));
        } else {
            console.error('Token not found');
        }
    }, []);

    return (
        <div>
           {/*mydata[0].title*/}
            {/* Render your data or any UI elements here */}
        </div>
    );
}

export default Data;
