import "./Biography.css";
import { aboutData } from "../data/dummyData";
import profilePhoto from "../assets/pngegg.png";

export default function Biography() {
  return (
    <main className="biography-page">
      <section className="biography-section">
        <h1 className="biography-title">My Biography</h1>

        <div className="biography-grid">
          <figure className="biography-photo-wrap">
            <img
              className="biography-photo"
              src={profilePhoto}
              alt={`${aboutData.name} profile portrait`}
            />
          </figure>

          <article className="biography-content">
            <h2 className="biography-name">{aboutData.name}</h2>
            <p className="biography-role">{aboutData.title}</p>

            <p className="biography-text">
              {aboutData.bio} My passion is turning ideas into experiences that
              feel simple, human, and memorable. I enjoy the full process, from
              understanding user behavior to shaping visual systems that guide
              people naturally.
            </p>

            <p className="biography-text">
              What I do every day is bridge design and code. I design
              interfaces, build responsive frontends, and iterate quickly
              through feedback so products are not only visually strong but also
              practical and high-performing.
            </p>

            <div className="biography-meta">
              <span>{aboutData.location}</span>
              <span>{aboutData.experience}</span>
            </div>
          </article>
        </div>
      </section>
    </main>
  );
}
