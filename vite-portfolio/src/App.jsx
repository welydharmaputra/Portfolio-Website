import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import FloatingMenu from "./components/Bubblejob";
import Portfolio from "./Pages/Portfolio";
import Biography from "./Pages/Biography";
import Project from "./Pages/Project";
import Projectlist from "./Pages/Projectlist";
import Contact from "./Pages/Contact";

function App() {
  return (
    <Router>
      <div className="app-shell">
        <Navbar />
        <FloatingMenu />
        <main className="app-main">
          <Routes>
            <Route path="/" element={<Portfolio />} />
            <Route path="/biography" element={<Biography />} />
            <Route path="/projects" element={<Projectlist />} />
            <Route path="/project/:id" element={<Project />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
