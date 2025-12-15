// import React, { useState } from "react";
// import { useTranslation } from "react-i18next";
// import contactImg from "../assets/products/NIPA.jpg";

// export default function Contact() {
//   const { t } = useTranslation();

//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     message: "",
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({ ...prev, [name]: value }));
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     alert(t("contact.thankYou", { name: formData.name }));
//     setFormData({ name: "", email: "", message: "" });
//   };

//   return (
//     <section
//       style={{
//         padding: "60px 5%",
//         backgroundColor: "#f7f9f8",
//       }}
//     >
//       <h2
//         style={{
//           color: "#127a3a",
//           marginBottom: "40px",
//           textAlign: "center",
//           fontSize: "2rem",
//           fontWeight: "bold",
//         }}
//       >
//         {t("contact.title")}
//       </h2>

//       <div
//         style={{
//           display: "flex",
//           flexWrap: "wrap",
//           alignItems: "center",
//           justifyContent: "center",
//           gap: "40px",
//         }}
//       >
//         <div
//           style={{
//             flex: "1 1 400px",
//             textAlign: "center",
//           }}
//         >
//           <img
//             src={contactImg}
//             alt="Contact Us"
//             style={{
//               width: "100%",
//               maxWidth: "500px",
//               borderRadius: "12px",
//               boxShadow: "0 4px 15px rgba(0,0,0,0.1)",
//             }}
//           />
//         </div>

//         <div
//           style={{
//             flex: "1 1 400px",
//             background: "white",
//             padding: "30px",
//             borderRadius: "12px",
//             boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
//           }}
//         >
//           <h2
//             style={{
//               color: "#127a3a",
//               marginBottom: "20px",
//               textAlign: "center",
//             }}
//           >
//             {t("contact.sendMessage")}
//           </h2>

//           <form
//             onSubmit={handleSubmit}
//             style={{
//               display: "flex",
//               flexDirection: "column",
//               gap: "15px",
//             }}
//           >
//             <input
//               type="text"
//               name="name"
//               placeholder={t("contact.name")}
//               value={formData.name}
//               onChange={handleChange}
//               required
//             />

//             <input
//               type="email"
//               name="email"
//               placeholder={t("contact.email")}
//               value={formData.email}
//               onChange={handleChange}
//               required
//             />

//             <textarea
//               name="message"
//               placeholder={t("contact.message")}
//               rows="5"
//               value={formData.message}
//               onChange={handleChange}
//               required
//             />

//             <button type="submit">
//               {t("contact.send")}
//             </button>
//           </form>
//         </div>
//       </div>

//       <div
//         style={{
//           marginTop: "60px",
//           textAlign: "center",
//         }}
//       >
//         <h3
//           style={{
//             color: "#127a3a",
//             marginBottom: "20px",
//             fontSize: "1.5rem",
//           }}
//         >
//           {t("contact.location")}
//         </h3>

//         <iframe
//           title="office-map"
//           src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d26884.02493846678!2d74.24503060741358!3d31.384411034262236!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391907eecc85c783%3A0xaa4ebaade9463825!2sSooraj%20Crop%20Sciences!5e1!3m2!1sen!2s!4v1762350948029!5m2!1sen!2s"
//           width="100%"
//           height="500"
//           style={{
//             border: 0,
//             borderRadius: "12px",
//             boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
//           }}
//           allowFullScreen=""
//           loading="lazy"
//         ></iframe>
//       </div>
//     </section>
//   );
// }
import React, { useState } from "react";
import { FaEnvelope, FaWhatsapp, FaPhone, FaMapMarkerAlt, FaClock } from "react-icons/fa";

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
        padding: "80px 5%",
        backgroundColor: "#f4f6f8",
        minHeight: "100vh",
      }}
    >
      <h2
        style={{
          color: "#0d6a32",
          textAlign: "center",
          fontSize: "2.2rem",
          fontWeight: "700",
          marginBottom: "50px",
        }}
      >
        Contact Us
      </h2>

      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: "40px",
        }}
      >
        {/* ---------------- Left: Form ---------------- */}
        <div
          style={{
            flex: "1 1 450px",
            background: "#ffffff",
            padding: "40px",
            borderRadius: "12px",
            boxShadow: "0 6px 20px rgba(0,0,0,0.08)",
          }}
        >
          <h3
            style={{
              color: "#0d6a32",
              marginBottom: "25px",
              fontSize: "2rem",
              fontWeight: "bold",
              textAlign: "center",
            }}
          >
            Send Us a Message
          </h3>

          <form
            onSubmit={handleSubmit}
            style={{ display: "flex", flexDirection: "column", gap: "15px" }}
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
              rows="6"
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
                backgroundColor: "#2F59E6",
                color: "white",
                border: "none",
                padding: "12px",
                borderRadius: "6px",
                fontWeight: "bold",
                cursor: "pointer",
                transition: "0.3s ease",
              }}
              onMouseOver={(e) => (e.target.style.backgroundColor = "#1f3ea0")}
              onMouseOut={(e) => (e.target.style.backgroundColor = "#2F59E6")}
            >
              Send Message
            </button>
          </form>
        </div>

        {/* ---------------- Right: Contact Info Container ---------------- */}
        <div
          style={{
            flex: "1 1 350px",
            backgroundColor: "#ffffff",
            borderRadius: "12px",
            boxShadow: "0 6px 20px rgba(0,0,0,0.08)",
            display: "flex",
            flexDirection: "column",
            overflow: "hidden",
          }}
        >
          {/* Header */}
          <div
            style={{
              backgroundColor: "#00A651",
              padding: "20px",
              color: "white",
              fontWeight: "700",
              fontSize: "1.4rem",
              textAlign: "center",
            }}
          >
            Contact Information
          </div>

          {/* Info Items */}
          <div style={{ padding: "25px", display: "flex", flexDirection: "column", gap: "20px" }}>
            {/* Email */}
            <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
              <FaEnvelope size={20} color="#00A651" />
              <div>
                <strong>Email</strong>
                <br />
                <a
                  href="mailto:SoorajCropScience@gmail.com"
                  style={{ color: "#2F59E6", textDecoration: "underline" }}
                >
                  SoorajCropScience@gmail.com
                </a>
              </div>
            </div>

            {/* WhatsApp */}
            <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
              <FaWhatsapp size={20} color="#00A651" />
              <div>
                <strong>WhatsApp</strong>
                <br />
                <a
                  href="https://wa.me/04235111003"
                  target="_blank"
                  rel="noreferrer"
                  style={{ color: "#2F59E6", textDecoration: "underline" }}
                >
                  Chat Now
                </a>
              </div>
            </div>

            {/* Phone */}
            <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
              <FaPhone size={20} color="#00A651" />
              <div>
                <strong>Phone</strong>
                <br />
                <a href="tel:04235111003" style={{ color: "#2F59E6", textDecoration: "underline" }}>
                 04235111003
                </a>
              </div>
            </div>

            {/* Location */}
            <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
              <FaMapMarkerAlt size={20} color="#00A651" />
              <div>
                <strong>Office Location</strong>
                <br />
                  Apartment 01 Floor 02 Almeezan Arcade 24-CCA, Khayaban-e-Ameen, Lahore 54770
              </div>
            </div>

            {/* Working Hours */}
            <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
              <FaClock size={20} color="#00A651" />
              <div>
                <strong>Working Hours</strong>
                <br />
                Mon - Sat: 9:00 AM - 6:00 PM
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ---------------- Map Section ---------------- */}
      <div
        style={{
          marginTop: "60px",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <iframe
          title="office-map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d26884.02493846678!2d74.24503060741358!3d31.384411034262236!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391907eecc85c783%3A0xaa4ebaade9463825!2sSooraj%20Crop%20Sciences!5e1!3m2!1sen!2s!4v1762350948029!5m2!1sen!2s"
          width="1250"
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
  