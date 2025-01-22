import React, { useContext } from "react";
import { useLogin } from "../Contexts/AuthContext";
import images from "../Assets/ImageExporter";
import { motion } from "framer-motion"; // Import motion

const Profile = () => {
  const { user, logout } = useLogin();

  return (
    <motion.div
      className="profile-container"
      initial={{ opacity: 0, y: 50 }} // Start from below (y: 50)
      animate={{ opacity: 1, y: 0 }} // End at the normal position (y: 0)
      transition={{ duration: 0.7 }} // Duration of the animation
    >
      <img className="p-img" src={images.profile} alt="profile" />
      <h1 className="p-heading">{user?.name ? "Welcome" : ""} {user?.name}</h1>
      <p className="p-text">{user?.email}</p>
      <button className="p-btn" onClick={logout}>Logout</button>
    </motion.div>
  );
};

export default Profile;
