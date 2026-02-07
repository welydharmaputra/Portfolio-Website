import "./Footer.css";
import { aboutData, contactData, socialLinks } from "../data/dummyData";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer-section">
      <div className="footer-content">
        <div className="footer-column">
          <h3>Contact</h3>
            <div className="footer-contact">
              <p>
                Email:{" "}
                <a href={`mailto:${contactData.email}`}>{contactData.email}</a>
              </p>
              <p>
                Phone: <a href={`tel:${contactData.phone}`}>{contactData.phone}</a>
              </p>
              <p>Location: {contactData.address}</p>
          </div>
        </div>

        <div className="footer-column">
          <h3>Media Social</h3>
          <div className="footer-social">
            {socialLinks.map((link) => (
              <a
                key={link.id}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                title={link.name}
                className="social-link-item"
              >
                <img
                  src={link.logo}
                  alt={link.name}
                  className="social-logo"
                />
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>
          &copy; {currentYear} {aboutData.name}. All Rights Reserved
        </p>
      </div>
    </footer>
  );
}
