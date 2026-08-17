import React from "react";
import "./styles/Contact.css";

const Contact = () => {
  return (
    <section className="contact" id ="contact">
      <div className="contact-container">

        {/* Contact Information */}
        <div className="contact-info">

          <p className="contact-tag">GET IN TOUCH</p>

          <h2 className="section-title">
            READY TO <span>START?</span>
          </h2>

          <p className="contact-description">
            Have questions about our programs or memberships?
            Reach out to the EliteFit team and take the first step
            toward becoming your best self.
          </p>

          <div className="contact-details">

            <div className="contact-item">
              <div className="contact-icon">📍</div>
              <div>
                <h3>Visit Us</h3>
                <p>123 Jp Nagar, Bengaluru</p>
              </div>
            </div>

            <div className="contact-item">
              <div className="contact-icon">📞</div>
              <div>
                <h3>Call Us</h3>
                <p>+91 97462 6644</p>
              </div>
            </div>

            <div className="contact-item">
              <div className="contact-icon">✉</div>
              <div>
                <h3>Email Us</h3>
                <p>info@elitefit.com</p>
              </div>
            </div>

          </div>
        </div>

        {/* Contact Form */}
        <div className="contact-form-container">

          <h3>Send Us a Message</h3>

          <form className="contact-form">

            <div className="input-group">
              <label htmlFor="name">Your Name</label>
              <input
                type="text"
                id="name"
                placeholder="Enter your name"
                required
              />
            </div>

            <div className="input-group">
              <label htmlFor="email">Your Email</label>
              <input
                type="email"
                id="email"
                placeholder="Enter your email"
                required
              />
            </div>

            <div className="input-group">
              <label htmlFor="message">Your Message</label>
              <textarea
                id="message"
                placeholder="Tell us how we can help..."
                rows="5"
                required
              ></textarea>
            </div>

            <button type="submit" className="contact-btn">
              Send Message
            </button>

          </form>

        </div>

      </div>
    </section>
  );
};

export default Contact;