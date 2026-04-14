import "./ContactSection.css";
import { useState } from "react";

export default function ContactSection() {
  const [status, setStatus] = useState({ type: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);

  async function handleSubmit(event) {
    event.preventDefault();

    const form = event.currentTarget;
    const formData = new FormData(form);

    setIsSubmitting(true);
    setStatus({ type: "", message: "" });

    try {
      const response = await fetch(
        "https://formsubmit.co/ajax/welydharmaputra93@gmail.com",
        {
          method: "POST",
          headers: {
            Accept: "application/json",
          },
          body: formData,
        },
      );

      if (!response.ok) {
        throw new Error("Failed to send message");
      }

      setStatus({
        type: "success",
        message: "Message sent successfully. I will get back to you soon.",
      });
      form.reset();
    } catch {
      setStatus({
        type: "error",
        message: "Could not send your message. Please try again.",
      });
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <section className="contact-section" id="contact">
      <div className="contact-container">
        <h2 className="contact-title">Contact</h2>
        <form className="contact-form" onSubmit={handleSubmit}>
          <input
            type="hidden"
            name="_subject"
            value="New portfolio contact form message"
          />
          <input type="hidden" name="_captcha" value="false" />
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

          <button
            className="contact-submit"
            type="submit"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Sending..." : "Submit"}
          </button>
          {status.message ? (
            <p
              className={`contact-status contact-status-${status.type}`}
              role="status"
              aria-live="polite"
            >
              {status.message}
            </p>
          ) : null}
        </form>
      </div>
    </section>
  );
}
