
import React, { useEffect, useRef, useState } from 'react';
import { Mail, Phone, MapPin, Github, Linkedin, Twitter, Instagram } from 'lucide-react';
import './Contact.css';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const form = useRef();

  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const sectionRef = useRef<HTMLDivElement>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form data submitted:', formData);
    
    const YOUR_PUBLIC_KEY ="W43nCY4filyISgD4e";
    const  YOUR_SERVICE_ID  = "service_0vfgnhf";
    const  YOUR_TEMPLATE_ID ="template_oxmy2nw";
     emailjs
      .sendForm(YOUR_SERVICE_ID, YOUR_TEMPLATE_ID, form.current, {
        publicKey: YOUR_PUBLIC_KEY,
      })
      .then(
        () => {
         alert('Thank you for your message! I will get back to you soon.');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
    // In a real app, you would send this data to a server
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: '',
    });
  };

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
    <section id="contact" className="contact" ref={sectionRef}>
      <div className="container">
        <div className="contact-header">
          <span className="contact-subtitle">Get In Touch</span>
          <h2 className="section-title">Contact Me</h2>
          <p className="contact-description">
            Feel free to contact me for any project discussions, collaborations, or just to say hello. 
            I'm always open to new opportunities and connections.
          </p>
        </div>

        <div className={`contact-container ${isVisible ? 'visible' : ''}`}>
          <div className="contact-info">
            <div className="contact-card">
              <div className="contact-icon">
                <Mail size={20} />
              </div>
              <div className="contact-info-content">
                <h4>Email</h4>
                <a href="mailto:govindcoderr@gmail.com">govindcoderr@gmail.com</a>
              </div>
            </div>

            <div className="contact-card">
              <div className="contact-icon">
                <Phone size={20} />
              </div>
              <div className="contact-info-content">
                <h4>Phone</h4>
                <a href="tel:+91 9664361826">+91 9664361826</a>
              </div>
            </div>

            <div className="contact-card">
              <div className="contact-icon">
                <MapPin size={20} />
              </div>
              <div className="contact-info-content">
                <h4>Location</h4>
                <p>Andheri , Mumbai </p>
              </div>
            </div>

            <div className="contact-social">
              <a href="https://github.com/Govindcoderr" className="social-link" aria-label="Github">
                <Github size={18} />
              </a>
              <a href="https://linkedin.com/in/govindrajpurohit" className="social-link" aria-label="LinkedIn">
                <Linkedin size={18} />
              </a>
              <a href="#" className="social-link" aria-label="Twitter">
                <Twitter size={18} />
              </a>
              <a href="https://instagram.com/Govii_raj" className="social-link" aria-label="Instagram">
                <Instagram size={18} />
              </a>
            </div>
          </div>

          <form  ref={form} className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name" className="form-label">Your Name</label>
              <input
                type="text"
                id="name"
                name="name"
                className="form-control"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="email" className="form-label">Your Email</label>
              <input
                type="email"
                id="email"
                name="email"
                className="form-control"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="subject" className="form-label">Subject</label>
              <input
                type="text"
                id="subject"
                name="subject"
                className="form-control"
                value={formData.subject}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="message" className="form-label">Message</label>
              <textarea
                id="message"
                name="message"
                className="form-control"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>

            <button type="submit" className="btn btn-submit">Send Message</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
