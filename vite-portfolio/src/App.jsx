import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Footer from "./components/Footer";
import FloatingMenu from "./components/Bubblejob";
import ContactSection from "./components/ContactSection";
import Portfolio from "./Pages/Portfolio";
import Biography from "./Pages/Biography";
import Project from "./Pages/Project";
import Projectlist from "./Pages/Projectlist";

function App() {
  const [count, setCount] = useState(0);

  return (
    <Router>
      <Navbar />
      <FloatingMenu />
      <Routes>
        <Route path="/" element={<Portfolio />} />
        <Route path="/biography" element={<Biography />} />
        <Route path="/projects" element={<Projectlist />} />
        <Route path="/project/:id" element={<Project />} />
      </Routes>
      <ContactSection />
      <Footer />
    </Router>
  );
}

export default App;
