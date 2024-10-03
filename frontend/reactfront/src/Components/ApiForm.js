import React, { useState } from "react";
import axios from "axios";

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
    formData.append("keywords", JSON.stringify(keywords.split(","))); // Convertir en tableau JSON
    formData.append("hashtags", JSON.stringify(hashtags.split(","))); // Convertir en tableau JSON

    try {
      const res = await axios.post("http://localhost:8000/api/videos/", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${localStorage.getItem("token")}`,  // Inclure le token JWT pour l'authentification
        },
      });
      setResponse("Video uploaded successfully!");
    } catch (error) {
      console.error(error);
      setResponse("Failed to upload video");
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Title:</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div>
          <label>Description:</label>
          <input
            type="text"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
        <div>
          <label>Keywords (comma separated):</label>
          <input
            type="text"
            value={keywords}
            onChange={(e) => setKeywords(e.target.value)}
          />
        </div>
        <div>
          <label>Hashtags (comma separated):</label>
          <input
            type="text"
            value={hashtags}
            onChange={(e) => setHashtags(e.target.value)}
          />
        </div>
        <div>
          <label>Video:</label>
          <input type="file" onChange={handleFileChange} />
        </div>
        <button type="submit">Upload Video</button>
      </form>
      {response && <p>{response}</p>}
    </div>
  );
};

export default UploadVideoForm;
