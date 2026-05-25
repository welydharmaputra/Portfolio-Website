import "./Projectlist.css";
import { useMemo, useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { projectsData } from "../data/dummyData";

function Projectlist() {
  const projects = projectsData;
  const [query, setQuery] = useState("");
  const [selectedTag, setSelectedTag] = useState("all");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setIsDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

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
      if (!normalizedQuery) return matchesTag;
      const titleMatch = project.title.toLowerCase().includes(normalizedQuery);
      const descriptionMatch = project.description
        .toLowerCase()
        .includes(normalizedQuery);
      const tagsMatch = project.tags.some((tag) =>
        tag.toLowerCase().includes(normalizedQuery)
      );
      return matchesTag && (titleMatch || descriptionMatch || tagsMatch);
    });
  }, [projects, query, selectedTag]);

  return (
    <div className="projectlist-container">
      {/* Hero */}
      <section className="projectlist-hero">
        <div className="projectlist-hero-bg" aria-hidden="true">
          <div className="pl-blob pl-blob--1" />
          <div className="pl-blob pl-blob--2" />
          <div className="pl-blob pl-blob--3" />
        </div>
        <div className="projectlist-hero-content">
          <span className="projectlist-badge">
            <span className="badge-dot" />
            {projects.length} Projects
          </span>
          <h1>All Projects</h1>
          <p>Explore my complete portfolio of design and development work</p>
        </div>
      </section>

      {/* Grid Section */}
      <section className="projectlist-section">
        <div className="projectlist-filters">
          <div className="projectlist-search">
            <span className="search-icon" aria-hidden="true">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/>
              </svg>
            </span>
            <input
              type="search"
              placeholder="Search by title, tag, or keyword…"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              aria-label="Search projects"
            />
          </div>
          <div className="projectlist-filter" ref={dropdownRef}>
            <label>Filter by skill</label>
            <div className="pl-dropdown">
              <button
                className={`pl-dropdown-trigger${isDropdownOpen ? " open" : ""}`}
                onClick={() => setIsDropdownOpen((o) => !o)}
                type="button"
                aria-haspopup="listbox"
                aria-expanded={isDropdownOpen}
              >
                <span>{selectedTag === "all" ? "All skills" : selectedTag}</span>
                <svg className="pl-chevron" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <polyline points="6 9 12 15 18 9"/>
                </svg>
              </button>
              <div className={`pl-dropdown-menu${isDropdownOpen ? " open" : ""}`} role="listbox">
                {tagOptions.map((tag) => (
                  <button
                    key={tag}
                    className={`pl-dropdown-option${selectedTag === tag ? " active" : ""}`}
                    onClick={() => { setSelectedTag(tag); setIsDropdownOpen(false); }}
                    type="button"
                    role="option"
                    aria-selected={selectedTag === tag}
                  >
                    <span>{tag === "all" ? "All skills" : tag}</span>
                    {selectedTag === tag && (
                      <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                        <polyline points="20 6 9 17 4 12"/>
                      </svg>
                    )}
                  </button>
                ))}
              </div>
            </div>
          </div>
          {(query || selectedTag !== "all") && (
            <span className="projectlist-results">
              {filteredProjects.length} result{filteredProjects.length !== 1 ? "s" : ""}
            </span>
          )}
        </div>

        <div className="projectlist-grid">
          {filteredProjects.length === 0 ? (
            <div className="projectlist-empty">
              <span className="empty-icon">🔍</span>
              <p>No projects match your search.</p>
            </div>
          ) : (
            filteredProjects.map((project, index) => (
              <Link
                key={project.id}
                to={`/project/${project.id}`}
                className="project-card-link"
                style={{ "--card-index": index }}
              >
                <div className="project-card">
                  <div className="project-image">
                    <img src={project.image} alt={project.title} />
                    <div className="project-card-overlay">
                      <span className="project-card-cta">View Project →</span>
                    </div>
                  </div>
                  <div className="project-content">
                    <h3>{project.title}</h3>
                    <p className="project-description">{project.description}</p>
                    <div className="project-tags">
                      {project.tags.map((tag, i) => (
                        <span key={i} className="tag">{tag}</span>
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
