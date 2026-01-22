import "./Portfolio.css";

function Portfolio() {
  // Sample project data - replace with your actual projects
  const projects = [
    {
      id: 1,
      title: "Canberra vs South Sydney",
      description: "Side project",
      image: "/project1.jpg",
      tags: ["Design System"],
    },
    {
      id: 2,
      title: "What today's home buyer wants from their home",
      description: "Side project",
      image: "/project2.jpg",
      tags: ["Interior Design"],
    },
    {
      id: 3,
      title: "Qantas map search",
      description: "Product design",
      image: "/project3.jpg",
      tags: ["Product Design"],
    },
    {
      id: 4,
      title: "Project Title 4",
      description: "Project description",
      image: "/project4.jpg",
      tags: ["Tag"],
    },
    {
      id: 5,
      title: "Project Title 5",
      description: "Project description",
      image: "/project5.jpg",
      tags: ["Tag"],
    },
    {
      id: 6,
      title: "Project Title 6",
      description: "Project description",
      image: "/project6.jpg",
      tags: ["Tag"],
    },
  ];

  return (
    <div className="portfolio-container">
      {/* Image Section */}
      <section className="portfolio-hero">
        <div className="profile-image-wrapper">
          <img src="/profile.jpg" alt="Profile" className="profile-image" />
        </div>
        <h1>My Work</h1>
        <p>A collection of my latest projects and designs</p>
      </section>

      {/* Projects Grid Section */}
      <section className="projects-section">
        <h2>Some of my latest work</h2>
        <div className="projects-grid">
          {projects.map((project) => (
            <div key={project.id} className="project-card">
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
          ))}
        </div>
      </section>
    </div>
  );
}

export default Portfolio;
