import "./Portfolio.css";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { projectsData, aboutData } from "../data/dummyData";
import Skills from "../components/Skills";

function Portfolio() {
  const navigate = useNavigate();
  const projects = projectsData.slice(0, 10);
  const about = aboutData;
  const [heroScrollProgress, setHeroScrollProgress] = useState(0);

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
      },
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
        className="portfolio-hero"
        style={{
          "--hero-bg-offset": `${heroScrollProgress * 120}px`,
          "--hero-overlay-opacity": `${1 - heroScrollProgress * 0.4}`,
        }}
      >
        <div className="hero-image" aria-hidden="true"></div>
        <div className="hero-text">
          <h1>{about.name}</h1>
          <p>{about.shortBio}</p>
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
