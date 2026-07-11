import React from "react";
import Card from "react-bootstrap/Card";
import { CgWebsite } from "react-icons/cg";
import { BsGithub } from "react-icons/bs";

interface ProjectCardProps {
  imgPath: string;
  title: string;
  description: string;
  ghLink?: string;
  isBlog: boolean;
  demoLink?: string;
}

function ProjectCards(props: ProjectCardProps) {
  return (
    <Card className="project-card-view">
      <div className="project-card-media">
        <Card.Img src={props.imgPath} alt="" />
      </div>
      <Card.Body className="project-card-body">
        <p className="project-label">Project</p>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text>{props.description}</Card.Text>
        <div className="project-links">
          {props.ghLink && (
            <a href={props.ghLink} target="_blank" rel="noreferrer">
              <BsGithub />
              {props.isBlog ? "Blog" : "GitHub"}
            </a>
          )}
          {!props.isBlog && props.demoLink && (
            <a href={props.demoLink} target={props.demoLink.startsWith("/") ? "_self" : "_blank"} rel="noreferrer">
              <CgWebsite />
              Demo
            </a>
          )}
        </div>
      </Card.Body>
    </Card>
  );
}
export default ProjectCards;