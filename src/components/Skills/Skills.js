import React from 'react';
import './Skills.css';

const Skills = () => {
  const skills = [
    {
      category: 'Languages',
      items: ['Go', 'PHP', 'Java', 'JavaScript', 'Shell Scripting', 'Prolog']
    },
    {
      category: 'Frameworks & Tools',
      items: ['Symfony', 'React', 'Docker', 'Git', 'REST APIs', 'Vagrant']
    },
    {
      category: 'Databases',
      items: ['MySQL', 'PostgreSQL']
    },
    {
      category: 'Architecture & Patterns',
      items: ['Onion Architecture', 'CRUD APIs', 'Microservices', 'Data Structures', 'Binary Trees']
    },
    {
      category: 'DevOps & Deployment',
      items: ['Docker', 'GitHub Actions', 'Linux', 'LEMP/LAMP Stack', 'CI/CD']
    },
    {
      category: 'Specializations',
      items: ['Backend Development', 'Authentication (JWT)', 'API Design', 'Config Management', 'File Encryption']
    }
  ];

  return (
    <section id="skills" className="skills">
      <div className="container">
        <h2 className="section-title">Skills & Expertise</h2>
        <div className="skills-grid">
          {skills.map((skill, index) => (
            <div key={index} className="skill-card">
              <h3 className="skill-category">{skill.category}</h3>
              <div className="skill-items">
                {skill.items.map((item, idx) => (
                  <span key={idx} className="skill-tag">{item}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
