import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../../components/Particle";
import ProjectCard from "./ProjectCards";
import proj1 from "../../Assets/Projects/proj1.png";
import proj2 from "../../Assets/Projects/proj2.png";
import proj3 from "../../Assets/Projects/proj3.png";
import proj4 from "../../Assets/Projects/proj4.png";
import proj5 from "../../Assets/Projects/proj5.png";
import proj6 from "../../Assets/Projects/proj6.png";
import proj7 from "../../Assets/Projects/proj7.png";
import proj8 from "../../Assets/Projects/proj8.png";
import proj9 from "../../Assets/Projects/proj9.png";
import proj10 from "../../Assets/Projects/proj10.png";
import proj11 from "../../Assets/Projects/proj11.png";
import proj12 from "../../Assets/Projects/proj12.png";
import proj13 from "../../Assets/Projects/proj13.png";
import proj14 from "../../Assets/Projects/proj14.png";
import proj15 from "../../Assets/Projects/proj15.png";
import proj16 from "../../Assets/Projects/proj16.png";
import proj17 from "../../Assets/Projects/proj17.png";
import proj18 from "../../Assets/Projects/proj18.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Personal <strong className="purple">Projects </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few personal projects I've worked on.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={proj1}
              isBlog={false}
              title="Touchless Typing Using CNNs"
              description="Developed a system to allow people to type characters without physically touching the screen of the device. This was my B.Tech project."
              ghLink="https://github.com/tanayjha/touchless-typing"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={proj2}
              isBlog={false}
              title="Hostel Management System"
              description="Developed a single website for all the hostels of our college to automate all the work regarding hostel admissions and related services."
              ghLink="https://github.com/tanayjha/Nsit-Hostel-Ms"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={proj3}
              isBlog={false}
              title="Aspire Project"
              description="Automated the process of website creation by taking inputs from the user in specified format. A JSON input was converted into database tables. It was a summer internship."
              ghLink="http://rcorp.co.in/"            
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={proj4}
              isBlog={false}
              title="Automatic Tabla Player"
              description="This project is still in progress. It aims at creating an automatic tabla player if provided with a song."
              ghLink="https://github.com/tanayjha/Automatic-Tabla-Player"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={proj5}
              isBlog={false}
              title="Snake and Apple Game"
              description="A simple snake and apple game created using the pygame library for python. It was also ported to android using the pygame subset for android."
              ghLink="https://github.com/tanayjha/Snaky-Pygame"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={proj6}
              isBlog={false}
              title="Codeforces Rating"
              description="A codeforces rating extractor which extracts their rating from the site and plots a graph of their rating hence showing a comparison."
              ghLink="https://github.com/tanayjha/Beautiful-Soup-Scripts"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={proj7}
              isBlog={false}
              title="Wicket Informer"
              description="A script which plays music if a wicket falls in a live cricket match. It extracts data from the espn website."
              ghLink="https://github.com/tanayjha/Beautiful-Soup-Scripts"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={proj8}
              isBlog={false}
              title="Tic Tac Toe Game"
              description="Created an unbeatable game of tic-tac-toe game using the famous minimax algorithm in the field of artificial intelligence."
              ghLink="https://github.com/tanayjha/Artifical-Intelligence"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={proj9}
              isBlog={false}
              title="Handwritten Digit Recogniser"
              description="Created a handwitten digit recogniser using nueral networks and the backpropagation algorithm to guess the written digit."
              ghLink="https://github.com/tanayjha/Machine-Learning"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={proj10}
              isBlog={false}
              title="Spam Classifier"
              description="Created a python application which when presented with the text of an email, classifies it as spam or ham using the naive bayesian algorithm to do so."
              ghLink="https://github.com/tanayjha/Machine-Learning"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={proj11}
              isBlog={false}
              title="IMS Hacker"
              description="Created a script to extract the password of a user from the college website and reported the bug."
              ghLink="https://github.com/tanayjha/Beautiful-Soup-Scripts"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={proj12}
              isBlog={false}
              title="Battery Informer"
              description="Created a bash script to notify when the battery of the laptop gets fully charged."
              ghLink="https://github.com/tanayjha/Beautiful-Soup-Scripts"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={proj13}
              isBlog={false}
              title="Prayas"
              description="Created a simple website for the NGO run by the college to teach the poor students. Basic functionalities to manage the student and volunteers were added."
              ghLink="https://github.com/tanayjha/Prayas"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={proj14}
              isBlog={false}
              title="DS And Algo Library"
              description="Implemented some classic data structures and algorithms in C++ ready to be used in competitive programming contests."
              ghLink="https://github.com/tanayjha/Data-Structures"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={proj15}
              isBlog={false}
              title="Movie Rating Extractor"
              description="Created a python script using beautiful Soup to extract the list of top movies sorted according to their rating from IMDB."
              ghLink="https://github.com/tanayjha/Beautiful-Soup-Scripts"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={proj16}
              isBlog={false}
              title="Spell Checker"
              description="Created a spell checker using the edit distance algorithm and also created a UI for it using the Tkinter module of python."
              ghLink="https://github.com/tanayjha/College-Projects"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={proj17}
              isBlog={false}
              title="Student Management System"
              description="Created a student management system as part of the project for database lab. It was coded in C++ with extensive checks in place to ensure bug free database."
              ghLink="https://github.com/tanayjha/College-Projects"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={proj18}
              isBlog={false}
              title="CartPole Balancer"
              description="Used deep neural networks to solve the cart pole balancing challenge of the open AI gym. Consistently achieved a score of 200 points by training for on around 10k games."
              ghLink="https://github.com/tanayjha/Artifical-Intelligence"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;