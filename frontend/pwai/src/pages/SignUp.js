import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "../styles.css"; // Import CSS file

function Signup({ setIsAuthenticated }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:5000/signup", {
        name,
        email,
        password,
      });

      if (res.data.success) {
        localStorage.setItem("isAuthenticated", "true");
        setIsAuthenticated(true);
        navigate("/profile");
      } else {
        alert(res.data.message);
      }
    } catch (error) {
      alert("Signup failed. Try again.");
    }
  };

  return (
    <div className="auth-container">
      <h1>Create an Account</h1>

      <form onSubmit={handleSignup}>
        <p>User Name:</p>
        <br />
        <input type="text" placeholder="Full Name" required value={name} onChange={(e) => setName(e.target.value)} style={{ color: 'black' }} />
        <p>User Email:</p>
        <br />
        <input type="email" placeholder="Email" required value={email} onChange={(e) => setEmail(e.target.value)} />
        <p>Password:</p>
        <br />
        <input type="password" placeholder="Password" required value={password} onChange={(e) => setPassword(e.target.value)} />
        <br />
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
}

export default Signup;
