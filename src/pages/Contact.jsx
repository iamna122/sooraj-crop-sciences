// src/pages/Contact.jsx
import React, { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Thank you, ${formData.name}! Your message has been sent.`);
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section style={{ padding: "60px 0", width: "80%", margin: "0 auto" }}>
      <h2 style={{ color: "#127a3a", marginBottom: 20 }}>Contact Us</h2>
      <p style={{ color: "#444" }}>
        Get in touch with Sooraj Crop Sciences. We’d love to hear from you!
      </p>

      <form
        onSubmit={handleSubmit}
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "12px",
          maxWidth: "400px",
          marginTop: "20px",
        }}
      >
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          required
          style={{ padding: "10px", borderRadius: "5px", border: "1px solid #ccc" }}
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          required
          style={{ padding: "10px", borderRadius: "5px", border: "1px solid #ccc" }}
        />
        <textarea
          name="message"
          placeholder="Your Message"
          rows="5"
          value={formData.message}
          onChange={handleChange}
          required
          style={{ padding: "10px", borderRadius: "5px", border: "1px solid #ccc" }}
        />
        <button
          type="submit"
          style={{
            backgroundColor: "#127a3a",
            color: "white",
            border: "none",
            padding: "10px 0",
            borderRadius: "5px",
            cursor: "pointer",
          }}
        >
          Send Message
        </button>
      </form>

      <div style={{ marginTop: "40px" }}>
        <h3 style={{ color: "#127a3a" }}>Our Office Location</h3>
        <iframe
          title="office-map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d26884.02493846678!2d74.24503060741358!3d31.384411034262236!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391907eecc85c783%3A0xaa4ebaade9463825!2sSooraj%20Crop%20Sciences!5e1!3m2!1sen!2s!4v1762350948029!5m2!1sen!2s"
          width="100%"
          height="350"
          style={{ border: 0, borderRadius: "10px", marginTop: "10px" }}
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </div>
    </section>
  );
}
