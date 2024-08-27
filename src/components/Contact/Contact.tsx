import React from "react";
import {
  contactStyles,
  contactFormStyles,
  contactButtonStyles,
} from "./ContactStyles";

const Contact: React.FC = () => {
  return (
    <section style={contactStyles}>
      <h2>Contact Us</h2>
      <form style={contactFormStyles}>
        <label>Name:</label>
        <input type="text" name="name" />
        <label>Email:</label>
        <input type="email" name="email" />
        <label>Message:</label>
        <textarea name="message"></textarea>
        <button type="submit" style={contactButtonStyles}>
          Send
        </button>
      </form>
    </section>
  );
};

export default Contact;
