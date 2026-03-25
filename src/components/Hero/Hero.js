import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <section id="home" className="hero">
      <div className="hero-content">
        <h1 className="hero-title">Hi, I'm Hugo Ribeiro</h1>
        <p className="hero-subtitle">Software Developer & Backend Engineer</p>
        <p className="hero-description">
          Passionate about building robust backend systems and scalable applications
        </p>
        <div className="hero-buttons">
          <a href="#projects" className="btn btn-primary">View My Work</a>
          <a href="#contact" className="btn btn-secondary">Contact Me</a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
