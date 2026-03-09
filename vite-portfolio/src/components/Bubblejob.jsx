import { useState, useEffect } from "react";
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

  const slowScrollToSection = (sectionId, duration = 1400) => {
    const section = document.getElementById(sectionId);
    if (!section) {
      return;
    }

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      section.scrollIntoView();
      return;
    }

    const startY = window.scrollY;
    const targetY = section.getBoundingClientRect().top + window.scrollY;
    const distance = targetY - startY;
    let startTime = null;

    const easeInOutCubic = (t) =>
      t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;

    const step = (currentTime) => {
      if (!startTime) {
        startTime = currentTime;
      }

      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const easedProgress = easeInOutCubic(progress);

      window.scrollTo(0, startY + distance * easedProgress);

      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };

    window.requestAnimationFrame(step);
  };

  const handleProjectsClick = (e) => {
    e.preventDefault();
    closeMenu();

    if (location.pathname === "/") {
      slowScrollToSection("projects");
    } else {
      window.location.href = "/#projects";
    }
  };

  const handleSmoothScroll = (e, sectionId) => {
    e.preventDefault();
    closeMenu();
    slowScrollToSection(sectionId);
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

        <Link
          to="/biography"
          className="fab-item"
          onClick={closeMenu}
          title="About"
        >
          <span className="fab-label">About</span>
        </Link>

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
          onClick={(e) => handleSmoothScroll(e, "skills")}
          title="Skills"
        >
          <span className="fab-label">Skills</span>
        </a>

        <Link
          to="/contact"
          className="fab-item"
          onClick={closeMenu}
          title="Contact"
        >
          <span className="fab-label">Contact</span>
        </Link>

        <Link
          to="/projects"
          className="fab-item"
          onClick={closeMenu}
          title="All Projects"
        >
          <span className="fab-label">All Projects</span>
        </Link>
      </div>
    </div>
  );
}
