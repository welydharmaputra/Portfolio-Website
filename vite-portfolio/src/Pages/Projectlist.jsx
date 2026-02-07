import "./Projectlist.css";
import { Link } from "react-router-dom";
import { projectsData } from "../data/dummyData";

function Projectlist() {
  const projects = projectsData;

  return (
    <div className="projectlist-container">
      {/* Header Section */}
      <section className="projectlist-hero">
        <h1>All Projects</h1>
        <p>Explore my complete portfolio of design and development work</p>
        <Link to="/" className="back-button">
          ← Back to Home
        </Link>
      </section>

      {/* Projects Grid Section */}
      <section className="projectlist-section">
        <div className="projectlist-grid">
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
                  <div className="project-tags">
                    {project.tags.map((tag, index) => (
                      <span key={index} className="tag">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Projectlist;
