import React, { useEffect } from 'react'

const Data = () => {
    useEffect(() => {
        // Retrieve the token from localStorage (or sessionStorage)
        const token = localStorage.getItem('token'); // Replace 'token' with the actual key you're using

        // Check if the token is available
        if (token) {
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
            .then(json => console.log(json))
            .catch(error => console.error('There was an error!', error));
        } else {
            console.error('Token not found');
        }
    }, []);

    return (
        <div>
            {/* Render your data or any UI elements here */}
        </div>
    );
}

export default Data;
