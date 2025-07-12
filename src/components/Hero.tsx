
import React from 'react';
import { ArrowDown } from 'lucide-react';
import './Hero.css';


const Hero = () => {
  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="hero">
      <div className="container hero-content">
        <div className="hero-text">
          <span className="hero-intro">Hello, I'm</span>
          <h1 className="hero-name">Govind Singh</h1>
          <h2 className="hero-role">Computer Science Student</h2>
          <p className="hero-description">
            A passionate student developer specializing in web development and machine learning. 
            Currently pursuing a degree in Computer Science at Rajasthan Technical University.
          </p>
          <div className="hero-cta">
            <a href="#projects" className="btn">View Projects</a>
            <a href="#contact" className="btn btn-secondary">Contact Me</a>
          </div>
        </div>
        <div className="hero-image">
          <img 
            src="photo.jpg" 
            alt="Student Portrait" 
            className="hero-img" 
          />
        </div>
      </div>
      <div className="scroll-down" onClick={scrollToAbout}>
        <span>Scroll Down</span>
        <ArrowDown className="scroll-arrow" size={20} />
      </div>
    </section>
  );
};

export default Hero;
