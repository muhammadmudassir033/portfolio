import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Work from "./pages/Work";
import Footer from "./pages/Footer.jsx";
import Skill from "./pages/Skill";
import About from "./pages/About";
import Services from "./pages/Services.jsx";
import "./App.css";
import Navbar from "./component/Navbar.jsx";

function App() {
  return (
    <Router>
      <Navbar />

      <Routes>
        <Route path="/" element={<div><Home /><About/><Services/> <Skill/><Work /></div>} />
        <Route path="/about" element={<About />} />
        <Route path="/work" element={<Work />} />
        <Route path="/footer" element={<Footer />} /> 
        <Route path="/skill" element={<Skill />} />
        <Route path="/services" element={<Services />} />
      </Routes> 
      <Footer/>
    </Router>
  );
}

export default App;
