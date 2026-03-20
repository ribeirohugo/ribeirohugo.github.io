import React from 'react';
import { Link } from 'react-router-dom';
import { SOCIAL } from '../constants';
import './AboutPage.css';

const AboutPage = () => {
  return (
    <div className="about-page">

      <div className="about-page-hero">
        <h1>About Me</h1>
        <p>Software Developer & Backend Engineer passionate about building scalable, clean solutions.</p>
      </div>

      <div className="about-page-content">
        <Link to="/" className="about-page-back-btn">← Back to Home</Link>

        <div className="about-page-section">
          <h2>Who I Am</h2>
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
        </div>

        <div className="about-page-section">
          <h2>What I Do</h2>
          <p>
            I specialize in backend engineering, designing and implementing robust APIs, microservices,
            and distributed systems. I enjoy tackling complex architectural challenges and turning them
            into simple, reliable solutions.
          </p>
          <p>
            When I'm not coding, I enjoy contributing to open-source projects, learning about system
            design patterns, and staying updated with the latest trends in software engineering.
          </p>
        </div>

        <div className="about-page-section">
          <h2>My Values</h2>
          <p>
            Quality over quantity. I care deeply about code craftsmanship — readable, well-tested, and
            well-documented code that teams can maintain and build upon for years to come.
          </p>
        </div>

        <div className="about-page-section">
          <h2>Technologies I Work With</h2>
          <ul>
            <li>Go</li>
            <li>Java</li>
            <li>Python</li>
            <li>Node.js</li>
            <li>React</li>
            <li>Docker</li>
            <li>Kubernetes</li>
            <li>PostgreSQL</li>
            <li>MongoDB</li>
            <li>Redis</li>
            <li>gRPC</li>
            <li>REST APIs</li>
          </ul>
        </div>

        <div className="about-page-section">
          <h2>Open Source</h2>
          <p>
            I'm an active open-source contributor and believer in the power of community-driven software.
            You can find my projects and contributions on{' '}
            <a href={SOCIAL.github} target="_blank" rel="noopener noreferrer">GitHub</a>.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;

