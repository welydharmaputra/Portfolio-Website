import "./Portfolio.css";
import { Link, useNavigate } from "react-router-dom";
import { projectsData, aboutData } from "../data/dummyData";
import Skills from "../components/Skills";

function Portfolio() {
  const navigate = useNavigate();
  const projects = projectsData.slice(0, 10);
  const about = aboutData;

  const handleViewAllProjects = () => {
    navigate("/projects");
  };

  return (
    <div className="portfolio-container">
      {/* Image Section */}
      <section className="portfolio-hero">
        <div className="profile-image-wrapper">
          <img src="/profile.jpg" alt="Profile" className="profile-image" />
        </div>
        <h1>{about.name}</h1>
        <p>{about.shortBio}</p>
      </section>

      {/* Skills Section */}
      <Skills />

      {/* Projects Grid Section */}
      <section className="projects-section" id="projects">
        <button className="section-button" onClick={handleViewAllProjects}>
          Some of my latest work <span className="arrow">→</span>
        </button>
        <div className="projects-grid">
          {projects.map((project) => (
            <Link
              key={project.id}
              to={`/project/${project.id}`}
              className="project-card-link"
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
            className="project-card-link show-more-btn"
            onClick={handleViewAllProjects}
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
