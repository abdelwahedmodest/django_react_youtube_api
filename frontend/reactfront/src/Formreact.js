import React, { useState } from 'react';

const UploadForm = () => {
    const [formData, setFormData] = useState({
        title: '',
        description: '',
        keywords: '',
        hashtags: '',
        video: null,
        image: null
    });

    const handleInputChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleFileChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.files[0] });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        const data = new FormData();
        data.append('title', formData.title);
        data.append('description', formData.description);
        data.append('keywords', formData.keywords);
        data.append('hashtags', formData.hashtags);
        data.append('video', formData.video); // Video file
        data.append('image', formData.image); // Image file

        // Send the formData to the backend (assuming API endpoint is set up)
        const response = await fetch('http://localhost:8000/api/upload', {
            method: 'POST',
            body: data,
        });

        if (response.ok) {
            console.log("Upload successful!");
        } else {
            console.error("Upload failed!");
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>Title:</label>
                <input type="text" name="title" value={formData.title} onChange={handleInputChange} />
            </div>
            <div>
                <label>Description:</label>
                <textarea name="description" value={formData.description} onChange={handleInputChange}></textarea>
            </div>
            <div>
                <label>Keywords:</label>
                <input type="text" name="keywords" value={formData.keywords} onChange={handleInputChange} />
            </div>
            <div>
                <label>Hashtags:</label>
                <input type="text" name="hashtags" value={formData.hashtags} onChange={handleInputChange} />
            </div>
            <div>
                <label>Upload Video:</label>
                <input type="file" name="video" onChange={handleFileChange} accept="video/*" />
            </div>
            <div>
                <label>Upload Image:</label>
                <input type="file" name="image" onChange={handleFileChange} accept="image/*" />
            </div>
            <button type="submit">Submit</button>
        </form>
    );
};

export default UploadForm;
