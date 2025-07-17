import React from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import './CareerForm.css';

const CareerForm = () => {
  return (
    <div className="career-section container-fluid ">
      <Container >
        <Row>
          {/* === Left Side: Form === */}
          <Col md={7}>
          <div className='text-center'>
             <h2 className="page-heading ">Join Our Team</h2>
          </div>
           
            <Form encType="multipart/form-data">
              <Row className="mb-3">
                <Col md={6}>
                  <Form.Group controlId="formFullName">
                    <Form.Label>Full Name</Form.Label>
                    <Form.Control type="text" name="fullName" placeholder="Enter full name" required />
                  </Form.Group>
                </Col>
                <Col md={6}>
                  <Form.Group controlId="formEmail">
                    <Form.Label>Email Address</Form.Label>
                    <Form.Control type="email" name="email" placeholder="Enter email" required />
                  </Form.Group>
                </Col>
              </Row>

              <Row className="mb-3">
                <Col md={6}>
                  <Form.Group controlId="formContact">
                    <Form.Label>Contact Number</Form.Label>
                    <Form.Control type="tel" name="contact" placeholder="Enter contact number" required />
                  </Form.Group>
                </Col>
                <Col md={6}>
                  <Form.Group controlId="formCity">
                    <Form.Label>City/Country</Form.Label>
                    <Form.Control type="text" name="location" placeholder="Enter city/country" required />
                  </Form.Group>
                </Col>
              </Row>

              <Row className="mb-3">
                <Col>
                  <Form.Group controlId="formResume">
                    <Form.Label>Attach Resume</Form.Label>
                    <Form.Control type="file" name="resume" required />
                  </Form.Group>
                </Col>
              </Row>

              <Button className='career-form-button pink-button' type="submit" variant="">Submit</Button>
            </Form>
          </Col>

          {/* === Right Side: Info Boxes === */}
          <Col lg={4} md={5}>
            <div className="info-box mb-4">
              <h5>Alutuff International</h5>
              <p>Choupla Road, Civil Lines, Bareilly</p>
            </div>
            <div className="info-box mb-4">
              <h5>+91 63968 54974</h5>
              <p>Mon to Fri 9am to 6pm</p>
            </div>
            <div className="info-box">
              <h5>sales@alutuff.in</h5>
              <p>Send us your query anytime!</p>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default CareerForm;
