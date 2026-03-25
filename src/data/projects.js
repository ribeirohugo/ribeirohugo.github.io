const projects = [
  {
    slug: 'personal-portfolio-website',
    title: 'Personal Portfolio Website',
    category: 'Web Development',
    icon: '🌐',
    description:
      'This very website — a modern, responsive personal portfolio built with React. Features smooth scrolling, dynamic routing, and a clean design that showcases my work and skills.',
    longDescription:
      'Built entirely from scratch with React, this portfolio demonstrates a clean component-driven architecture. It features section-based scrolling navigation, multiple page routes, CSS animations, and a fully responsive layout — from mobile to widescreen. Every section was crafted to present technical work clearly and professionally.',
    tags: ['React', 'JavaScript', 'CSS3', 'HTML5'],
    highlights: [
      'React SPA with react-router-dom for multi-page routing',
      'Smooth scroll navigation with dynamic section detection',
      'Fully responsive — mobile-first design',
      'CSS animations and transitions throughout',
      'Component-driven architecture with shared data layer',
    ],
    link: 'https://github.com/ribeirohugo/ribeirohugo',
    liveUrl: null,
  },
  {
    slug: 'go-rest-api',
    title: 'Go REST API',
    category: 'Backend',
    icon: '⚙️',
    description:
      'A production-ready REST API boilerplate in Go using onion architecture. Includes repository pattern, service layer, dependency injection, and full CRUD support.',
    longDescription:
      'A carefully structured Go application that follows the onion architecture pattern, separating concerns cleanly across handler, service, and repository layers. The project serves as a solid foundation for building production APIs — with proper error handling, DI wiring, and a clear folder structure that scales with team size.',
    tags: ['Go', 'REST', 'Onion Architecture', 'CRUD'],
    highlights: [
      'Onion / clean architecture with strict layer separation',
      'Repository pattern for swappable storage backends',
      'Full CRUD endpoint coverage',
      'Dependency injection without heavy frameworks',
      'Ready-to-extend project structure',
    ],
    link: 'https://github.com/ribeirohugo/go_rest_api',
    liveUrl: null,
  },
  {
    slug: 'go-middlewares',
    title: 'Go Middlewares',
    category: 'Security',
    icon: '🔒',
    description:
      'A reusable collection of HTTP middlewares for Go applications covering authentication (JWT), CORS handling, and structured request logging.',
    longDescription:
      'A focused library of plug-and-play HTTP middleware for Go web servers. Each middleware is self-contained and composable, making it easy to drop JWT auth, CORS policies, or structured logging into any Go project with minimal setup. Designed to follow standard `net/http` middleware patterns.',
    tags: ['Go', 'JWT', 'CORS', 'Auth', 'Logger'],
    highlights: [
      'JWT authentication middleware with configurable secret',
      'CORS middleware with fine-grained origin control',
      'Structured request logging with timing and status codes',
      'Fully composable — stack any combination of middlewares',
      'Compatible with standard net/http and popular routers',
    ],
    link: 'https://github.com/ribeirohugo/go_middlewares',
    liveUrl: null,
  },
  {
    slug: 'go-config',
    title: 'Go Config',
    category: 'DevTools',
    icon: '🛠️',
    description:
      'A flexible configuration loader for Go that supports JSON, YAML, XML, TOML, and environment variables — making app configuration simple and portable.',
    longDescription:
      'Go Config removes the friction of loading application configuration by providing a single, unified interface across all major config formats. Whether your project uses YAML in development or environment variables in production, Go Config handles the switch transparently — keeping your application code clean and format-agnostic.',
    tags: ['Go', 'JSON', 'YAML', 'TOML', 'Config'],
    highlights: [
      'Supports JSON, YAML, XML, TOML and env variables',
      'Single unified API regardless of config format',
      'Environment-variable overrides for production deployments',
      'Zero external dependencies for core functionality',
      'Lightweight and easy to embed in any Go project',
    ],
    link: 'https://github.com/ribeirohugo/go_config',
    liveUrl: null,
  },
  {
    slug: 'repo-backup',
    title: 'Repo Backup',
    category: 'Automation',
    icon: '💾',
    description:
      'An automated Git repository backup system written in Go. Clones and archives all repositories from a given account, ensuring your code is always safe.',
    longDescription:
      'Repo Backup automates the often-neglected task of backing up Git repositories. Given an account or organisation, it fetches all repositories via the GitHub API, clones them locally, and archives them to disk. Perfect for scheduled backup jobs or disaster-recovery pipelines.',
    tags: ['Go', 'Git', 'Automation', 'Backup'],
    highlights: [
      'Fetches all repos for a GitHub user or organisation via API',
      'Clones and archives repositories automatically',
      'Configurable output directory and naming convention',
      'Suitable for cron jobs and CI/CD backup pipelines',
      'Minimal setup — single binary, single config file',
    ],
    link: 'https://github.com/ribeirohugo/repo_backup',
    liveUrl: null,
  },
];

export default projects;

