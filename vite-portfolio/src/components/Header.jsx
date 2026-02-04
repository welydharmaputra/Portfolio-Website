import { aboutData, socialLinks } from "../data/dummyData";

export default function Header() {
    return (
        <header className="header-section">
            <div className="header-content">
                <h1>Hello, I'm {aboutData.name}!</h1>
                <p className="header-title">{aboutData.title}</p>
                <p className="header-bio">{aboutData.shortBio}</p>
                <div className="header-cta">
                    <button className="cta-button primary">View My Work</button>
                    <button className="cta-button secondary">Contact Me</button>
                </div>
                <div className="social-links">
                    {socialLinks.map((link) => (
                        <a
                            key={link.id}
                            href={link.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            title={link.name}
                            className="social-link"
                        >
                            {link.name}
                        </a>
                    ))}
                </div>
            </div>
        </header>
    )
}