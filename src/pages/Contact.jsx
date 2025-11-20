import React, { useState } from "react";
import contactImg from "../assets/products/NIPA.jpg";

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
    <section
      style={{
        padding: "60px 5%",
        backgroundColor: "#f7f9f8",
      }}
    >
      <h2
        style={{
          color: "#127a3a",
          marginBottom: "40px",
          textAlign: "center",
          fontSize: "2rem",
          fontWeight: "bold",
        }}
      >
        Contact Us
      </h2>

      {/* --- Main Content --- */}
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          alignItems: "center",
          justifyContent: "center",
          gap: "40px",
        }}
      >
        {/* Left: Image Section */}
        <div
          style={{
            flex: "1 1 400px",
            textAlign: "center",
          }}
        >
          <img
            src={contactImg}
            alt="Contact Us"
            style={{
              width: "100%",
              maxWidth: "500px",
              borderRadius: "12px",
              boxShadow: "0 4px 15px rgba(0,0,0,0.1)",
            }}
          />
        </div>

        {/* Right: Form Section */}
        <div
          style={{
            flex: "1 1 400px",
            background: "white",
            padding: "30px",
            borderRadius: "12px",
            boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
          }}
        >
          <h3
            style={{
              color: "#127a3a",
              marginBottom: "20px",
              textAlign: "center",
            }}
          >
            Send Us a Message
          </h3>

          <form
            onSubmit={handleSubmit}
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "15px",
            }}
          >
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
              style={{
                padding: "12px",
                borderRadius: "6px",
                border: "1px solid #ccc",
                outline: "none",
              }}
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              required
              style={{
                padding: "12px",
                borderRadius: "6px",
                border: "1px solid #ccc",
                outline: "none",
              }}
            />
            <textarea
              name="message"
              placeholder="Your Message"
              rows="5"
              value={formData.message}
              onChange={handleChange}
              required
              style={{
                padding: "12px",
                borderRadius: "6px",
                border: "1px solid #ccc",
                resize: "none",
                outline: "none",
              }}
            />
            <button
              type="submit"
              style={{
                backgroundColor: "#127a3a",
                color: "white",
                border: "none",
                padding: "12px",
                borderRadius: "6px",
                fontWeight: "bold",
                cursor: "pointer",
                transition: "0.3s ease",
              }}
              onMouseOver={(e) => (e.target.style.backgroundColor = "#0e5f2f")}
              onMouseOut={(e) => (e.target.style.backgroundColor = "#127a3a")}
            >
              Send Message
            </button>
          </form>
        </div>
      </div>

      {/* --- Map Section --- */}
      <div
        style={{
          marginTop: "60px",
          textAlign: "center",
        }}
      >
        <h3
          style={{
            color: "#127a3a",
            marginBottom: "20px",
            fontSize: "1.5rem",
          }}
        >
          Our Office Location
        </h3>
        <iframe
          title="office-map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d26884.02493846678!2d74.24503060741358!3d31.384411034262236!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391907eecc85c783%3A0xaa4ebaade9463825!2sSooraj%20Crop%20Sciences!5e1!3m2!1sen!2s!4v1762350948029!5m2!1sen!2s"
          width="100%"
          height="350"
          style={{
            border: 0,
            borderRadius: "12px",
            boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
          }}
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </div>
    </section>
  );
}
