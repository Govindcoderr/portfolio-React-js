
import React from 'react';
import { Github, Linkedin, Twitter, Instagram, Heart } from 'lucide-react';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-container">
          <div className="footer-content">
            <h3>Govind singh</h3>
            <p className="footer-description">
              A passionate student developer creating digital solutions and
              exploring new technologies to build a better future.
            </p>
            <div className="footer-social">
              <a
                href="https://github.com/Govindcoderr"
                className="footer-social-link"
                aria-label="Github"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github size={18} />
              </a>
              <a
                href="https://linkedin.com/in/govindrajpurohit"
                className="footer-social-link"
                aria-label="LinkedIn"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin size={18} />
              </a>
              <a
                href="https://instagram.com/Govii_raj"
                className="footer-social-link"
                aria-label="Instagram"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Instagram size={18} />
              </a>
            </div>

          </div>

          <div className="footer-links">
            <h3>Quick Links</h3>
            <div className="footer-links-container">
              <div>
                <a href="#home" className="footer-link">Home</a>
                <a href="#about" className="footer-link">About</a>
                <a href="#skills" className="footer-link">Skills</a>
              </div>
              <div>
                <a href="#projects" className="footer-link">Projects</a>
                <a href="#contact" className="footer-link">Contact</a>
                <a href="#" className="footer-link">Resume</a>
              </div>
            </div>
          </div>
        </div>

        <div className="footer-copyright">
          <p>© {currentYear} . All rights reserved. Made with Govind Singh</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
