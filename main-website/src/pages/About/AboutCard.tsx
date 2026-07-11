import React from "react";
import Card from "react-bootstrap/Card";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <p>
          I am <span className="accent-text">Tanay Jha</span> from <span className="accent-text">Noida, India</span>.
        </p>
        <p>
          I am a computer science graduate currently working at LinkedIn. Previously, I worked at Microsoft. I started off my career as a software developer in <a href="https://www.sumologic.com/">SumoLogic</a> working on distributed systems.
        </p>
        <p>
          I have a strong Computer Science background with a passion for learning new things related to software. I have completed my Btech from NSIT, Delhi.
        </p>
        <p>Apart from coding, here are some other activities that I love to do.</p>
        <ul className="about-activity-list">
          <li>Playing Tabla</li>
          <li>Reading Books</li>
          <li>Playing Chess</li>
        </ul>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;