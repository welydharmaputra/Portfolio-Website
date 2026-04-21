import "./Biography.css";
import { aboutData } from "../data/dummyData";
import profilePhoto from "../assets/Profile.JPEG";
import hobbiesProfilePhoto from "../assets/Biography/Camera.JPEG";
import parkPhoto from "../assets/Photography/Park2.JPEG";
import flowersPhoto from "../assets/Photography/Flowers.JPEG";
import sunlightPhoto from "../assets/Photography/Sunlight1.jpeg";
import spaceNeedlePhoto from "../assets/Photography/SpaceNeedle1.JPEG";
import parkPhoto2 from "../assets/Photography/Park3.JPEG";
import parkPhoto3 from "../assets/Photography/Park4.JPEG";
import plantPhoto from "../assets/Photography/Plant1.jpeg";
import spherePhoto from "../assets/Photography/Shpere1.JPEG";
import sunlightPhoto2 from "../assets/Photography/Sunlight2.jpeg";

export default function Biography() {
  const hobbiesPhotos = [
    parkPhoto,
    flowersPhoto,
    sunlightPhoto,
    spaceNeedlePhoto,
    parkPhoto2,
    parkPhoto3,
    plantPhoto,
    spherePhoto,
    sunlightPhoto2,
  ];

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

        <section className="biography-hobbies" aria-label="Hobbies">
          <div className="biography-hobbies-bg" aria-hidden="true">
            {hobbiesPhotos.map((photo, index) => (
              <span
                key={`hobby-photo-${index}`}
                className="biography-hobbies-bg-tile"
                style={{ backgroundImage: `url(${photo})` }}
              />
            ))}
          </div>

          <div className="biography-hobbies-foreground">
            <div className="biography-hobbies-content">
              <h3 className="biography-hobbies-title">My Hobbies</h3>
              <p className="biography-text">
                Outside of design and development, I enjoy singing and playing
                drums. Music helps me stay creative and focused, and it gives me
                fresh energy that I bring back into my work.
              </p>
              <p className="biography-text">
                I also love photography, especially scenery and moments from
                daily life. You can see some of my photography here:{" "}
                <a
                  href="https://www.instagram.com/sceneryby23/"
                  target="_blank"
                  rel="noreferrer"
                  className="biography-link"
                >
                  @sceneryby23
                </a>
                .
              </p>
            </div>

            <figure className="biography-hobbies-profile-wrap">
              <img
                className="biography-hobbies-profile"
                src={hobbiesProfilePhoto}
                alt={`${aboutData.name} hobbies portrait`}
              />
            </figure>
          </div>
        </section>
      </section>
    </main>
  );
}
