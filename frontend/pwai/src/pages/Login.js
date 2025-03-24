import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "../styles.css"; // Import CSS file

function Login({ setIsAuthenticated }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:5000/login", {
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
      alert("Login failed. Try again.");
    }
  };

  return (
    <div className="auth-container">
      <h1>Login to AI Learning Path</h1>

      <form onSubmit={handleLogin}>
        <p>User Email</p>
        <br />
        <input type="email" placeholder="Email" required value={email} onChange={(e) => setEmail(e.target.value)} />
        <p>Password</p>
        <br />
        <input type="password" placeholder="Password" required value={password} onChange={(e) => setPassword(e.target.value)} />
        <br />
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default Login;
