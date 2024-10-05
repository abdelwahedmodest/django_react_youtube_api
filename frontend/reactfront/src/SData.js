import React, { useState, useEffect } from 'react';
import './SData.css'; // Importing the CSS styles

const SData = () => {
    const [data, setData] = useState(null); // State to store data

    useEffect(() => {
        console.log("script start...");
        const token = localStorage.getItem('access_token'); // Retrieve token from localStorage

        if (token) {
            fetch("http://localhost:8000/api/videos", {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}` // Include token in the Authorization header
                }
            })
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(json => {
                setData(json); // Store the JSON data in the state
                console.log(json);
            })
            .catch(error => console.error('There was an error!', error));
        } else {
            console.error('Token not found');
        }
    }, []);

    return (
        <div className="data-container">
            <h1>Data from API</h1>
            {/* Display data if available */}
            {data ? (
                data.map((item, index) => (
                    <div className="data-item" key={index}>
                        <h2>Title: {item.title}</h2>
                        <p>Description: {item.description}</p>
                        <p>User ID: {item.user}</p>
                        <video width="640" height="360" controls>
                            <source src={`http://localhost:8000${item.video_file}`} type="video/mp4" />
                          
                            Your browser does not support the video tag.
                        </video>

                        <p>Video Link: <a href={item.video_file} target="_blank" rel="noopener noreferrer">{item.video_file}</a></p>

                        <div className="metadata">
                            <p>Keywords: {Object.keys(item.keywords).map(keyword => (
                                <span className="metadata-item" key={keyword}>{keyword}: {item.keywords[keyword]} </span>
                            ))}</p>
                            <p>Hashtags: {Object.keys(item.hashtags).map(hashtag => (
                                <span className="metadata-item" key={hashtag}>#{hashtag}: {item.hashtags[hashtag]} </span>
                            ))}</p>
                        </div>

                        <div className="publish-info">
                            <p>Created At: {new Date(item.created_at).toLocaleString()}</p>
                            <p>Published on YouTube: {item.published_on_youtube ? 'Yes' : 'No'}</p>
                            <p>Published on Instagram: {item.published_on_instagram ? 'Yes' : 'No'}</p>
                            <p>Published on Facebook: {item.published_on_facebook ? 'Yes' : 'No'}</p>
                            <p>Published on Twitter: {item.published_on_twitter ? 'Yes' : 'No'}</p>
                        </div>
                    </div>
                ))
            ) : (
                <p>Loading...</p>
            )}
        </div>
    );
}

export default SData;
