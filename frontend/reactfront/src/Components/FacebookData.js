import React, { useEffect, useState } from 'react';
import axios from 'axios';
import  './FacebookData.css'

const FacebookData = () => {
const [data, setData] = useState(null);

useEffect(() => {
const fetchData = async () => {
try {
const response = await axios.get('https://localhost:8000/api/facebook-data/', {
headers: {
Authorization: `Bearer ${localStorage.getItem('token')}`
}
});
setData(response.data);
} catch (error) {
console.error("Error fetching data:", error);
}
};
fetchData();
}, []);
if (!data) return <div>Loading...</div>;
return (
<div>
<h2>Pages</h2>
<ul>
{data.pages.map(page => (
<li key={page.id}>{page.name}</li>
))}
</ul>
<h2>Posts</h2>
<ul>
{data.posts.map(post => (
<li key={post.id}>{post.message}</li>
))}
</ul>
</div>
);
};
export default FacebookData;
