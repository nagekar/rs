import React from "react";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./Navbar";

import Login from "./pages/Login";
import Registration from "./pages/Registration";
import About from "./pages/About";
import Contact from "./pages/Contact";

function App() {
  return (
    <BrowserRouter>

      <Navbar />

      <Routes>

        <Route path="/login" element={<Login />} />

        <Route path="/register" element={<Registration />} />

        <Route path="/about" element={<About />} />

        <Route path="/contact" element={<Contact />} />

      </Routes>

    </BrowserRouter>
  );
}

export default App;
