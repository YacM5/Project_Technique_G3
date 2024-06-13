import React, { useState } from "react";
import {
  Navbar,
  Container,
  Row,
  Col,
  Button,
  Form as BootstrapForm,
  Card,
} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Form.css";
import Image1 from "../../assets/images/image_1.png";
import Image2 from "../../assets/images/image_2.png";
import Image3 from "../../assets/images/image.png";

function Form() {
  const [formData, setFormData] = useState({
    Accommodates: "",
    Bedrooms: "",
    Bathrooms: "",
    Beds: "",
    Minimum_of_Nights: "",
    Maximum_of_Nights: "",
    reviews: "",
  });

  const [predictedValue, setPredictedValue] = useState(null);
  const [showComparison, setShowComparison] = useState(false); // State to control visibility of comparison images

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    if (/^\d*$/.test(value) || value === "") {
      setFormData({ ...formData, [id]: value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const dataToSend = {
      data: {
        accommodates: parseInt(formData.Accommodates),
        bedrooms: parseInt(formData.Bedrooms),
        bathrooms: parseInt(formData.Bathrooms),
        beds: parseInt(formData.Beds),
        minimum_nights: parseInt(formData.Minimum_of_Nights),
        maximum_nights: parseInt(formData.Maximum_of_Nights),
        reviews: parseInt(formData.reviews),
      },
    };

    try {
      const response = await fetch("http://127.0.0.1:8000/api/predict/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(dataToSend),
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const result = await response.json();
      setPredictedValue(result.predicted_value);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const handleComparisonClick = () => {
    setShowComparison(!showComparison);
  };

  return (
    <>
      <div
        className="background-image"
        style={{
          backgroundImage: `url('https://a.cdn-hotels.com/gdcs/production169/d86/6e1a6078-2b54-403b-b23e-63690ff86069.jpg')`,
          opacity: 0.5, // Adjust the opacity as needed
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          zIndex: -1,
        }}
      />
      <Navbar
        bg="white"
        variant="light"
        className="rounded justify-content-center"
        style={{ borderRadius: "15px", padding: "1rem 2rem" }}
      >
        <Container className="d-flex justify-content-between align-items-center">
          <img
            src="https://th.bing.com/th/id/R.d97d73f5e73dfe85f5cce6558429ebb5?rik=6Y393%2b4rAkA2Xg&riu=http%3a%2f%2fpluspng.com%2fimg-png%2fairbnb-logo-png-airbnb-logo-1600.png&ehk=WAmNzwdvuNRieYe57EPvJlUkIJzLt9Bd0hT0HaEgsvs%3d&risl=&pid=ImgRaw&r=0"
            width="100"
            height="70"
            className="d-inline-block align-top"
            alt="Airbnb logo"
            style={{ zIndex: 1 }} // Ensure the logo is in front
          />
          <span
            style={{
              color: "#C96D30",
              fontFamily: "Times New Roman, serif",
              fontSize: "3.5rem", // Increased font size
              letterSpacing: "1.0rem",
              textAlign: "center",
              flex: 1,
              marginLeft: "-100px", // This will pull the title to the center while keeping the logo to the extreme left
            }}
          >
            Airbnb Vision
          </span>
        </Container>
      </Navbar>

      <Container className="mt-5">
        <h2
          className="text-center mb-4"
          style={{
            color: "#C96D30",
            fontFamily: "Poppins, sans-serif",
            letterSpacing: "0.6rem",
          }}
        >
          Predict Airbnb Prices
        </h2>
        <BootstrapForm onSubmit={handleSubmit}>
          <Row className="g-3">
            {Object.entries(formData).map(([key, value], index) => (
              <Col key={index} md={6}>
                <div className="mb-3">
                  <label
                    htmlFor={`validationTextarea${index}`}
                    className="form-label"
                    style={{
                      color: "#C96D30",
                      fontFamily: "Poppins, sans-serif",
                      fontWeight: "bold", // Make labels bold
                    }}
                  >
                    {key.charAt(0).toUpperCase() +
                      key.slice(1).replace(/_/g, " ")}
                  </label>
                  <input
                    type="text"
                    className="form-control custom-input"
                    id={key}
                    placeholder={`Enter ${key.replace(/_/g, " ")}`}
                    value={value}
                    onChange={handleInputChange}
                    required
                    style={{
                      borderColor: "#C96D30",
                      boxShadow: "0 0 5px rgba(0, 123, 255, 0.5)",
                      fontFamily: "Poppins, sans-serif",
                    }}
                  />
                </div>
              </Col>
            ))}
          </Row>
          <div className="text-center">
            <Button className="btn btn-primary" type="submit">
              Submit
            </Button>
          </div>
        </BootstrapForm>
        {predictedValue !== null && (
          <div className="alert alert-success mt-3 text-center" role="alert">
            Predicted Value: {predictedValue} $
          </div>
        )}
        <div className="fixed-bottom-right">
          <Button className="btn btn-secondary" onClick={handleComparisonClick}>
            Comparaison
          </Button>
        </div>
        {showComparison && (
          <Card className="mt-5">
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
                <Col md={6} className="d-flex justify-content-center">
                  <img
                    src={Image3}
                    alt="Model Comparison 3"
                    className="img-fluid rounded"
                  />
                </Col>
              </Row>
            </Card.Body>
          </Card>
        )}
      </Container>
    </>
  );
}

export default Form;
