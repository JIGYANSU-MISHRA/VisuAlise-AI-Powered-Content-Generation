import React from 'react';
import './contact.css';

const Contact = () => {
  return (
    <div className="contacts">
      <section className="contact" id="contact_us"> {/* ID here */}
        <h2>Contact Us</h2>
        <form className="contact-form">
          <div className="form-group">
            <label htmlFor="name">Full Name</label>
            <input type="text" id="name" placeholder="Your Name" required />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" placeholder="Your Email" required />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea id="message" placeholder="Your Message" required></textarea>
          </div>
          <button type="submit" className="contact-button">Send Message</button>
        </form>
      </section>
    </div>
  );
};

export default Contact;
