import React from "react";
import "./App.css";
import Header from "./components/Header";
import { useSelector } from "react-redux";
import Register from "./pages/Register";
import { Routes, Route, Navigate } from "react-router-dom";
import Profile from "./pages/Profile";
import Login from "./pages/Login";
import Home from "./pages/Home";

const baseURL = "http://localhost:5000/api/v1";

const App = () => {
  const user = useSelector((state) => state.user.isUser);
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/register" element={<Register />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  );
};

export default App;
