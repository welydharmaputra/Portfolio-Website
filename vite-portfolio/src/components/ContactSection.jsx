import "./ContactSection.css";

export default function ContactSection() {
  return (
    <section className="contact-section" id="contact">
      <div className="contact-container">
        <h2 className="contact-title">Contact</h2>
        <form className="contact-form">
          <div className="contact-field">
            <label className="contact-label" htmlFor="contact-name">
              Name*
            </label>
            <input
              id="contact-name"
              className="contact-input"
              type="text"
              name="name"
              placeholder="Your name"
              required
            />
          </div>

          <div className="contact-field">
            <label className="contact-label" htmlFor="contact-email">
              Your email*
            </label>
            <input
              id="contact-email"
              className="contact-input"
              type="email"
              name="email"
              placeholder="Your email address"
              required
            />
          </div>

          <div className="contact-field">
            <label className="contact-label" htmlFor="contact-message">
              Message*
            </label>
            <textarea
              id="contact-message"
              className="contact-textarea"
              name="message"
              placeholder="Enter your message"
              rows={5}
              required
            />
          </div>

          <button className="contact-submit" type="submit">
            Submit
          </button>
        </form>
      </div>
    </section>
  );
}
