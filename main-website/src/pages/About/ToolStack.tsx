import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiPostman,
  SiVercel,
  SiMacos,
  SiApachekafka,
} from "react-icons/si";

function Toolstack() {
  return (
    <Row className="skill-grid">
      <Col xs={4} md={2} className="tech-icons" title="macOS">
        <SiMacos />
        <span>macOS</span>
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="Postman">
        <SiPostman />
        <span>Postman</span>
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="Kafka">
        <SiApachekafka />
        <span>Kafka</span>
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="Vercel">
        <SiVercel />
        <span>Vercel</span>
      </Col>
    </Row>
  );
}

export default Toolstack;