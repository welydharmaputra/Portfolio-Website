import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./Bubblejob.css";

export default function FloatingMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  const handleProjectsClick = (e) => {
    e.preventDefault();
    closeMenu();

    if (location.pathname === "/") {
      const projectsSection = document.getElementById("projects");
      if (projectsSection) {
        projectsSection.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      window.location.href = "/#projects";
    }
  };

  const handleSmoothScroll = (sectionId) => {
    closeMenu();
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleContactClick = (e) => {
    e.preventDefault();
    closeMenu();
    const footer = document.querySelector(".footer-section");
    if (footer) {
      footer.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="floating-menu">
      <button className="fab-main" onClick={toggleMenu} title="Menu">
        <span className={`fab-icon ${isOpen ? "open" : ""}`}>+</span>
      </button>

      <div className={`fab-menu ${isOpen ? "active" : ""}`}>
        <Link to="/" className="fab-item" onClick={closeMenu} title="Home">
          <span className="fab-label">Home</span>
        </Link>

        <a
          href="#about"
          className="fab-item"
          onClick={() => handleSmoothScroll("about")}
          title="About"
        >
          <span className="fab-label">About</span>
        </a>

        <a
          href="#projects"
          className="fab-item"
          onClick={handleProjectsClick}
          title="Projects"
        >
          <span className="fab-label">Projects</span>
        </a>

        <a
          href="#skills"
          className="fab-item"
          onClick={() => handleSmoothScroll("skills")}
          title="Skills"
        >
          <span className="fab-label">Skills</span>
        </a>

        <a
          href="#contact"
          className="fab-item"
          onClick={handleContactClick}
          title="Contact"
        >
          <span className="fab-label">Contact</span>
        </a>
      </div>
    </div>
  );
}
