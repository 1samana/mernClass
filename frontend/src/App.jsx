import React from "react";
import FormUI from "./pages/FormUI";
import LoginPage from "./pages/LoginPage";
import Index from "./pages/Indexx";
import AddBook from "./pages/AddBook";
import HomePage from "./pages/HomePage";
import { ToastContainer } from "react-toastify";
import AllBooks from "./pages/AllBooks";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <ToastContainer />

      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<FormUI />} />
        <Route path="/homee" element={<HomePage />} />
        <Route path="/addBook" element={<AddBook />} />
        <Route path="/allBooks" element={<AllBooks />} />
      </Routes>
    </>
  );
}

export default App;
