// ProfileDialog.js
import React from 'react';
import { useProfileDialog } from '../Contexts/DialogTwoContext';
import Profile from '../Log/Profile';

const ProfileDialog = () => {
  const { isPopen, closePdialog } = useProfileDialog();

  const handleOutsideClick = (e) => {
    if (e.target.id === 'dialog-profile-overlay') closePdialog();
  };

  return (
    isPopen && (
      <div id="dialog-profile-overlay" onClick={handleOutsideClick}>
        <div className="p-dialog-content">
        </div>
      </div>
    )
  );
};

export default ProfileDialog;
