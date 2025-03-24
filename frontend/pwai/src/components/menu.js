import React from "react";
import { Link, useNavigate } from "react-router-dom";

function Menu({ isAuthenticated, setIsAuthenticated }) {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("isAuthenticated");
    setIsAuthenticated(false);
    navigate("/login");
  };

  return (
    <div style={{ padding: "10px", backgroundColor: "#333", color: "white", display: "flex", justifyContent: "space-between" }}>
      <div>
        <Link to="/" style={{ color: "white", margin: "10px" }}><button>Home</button></Link>
        {!isAuthenticated && <Link to="/login" style={{ color: "white", margin: "10px" }}><button>Login</button></Link>}
        {!isAuthenticated && <Link to="/signup" style={{ color: "white", margin: "10px" }}><button>Signup</button></Link>}
        {isAuthenticated && <Link to="/profile" style={{ color: "white", margin: "10px" }}><button>Profile</button></Link>}
        {isAuthenticated && <Link to="/paths" style={{ color: "white", margin: "10px" }}><button>Paths</button></Link>}
        {isAuthenticated && <Link to="/about" style={{ color: "white", margin: "10px" }}><button>About</button></Link>}
        {isAuthenticated && <Link to="/feedback" style={{ color: "white", margin: "10px" }}><button>Feedback</button></Link>}
        {isAuthenticated && <Link to="/tasks" style={{ color: "white", margin: "10px" }}><button>Tasks</button></Link>}
      </div>
      {isAuthenticated && <button onClick={handleLogout} style={{ backgroundColor: "red", border: "none", color: "white", padding: "5px 10px" }}>Logout</button>}
    </div>
  );
}

export default Menu;
