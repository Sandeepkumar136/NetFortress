import React from 'react';
import { useNavigate } from 'react-router-dom';

function Profile({ setIsLoggedIn }) {
  const navigate = useNavigate();
  const userEmail = localStorage.getItem('userEmail');

  const handleLogout = () => {
    localStorage.removeItem('isLoggedIn');
    localStorage.removeItem('userEmail');
    setIsLoggedIn(false);
    navigate('/login');
  };

  return (
    <div>
      <h2>Profile</h2>
      <p>Welcome, {userEmail}!</p>
      <button onClick={handleLogout}>Log Out</button>
    </div>
  );
}

export default Profile;
