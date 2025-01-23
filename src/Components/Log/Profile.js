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

  // Redirect to login page if the user is not logged in
  useEffect(() => {
    if (!user && isPopen) {
      closePdialog();
      navigate('/login');
    }
  }, [user, isPopen, navigate, closePdialog]);

  if (!user || !isPopen) {
    return null;
  }

  const handleLogout = () => {
    logout();
    closePdialog(); // Close the dialog when logging out
    navigate('/login'); // Redirect to login after logout
  };

  return (
    <div id="dialog-profile-overlay" onClick={handleOutsideClick}>
      <div className="p-dialog-content">
        <h1>Profile</h1>
        <p><strong>Name:</strong> {user.name}</p>
        <p><strong>Email:</strong> {user.email}</p>
        <button onClick={handleLogout}>Logout</button>
      </div>
    </div>
  );
};

export default ProfileDialog;
