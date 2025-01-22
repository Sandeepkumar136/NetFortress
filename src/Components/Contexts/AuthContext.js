import React, { createContext, useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  // Load user from localStorage when the app starts
  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("currentUser"));
    if (storedUser) setUser(storedUser);
  }, []);

  // Signup function
  const signup = (userData) => {
    const users = JSON.parse(localStorage.getItem("users")) || [];
    users.push(userData);
    localStorage.setItem("users", JSON.stringify(users));
  };

  // Login function
  const login = ({ email, password }) => {
    const users = JSON.parse(localStorage.getItem("users")) || [];
    const foundUser = users.find(
      (u) => u.email === email && u.password === password
    );

    if (foundUser) {
      localStorage.setItem("currentUser", JSON.stringify(foundUser));
      setUser(foundUser);
      navigate("/profile");
    } else {
      alert("Invalid email or password");
    }
  };

  // Logout function
  const logout = () => {
    localStorage.removeItem("currentUser");
    setUser(null);
    navigate("/login");
  };

  return (
    <AuthContext.Provider value={{ user, signup, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
export const useLogin=() => useContext(AuthContext);
