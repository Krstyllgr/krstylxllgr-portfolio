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
              <Button variant="outline-secondary" onClick={toggleTheme} aria-label="Toggle theme">
                {theme === 'light' ? 'Dark' : 'Light'} Mode
              </Button>
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* Hero Section */}
      <section id="hero" className="hero hero-glow d-flex align-items-center">
        <Container className="py-5">
          <Row className="align-items-center g-4">
            <Col md={7}>
              <h1 className="display-4 fw-bold mb-2">Kristyl Axlee Alegre</h1>
              <p className="lead mb-4 mb-md-3">Full Stack Engineer · Cybersecurity</p>
              <div className="d-flex gap-2">
                <a href="#projects" className="btn btn-primary btn-lg">View Projects</a>
                <a href="#contact" className="btn btn-outline-primary btn-lg">Contact Me</a>
              </div>
              <div className="d-flex align-items-center gap-3 mt-4">
                <a className="text-body" href="#" aria-label="GitHub">
                  {/* GitHub icon (inline SVG) */}
                  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" viewBox="0 0 16 16">
                    <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8"/>
                  </svg>
                </a>
                <a className="text-body" href="#" aria-label="LinkedIn">
                  {/* LinkedIn icon (inline SVG) */}
                  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" viewBox="0 0 16 16">
                    <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.214c.837 0 1.358-.554 1.358-1.248-.015-.709-.521-1.248-1.342-1.248S2.4 3.223 2.4 3.932c0 .694.521 1.248 1.327 1.248zM13.458 13.394v-3.98c0-2.129-1.138-3.121-2.654-3.121-1.223 0-1.774.671-2.082 1.144v-0.981H6.321c.03.65 0 7.038 0 7.038h2.401v-3.93c0-.21.015-.42.077-.571.168-.42.551-.855 1.194-.855.843 0 1.18.646 1.18 1.594v3.762z"/>
                  </svg>
                </a>
              </div>
            </Col>
            <Col md={5} className="text-md-end text-center">
              <img src={MyPic} alt="Portrait of Kristyl Alegre" className="avatar avatar-lg" />
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
              <p className="fs-5 mb-3">
                My tech stack includes <strong>React</strong> and <strong>TypeScript</strong> for frontend development, 
                <strong>Bootstrap</strong> for responsive UI design, and <strong>Express</strong> with <strong>Prisma </strong> 
                 for backend services and database management.
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
              },
              {
                id: 2,
                title: "Task Management App",
                description: "A collaborative task management application with real-time updates using WebSocket connections. Built with React frontend and Node.js backend, featuring drag-and-drop functionality, team collaboration, and progress tracking with beautiful data visualizations.",
                images: [
                  process.env.PUBLIC_URL + '/logo512.png',
                  process.env.PUBLIC_URL + '/logo192.png',
                  process.env.PUBLIC_URL + '/logo512.png'
                ]
              },
              {
                id: 3,
                title: "Cybersecurity Dashboard",
                description: "A comprehensive security monitoring dashboard for threat detection and incident response. Features real-time security metrics, automated alerts, vulnerability scanning results, and compliance reporting. Built with focus on security-first principles and threat modeling.",
                images: [
                  process.env.PUBLIC_URL + '/logo192.png',
                  process.env.PUBLIC_URL + '/logo512.png',
                  process.env.PUBLIC_URL + '/logo192.png'
                ]
              }
            ].map((project) => (
              <Col md={6} lg={4} key={project.id}>
                <Card className="project-card card-hover" style={{ cursor: 'pointer' }} onClick={() => handleProjectClick(project)}>
                  <Card.Img variant="top" src={project.images[0]} alt={`${project.title} thumbnail`} />
                  <Card.Body>
                    <Card.Title>{project.title}</Card.Title>
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
      <section id="contact" className="py-5 bg-body-secondary">
        <Container>
          <h2 className="mb-4">Contact</h2>
          <Row>
            <Col lg={8}>
              <p className="fs-5 mb-4">Interested in working together or have a question?</p>
              <form action={`mailto:alegrekrstylxl@gmail.com`} method="post" encType="text/plain">
                <div className="mb-3">
                  <label htmlFor="name" className="form-label">Name</label>
                  <input type="text" className="form-control" id="name" name="name" required />
                </div>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">Email</label>
                  <input type="email" className="form-control" id="email" name="email" required />
                </div>
                <div className="mb-3">
                  <label htmlFor="subject" className="form-label">Subject</label>
                  <input type="text" className="form-control" id="subject" name="subject" required />
                </div>
                <div className="mb-3">
                  <label htmlFor="message" className="form-label">Message</label>
                  <textarea className="form-control" id="message" name="message" rows="5" required></textarea>
                </div>
                <button type="submit" className="btn btn-primary">Send Message</button>
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
              <a className="text-decoration-none" href="#hero">Back to top</a>
              <Button size="sm" variant="outline-secondary" onClick={toggleTheme}>
                {theme === 'light' ? 'Dark' : 'Light'} Mode
              </Button>
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
                  <a href="https://fusionnode.ai/" target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                    Visit FusionNode Website
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
