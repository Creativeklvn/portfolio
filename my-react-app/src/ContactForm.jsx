import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import "./ContactForm.css";

const ContactForm = () => {
  const form = useRef();
  const [status, setStatus] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();
    setStatus("Sending...");

    emailjs
      .sendForm(
        "service_z5ttizc",   // 🔹 Replace with your EmailJS Service ID
        "template_lzqaihv",  // 🔹 Replace with your EmailJS Template ID
        form.current,
        "7kHmBGrN0QtvcrqN3"    // 🔹 Replace with your EmailJS Public Key
      )
      .then(
        () => {
          setStatus("Message sent successfully!");
          form.current.reset();
        },
        (error) => {
          console.error(error);
          setStatus("❌ Failed to send. Please try again.");
        }
      );
  };

  return (
    <div className="contact-container" >
      
      <form ref={form} id="contact-form" onSubmit={sendEmail}>
        <input
          type="text"
          id="name"
          name="from_name"
          placeholder="Your Name"
          required
        />
        <input
          type="email"
          id="email"
          name="from_email"
          placeholder="Your Email"
          required
        />
        <textarea
          id="message"
          name="message"
          rows="5"
          placeholder="Your Message"
          required
        ></textarea>
        <button type="submit">Send</button>
      </form>
      <p id="status">{status}</p>
    </div>
  );
};

export default ContactForm;
