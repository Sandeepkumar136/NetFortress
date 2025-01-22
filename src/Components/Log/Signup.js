import React, { useState, useContext } from "react";
import { useLogin } from "../Contexts/AuthContext";

const Signup = () => {
  const { signup } = useLogin;
  const [formData, setFormData] = useState({ name: "", email: "", password: "" });

  const handleSubmit = (e) => {
    e.preventDefault();
    signup(formData);
    alert("Signup successful! Please log in.");
  };

  return (
    <form onSubmit={handleSubmit}>
      <h1>Signup</h1>
      <input
        type="text"
        placeholder="Name"
        value={formData.name}
        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
        required
      />
      <input
        type="email"
        placeholder="Email"
        value={formData.email}
        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
        required
      />
      <input
        type="password"
        placeholder="Password"
        value={formData.password}
        onChange={(e) => setFormData({ ...formData, password: e.target.value })}
        required
      />
      <button type="submit">Signup</button>
    </form>
  );
};

export default Signup;
