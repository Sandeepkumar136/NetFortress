import React, { createContext, useState, useContext } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(() => {
    const savedUser = localStorage.getItem("user");
    return savedUser ? JSON.parse(savedUser) : null;
  });

  const login = (formData) => {
    const savedUser = JSON.parse(localStorage.getItem("user"));
    if (savedUser && savedUser.email === formData.email && savedUser.password === formData.password) {
      setUser(savedUser);
      alert("Login successful!");
    } else {
      alert("Invalid email or password.");
    }
  };

  const signup = (formData) => {
    localStorage.setItem("user", JSON.stringify(formData));
    alert("Signup successful! Please log in.");
  };

  const logout = () => {
    setUser(null);
    alert("Logged out successfully!");
  };

  return (
    <AuthContext.Provider value={{ user, login, signup, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useLogin = () => useContext(AuthContext);
