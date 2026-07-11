import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import profilePic from "../../Assets/profilePic.jpeg";
import AboutCard from "../About/AboutCard";
import TechStack from "../About/TechStack";
import ToolStack from "../About/ToolStack";
import { AiFillGithub } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home() {
  return (
    <section className="home-section home-about-page" id="home">
      <Container className="site-container">
        <Row className="section-intro home-about-intro">
          <Col lg={8}>
            <h1>Tanay Jha</h1>
            <p>Software Developer · Distributed Systems Enthusiast · Learner · Tabla Player</p>
          </Col>
        </Row>

        <Row className="about-grid home-about-grid">
          <Col lg={4}>
            <img src={profilePic} alt="Tanay Jha" className="about-photo" />
          </Col>
          <Col lg={8}>
            <AboutCard />
            <div className="hero-actions home-about-actions">
              <a href="/project" className="btn-link-secondary">Projects</a>
              <a href="/resume" className="btn-link-secondary">Resume</a>
            </div>
            <div className="hero-socials" aria-label="Social links">
              <a href="https://github.com/tanayjha/" target="_blank" rel="noreferrer" aria-label="GitHub">
                <AiFillGithub />
              </a>
              <a href="https://www.linkedin.com/in/tanayjha" target="_blank" rel="noreferrer" aria-label="LinkedIn">
                <FaLinkedinIn />
              </a>
            </div>
          </Col>
        </Row>

        <div className="stack-section">
          <p className="section-kicker">Skillset</p>
          <h2>Professional Skillset</h2>
        </div>
        <TechStack />

        <div className="stack-section">
          <p className="section-kicker">Tools</p>
          <h2>Tools I use</h2>
        </div>
        <ToolStack />
      </Container>
    </section>
  );
}

export default Home;