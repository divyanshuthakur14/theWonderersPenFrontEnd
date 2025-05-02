import React, { useState } from "react";
import "../css/contact.css";
import Navbar from "../partials/NavBar";
import Footer from "../partials/Footer";

const Contact = () => {
  
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const contactData = {
      name,
      email,
      message,
    };

    try {
      const response = await fetch("https://thewondererspenbackend.onrender.com/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(contactData),
      });

      if (response.ok) {
        alert("Message sent successfully!");
        setName(""); // Reset the form
        setEmail("");
        setMessage("");
      } else {
        alert("Failed to send message");
      }
    } catch (err) {
      console.error("Error sending message:", err);
      alert("An error occurred while sending your message.");
    }
  };

  return (
    <div>
      <Navbar />
      <div className="body">
        <section>
          <div className="section-header">
            <div className="container-cont">
              <h2>Contact Us</h2>
              <p>
                Get in touch with us for any inquiries or collaboration
                opportunities. We're here to answer your questions and provide
                assistance.
              </p>
            </div>
          </div>

          <div className="container">
            <div className="row">
              <div className="contact-info">
                <div className="contact-info-item">
                  <div className="contact-info-icon">
                    <i className="fas fa-home"></i>
                  </div>

                  <div className="contact-info-content">
                    <h4>Address</h4>
                    <p>
                      Jahangirabad
                      <br /> Bhopal<br />
                      462008
                    </p>
                  </div>
                </div>

                <div className="contact-info-item">
                  <div className="contact-info-icon">
                    <i className="fas fa-phone"></i>
                  </div>

                  <div className="contact-info-content">
                    <h4>Phone</h4>
                    <p>0755-2985407</p>
                  </div>
                </div>

                <div className="contact-info-item">
                  <div className="contact-info-icon">
                    <i className="fas fa-envelope"></i>
                  </div>

                  <div className="contact-info-content">
                    <h4>Email</h4>
                    <p>singhthakurdivyanshu@gmail.com</p>
                  </div>
                </div>
              </div>

              <div className="contact-form">
                <form onSubmit={handleSubmit} id="contact-form">
                  <h2>Send Message</h2>
                  <div className="input-box">
                    <input
                      type="text"
                      placeholder="Full Name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      required
                    />
                  </div>

                  <div className="input-box">
                    <input
                      type="email"
                      placeholder="Email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                  </div>

                  <div className="input-box">
                    <textarea
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      required
                    ></textarea>
                    <span>Type your Message...</span>
                  </div>

                  <div className="input-box">
                    <input type="submit" value="Send" />
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default Contact;
