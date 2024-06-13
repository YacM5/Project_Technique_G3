import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Image1 from "../../assets/images/image_1.png";
import Image2 from "../../assets/images/image_2.png";
import Image3 from "../../assets/images/image.png"; // Adjust the path if needed

function MML() {
  return (
    <Container fluid className="mt-5">
      <Card className="mb-4">
        <Card.Body>
          <Card.Title className="text-center">Model Comparison</Card.Title>
          <Row>
            <Col md={6} className="d-flex justify-content-center">
              <img
                src={Image1}
                alt="Model Comparison 1"
                className="img-fluid rounded"
              />
            </Col>
            <Col md={6} className="d-flex justify-content-center">
              <img
                src={Image2}
                alt="Model Comparison 2"
                className="img-fluid rounded"
              />
            </Col>
          </Row>
          <Row className="mt-4">
            <Col className="d-flex justify-content-center">
              <img
                src={Image3}
                alt="Model Comparison 3"
                className="img-fluid rounded"
              />
            </Col>
          </Row>
        </Card.Body>
      </Card>
    </Container>
  );
}

export default MML;
