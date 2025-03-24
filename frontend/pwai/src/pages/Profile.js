import React, { useState } from "react";

function Profile() {
  const [user, setUser] = useState({
    name: "John Doe",
    email: "johndoe@example.com",
    profilePic: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6Dof4-oTftFsYYW9rOGiqpSPlcKao4l7wqso1yszdGHJ8mncOyOaBoxc-j9wjfZeI-Oo&usqp=CAU",
    selectedLanguage: "JavaScript",
    selectedSkill: "Frontend Development",
    learningPath: [
      "HTML & CSS Basics",
      "JavaScript Fundamentals",
      "React.js & UI Libraries",
      "Advanced Frontend Development",
      "Project Building & Deployment",
    ],
  });

  const handleEditProfile = () => {
    alert("Edit Profile feature coming soon!");
  };

  return (
    <div style={{ padding: "40px", fontFamily: "Arial, sans-serif" }}>
      <h1 style={{ textAlign: "center", color: "orange" }}>My Profile</h1>
      <p style={{ textAlign: "center", color: "#555" }}>
        View and manage your AI-powered learning journey.
      </p>

      <div style={{ textAlign: "center", marginTop: "20px" }}>
        <img
          src={user.profilePic}
          alt="Profile"
          style={{ width: "150px", height: "150px", borderRadius: "50%" }}
        />
        <h2 style={{ marginTop: "10px", color: "#333" }}>{user.name}</h2>
        <p style={{ color: "#777" }}>{user.email}</p>
        <button
          onClick={handleEditProfile}
          style={{
            padding: "8px 16px",
            backgroundColor: "#3498db",
            color: "white",
            border: "none",
            fontSize: "14px",
            cursor: "pointer",
            borderRadius: "5px",
          }}
        >
          Edit Profile
        </button>
      </div>

      <div style={{ marginTop: "40px", textAlign: "center" }}>
        <h2 style={{ color: "#2980b9" }}>Your Learning Preferences</h2>
        <p>
          <strong>Programming Language:</strong> {user.selectedLanguage}
        </p>
        <p>
          <strong>Skill Focus:</strong> {user.selectedSkill}
        </p>
      </div>

      <div style={{ marginTop: "40px", textAlign: "center" }}>
        <h2 style={{ color: "#27ae60" }}>Your AI-Generated Learning Path</h2>
        <ul style={{ listStyle: "none", padding: 0 }}>
          {user.learningPath.map((step, index) => (
            <li
              key={index}
              style={{
                fontSize: "18px",
                marginTop: "10px",
                padding: "10px",
                backgroundColor: "black",
                display: "inline-block",
                borderRadius: "5px",
              }}
            >
              {step}
            </li>
          ))}
        </ul>
      </div>

      <div style={{ textAlign: "center", marginTop: "40px" }}>
        <img
          src="https://res.cloudinary.com/people-matters/image/upload/fl_immutable_cache,w_624,h_351,w_624,h_351,c_scale,q_auto,f_auto/v1478764653/1478764650.jpg"
          width={"600px"}
          height={"300px"}
          alt="Learning Path"
          style={{  borderRadius: "10px" }}
        />
      </div>

      <div style={{ textAlign: "center", marginTop: "40px" }}>
        <button
          style={{
            padding: "10px 20px",
            backgroundColor: "#e67e22",
            color: "white",
            border: "none",
            fontSize: "16px",
            cursor: "pointer",
            borderRadius: "5px",
          }}
        >
          Start Learning Now
        </button>
      </div>
    </div>
  );
}

export default Profile;