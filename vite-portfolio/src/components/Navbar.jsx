import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import "./Navbar.css";
import welyLogo from "../assets/WelyLogo.svg";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isHidden, setIsHidden] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  const toggleMenu = () => {
    setIsOpen(!isOpen);
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

  const handleSectionScroll = (e, sectionId) => {
    e.preventDefault();
    setIsOpen(false);
    slowScrollToSection(sectionId);
  };

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        // Scrolling down
        setIsHidden(true);
      } else {
        // Scrolling up
        setIsHidden(false);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <nav
      className={`navbar ${isHidden ? "hidden" : ""} ${
        isHomePage ? "" : "navbar-secondary"
      }`}
    >
      <div className="navbar-container">
        <div className="navbar-logo">
          <Link to="/" aria-label="Wely D. Putra home">
            <img src={welyLogo} alt="Wely logo" />
          </Link>
        </div>

        <div className={`navbar-menu ${isOpen ? "active" : ""}`}>
          <Link to="/" onClick={() => setIsOpen(false)}>
            Home
          </Link>
          <Link to="/biography" onClick={() => setIsOpen(false)}>
            About
          </Link>
          {isHomePage && (
            <>
              <a
                href="#projects"
                onClick={(e) => handleSectionScroll(e, "projects")}
              >
                Projects
              </a>
              <a
                href="#skills"
                onClick={(e) => handleSectionScroll(e, "skills")}
              >
                Skills
              </a>
            </>
          )}
          <Link to="/contact" onClick={() => setIsOpen(false)}>
            Contact
          </Link>
          <Link to="/projects" onClick={() => setIsOpen(false)}>
            All Projects
          </Link>
        </div>

        <div className="hamburger" onClick={toggleMenu}>
          <span className={isOpen ? "active" : ""}></span>
          <span className={isOpen ? "active" : ""}></span>
          <span className={isOpen ? "active" : ""}></span>
        </div>
      </div>
    </nav>
  );
}
