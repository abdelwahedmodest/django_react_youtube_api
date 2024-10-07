import React, { useState } from 'react';
import axios from 'axios';
import './YoutubeForm.css'; // Assurez-vous d'importer un fichier CSS pour le style

const VideoUploadForm = () => {
    const [videoFile, setVideoFile] = useState(null);
    const [thumbnailFile, setThumbnailFile] = useState(null);
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [keywords, setKeywords] = useState('');
    const [hashtags, setHashtags] = useState('');

    const handleVideoUpload = (e) => setVideoFile(e.target.files[0]);
    const handleThumbnailUpload = (e) => setThumbnailFile(e.target.files[0]);

    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('video', videoFile);
        formData.append('thumbnail', thumbnailFile);
        formData.append('title', title);
        formData.append('description', description);
        formData.append('keywords', keywords);
        formData.append('hashtags', hashtags);

        axios.post('https://localhost:8000/youtube/upload/', formData)
            .then(response => console.log(response.data))
            .catch(error => console.error(error));
    };

    return (
        <form onSubmit={handleSubmit} className="video-upload-form">
            <div className="form-group">
                <label htmlFor="video-upload">Upload Video:</label>
                <input 
                    type="file" 
                    id="video-upload" 
                    onChange={handleVideoUpload} 
                    required 
                />
            </div>
            <div className="form-group">
                <label htmlFor="thumbnail-upload">Upload Thumbnail:</label>
                <input 
                    type="file" 
                    id="thumbnail-upload" 
                    onChange={handleThumbnailUpload} 
                    required 
                />
            </div>
            <div className="form-group">
                <label htmlFor="video-title">Title:</label>
                <input 
                    type="text" 
                    id="video-title" 
                    value={title} 
                    onChange={(e) => setTitle(e.target.value)} 
                    placeholder="Enter video title" 
                    required 
                />
            </div>
            <div className="form-group">
                <label htmlFor="video-description">Description:</label>
                <textarea 
                    id="video-description" 
                    value={description} 
                    onChange={(e) => setDescription(e.target.value)} 
                    placeholder="Enter video description" 
                    required 
                />
            </div>
            <div className="form-group">
                <label htmlFor="video-keywords">Keywords:</label>
                <input 
                    type="text" 
                    id="video-keywords" 
                    value={keywords} 
                    onChange={(e) => setKeywords(e.target.value)} 
                    placeholder="Enter keywords (optional)" 
                />
            </div>
            <div className="form-group">
                <label htmlFor="video-hashtags">Hashtags:</label>
                <input 
                    type="text" 
                    id="video-hashtags" 
                    value={hashtags} 
                    onChange={(e) => setHashtags(e.target.value)} 
                    placeholder="Enter hashtags (optional)" 
                />
            </div>
            <button type="submit" className="upload-button">Upload</button>
        </form>
    );
};

export default VideoUploadForm;
