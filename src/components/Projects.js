import React from 'react';
import './Projects.css';

const Projects = () => {
  const projects = [
    {
      title: 'Go Middlewares',
      description: 'Standard middlewares collection (JWT, CORS, Logging) for Go applications.',
      topics: ['Go', 'JWT', 'CORS', 'Auth', 'Logger'],
      url: 'https://github.com/ribeirohugo/go_middlewares',
      stars: 0,
      language: 'Go'
    },
    {
      title: 'Go Config',
      description: 'Golang config loader package supporting multiple formats (JSON, YAML, XML, TOML).',
      topics: ['Go', 'JSON', 'YAML', 'XML', 'TOML', 'Environment Variables'],
      url: 'https://github.com/ribeirohugo/go_config',
      stars: 0,
      language: 'Go'
    },
    {
      title: 'Go REST API',
      description: 'Basic web application structure using onion architecture approach.',
      topics: ['Go', 'CRUD API', 'Onion Architecture'],
      url: 'https://github.com/ribeirohugo/go_rest_api',
      stars: 0,
      language: 'Go'
    },
    {
      title: 'Docker Startup',
      description: 'Easy Docker configs for LEMP/LAMP stack, Golang, MySQL, PostgreSQL and more.',
      topics: ['Docker', 'LEMP', 'LAMP', 'Nginx', 'Apache', 'MySQL', 'PHP'],
      url: 'https://github.com/ribeirohugo/docker_startup',
      stars: 0,
      language: 'Dockerfile'
    },
    {
      title: 'Repo Backup',
      description: 'Git repositories backup system written in Go.',
      topics: ['Go', 'Git', 'Backup'],
      url: 'https://github.com/ribeirohugo/repo_backup',
      stars: 0,
      language: 'Go'
    },
    {
      title: 'Symfony Users',
      description: 'Symfony Rest API to manage users using onion architecture.',
      topics: ['PHP', 'Symfony', 'REST API', 'Onion Architecture'],
      url: 'https://github.com/ribeirohugo/symfony_users',
      stars: 0,
      language: 'PHP'
    },
    {
      title: 'Go Content Getter',
      description: 'Application to download images and content from URLs using regex.',
      topics: ['Go', 'Web Scraping'],
      url: 'https://github.com/ribeirohugo/go_content_getter',
      stars: 0,
      language: 'Go'
    },
    {
      title: 'Go MD5 Matcher',
      description: 'MD5 matcher tool for file verification.',
      topics: ['Go', 'MD5', 'Security'],
      url: 'https://github.com/ribeirohugo/go_md5_matcher',
      stars: 0,
      language: 'Go'
    }
  ];

  return (
    <section id="projects" className="projects">
      <div className="container">
        <h2 className="section-title">Featured Projects</h2>
        <p className="projects-subtitle">
          Here are some of my open-source projects showcasing my work with various technologies
        </p>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div key={index} className="project-card">
              <div className="project-header">
                <h3 className="project-title">{project.title}</h3>
                <span className="project-language">{project.language}</span>
              </div>
              <p className="project-description">{project.description}</p>
              <div className="project-topics">
                {project.topics.map((topic, idx) => (
                  <span key={idx} className="topic-tag">{topic}</span>
                ))}
              </div>
              <a 
                href={project.url} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="project-link"
              >
                View on GitHub →
              </a>
            </div>
          ))}
        </div>
        <div className="projects-footer">
          <a 
            href="https://github.com/ribeirohugo?tab=repositories" 
            target="_blank" 
            rel="noopener noreferrer"
            className="view-all-btn"
          >
            View All Projects on GitHub
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
