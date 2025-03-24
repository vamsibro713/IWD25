import React, { useState } from "react";

function Feedback() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div style={{ fontFamily: "Arial, sans-serif", padding: "40px", maxWidth: "1000px", margin: "auto", lineHeight: "1.6" }}>
      
      {/* Hero Section */}
      <div style={{ textAlign: "center", marginBottom: "40px" }}>
        <h1 style={{ fontSize: "36px", color: "orange" }}>Feedback on AI Learning Paths</h1>
        <p style={{ fontSize: "18px", color: "#555" }}>
          Your feedback helps us improve AI-powered learning experiences.
        </p>
      </div>

      {/* Testimonials */}
      <section style={{ marginTop: "40px" }}>
        <h2 style={{ fontSize: "28px", color: "orange" }}>What Our Users Say</h2>
        <div style={{ backgroundColor: "black", padding: "20px", borderRadius: "10px", marginBottom: "20px" }}>
          <p>
            <strong>Emily Johnson</strong> - "AI Learning Paths gave me a clear direction for my career. I love how personalized the experience is!"
          </p>
        </div>
        <div style={{ backgroundColor: "black", padding: "20px", borderRadius: "10px", marginBottom: "20px" }}>
          <p>
            <strong>Michael Smith</strong> - "The AI recommendations were spot on! The courses and projects helped me land a new job."
          </p>
        </div>
      </section>

      {/* Feedback Form */}
      <section style={{ marginTop: "40px" }}>
        <h2 style={{ fontSize: "28px", color: "orange" }}>Share Your Experience</h2>
        <p>Tell us about your experience with AI-powered learning paths.</p>

        {submitted ? (
          <div style={{ backgroundColor: "#d4edda", padding: "20px", borderRadius: "10px", color: "#155724" }}>
            <h3>Thank You for Your Feedback, {name}!</h3>
            <p>We appreciate your time and will use your insights to improve our platform.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} style={{ marginTop: "20px" }}>
            <div style={{ marginBottom: "15px" }}>
              <label style={{ display: "block", fontWeight: "bold" }}>Name</label>
              <input 
                type="text" 
                value={name} 
                onChange={(e) => setName(e.target.value)}
                required
                style={{ width: "100%", padding: "10px", borderRadius: "5px", border: "1px solid #ccc" }}
              />
            </div>

            <div style={{ marginBottom: "15px" }}>
              <label style={{ display: "block", fontWeight: "bold" }}>Email</label>
              <input 
                type="email" 
                value={email} 
                onChange={(e) => setEmail(e.target.value)}
                required
                style={{ width: "100%", padding: "10px", borderRadius: "5px", border: "1px solid #ccc" }}
              />
            </div>

            <div style={{ marginBottom: "15px" }}>
              <label style={{ display: "block", fontWeight: "bold" }}>Message</label>
              <textarea 
                value={message} 
                onChange={(e) => setMessage(e.target.value)}
                required
                rows="5"
                style={{ width: "100%", padding: "10px", borderRadius: "5px", border: "1px solid #ccc" }}
              />
            </div>

            <button 
              type="submit"
              style={{
                backgroundColor: "#4CAF50",
                color: "white",
                padding: "10px 20px",
                border: "none",
                borderRadius: "5px",
                cursor: "pointer"
              }}
            >
              Submit Feedback
            </button>
          </form>
        )}
      </section>

      {/* Contact Section */}
      <section style={{ marginTop: "40px", textAlign: "center" }}>
        <h2 style={{ fontSize: "28px", color: "orange" }}>Need Help?</h2>
        <p>Have questions or concerns? Contact us at <strong>support@ailearningpath.com</strong></p>
        <button 
          style={{ 
            backgroundColor: "pink", 
            color: "black", 
            padding: "10px 20px", 
            border: "none", 
            borderRadius: "5px", 
            cursor: "pointer", 
            marginTop: "10px" 
          }}
        >
          Contact Support
        </button>
      </section>

    </div>
  );
}

export default Feedback;
