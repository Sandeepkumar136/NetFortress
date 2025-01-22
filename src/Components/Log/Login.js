import React, { useState, useContext } from "react";
import { useLogin } from "../Contexts/AuthContext";
import { Link } from "react-router-dom";
import images from "../Assets/ImageExporter";
import { motion } from "framer-motion"; // Import motion

const Login = () => {
  const { login } = useLogin();
  const [formData, setFormData] = useState({ email: "", password: "" });

  const handleSubmit = (e) => {
    e.preventDefault();
    login(formData);
  };

  return (
    <motion.div
      className="login-container"
      initial={{ opacity: 0, y: 50 }} // Start from below (y: 50)
      animate={{ opacity: 1, y: 0 }} // End at the normal position (y: 0)
      transition={{ duration: 0.7 }} // Duration of the animation
    >
      <div className="l-p-contain">
        <img className="img-login" src={images.login} alt="login" />
        <h1 className="l-heading">login</h1>
      </div>
      <form className="form-log" onSubmit={handleSubmit}>
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
            Login
          </button>
          <Link className="s-btn" to="/signup">
            Signup
          </Link>
        </div>
      </form>
    </motion.div>
  );
};

export default Login;
