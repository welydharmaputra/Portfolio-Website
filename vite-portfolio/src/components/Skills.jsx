import "./Skills.css";
import { skillsData } from "../data/dummyData";

export default function Skills() {
  const services = [
    {
      title: "Brand Identity & Systems",
      description:
        "I build brand identities designed to last. Logo, typography, and systems that guide your team so everything stays consistent and clear.",
    },
    {
      title: "Campaigns & Launches",
      description:
        "I concept and run integrated campaigns that drive awareness and growth. Product launches or always-on work, I keep strategy and execution aligned from start to ship.",
    },
    {
      title: "Web & Digital Design",
      description:
        "I design websites and landing pages that perform. Intuitive layouts, clear hierarchy, built to convert. I can prototype and build directly in modern no-code tools when speed matters.",
    },
    {
      title: "Content & Creative Direction",
      description:
        "I direct and collaborate on content across social, photography, and motion. The goal is always the same: cohesive, on-brand work that earns attention and holds it.",
    },
    {
      title: "Events & Activations",
      description:
        "I design physical and digital experiences that build visibility and deepen connection. Trade show booths to branded moments, I treat every format as a chance to reinforce the brand.",
    },
    {
      title: "Strategic Collaboration",
      description:
        "I partner with marketing, product, and creative leads to connect vision to execution. I bring cross-functional clarity and make sure the work stays tied to the goal.",
    },
  ];
  const allSkills = [
    ...skillsData.design,
    ...skillsData.development,
    ...skillsData.tools,
  ];

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
      <div className="skills-bubbles-container">
        {allSkills.map((skill, index) => (
          <div key={index} className="skill-bubble">
            {skill}
          </div>
        ))}
      </div>
    </section>
  );
}
