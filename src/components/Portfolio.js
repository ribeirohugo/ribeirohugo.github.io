import React, { useState, useEffect, useCallback } from 'react';
import './Portfolio.css';

const portfolioItems = [
  {
    title: 'Personal Portfolio Website',
    category: 'Web Development',
    description:
      'This very website — a modern, responsive personal portfolio built with React. Features smooth scrolling, dynamic routing, and a clean design that showcases my work and skills.',
    tags: ['React', 'JavaScript', 'CSS3', 'HTML5'],
    link: 'https://github.com/ribeirohugo/ribeirohugo',
    image: null,
    icon: '🌐',
  },
  {
    title: 'Go REST API',
    category: 'Backend',
    description:
      'A production-ready REST API boilerplate in Go using onion architecture. Includes repository pattern, service layer, dependency injection, and full CRUD support.',
    tags: ['Go', 'REST', 'Onion Architecture', 'CRUD'],
    link: 'https://github.com/ribeirohugo/go_rest_api',
    image: null,
    icon: '⚙️',
  },
  {
    title: 'Go Middlewares',
    category: 'Backend',
    description:
      'A reusable collection of HTTP middlewares for Go applications covering authentication (JWT), CORS handling, and structured request logging.',
    tags: ['Go', 'JWT', 'CORS', 'Middleware'],
    link: 'https://github.com/ribeirohugo/go_middlewares',
    image: null,
    icon: '🔒',
  },
  {
    title: 'Go Config',
    category: 'DevTools',
    description:
      'A flexible configuration loader for Go that supports JSON, YAML, XML, TOML, and environment variables — making app configuration simple and portable.',
    tags: ['Go', 'JSON', 'YAML', 'TOML', 'Config'],
    link: 'https://github.com/ribeirohugo/go_config',
    image: null,
    icon: '🛠️',
  },
  {
    title: 'Repo Backup',
    category: 'DevTools',
    description:
      'An automated Git repository backup system written in Go. Clones and archives all repositories from a given account, ensuring your code is always safe.',
    tags: ['Go', 'Git', 'Automation', 'Backup'],
    link: 'https://github.com/ribeirohugo/repo_backup',
    image: null,
    icon: '💾',
  },
];

const Portfolio = () => {
  const [current, setCurrent] = useState(0);
  const [animating, setAnimating] = useState(false);
  const [direction, setDirection] = useState('next');

  const total = portfolioItems.length;

  const goTo = useCallback(
    (index, dir) => {
      if (animating) return;
      setDirection(dir);
      setAnimating(true);
      setTimeout(() => {
        setCurrent(index);
        setAnimating(false);
      }, 350);
    },
    [animating]
  );

  const prev = () => goTo((current - 1 + total) % total, 'prev');
  const next = useCallback(() => goTo((current + 1) % total, 'next'), [current, total, goTo]);

  // Auto-advance every 6 seconds
  useEffect(() => {
    const timer = setTimeout(next, 6000);
    return () => clearTimeout(timer);
  }, [current, next]);

  const item = portfolioItems[current];

  return (
    <section id="portfolio" className="portfolio">
      <div className="container">
        <h2 className="section-title">Portfolio</h2>
        <p className="portfolio-subtitle">
          A selection of projects I've built — slide through to explore
        </p>

        <div className="portfolio-slider">
          <button className="slider-btn slider-btn--prev" onClick={prev} aria-label="Previous project">
            &#8249;
          </button>

          <div className={`slider-track ${animating ? `slide-out-${direction}` : 'slide-in'}`}>
            <div className="portfolio-card">
              <div className="portfolio-card__icon">{item.icon}</div>
              <div className="portfolio-card__body">
                <span className="portfolio-card__category">{item.category}</span>
                <h3 className="portfolio-card__title">{item.title}</h3>
                <p className="portfolio-card__description">{item.description}</p>
                <div className="portfolio-card__tags">
                  {item.tags.map((tag, i) => (
                    <span key={i} className="portfolio-tag">{tag}</span>
                  ))}
                </div>
                {item.link && (
                  <a
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="portfolio-card__link"
                  >
                    View Project →
                  </a>
                )}
              </div>
            </div>
          </div>

          <button className="slider-btn slider-btn--next" onClick={next} aria-label="Next project">
            &#8250;
          </button>
        </div>

        {/* Dot indicators */}
        <div className="slider-dots">
          {portfolioItems.map((_, i) => (
            <button
              key={i}
              className={`slider-dot${i === current ? ' slider-dot--active' : ''}`}
              onClick={() => goTo(i, i > current ? 'next' : 'prev')}
              aria-label={`Go to project ${i + 1}`}
            />
          ))}
        </div>

        <p className="slider-counter">
          {current + 1} / {total}
        </p>
      </div>
    </section>
  );
};

export default Portfolio;
