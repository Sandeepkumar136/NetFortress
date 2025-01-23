import React from "react";
import { useProfileDialog } from "../Contexts/DialogTwoContext";
import { useLogin } from "../Contexts/AuthContext";

const ProfileDialog = () => {
  const { isOpen, closeDialog } = useProfileDialog();
  const { user } = useLogin();

  if (!isOpen || !user) return null;

  return (
    <div className="dialog-overlay" onClick={closeDialog}>
      <div className="dialog-content">
        <h1>Profile</h1>
        <p>Name: {user.name}</p>
        <p>Email: {user.email}</p>
      </div>
    </div>
  );
};

export default ProfileDialog;
