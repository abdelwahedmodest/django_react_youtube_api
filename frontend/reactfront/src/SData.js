import React, { useState, useEffect } from 'react';

const SData = () => {
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
                data.map((item, index) => (
                    <div key={index}>
                        <h2>Title: {item.title}</h2>
                        <p>Description: {item.description}</p>
                        <p>User ID: {item.user}</p>
                        <video width="640" height="360" controls>
                            <source src={item.video_file} type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>
                        <video width="640" height="360" controls>
    <source src="https://www.w3schools.com/html/mov_bbb.mp4" type="video/mp4" />
    Your browser does not support the video tag.
</video>

                        <p>Video: <a href={item.video_file} target="_blank" rel="noopener noreferrer">{item.video_file}</a></p>
                        <p>Keywords: {Object.keys(item.keywords).map(keyword => (
                            <span key={keyword}>{keyword}: {item.keywords[keyword]} </span>
                        ))}</p>
                        <p>Hashtags: {Object.keys(item.hashtags).map(hashtag => (
                            <span key={hashtag}>#{hashtag}: {item.hashtags[hashtag]} </span>
                        ))}</p>
                        <p>Created At: {new Date(item.created_at).toLocaleString()}</p>
                        <p>Published on YouTube: {item.published_on_youtube ? 'Yes' : 'No'}</p>
                        <p>Published on Instagram: {item.published_on_instagram ? 'Yes' : 'No'}</p>
                        <p>Published on Facebook: {item.published_on_facebook ? 'Yes' : 'No'}</p>
                        <p>Published on Twitter: {item.published_on_twitter ? 'Yes' : 'No'}</p>
                    </div>
                ))
            ) : (
                <p>Loading...</p>
            )}
        </div>
    );
}

export default SData;
