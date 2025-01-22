import React, { useEffect } from 'react';
import { useProfileDialog } from '../Contexts/DialogTwoContext';
import { useLogin } from '../Contexts/AuthContext';
import { useNavigate } from 'react-router-dom';

const ProfileDialog = () => {
  const { isPopen, closePdialog } = useProfileDialog();
  const { user, logout } = useLogin();
  const navigate = useNavigate();

  const handleOutsideClick = (e) => {
    if (e.target.id === 'dialog-profile-overlay') closePdialog();
  };

  // UseEffect to handle the navigation when the user is not logged in
  useEffect(() => {
    if (!user) {
      navigate('/login'); // Redirect to login page if no user is logged in
    }
  }, [user, navigate]);

  // If no user is logged in, do not render the profile dialog
  if (!user) {
    return null;
  }

  // Handle closing the profile dialog on logout
  const handleLogout = () => {
    logout();
    closePdialog(); // Close the dialog when the user logs out
  };

  return (
    isPopen && (
      <div id="dialog-profile-overlay" onClick={handleOutsideClick}>
        <div className="p-dialog-content">
          <h1>Profile</h1>
          <p><strong>Name:</strong> {user.name}</p>
          <p><strong>Email:</strong> {user.email}</p>
          <button onClick={handleLogout}>Logout</button> {/* Logout button */}
        </div>
      </div>
    )
  );
};

export default ProfileDialog;
