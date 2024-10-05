import React, { useState } from "react";
import "./ContentManagerForm.css";

const ContentManagerForm = () => {
const [formData, setFormData] = useState({
title: "",
description: "",
keywords: "",
hashtags: "",
video: null,
image: null,
});
const handleChange = (e) => {
const { name, value } = e.target;
setFormData((prevData) => ({ ...prevData, [name]: value }));
};
const handleFileChange = (e) => {
const { name, files } = e.target;
setFormData((prevData) => ({ ...prevData, [name]: files[0] }));
};
const handleSubmit = (e) => {
e.preventDefault();
console.log("Form submitted: ", formData);
// You can add further form submission logic here
};
return (
<div className="container">
<div className="form-wrapper">
<div className="logo">
<img src="logo.png" alt="Content Manager Logo" />
</div>
<form className="form-content" onSubmit={handleSubmit}>
<label htmlFor="title">Title</label>
<input
type="text"
id="title"
name="title"
value={formData.title}
onChange={handleChange}
placeholder="Enter title"
/>
<label htmlFor="description">Description</label>
<textarea
id="description"
name="description"
rows="4"
value={formData.description}
onChange={handleChange}
placeholder="Enter description"
></textarea>
<label htmlFor="keywords">Keywords</label>
<input
type="text"
id="keywords"
name="keywords"
value={formData.keywords}
onChange={handleChange}
placeholder="Enter keywords"
/>
<label htmlFor="hashtags">Hashtags</label>
<input
type="text"
id="hashtags"
name="hashtags"
value={formData.hashtags}
onChange={handleChange}
placeholder="Enter hashtags"
/>
<label htmlFor="video">Video</label>
<input
type="file"
id="video"
name="video"
onChange={handleFileChange}
/>
<label htmlFor="image">Image</label>
<input
type="file"
id="image"
name="image"
onChange={handleFileChange}
/>
<button className="send-btn" type="submit">
Send
</button>
</form>
</div>
</div>
);
};
export default ContentManagerForm;