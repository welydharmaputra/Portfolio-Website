import "./Projectlist.css";
import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { projectsData } from "../data/dummyData";

function Projectlist() {
  const projects = projectsData;
  const [query, setQuery] = useState("");
  const [selectedTag, setSelectedTag] = useState("all");

  const tagOptions = useMemo(() => {
    const tags = new Set();
    projects.forEach((project) => {
      project.tags.forEach((tag) => tags.add(tag));
    });
    return ["all", ...Array.from(tags).sort((a, b) => a.localeCompare(b))];
  }, [projects]);

  const filteredProjects = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();

    return projects.filter((project) => {
      const matchesTag =
        selectedTag === "all" || project.tags.includes(selectedTag);

      if (!normalizedQuery) {
        return matchesTag;
      }

      const titleMatch = project.title.toLowerCase().includes(normalizedQuery);
      const descriptionMatch = project.description
        .toLowerCase()
        .includes(normalizedQuery);
      const tagsMatch = project.tags.some((tag) =>
        tag.toLowerCase().includes(normalizedQuery),
      );

      return matchesTag && (titleMatch || descriptionMatch || tagsMatch);
    });
  }, [projects, query, selectedTag]);

  return (
    <div className="projectlist-container">
      {/* Header Section */}
      <section className="projectlist-hero">
        <h1>All Projects</h1>
        <p>Explore my complete portfolio of design and development work</p>
        
      </section>

      {/* Projects Grid Section */}
      <section className="projectlist-section">
        <div className="projectlist-filters">
          <div className="projectlist-search">
            <input
              type="search"
              placeholder="Search projects by title, tag, or keyword"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              aria-label="Search projects"
            />
          </div>
          <div className="projectlist-filter">
            <label htmlFor="project-skill-filter">Filter by skill</label>
            <select
              id="project-skill-filter"
              value={selectedTag}
              onChange={(event) => setSelectedTag(event.target.value)}
            >
              {tagOptions.map((tag) => (
                <option key={tag} value={tag}>
                  {tag === "all" ? "All skills" : tag}
                </option>
              ))}
            </select>
          </div>
        </div>
        <div className="projectlist-grid">
          {filteredProjects.length === 0 ? (
            <div className="projectlist-empty">
              No projects match your search and filter.
            </div>
          ) : (
            filteredProjects.map((project) => (
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
            ))
          )}
        </div>
      </section>
    </div>
  );
}

export default Projectlist;
