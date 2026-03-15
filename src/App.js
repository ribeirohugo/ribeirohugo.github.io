import React from 'react';
import './App.css';
import codingComputerLogo from './assets/coding-computer.svg';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  return (
    <div className="App">
      <nav className="navbar">
        <div className="nav-container">
          <a href="#home" className="nav-logo">
            <img src={codingComputerLogo} alt="Hugo Ribeiro home" className="nav-logo-icon" />
            <span>HR</span>
          </a>
          <ul className="nav-menu">
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#skills">Skills</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>
      </nav>
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <footer className="footer">
        <p>&copy; 2025 Hugo Ribeiro. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
