import "./Skills.css";
import { skillsData } from "../data/dummyData";

export default function Skills() {
  const services = [
    {
      title: "Web Developer",
      description:
        "I design websites and landing pages that perform. Intuitive layouts, clear hierarchy, built to convert. I can prototype and build directly in modern no-code tools when speed matters.",
    },
    {
      title: "UI/UX Design",
      description:
        "I build brand identities designed to last. Logo, typography, and systems that guide your team so everything stays consistent and clear.",
    },
    {
      title: "3D Design & Motion",
      description:
        "I concept and run integrated campaigns that drive awareness and growth. Product launches or always-on work, I keep strategy and execution aligned from start to ship.",
    },
    {
      title: "Data Analytics",
      description:
        "I analyze data to uncover insights and drive informed decisions. From data visualization to statistical analysis, I help turn raw data into actionable strategies.",
    },
  ];
  const allSkills = [
    ...skillsData.design,
    ...skillsData.development,
    ...skillsData.tools,
  ];
  const marqueeSkills = [...allSkills, ...allSkills];

  return (
    <section className="skills-section" id="skills">
      <h2 className="skills-title">Skills & Expertise</h2>
      <div className="skills-service-list">
        {services.map((service) => (
          <div key={service.title} className="skills-service-row">
            <h3 className="skills-service-title">{service.title}</h3>
            <p className="skills-service-text">{service.description}</p>
          </div>
        ))}
      </div>
      <div className="skills-marquee" aria-label="Skills marquee">
        <div className="skills-marquee-track">
          {marqueeSkills.map((skill, index) => (
            <div key={`${skill}-${index}`} className="skill-bubble">
              <span className="skill-bubble-text">{skill}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
