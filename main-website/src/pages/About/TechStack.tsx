import React from "react";
import { Col, Row } from "react-bootstrap";
import { CgCPlusPlus } from "react-icons/cg";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiMongodb,
  DiPython,
  DiGit,
  DiJava,
} from "react-icons/di";
import { SiRedis } from "react-icons/si";
import { DiScala } from "react-icons/di";

function Techstack() {
  return (
    <Row className="skill-grid">
      <Col xs={4} md={2} className="tech-icons" title="Java">
        <DiJava />
        <span>Java</span>
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="C++">
        <CgCPlusPlus />
        <span>C++</span>
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="Python">
        <DiPython />
        <span>Python</span>
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="JavaScript">
        <DiJavascript1 />
        <span>JavaScript</span>
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="Scala">
        <DiScala />
        <span>Scala</span>
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="NodeJS">
        <DiNodejs />
        <span>NodeJS</span>
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="ReactJS">
        <DiReact />
        <span>ReactJS</span>
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="MongoDB">
        <DiMongodb />
        <span>MongoDB</span>
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="Git">
        <DiGit />
        <span>Git</span>
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="Redis">
        <SiRedis />
        <span>Redis</span>
      </Col>
    </Row>
  );
}

export default Techstack;