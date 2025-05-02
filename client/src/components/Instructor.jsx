import React from "react";
import "../styles/Instructor.css";
import instructorImage from "../assets/profile.jpg";

const Instructor = () => {
  return (
    <div className="instructor-page">
      <div className="instructor-card">
        <div className="instructor-image">
          <img src={instructorImage} alt="Instructor" />
        </div>
        <div className="instructor-info">
          <h1>Roshan Singh</h1>
        
          <p>
            Hello! I'm Roshan, a passionate MERN stack developer
            with a love for building scalable, robust applications.
            With years of experience in JavaScript, React, Node.js, Express, and
            MongoDB.
          </p>
          <div className="social-links">
            <a
              href="https://github.com/roshan9641"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/feed/"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
        
          </div>
        </div>
      </div>
    </div>
  );
};

export default Instructor;
