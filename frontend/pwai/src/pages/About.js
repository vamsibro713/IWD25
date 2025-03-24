import React from "react";

function About() {
  return (
    <div style={{ fontFamily: "Arial, sans-serif", padding: "40px", maxWidth: "1000px", margin: "auto", lineHeight: "1.6" }}>
      
      {/* Hero Section */}
      <div style={{ textAlign: "center", marginBottom: "40px" }}>
        <h1 style={{ fontSize: "36px", color: "orange" }}>About AI-Powered Learning Paths</h1>
        <p style={{ fontSize: "18px", color: "#555" }}>
          Unlock personalized learning with AI-driven career paths tailored to your goals.
        </p>
        <img 
          src="data:image/jpeg;base64,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" 
          alt="AI Learning Path"
          style={{ width: "50%", borderRadius: "10px", marginTop: "20px" }}
        />
      </div>

      {/* How It Works */}
      <section>
        <h2 style={{ fontSize: "28px", color: "orange" }}>How It Works</h2>
        <p>
          Our AI-powered learning platform analyzes your skills, interests, and career goals 
          to recommend the best educational paths. Here’s how it works:
        </p>
        <ul>
          <li><strong>Step 1:</strong> Enter your skills and interests.</li>
          <li><strong>Step 2:</strong> AI recommends tailored learning paths.</li>
          <li><strong>Step 3:</strong> Follow structured courses and real-world projects.</li>
          <li><strong>Step 4:</strong> Get certifications and job-ready skills.</li>
        </ul>
      </section>

      {/* Benefits */}
      <section style={{ marginTop: "40px" }}>
        <h2 style={{ fontSize: "28px", color: "orange" }}>Why Choose AI Learning Paths?</h2>
        <p>
          Our AI-driven approach provides multiple benefits for learners and professionals.
        </p>
        <ul>
          <li>🔹 Personalized learning experiences</li>
          <li>🔹 Adaptive curriculum tailored to your goals</li>
          <li>🔹 Industry-relevant skills and certifications</li>
          <li>🔹 AI-based progress tracking and suggestions</li>
          <li>🔹 Access to top-rated courses and mentors</li>
        </ul>
      </section>

      {/* Our Mission */}
      <section style={{ marginTop: "40px" }}>
        <h2 style={{ fontSize: "28px", color: "orange" }}>Our Mission</h2>
        <p>
          We aim to revolutionize education by leveraging artificial intelligence to create personalized 
          and effective learning experiences. Our goal is to bridge the gap between traditional education 
          and modern workforce demands.
        </p>
      </section>

      {/* Testimonials */}
      <section style={{ marginTop: "40px" }}>
        <h2 style={{ fontSize: "28px", color: "orange" }}>What Our Users Say</h2>
        <div style={{ backgroundColor: "black", padding: "20px", borderRadius: "10px" }}>
          <p>
            <strong>John Doe</strong> - "AI Learning Paths transformed my career! The personalized courses helped me become a full-stack developer in just six months."
          </p>
          <p>
            <strong>Sarah Lee</strong> - "The AI-based recommendations were incredibly accurate and helped me choose the right path for my data science career."
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section style={{ marginTop: "40px", textAlign: "center" }}>
        <h2 style={{ fontSize: "28px", color: "orange" }}>Get in Touch</h2>
        <p>Have questions? Reach out to us at <strong>support@ailearningpath.com</strong></p>
        <button 
          style={{ 
            backgroundColor: "pink", 
            color: "white", 
            padding: "10px 20px", 
            border: "none", 
            borderRadius: "5px", 
            cursor: "pointer", 
            marginTop: "10px" 
          }}
        >
          Contact Us
        </button>
      </section>

    </div>
  );
}

export default About;
