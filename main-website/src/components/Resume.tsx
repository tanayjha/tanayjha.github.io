import React, { useState, useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import pdf from "../Assets/Resume.pdf";
import { AiOutlineDownload } from "react-icons/ai";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import "pdfjs-dist/build/pdf.worker.mjs";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

function Resume() {
  const [width, setWidth] = useState(1200);

  useEffect(() => {
    setWidth(window.innerWidth);
  }, []);

  return (
    <div>
      <Container fluid className="resume-section page-section">
        <Container className="site-container">
          <Row className="section-intro">
            <Col lg={8}>
              <h1>Resume</h1>
            </Col>
          </Row>
          <Row className="resume-actions">
            <Button variant="primary" href={pdf} target="_blank" className="download-button">
              <AiOutlineDownload />
              &nbsp;Download CV
            </Button>
          </Row>

          <Row className="resume">
            <Document file={pdf} className="d-flex justify-content-center" >
              <Page pageNumber={1} scale={width > 786 ? 1.35 : 0.55} renderTextLayer={false} />
            </Document>
          </Row>
        </Container>
      </Container>
    </div>
  );
}

export default Resume;