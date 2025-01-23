import React from "react";
import { useLogin } from "../Contexts/AuthContext";

const Profile = () => {
  const { user, logout } = useLogin();

  return (
    <div className="profile-container">
      <h1>Welcome, {user.name}</h1>
      <p>Email: {user.email}</p>
      <button onClick={logout}>Logout</button>
    </div>
  );
};

export default Profile;
