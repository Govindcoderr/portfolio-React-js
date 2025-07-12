
import React, { useEffect, useRef, useState } from 'react';
import { Code, Database, PenTool, Globe } from 'lucide-react';
import './Skills.css';

interface SkillItem {
  name: string;
  percentage: number;
}

interface SkillCategory {
  title: string;
  icon: React.ReactNode;
  skills: SkillItem[];
}

const Skills = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  const skillsData: SkillCategory[] = [
    {
      title: 'Programming Languages',
      icon: <Code size={20} />,
      skills: [
       
        { name: 'Python', percentage: 75 },
        { name: 'Java', percentage: 70 },
        { name: 'JavaScript', percentage: 60 },
      ],
    },
    {
      title: 'Web Development',
      icon: <Globe size={20} />,
      skills: [
        { name: 'HTML/CSS', percentage: 90 },
        { name: 'React.js', percentage: 80 },
       
      ],
    },
    {
      title: 'Database',
      icon: <Database size={20} />,
      skills: [
        { name: 'MySQL', percentage: 75 },
        { name: 'MongoDB', percentage: 70 },
       
      ],
    },
    {
      title: 'Design',
      icon: <PenTool size={20} />,
      skills: [
        { name: 'Figma', percentage: 80 },
        { name: 'Adobe XD', percentage: 65 },
        { name: 'Photoshop', percentage: 60 },
        { name: 'Illustrator', percentage: 50 },
      ],
    },
  ];

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
    <section id="skills" className="skills" ref={sectionRef}>
      <div className="container">
        <div className="skills-header">
          <span className="skills-subtitle">My Skills</span>
          <h2 className="section-title">Technical Expertise</h2>
          <p className="skills-description">
            I've developed a diverse range of skills throughout my academic journey and personal projects. 
            Here's a comprehensive overview of my technical expertise and competencies.
          </p>
        </div>

        <div className={`skills-content ${isVisible ? 'visible' : ''}`}>
          {skillsData.map((category, index) => (
            <div className="skills-category" key={index}>
              <h3>{category.icon} {category.title}</h3>
              {category.skills.map((skill, skillIndex) => (
                <div className="skill-item" key={skillIndex}>
                  <div className="skill-info">
                    <span className="skill-name">{skill.name}</span>
                    <span className="skill-percentage">{skill.percentage}%</span>
                  </div>
                  <div className="skill-bar">
                    <div 
                      className="skill-progress" 
                      style={{ "--width": `${skill.percentage}%` } as React.CSSProperties}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
