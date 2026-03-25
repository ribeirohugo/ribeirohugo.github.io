import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route, useNavigate, useLocation } from 'react-router-dom';
import './App.css';
import codingComputerLogo from './assets/coding-computer.svg';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import Skills from './components/Skills/Skills';
import Projects from './components/Projects/Projects';
import Contact from './components/Contact/Contact';
import AboutPage from './components/AboutPage/AboutPage';
import Portfolio from './components/Portfolio/Portfolio';
import Portfolio2 from './components/Portfolio2/Portfolio2';
import ProjectPage from './components/ProjectPage';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function AppShell() {
  const navigate = useNavigate();
  const location = useLocation();

  const handleNavClick = (e, sectionId) => {
    e.preventDefault();
    if (location.pathname !== '/') {
      navigate('/');
      setTimeout(() => {
        document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="App">
      <ScrollToTop />
      <nav className="navbar">
        <div className="nav-container">
          <a href="#home" onClick={(e) => handleNavClick(e, 'home')} className="nav-logo">
            <img src={codingComputerLogo} alt="Hugo Ribeiro home" className="nav-logo-icon" />
            <span>HR</span>
          </a>
          <ul className="nav-menu">
            <li><a href="#home" onClick={(e) => handleNavClick(e, 'home')}>Home</a></li>
            <li><a href="#about" onClick={(e) => handleNavClick(e, 'about')}>About</a></li>
            <li><a href="#skills" onClick={(e) => handleNavClick(e, 'skills')}>Skills</a></li>
            <li><a href="#projects" onClick={(e) => handleNavClick(e, 'projects')}>Projects</a></li>
            <li><a href="#portfolio" onClick={(e) => handleNavClick(e, 'portfolio')}>Portfolio</a></li>
            <li><a href="#portfolio2" onClick={(e) => handleNavClick(e, 'portfolio2')}>Portfolio 2.0</a></li>
            <li><a href="#contact" onClick={(e) => handleNavClick(e, 'contact')}>Contact</a></li>
          </ul>
        </div>
      </nav>
      <Routes>
        <Route path="/" element={
          <>
            <Hero />
            <About />
            <Skills />
            <Projects />
            <Portfolio />
            <Portfolio2 />
            <Contact />
          </>
        } />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/project/:slug" element={<ProjectPage />} />
      </Routes>
      <footer className="footer">
        <p>&copy; {new Date().getFullYear()} Hugo Ribeiro. All rights reserved.</p>
      </footer>
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <AppShell />
    </BrowserRouter>
  );
}

export default App;

