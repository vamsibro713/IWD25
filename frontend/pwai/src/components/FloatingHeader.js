// FileName: MultipleFiles/FloatingHeader.js
import { Link } from "react-router-dom";
import React from "react";

function FloatingHeader() {
  return (
    <nav className="fixed top-0 left-0 right-0 bg-gray-900 text-white p-4 shadow-lg flex justify-between items-center">
      <h1 className="text-xl font-bold">Career Path Generator</h1>
      <div className="space-x-4">
        <Link to="/Home">
          <button className="bg-green-500 px-4 py-2 rounded-lg text-black">Home</button>
        </Link>
        <Link to="/about">
          <button className="bg-green-500 px-4 py-2 rounded-lg text-black">About</button>
        </Link>
        <Link to="/paths">
          <button className="bg-green-500 px-4 py-2 rounded-lg text-black">Paths</button>
        </Link>
        <Link to="/feedback">
          <button className="bg-green-500 px-4 py-2 rounded-lg text-black">Feedback</button>
        </Link>
        <Link to="/profile">
          <button className="bg-green-500 px-4 py-2 rounded-lg text-black">Profile</button>
        </Link>
        <Link to="/login">
          <button className="bg-green-500 px-4 py-2 rounded-lg text-black">Login</button>
        </Link>
        <Link to="/signup">
          <button className="bg-blue-500 px-4 py-2 rounded-lg text-white">Sign Up</button>
        </Link>
      </div>
    </nav>
  );
}

export default FloatingHeader;  