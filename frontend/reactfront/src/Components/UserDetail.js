import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const UserProfileDetail = () => {
  const { id } = useParams();
  const [profile, setProfile] = useState(null);

  useEffect(() => {
    axios.get(`/api/users/${id}/`)
      .then(response => setProfile(response.data))
      .catch(error => console.error(error));
  }, [id]);

  if (!profile) return <div>Loading...</div>;

  return (
    <div className="user-profile-detail">
      <img src={profile.image} alt={profile.name} />
      <h3>{profile.name}</h3>
      <p>{profile.profession}</p>
      <p>{profile.status}</p>
      <p>{profile.location}</p>
    </div>
  );
};

export default UserProfileDetail;
