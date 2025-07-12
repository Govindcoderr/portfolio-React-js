
import React, { useEffect, useRef, useState } from 'react';
import { ExternalLink, Github } from 'lucide-react';
import './Projects.css';

interface ProjectTag {
  id: string;
  name: string;
}

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  liveLink?: string;
  repoLink?: string;
  category: string;
}

const Projects = () => {
  const [filter, setFilter] = useState('all');
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  const projects: Project[] = [
    {
      id: 1,
      title: 'IPL Live Scoreboard ',
      description: 'Built a responsive real-time IPL scoreboard using React.js and public APIs to display live scores',
      image: 'ipl.webp',
      tags: ['React', 'Html', 'css','javaScript'],
      liveLink: 'https://example.com',
      repoLink: 'https://github.com',
      category: 'React-js',
    },
    {
      id: 2,
      title: 'Face Reader Application with Astrological Features',
      description: 'Developed a React-based frontend for facial recognition with astrological personality insights.',
      image: 'astro.jpg',
      tags: ['React-js', 'python' , 'OpenCV' ,'AI'],
      repoLink: 'https://github.com',
      category: 'Python',
    },
    {
      id: 3,
      title: 'Personal Portfolio Website',
      description: 'Built and deployed a responsive personal portfolio ',
      image: 'portfolio.png',
      tags: ['React-js', 'Chatgpt', 'javaScrpt'],
      liveLink: 'https://example.com',
      category: 'web',
    },
   
   
  ];

  const filterCategories = [
    { id: 'all', name: 'All' },
    { id: 'web', name: 'Web Development' },
    { id: 'Python', name: 'Python' },
    { id: 'React-js', name: 'React-js' },
  ];

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.category === filter);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: 0.2,
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section id="projects" className="projects" ref={sectionRef}>
      <div className="container">
        <div className="projects-header">
          <span className="projects-subtitle">My Projects</span>
          <h2 className="section-title">Recent Work</h2>
          <p className="projects-description">
            Below are some of the projects I've worked on, showcasing my skills in different 
            areas of software development. Each project demonstrates my approach to problem-solving 
            and technical implementation.
          </p>
        </div>

        <div className="projects-filter">
          {filterCategories.map((category) => (
            <button
              key={category.id}
              className={`filter-btn ${filter === category.id ? 'active' : ''}`}
              onClick={() => setFilter(category.id)}
            >
              {category.name}
            </button>
          ))}
        </div>

        <div className={`projects-grid ${isVisible ? 'visible' : ''}`}>
          {filteredProjects.map((project) => (
            <div className="project-card" key={project.id}>
              <div className="project-image">
                <img src={project.image} alt={project.title} />
              </div>
              <div className="project-content">
                <div className="project-tags">
                  {project.tags.map((tag, index) => (
                    <span className="project-tag" key={index}>
                      {tag}
                    </span>
                  ))}
                </div>
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                <div className="project-links">
                  {project.liveLink && (
                    <a href={project.liveLink} className="project-link" target="_blank" rel="noopener noreferrer">
                      <ExternalLink size={16} /> Live Demo
                    </a>
                  )}
                  {project.repoLink && (
                    <a href={project.repoLink} className="project-link" target="_blank" rel="noopener noreferrer">
                      <Github size={16} /> Source Code
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
