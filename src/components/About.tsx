
import React, { useEffect, useRef, useState } from 'react';
import './About.css';

const About = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

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
    <section id="about" className="about" ref={sectionRef}>
      <div className={`container about-container ${isVisible ? 'visible' : ''}`}>
        <div className="about-image">
          <img
            src="working.jpg"
            alt="Student working"
          />
        </div>
        <div className="about-content">
          <h2 className="section-title">About Me</h2>
          <p className="about-text">
            Hi there! I'm a passionate computer science student with a strong interest in software 
            development and artificial intelligence. I enjoy solving complex problems and creating 
            innovative solutions that make a difference.
          </p>
          <p className="about-text">
            My journey in tech started when I was 15, building simple websites for fun. Now, I'm 
            focused on mastering modern technologies and preparing for a career in the tech industry.
          </p>
          <div className="about-info">
            <div className="info-item">
              <span className="info-title">Name:</span>
              <span className="info-value">Govind Singh</span>
            </div>
            <div className="info-item">
              <span className="info-title">Email:</span>
              <span className="info-value">GovindCoderr@gmail.com</span>
            </div>
            <div className="info-item">
              <span className="info-title">University:</span>
              <span className="info-value">Rajasthan Technical university</span>
            </div>
            <div className="info-item">
              <span className="info-title">Degree:</span>
              <span className="info-value">B.tech in Computer Science</span>
            </div>
          </div>
          <a href="#contact" className="btn">Get in Touch</a>
        </div>
      </div>
    </section>
  );
};

export default About;
