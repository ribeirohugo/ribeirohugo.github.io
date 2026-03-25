import React, { useState, useEffect, useCallback, useRef } from 'react';
import { Link } from 'react-router-dom';
import projects from '../../data/projects';
import './Portfolio2.css';

const ACCENT = '#3b82f6';
const BG     = 'linear-gradient(135deg, #0f172a 0%, #1e3a5f 60%, #1e40af 100%)';

const slides = projects;

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
                      <Link
                        to={`/project/${slide.slug}`}
                        className="p2-detail-link"
                      >
                        View Details →
                      </Link>
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
