import React, { useState, useEffect, useCallback, useRef } from 'react';
import './Portfolio2.css';

const ACCENT   = '#3b82f6';
const BG       = 'linear-gradient(135deg, #0f172a 0%, #1e3a5f 60%, #1e40af 100%)';

const slides = [
  {
    id: 1,
    category: 'Web Development',
    title: 'Personal Portfolio Website',
    description:
      'This very website — a modern, responsive personal portfolio built with React. Features smooth scrolling, dynamic routing, and a clean design that showcases my work and skills.',
    tags: ['React', 'JavaScript', 'CSS3', 'HTML5'],
    link: 'https://github.com/ribeirohugo/ribeirohugo',
    icon: '🌐',
  },
  {
    id: 2,
    category: 'Backend',
    title: 'Go REST API',
    description:
      'A production-ready REST API boilerplate in Go using onion architecture. Includes repository pattern, service layer, dependency injection, and full CRUD support.',
    tags: ['Go', 'REST', 'Onion Architecture', 'CRUD'],
    link: 'https://github.com/ribeirohugo/go_rest_api',
    icon: '⚙️',
  },
  {
    id: 3,
    category: 'Security',
    title: 'Go Middlewares',
    description:
      'A reusable collection of HTTP middlewares for Go applications covering authentication (JWT), CORS handling, and structured request logging.',
    tags: ['Go', 'JWT', 'CORS', 'Auth', 'Logger'],
    link: 'https://github.com/ribeirohugo/go_middlewares',
    icon: '🔒',
  },
  {
    id: 4,
    category: 'DevTools',
    title: 'Go Config',
    description:
      'A flexible configuration loader for Go that supports JSON, YAML, XML, TOML, and environment variables — making app configuration simple and portable.',
    tags: ['Go', 'JSON', 'YAML', 'TOML', 'Config'],
    link: 'https://github.com/ribeirohugo/go_config',
    icon: '🛠️',
  },
  {
    id: 5,
    category: 'Automation',
    title: 'Repo Backup',
    description:
      'An automated Git repository backup system written in Go. Clones and archives all repositories from a given account, ensuring your code is always safe.',
    tags: ['Go', 'Git', 'Automation', 'Backup'],
    link: 'https://github.com/ribeirohugo/repo_backup',
    icon: '💾',
  },
];

const Portfolio2 = () => {
  const [current, setCurrent] = useState(0);
  const autoPlayRef           = useRef(null);
  const total                 = slides.length;

  const goTo = useCallback((index) => setCurrent(index), []);

  const prev = useCallback(() => goTo((current - 1 + total) % total), [current, total, goTo]);
  const next = useCallback(() => goTo((current + 1) % total),         [current, total, goTo]);

  useEffect(() => { autoPlayRef.current = next; });
  useEffect(() => {
    const id = setInterval(() => autoPlayRef.current(), 7000);
    return () => clearInterval(id);
  }, []);

  return (
    <section id="portfolio2" className="p2-section" style={{ background: BG }}>
      <div className="p2-viewport">

        {/* Fixed decorative blobs */}
        <div className="p2-blob p2-blob--1" style={{ background: ACCENT }} />
        <div className="p2-blob p2-blob--2" style={{ background: ACCENT }} />

        <div className="p2-slide-inner">

          {/* Heading — always still */}
          <div className="p2-slide-top">
            <h2 className="p2-title">Portfolio 2.0</h2>
            <p className="p2-subtitle">Immersive project showcase — swipe or use the arrows</p>
          </div>

          {/* Sliding content track — only content moves, background stays */}
          <div className="p2-content-track-wrap">
            <div
              className="p2-content-track"
              style={{ transform: `translateX(-${current * 100}%)` }}
            >
              {slides.map((slide) => (
                <div key={slide.id} className="p2-content-panel">
                  <div className="p2-panel-inner">
                    <div className="p2-content">
                      <span className="p2-category" style={{ color: ACCENT, borderColor: ACCENT }}>
                        {slide.category}
                      </span>
                      <h3 className="p2-slide-title">{slide.title}</h3>
                      <p className="p2-slide-desc">{slide.description}</p>
                      <div className="p2-tags">
                        {slide.tags.map((t, idx) => (
                          <span key={idx} className="p2-tag" style={{ borderColor: ACCENT, color: ACCENT }}>
                            {t}
                          </span>
                        ))}
                      </div>
                      <a
                        href={slide.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p2-link"
                        style={{ background: ACCENT }}
                      >
                        View Project →
                      </a>
                    </div>

                    <div className="p2-icon-wrap">
                      <div className="p2-icon" style={{ boxShadow: `0 0 80px ${ACCENT}55` }}>
                        {slide.icon}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Arrows */}
        <button className="p2-arrow p2-arrow--prev" onClick={prev} aria-label="Previous slide">&#8249;</button>
        <button className="p2-arrow p2-arrow--next" onClick={next} aria-label="Next slide">&#8250;</button>

        {/* Progress bar */}
        <div className="p2-progress-bar">
          <div className="p2-progress-fill" style={{ width: `${((current + 1) / total) * 100}%`, background: ACCENT }} />
        </div>

        {/* Dots */}
        <div className="p2-dots">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
              aria-label={`Go to slide ${i + 1}`}
              className={`p2-dot${i === current ? ' p2-dot--active' : ''}`}
              style={i === current ? { background: ACCENT, borderColor: ACCENT } : {}}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio2;
