import React, { useState, useEffect, useCallback } from 'react';
import { Link } from 'react-router-dom';
import projects from '../data/projects';
import './Portfolio.css';

const portfolioItems = projects;

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
                    View on GitHub →
                  </a>
                )}
                <Link
                  to={`/project/${item.slug}`}
                  className="portfolio-card__detail-link"
                >
                  View Details →
                </Link>
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
