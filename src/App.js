import React, { useEffect, useState } from 'react';
import { Container, Navbar, Nav, Button, Row, Col, Card, Badge, Modal, Carousel } from 'react-bootstrap';
import MyPic from "../src/assets/me.png"
import FN1 from "../src/assets/FN/fn1.png"
import FN2 from "../src/assets/FN/fn2.png"
import FN3 from "../src/assets/FN/fn3.png"
import FN4 from "../src/assets/FN/fn4.png"
import FN5 from "../src/assets/FN/fn5.png"
import FN6 from "../src/assets/FN/fn6.png"

function App() {
  const [theme, setTheme] = useState('dark');
  const [showModal, setShowModal] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  useEffect(() => {
    document.documentElement.setAttribute('data-bs-theme', theme);
  }, [theme]);  

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));
  };

  const handleNavClick = () => {
    const collapse = document.getElementById('navbarSupportedContent');
    if (collapse && collapse.classList.contains('show')) {
      collapse.classList.remove('show');
    }
  };

  const handleProjectClick = (project) => {
    setSelectedProject(project);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedProject(null);
  };

  return (
    <div>
      <Navbar expand="lg" fixed="top" className="bg-body-tertiary border-bottom">
        <Container>
          <Navbar.Brand href="#hero" onClick={handleNavClick}>
            Kristyl
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarSupportedContent" />
          <Navbar.Collapse id="navbarSupportedContent">
            <Nav className="me-auto">
              <Nav.Link href="#hero" onClick={handleNavClick}>Home</Nav.Link>
              <Nav.Link href="#about" onClick={handleNavClick}>About</Nav.Link>
              <Nav.Link href="#skills" onClick={handleNavClick}>Skills</Nav.Link>
              <Nav.Link href="#projects" onClick={handleNavClick}>Projects</Nav.Link>
              <Nav.Link href="#contact" onClick={handleNavClick}>Contact</Nav.Link>
            </Nav>
            <div className="d-flex">
              <Button 
                variant="outline-secondary" 
                onClick={toggleTheme} 
                aria-label="Toggle theme"
                className="theme-toggle-btn d-flex align-items-center justify-content-center"
                style={{
                  width: '40px',
                  height: '40px',
                  borderRadius: '50%',
                  border: '2px solid',
                  borderColor: 'var(--bs-border-color)',
                  backgroundColor: 'transparent',
                  transition: 'all 0.3s ease',
                  position: 'relative',
                  overflow: 'hidden'
                }}
                onMouseEnter={(e) => {
                  e.target.style.transform = 'scale(1.1)';
                  e.target.style.borderColor = theme === 'light' ? '#000' : '#fff';
                  e.target.style.boxShadow = '0 4px 12px rgba(0,0,0,0.15)';
                  // Change icon color on hover
                  const svg = e.target.querySelector('svg');
                  if (svg) {
                    svg.style.fill = theme === 'light' ? '#000' : '#fff';
                  }
                }}
                onMouseLeave={(e) => {
                  e.target.style.transform = 'scale(1)';
                  e.target.style.borderColor = 'var(--bs-border-color)';
                  e.target.style.boxShadow = 'none';
                  // Reset icon color
                  const svg = e.target.querySelector('svg');
                  if (svg) {
                    svg.style.fill = 'currentColor';
                  }
                }}
              >
                <div 
                  style={{
                    position: 'relative',
                    width: '36px',
                    height: '18px',
                    overflow: 'hidden'
                  }}
                >
                  <div
                    style={{
                      position: 'absolute',
                      top: '0',
                      left: '0',
                      width: '200%',
                      height: '100%',
                      display: 'flex',
                      transition: 'transform 0.3s ease',
                      transform: theme === 'light' ? 'translateX(0)' : 'translateX(-50%)'
                    }}
                  >
                    <div style={{ width: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" viewBox="0 0 16 16">
                        <path d="M6 .278a.768.768 0 0 1 .08.858 7.208 7.208 0 0 0-.878 3.46c0 4.021 3.278 7.277 7.318 7.277.527 0 1.04-.055 1.533-.16a.787.787 0 0 1 .81.316.733.733 0 0 1-.031.893A8.349 8.349 0 0 1 8.344 16C3.734 16 0 12.286 0 7.71 0 4.266 2.114 1.312 5.124.06A.752.752 0 0 1 6 .278z"/>
                      </svg>
                    </div>
                    <div style={{ width: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" viewBox="0 0 16 16">
                        <path d="M8 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM8 0a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 0zm0 13a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 13zm8-5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2a.5.5 0 0 1 .5.5zM3 8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2A.5.5 0 0 1 3 8zm10.657-5.657a.5.5 0 0 1 0 .707l-1.414 1.415a.5.5 0 1 1-.707-.708l1.414-1.414a.5.5 0 0 1 .707 0zm-9.193 9.193a.5.5 0 0 1 0 .707L3.05 13.657a.5.5 0 0 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0zm9.193 2.121a.5.5 0 0 1-.707 0l-1.414-1.414a.5.5 0 0 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .707zM4.464 4.465a.5.5 0 0 1-.707 0L2.343 3.05a.5.5 0 1 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .708z"/>
                      </svg>
                    </div>
                  </div>
                </div>
              </Button>
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* Hero Section */}
      <section id="hero" className="hero hero-minimal d-flex align-items-center">
        <Container className="py-5">
          <Row className="align-items-center g-5">
            <Col lg={6}>
              <div className="hero-content">
                <h1 className="hero-title">Kristyl Axlee Alegre</h1>
                <p className="hero-subtitle">Full Stack Engineer & Cybersecurity</p>
                <p className="hero-description">
                  I craft beautiful, accessible digital experiences that blend thoughtful design with robust engineering.
                </p>
                <div className="hero-buttons">
                  <a href="#projects" className="btn btn-hero-primary">View My Work</a>
                  <a href="#contact" className="btn btn-hero-secondary">Get In Touch</a>
                </div>
              </div>
            </Col>
            <Col lg={6} className="text-center">
              <img src={MyPic} alt="Portrait of Kristyl Alegre" className="hero-avatar" />
            </Col>
          </Row>
        </Container>
      </section>

      {/* About Section */}
      <section id="about" className="section-xl">
        <Container>
          <Row className="justify-content-center">
            <Col lg={10}>
              <h2 className="mb-4">About</h2>
              <p className="fs-5 mb-3">
                I'm a <strong>Cybersecurity Specialist</strong> and  <strong>Full Stack Engineer</strong> in the <strong>Research and Development</strong> team at <strong>FusionNode Inc</strong>.
                I design and build end‑to‑end web applications with a strong emphasis on security, performance, and clean UX.
              </p>
              <p className="fs-5 mb-0">
                In R&D, I focus on exploring new technologies, prototyping innovative solutions, and implementing 
                cutting-edge features with security-first principles. I champion secure coding practices, threat modeling, 
                and proactive monitoring while turning complex requirements into elegant, maintainable solutions.
              </p>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Skills Section */}
      <section id="skills" className="section-xl bg-body-secondary bg-pattern-alt">
        <Container>
          <h2 className="mb-5 text-center">Skills</h2>
          <Row className="g-4">
            {[
              { name: 'React', icon: '⚛️' },
              { name: 'JavaScript', icon: '🟨' },
              { name: 'HTML', icon: '🌐' },
              { name: 'CSS', icon: '🎨' },
              { name: 'TypeScript', icon: '🔷' },
              { name: 'Bootstrap', icon: '🎯' },
              { name: 'Tailwind', icon: '🌊' },
              { name: 'SCSS', icon: '💎' },
              { name: 'Express', icon: '🚀' },
              { name: 'Prisma', icon: '🗄️' },
              { name: 'GitHub', icon: '🐙' },
              { name: 'Visual Studio Code', icon: '💻' }
            ].map((skill) => (
              <Col md={6} lg={4} key={skill.name}>
                <div className="skill-card h-100">
                  <span className="skill-icon">{skill.icon}</span>
                  <h5 className="mb-0 fw-semibold">{skill.name}</h5>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-5 bg-pattern">
        <Container>
          <h2 className="mb-4">Projects</h2>
          <Row className="g-4">
            {[
              {
                id: 1,
                title: "FusionNode Website",
                description: "A corporate website showcasing FusionNode's cybersecurity services and company information. Features include service descriptions, career opportunities with job application functionality, and contact forms for potential clients interested in FusionNode's services. Built with React and Tailwind CSS for a modern, responsive design.",
                images: [
                  FN1,
                  FN2,
                  FN3,
                  FN4,
                  FN5,
                  FN6
                ]
              }
            ].map((project) => (
              <Col md={6} lg={4} key={project.id}>
                <Card className="project-card card-hover" style={{ cursor: 'pointer', minHeight: '380px' }} onClick={() => handleProjectClick(project)}>
                  <Card.Img variant="top" src={project.images[0]} alt={`${project.title} thumbnail`} />
                  <Card.Body style={{ padding: '1.5rem' }}>
                    <Card.Title>{project.title}</Card.Title>
                    {project.id === 1 && (
                      <div className="d-flex flex-wrap gap-2 mb-3">
                        <span 
                          className="tech-tag"
                          style={{
                            backgroundColor: '#f8f9fa',
                            color: '#495057',
                            padding: '4px 12px',
                            borderRadius: '20px',
                            fontSize: '0.875rem',
                            fontWeight: '500',
                            border: '1px solid #e9ecef',
                            boxShadow: '0 1px 3px rgba(0,0,0,0.1)'
                          }}
                        >
                          React
                        </span>
                        <span 
                          className="tech-tag"
                          style={{
                            backgroundColor: '#f8f9fa',
                            color: '#495057',
                            padding: '4px 12px',
                            borderRadius: '20px',
                            fontSize: '0.875rem',
                            fontWeight: '500',
                            border: '1px solid #e9ecef',
                            boxShadow: '0 1px 3px rgba(0,0,0,0.1)'
                          }}
                        >
                          Next.js
                        </span>
                        <span 
                          className="tech-tag"
                          style={{
                            backgroundColor: '#f8f9fa',
                            color: '#495057',
                            padding: '4px 12px',
                            borderRadius: '20px',
                            fontSize: '0.875rem',
                            fontWeight: '500',
                            border: '1px solid #e9ecef',
                            boxShadow: '0 1px 3px rgba(0,0,0,0.1)'
                          }}
                        >
                          Tailwind
                        </span>
                      </div>
                    )}
                    <Card.Text>
                      Click to view details and screenshots of this project.
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact-section">
        <Container>
          <Row className="g-5">
            {/* Left Column - Contact Information */}
            <Col lg={6}>
              <div className="contact-info">
                <div className="contact-subtitle">GET IN TOUCH</div>
                <h2 className="contact-title">Let's work together</h2>
                <p className="contact-description">
                  I'm always interested in hearing about new projects and opportunities. 
                  Whether you have a question or just want to say hi, feel free to reach out!
                </p>
                <div className="social-links">
                  <a href="https://www.linkedin.com/in/kristyl-axlee-alegre-9722a8285" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="social-link">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
                      <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.214c.837 0 1.358-.554 1.358-1.248-.015-.709-.521-1.248-1.342-1.248S2.4 3.223 2.4 3.932c0 .694.521 1.248 1.327 1.248zM13.458 13.394v-3.98c0-2.129-1.138-3.121-2.654-3.121-1.223 0-1.774.671-2.082 1.144v-0.981H6.321c.03.65 0 7.038 0 7.038h2.401v-3.93c0-.21.015-.42.077-.571.168-.42.551-.855 1.194-.855.843 0 1.18.646 1.18 1.594v3.762z"/>
                    </svg>
                  </a>
                  <a href="https://github.com/Krstylxllgr" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="social-link">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
                      <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8"/>
                    </svg>
                  </a>
                </div>
              </div>
            </Col>
            
            {/* Right Column - Contact Form */}
            <Col lg={6}>
              <form className="contact-form" action={`mailto:alegrekrstylxl@gmail.com`} method="post" encType="text/plain">
                <div className="form-group">
                  <label htmlFor="contact-name" className="form-label">Name</label>
                  <input type="text" className="form-control" id="contact-name" name="name" required />
                </div>
                <div className="form-group">
                  <label htmlFor="contact-email" className="form-label">Email</label>
                  <input type="email" className="form-control" id="contact-email" name="email" required />
                </div>
                <div className="form-group">
                  <label htmlFor="contact-message" className="form-label">Message</label>
                  <textarea className="form-control" id="contact-message" name="message" rows="5" required></textarea>
                </div>
                <button type="submit" className="btn btn-submit">Send Message</button>
              </form>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Footer */}
      <footer className="pt-4">
        <div className="footer-divider" />
        <Container className="py-4">
          <div className="d-flex flex-column flex-sm-row align-items-center justify-content-between gap-2">
            <span className="text-body-secondary">© {new Date().getFullYear()} Kristyl. All rights reserved.</span>
            <div className="d-flex align-items-center gap-2">
            </div>
          </div>
        </Container>
      </footer>

      {/* Project Modal */}
      <Modal show={showModal} onHide={handleCloseModal} size="lg" centered>
        <Modal.Header closeButton>
          <Modal.Title>{selectedProject?.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {selectedProject && (
            <>
              <Carousel className="mb-4">
                {selectedProject.images.map((image, index) => (
                  <Carousel.Item key={index}>
                    <img
                      className="d-block w-100"
                      src={image}
                      alt={`${selectedProject.title} screenshot ${index + 1}`}
                      style={{ height: '300px', objectFit: 'cover' }}
                    />
                  </Carousel.Item>
                ))}
              </Carousel>
              <p className="fs-5">{selectedProject.description}</p>
              {selectedProject.id === 1 && (
                <div className="mt-3">
                  <a 
                    href="https://fusionnode.ai/" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="btn d-inline-flex align-items-center gap-2"
                    style={{
                      backgroundColor: '#495057',
                      color: 'white',
                      border: 'none',
                      borderRadius: '8px',
                      padding: '10px 16px',
                      fontSize: '0.875rem',
                      fontWeight: '500',
                      textDecoration: 'none',
                      transition: 'all 0.2s ease'
                    }}
                    onMouseEnter={(e) => {
                      e.target.style.backgroundColor = '#343a40';
                      e.target.style.transform = 'translateY(-1px)';
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.backgroundColor = '#495057';
                      e.target.style.transform = 'translateY(0)';
                    }}
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                      <path d="M8.636 3.5a.5.5 0 0 0-.5-.5H1.5A1.5 1.5 0 0 0 0 4.5v10A1.5 1.5 0 0 0 1.5 16h10a1.5 1.5 0 0 0 1.5-1.5V7.864a.5.5 0 0 0-1 0V14.5a.5.5 0 0 1-.5.5h-10a.5.5 0 0 1-.5-.5v-10a.5.5 0 0 1 .5-.5h6.636a.5.5 0 0 0 .5-.5z"/>
                      <path d="M16 .5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0 0 1h3.793L6.146 9.146a.5.5 0 1 0 .708.708L15 1.707V5.5a.5.5 0 0 0 1 0v-5z"/>
                    </svg>
                    Live Demo
                  </a>
                </div>
              )}
            </>
          )}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseModal}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>

    </div>
  );
}

export default App;
