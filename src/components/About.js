import React from 'react';
import './About.css';

const About = () => {
  return (
    <section id="about" className="about">
      <div className="container">
        <h2 className="section-title">About Me</h2>
        <div className="about-content">
          <div className="about-text">
            <p>
              I'm a software developer with a strong focus on backend development and system architecture.
              My journey in software development has led me to work extensively with modern technologies
              and best practices.
            </p>
            <p>
              I believe in writing clean, maintainable code and building scalable solutions that solve
              real-world problems. I'm constantly learning and exploring new technologies to stay at the
              forefront of software development.
            </p>
            <p>
              When I'm not coding, I enjoy contributing to open-source projects, learning about system
              design patterns, and staying updated with the latest trends in software engineering.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
