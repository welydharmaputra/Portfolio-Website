import "./Skills.css";
import { skillsData } from "../data/dummyData";

export default function Skills() {
  const allSkills = [
    ...skillsData.design,
    ...skillsData.development,
    ...skillsData.tools,
  ];

  return (
    <section className="skills-section" id="skills">
      <h2 className="skills-title">Skills & Expertise</h2>
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
