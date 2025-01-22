import React, { useState, useContext } from "react";
import { useLogin } from "../Contexts/AuthContext";
import { Link } from "react-router-dom";
import images from "../Assets/ImageExporter";

const Login = () => {
  const { login } = useLogin();
  const [formData, setFormData] = useState({ email: "", password: "" });

  const handleSubmit = (e) => {
    e.preventDefault();
    login(formData);
  };

  return (
    <div className="login-container">
      <div className="l-p-contain">
        <img src={images.login} alt="login" />
        <h1>login</h1>
      </div>
      <form onSubmit={handleSubmit}>
        <input className="l-inp"
          type="email"
          placeholder="Email"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          required
        />
        <input className="l-inp"
          type="password"
          placeholder="Password"
          value={formData.password}
          onChange={(e) => setFormData({ ...formData, password: e.target.value })}
          required
        />
        <button className="l-btn" type="submit">Login</button>
        <Link className="s-btn" to='/signup'>Signup</Link>
      </form>
    </div>
  );
};

export default Login;
