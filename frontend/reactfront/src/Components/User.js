import React, { useState, useEffect } from 'react';
import axios from 'axios';

const UserProfileList = () => {
  const [profiles, setProfiles] = useState([]);

  useEffect(() => {
    axios.get('/api/users/')
      .then(response => setProfiles(response.data))
      .catch(error => console.error(error));
  }, []);

  return (
    <div className="user-profile-list">
      {profiles.map(profile => (
        <div key={profile.id} className="card">
          <img src={profile.image} alt={profile.name} />
          <h3>{profile.name}</h3>
          <p>{profile.profession}</p>
          <p>{profile.status}</p>
          <p>{profile.location}</p>
        </div>
      ))}
    </div>
  );
};

export default UserProfileList;
