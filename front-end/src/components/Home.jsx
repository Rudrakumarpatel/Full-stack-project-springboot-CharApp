import React from "react";
import { Link } from "react-router-dom";
import "./Home.css"; // Import your CSS file for styling
import Navbar from "./Navbar";

function Home() {
  const handleClick = () => {
    <Link to="/chatroom" />;
  };
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500">
      <Navbar></Navbar>
      <div className="text-white text-center">
        <h1 className="text-4xl font-bold mb-4">Welcome to ChatApp!</h1>
        <p className="text-lg mb-8">
          Connect with friends and start chatting in real-time. Share your
          thoughts, photos, and more!
        </p>
        <Link to="/chatroom">
          <button
            className="bg-white text-indigo-600 font-bold py-2 px-4 rounded-full hover:bg-indigo-500 hover:text-white focus:outline-none focus:shadow-outline border-spacing-2"
            type="button"
          >
            Get Started
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Home;
