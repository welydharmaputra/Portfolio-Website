import { useParams, Link } from "react-router-dom";
import { projectsData } from "../data/dummyData";
import "./Project.css";

function Project() {
  const { id } = useParams();
  const project = projectsData.find((p) => p.id === parseInt(id));

  if (!project) {
    return (
      <div className="project-page">
        <Link to="/" className="back-button">← Back to Portfolio</Link>
        <h1>Project not found</h1>
      </div>
    );
  }

  return (
    <div className="project-page">
      <Link to="/" className="back-button">← Back to Portfolio</Link>
      <h1>{project.title}</h1>
      <img src={project.image} alt={project.title} className="project-main-image" />
      <p className="project-category">{project.category}</p>
      <p className="project-description">{project.description}</p>
      <div className="project-tags">
        {project.tags.map((tag, index) => (
          <span key={index} className="tag">
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
}

export default Project;