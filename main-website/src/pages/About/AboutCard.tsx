import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Tanay Jha </span>
            from <span className="purple"> Noida, India.</span>
            <br />
            I am a computer science graduate currently working at Microsoft. I started off my career as a software developer in <a href = "https://www.sumologic.com/">SumoLogic</a> working on distributed systems. 
            I have a strong Computer Science background with a passion for learning new things related to software.
            <br />
            I have completed my Btech from NSIT, Delhi.
            <br />
            <br />
            Apart from coding, here are some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Tabla
            </li>
            <li className="about-activity">
              <ImPointRight /> Reading Books
            </li>
            <li className="about-activity">
              <ImPointRight /> Playing Chess
            </li>
          </ul>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;