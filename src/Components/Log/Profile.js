import React, { useContext } from "react";
import { useLogin } from "../Contexts/AuthContext";

const Profile = () => {
  const { user } = useLogin();

  return (
    <div>
      <h1>Welcome, {user?.name}!</h1>
      <p>Email: {user?.email}</p>
    </div>
  );
};

export default Profile;
