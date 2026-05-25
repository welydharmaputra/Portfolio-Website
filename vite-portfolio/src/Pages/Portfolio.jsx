import "./Portfolio.css";
import { useEffect, useState, useRef, useMemo } from "react";
import { Link, useNavigate } from "react-router-dom";
import { projectsData, aboutData } from "../data/dummyData";
import Skills from "../components/Skills";

function Portfolio() {
  const navigate = useNavigate();
  const projects = projectsData.slice(0, 10);
  const about = aboutData;
  const [heroScrollProgress, setHeroScrollProgress] = useState(0);
  const heroRef = useRef(null);
  const [mousePos, setMousePos] = useState({ x: 50, y: 50 });
  const [displayedBio, setDisplayedBio] = useState("");
  const [bioTypingDone, setBioTypingDone] = useState(false);

  const particles = useMemo(
    () =>
      Array.from({ length: 20 }, (_, i) => ({
        id: i,
        size: 2.5 + Math.random() * 4,
        x: Math.random() * 88 + 6,
        y: Math.random() * 82 + 6,
        duration: 5 + Math.random() * 6,
        delay: -(Math.random() * 10),
        opacity: 0.18 + Math.random() * 0.42,
      })),
    []
  );

  useEffect(() => {
    const updateHeroScrollProgress = () => {
      const scrollLimit = Math.max(window.innerHeight * 0.9, 1);
      const nextProgress = Math.min(window.scrollY / scrollLimit, 1);
      setHeroScrollProgress(nextProgress);
    };

    updateHeroScrollProgress();
    window.addEventListener("scroll", updateHeroScrollProgress, {
      passive: true,
    });
    window.addEventListener("resize", updateHeroScrollProgress);

    return () => {
      window.removeEventListener("scroll", updateHeroScrollProgress);
      window.removeEventListener("resize", updateHeroScrollProgress);
    };
  }, []);

  useEffect(() => {
    const hero = heroRef.current;
    if (!hero) return;
    const handleMouseMove = (e) => {
      const rect = hero.getBoundingClientRect();
      setMousePos({
        x: ((e.clientX - rect.left) / rect.width) * 100,
        y: ((e.clientY - rect.top) / rect.height) * 100,
      });
    };
    hero.addEventListener("mousemove", handleMouseMove);
    return () => hero.removeEventListener("mousemove", handleMouseMove);
  }, []);

  useEffect(() => {
    const bioText = about.shortBio;
    let index = 0;
    let interval;
    const timeout = setTimeout(() => {
      interval = setInterval(() => {
        index++;
        setDisplayedBio(bioText.slice(0, index));
        if (index >= bioText.length) {
          clearInterval(interval);
          setBioTypingDone(true);
        }
      }, 36);
    }, 1100);
    return () => {
      clearTimeout(timeout);
      if (interval) clearInterval(interval);
    };
  }, [about.shortBio]);

  useEffect(() => {
    const revealElements = document.querySelectorAll(".reveal-on-scroll");

    if (revealElements.length === 0) {
      return;
    }

    if (!("IntersectionObserver" in window)) {
      revealElements.forEach((element) => element.classList.add("is-visible"));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.14,
        rootMargin: "0px 0px -8% 0px",
      }
    );

    revealElements.forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, []);

  const handleViewAllProjects = () => {
    navigate("/projects");
  };

  return (
    <div className="portfolio-container">
      {/* Image Section */}
      <section
        ref={heroRef}
        className="portfolio-hero"
        style={{
          "--hero-bg-offset": `${heroScrollProgress * 120}px`,
          "--hero-overlay-opacity": `${1 - heroScrollProgress * 0.4}`,
          "--mouse-x": `${mousePos.x}%`,
          "--mouse-y": `${mousePos.y}%`,
        }}
      >
        {/* Aurora animated blobs */}
        <div className="hero-aurora" aria-hidden="true">
          <div className="aurora-blob aurora-blob--1" />
          <div className="aurora-blob aurora-blob--2" />
          <div className="aurora-blob aurora-blob--3" />
          <div className="aurora-blob aurora-blob--4" />
        </div>

        {/* Pulsing rings */}
        <div className="hero-rings" aria-hidden="true">
          <span className="hero-ring" style={{ "--ri": 0 }} />
          <span className="hero-ring" style={{ "--ri": 1 }} />
          <span className="hero-ring" style={{ "--ri": 2 }} />
          <span className="hero-ring" style={{ "--ri": 3 }} />
        </div>

        {/* Shooting stars */}
        <div className="hero-shooting-stars" aria-hidden="true">
          <span className="shooting-star" style={{ "--si": 0 }} />
          <span className="shooting-star" style={{ "--si": 1 }} />
          <span className="shooting-star" style={{ "--si": 2 }} />
          <span className="shooting-star" style={{ "--si": 3 }} />
          <span className="shooting-star" style={{ "--si": 4 }} />
        </div>

        {/* Mouse-reactive spotlight */}
        <div className="hero-spotlight" aria-hidden="true" />

        {/* Floating particles */}
        <div className="hero-particles" aria-hidden="true">
          {particles.map((p) => (
            <span
              key={p.id}
              className="hero-particle"
              style={{
                left: `${p.x}%`,
                top: `${p.y}%`,
                width: `${p.size}px`,
                height: `${p.size}px`,
                animationDuration: `${p.duration}s`,
                animationDelay: `${p.delay}s`,
                opacity: p.opacity,
              }}
            />
          ))}
        </div>

        <div className="hero-image" aria-hidden="true"></div>
        <div className="hero-text">
          <h1>{about.name}</h1>
          <p>
            {displayedBio}
            {!bioTypingDone && <span className="cursor-blink">|</span>}
          </p>
        </div>
      </section>

      {/* Skills Section */}
      <div className="reveal-on-scroll" style={{ "--reveal-delay": "80ms" }}>
        <Skills />
      </div>

      {/* Projects Grid Section */}
      <section
        className="projects-section reveal-on-scroll"
        id="projects"
        style={{ "--reveal-delay": "120ms" }}
      >
        <button
          className="section-button reveal-on-scroll"
          onClick={handleViewAllProjects}
          style={{ "--reveal-delay": "180ms" }}
        >
          Some of my latest work <span className="arrow">→</span>
        </button>
        <div className="projects-grid">
          {projects.map((project) => (
            <Link
              key={project.id}
              to={`/project/${project.id}`}
              className="project-card-link reveal-on-scroll"
              style={{ "--reveal-delay": `${220 + project.id * 45}ms` }}
            >
              <div className="project-card">
                <div className="project-image">
                  <img src={project.image} alt={project.title} />
                </div>
                <div className="project-content">
                  <h3>{project.title}</h3>
                  <p className="project-description">{project.description}</p>
                  <div className="project-tags"></div>
                </div>
              </div>
            </Link>
          ))}
          <button
            className="project-card-link show-more-btn reveal-on-scroll"
            onClick={handleViewAllProjects}
            style={{ "--reveal-delay": "420ms" }}
          >
            <div className="project-card show-more-card">
              <div className="show-more-content">
                <h3>View All Projects</h3>
                <p>See more of my work</p>
                <div className="show-more-arrow">→</div>
              </div>
            </div>
          </button>
        </div>
      </section>
    </div>
  );
}

export default Portfolio;
