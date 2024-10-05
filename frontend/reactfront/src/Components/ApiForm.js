import React, { useState } from "react";
import axios from "axios";
import './UploadVideoForm.css'; // Importing CSS

const UploadVideoForm = () => {
  const [video, setVideo] = useState(null);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [keywords, setKeywords] = useState("");
  const [hashtags, setHashtags] = useState("");
  const [response, setResponse] = useState("");

  const handleFileChange = (e) => {
    setVideo(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("video_file", video);
    formData.append("title", title);
    formData.append("description", description);
    formData.append("keywords", JSON.stringify(keywords.split(",")));
    formData.append("hashtags", JSON.stringify(hashtags.split(",")));

    try {
      const res = await axios.post("http://localhost:8000/api/videos/", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      setResponse("Video uploaded successfully!");
    } catch (error) {
      console.error(error);
      setResponse("Failed to upload video");
    }
  };

  return (
    <div className="container">
      <div className="content-manager">
        <img src="/logo.png" alt="Content Manager" className="logo" />
      </div>
      <form onSubmit={handleSubmit} className="form-container">
        <div className="form-group">
          <label>Title:</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="input-box"
          />
        </div>
        <div className="form-group">
          <label>Description:</label>
          <input
            type="text"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="input-box"
          />
        </div>
        <div className="form-group">
          <label>Keywords:</label>
          <input
            type="text"
            value={keywords}
            onChange={(e) => setKeywords(e.target.value)}
            className="input-box"
          />
        </div>
        <div className="form-group">
          <label>Hashtags:</label>
          <input
            type="text"
            value={hashtags}
            onChange={(e) => setHashtags(e.target.value)}
            className="input-box"
          />
        </div>
        <div className="form-group">
          <label>Video:</label>
          <input type="file" onChange={handleFileChange} className="input-file" />
        </div>
        <button type="submit" className="submit-button">Send</button>
      </form>
      {response && <p className="response-message">{response}</p>}
    </div>
  );
};

export default UploadVideoForm;
