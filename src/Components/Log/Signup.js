import React, { useState, useContext } from "react";
import { useLogin } from "../Contexts/AuthContext";
import images from "../Assets/ImageExporter";
import { Link } from "react-router-dom";
import { motion } from "framer-motion"; // Import motion

const Signup = () => {
  const { signup } = useLogin();
  const [formData, setFormData] = useState({ name: "", email: "", password: "" });

  const handleSubmit = (e) => {
    e.preventDefault();
    signup(formData);
    alert("Signup successful! Please log in.");
  };

  return (
    <motion.div
      className="login-container"
      initial={{ opacity: 0, y: 50 }} // Start from below (y: 50)
      animate={{ opacity: 1, y: 0 }} // End at the normal position (y: 0)
      transition={{ duration: 0.7 }} // Duration of the animation
    >
      <div className="l-p-contain">
        <img className="img-login" src={images.signup} alt="signup" />
        <h1 className="l-heading">Signup</h1>
      </div>
      <form className="form-log" onSubmit={handleSubmit}>
        <input
          className="l-inp"
          type="text"
          placeholder="Name"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          required
        />
        <input
          className="l-inp"
          type="email"
          placeholder="Email"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          required
        />
        <input
          className="l-inp"
          type="password"
          placeholder="Password"
          value={formData.password}
          onChange={(e) => setFormData({ ...formData, password: e.target.value })}
          required
        />
        <div className="btn-flex-l">
          <button className="l-btn" type="submit">
            Signup
          </button>
          <Link className="s-btn" to="/login">
            Login
          </Link>
        </div>
      </form>
    </motion.div>
  );
};

export default Signup;
