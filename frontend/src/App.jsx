import React from "react";
import FormUI from "./component/FormUI";
import LoginPage from "./component/LoginPage";
import DashboardPage from "./component/DahboardPage";
import { ToastContainer } from "react-toastify";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./component/Navbar";
import HomePage from "./component/HomePage";

function App() {
  return (
    <>
    <ToastContainer/>
    
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/register" element={<FormUI />} />
        <Route path="/home" element={<HomePage />} />
        
      </Routes>
    
    </>

  );
}

export default App;
