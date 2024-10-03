import React, { useState } from 'react';
import axios from 'axios';

const UploadForm = () => {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    keywords: '',
    hashtags: '',
    video: null,
    image: null,
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleFileChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.files[0],
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // We need to create a FormData object to send files
    const uploadData = new FormData();
    uploadData.append('title', formData.title);
    uploadData.append('description', formData.description);
    uploadData.append('keywords', formData.keywords);
    uploadData.append('hashtags', formData.hashtags);
    uploadData.append('video', formData.video);
    uploadData.append('image', formData.image);

    try {
      const response = await axios.post('http://localhost:8000/api/upload/', uploadData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      if (response.status === 201) {
        alert('Upload successful');
      } else {
        alert('Upload failed');
      }
    } catch (error) {
      console.error('There was an error!', error);
      alert('There was an error uploading the file!');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Title</label>
        <input type="text" name="title" value={formData.title} onChange={handleChange} />
      </div>
      <div>
        <label>Description</label>
        <input type="text" name="description" value={formData.description} onChange={handleChange} />
      </div>
      <div>
        <label>Keywords</label>
        <input type="text" name="keywords" value={formData.keywords} onChange={handleChange} />
      </div>
      <div>
        <label>Hashtags</label>
        <input type="text" name="hashtags" value={formData.hashtags} onChange={handleChange} />
      </div>
      <div>
        <label>Video</label>
        <input type="file" name="video" onChange={handleFileChange} />
      </div>
      <div>
        <label>Image</label>
        <input type="file" name="image" onChange={handleFileChange} />
      </div>
      <button type="submit">Upload</button>
    </form>
  );
};

export default UploadForm;
