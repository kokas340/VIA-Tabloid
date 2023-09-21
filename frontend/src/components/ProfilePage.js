import React, { useState, useEffect } from 'react';
import Navbar from './Navbar';

function ProfilePage({ userId }) { 

  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const apiUrl = `users/${userId}`; 
    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => {
        setUserData(data);
      })
      .catch((error) => {
        console.error('Error fetching user data:', error);
      });
  }, [userId]);

  return (
    <>
      <Navbar />
      <div>
        <h1>User Profile</h1>
        {userData ? (
          <div>
            <p>Name: {userData.name}</p>
            <p>Email: {userData.email}</p>
            <p>ID: {userData.id}</p>
          </div>
        ) : (
          <p>Loading user data...</p>
        )}
      </div>
    </>
  );
}

export default ProfilePage;