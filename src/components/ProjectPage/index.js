import React from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import projects from '../../data/projects';
import './ProjectPage.css';

const ProjectPage = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    return (
      <div className="pp-not-found">
        <h2>Project not found</h2>
        <Link to="/" className="pp-back-btn">← Back to Home</Link>
      </div>
    );
  }

  const currentIndex = projects.findIndex((p) => p.slug === slug);
  const prevProject  = projects[currentIndex - 1] ?? null;
  const nextProject  = projects[currentIndex + 1] ?? null;

  return (
    <div className="pp-page">

      {/* ── Hero ── */}
      <div className="pp-hero">
        <div className="pp-hero__inner">
          <button className="pp-back-btn" onClick={() => navigate(-1)}>
            ← Back
          </button>
          <div className="pp-hero__icon">{project.icon}</div>
          <span className="pp-hero__category">{project.category}</span>
          <h1 className="pp-hero__title">{project.title}</h1>
          <p className="pp-hero__lead">{project.description}</p>
          <div className="pp-hero__tags">
            {project.tags.map((t, i) => (
              <span key={i} className="pp-tag">{t}</span>
            ))}
          </div>
          <div className="pp-hero__actions">
            {project.link && (
              <a href={project.link} target="_blank" rel="noopener noreferrer" className="pp-btn pp-btn--primary">
                View on GitHub →
              </a>
            )}
            {project.liveUrl && (
              <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="pp-btn pp-btn--secondary">
                Live Demo ↗
              </a>
            )}
          </div>
        </div>
      </div>

      {/* ── Body ── */}
      <div className="pp-body">

        {/* Overview */}
        <section className="pp-section">
          <h2 className="pp-section__title">Overview</h2>
          <p className="pp-section__text">{project.longDescription}</p>
        </section>

        {/* Highlights */}
        <section className="pp-section">
          <h2 className="pp-section__title">Key Highlights</h2>
          <ul className="pp-highlights">
            {project.highlights.map((h, i) => (
              <li key={i} className="pp-highlight">
                <span className="pp-highlight__check">✓</span>
                {h}
              </li>
            ))}
          </ul>
        </section>

        {/* Technologies */}
        <section className="pp-section">
          <h2 className="pp-section__title">Technologies Used</h2>
          <div className="pp-tech-grid">
            {project.tags.map((t, i) => (
              <div key={i} className="pp-tech-pill">{t}</div>
            ))}
          </div>
        </section>

      </div>

      {/* ── Project navigation ── */}
      <div className="pp-nav">
        <div className="pp-nav__inner">
          {prevProject ? (
            <Link to={`/project/${prevProject.slug}`} className="pp-nav__item pp-nav__item--prev">
              <span className="pp-nav__dir">← Previous</span>
              <span className="pp-nav__name">{prevProject.title}</span>
            </Link>
          ) : <div />}

          <Link to="/#portfolio" className="pp-nav__all">All Projects</Link>

          {nextProject ? (
            <Link to={`/project/${nextProject.slug}`} className="pp-nav__item pp-nav__item--next">
              <span className="pp-nav__dir">Next →</span>
              <span className="pp-nav__name">{nextProject.title}</span>
            </Link>
          ) : <div />}
        </div>
      </div>

    </div>
  );
};

export default ProjectPage;

