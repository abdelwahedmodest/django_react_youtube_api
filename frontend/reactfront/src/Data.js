import React, { useState, useEffect } from 'react';

const Data = () => {
    const [data, setData] = useState(null); // État pour stocker les données

    useEffect(() => {
        console.log("script start...");
        const token = localStorage.getItem('access_token'); // Récupérer le token depuis localStorage

        if (token) {
            fetch("http://localhost:8000/Ab/", {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}` // Inclure le token dans le header Authorization
                }
            })
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(json => {
                setData(json); // Stocker les données JSON dans l'état
                console.log(json);
            })
            .catch(error => console.error('There was an error!', error));
        } else {
            console.error('Token not found');
        }
    }, []);

    return (
        <div>
            <h1>Data from API</h1>
            {/* Afficher les données si elles existent */}
            {data ? (
                <pre>{JSON.stringify(data, null, 2)}</pre>
            ) : (
                <p>Loading...</p>
            )}
        </div>
    );
}

export default Data;

