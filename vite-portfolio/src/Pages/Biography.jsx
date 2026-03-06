import "./Biography.css";
import { aboutData } from "../data/dummyData";

export default function Biography() {
  return (
    <main className="biography-page">
      <section className="biography-section">
        <h1 className="biography-title">My Biography</h1>
        <p className="biography-text">{aboutData.bio}</p>
      </section>
    </main>
  );
}
