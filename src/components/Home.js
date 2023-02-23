import React from "react";
import styled from "styled-components";
import docmgt from "../assets/docmgt.jpg";
import cloud from "../assets/cloud.jpg";
import training from "../assets/training_Cropped.jpg";
import datarec from "../assets/datarec.jpg";
import { Card, Row, Col } from "react-bootstrap";
import Jumbotron from "./Jumbotron";
import Jumbotron2 from "./Jumbotron2";
import NavBar from "./NavBar";
import Jumbotron3 from "./Jumbotron3";

// import { device } from "./device";

const Container = styled.div`
  max-width: 100%;
  width: auto !important;
  overflow-x: hidden !important;
`;

const Styles = styled.div`
  .intro {
    margin-left: 30px;
    @media (max-width: 420px) {
      margin-top: 25px;
    }

    @media (max-width: 375px) {
      margin-top: 25px;
      margin-left: 20px;
      margin-right: 15px;
    }

    @media (max-width: 360px) {
      margin-top: 30px;
    }

    @media (max-width: 320px) {
      margin-top: 10px;
      margin-left: 20px;
      margin-right: 15px;
    }
  }

  .colintro1 {
    @media (max-width: 320px) {
      margin-top: 5px;
    }
  }

  .colintro2 {
    @media (max-width: 420px) {
      margin-top: 10px;
    }

    @media (max-width: 375px) {
      margin-top: 10px;
    }
  }

  .colintro3 {
    @media (max-width: 420px) {
      margin-top: 10px;
    }

    @media (max-width: 375px) {
      margin-top: 10px;
    }

    @media (max-width: 360px) {
      margin-top: 10px;
    }

    @media (max-width: 320px) {
      margin-top: 10px;
    }
  }

  // Card styling //

  .imagesettings {
    height: 200px;
    width: 280px;

    @media (max-width: 420px) {
      width: 278px;
      margin-right: 15px;
    }

    @media (max-width: 375px) {
      width: 278px;
      margin-right: 15px;
    }

    @media (max-width: 320px) {
      width: 278px;
      margin-right: 15px;
    }
  }

  .card-settings1 {
    margin-top: 20px;
    margin-left: 25px;
    width: 17.6rem;

    @media (max-width: 420px) {
      margin-left: 65px;
    }

    @media (max-width: 375px) {
      margin-left: 50px;
    }

    @media (max-width: 360px) {
      margin-left: 40px;
    }

    @media (max-width: 320px) {
      margin-left: 20px;
      width: 17.5rem;
    }
  }

  .card-settings2 {
    margin-top: 20px;
    margin-right: 40px;
    width: 17.6rem;

    @media (max-width: 420px) {
      margin-left: 65px;
    }

    @media (max-width: 375px) {
      margin-left: 50px;
    }

    @media (max-width: 360px) {
      margin-left: 40px;
    }

    @media (max-width: 320px) {
      margin-left: 20px;
      width: 17.5rem;
    }
  }

  .card-settings3 {
    margin-top: 20px;
    width: 17.6rem;

    @media (max-width: 420px) {
      margin-left: 65px;
    }

    @media (max-width: 375px) {
      margin-left: 50px;
    }

    @media (max-width: 360px) {
      margin-left: 40px;
    }

    @media (max-width: 320px) {
      margin-left: 20px;
      width: 17.5rem;
    }
  }

  .card-settings4 {
    margin-top: 20px;
    margin-left: -15px;
    width: 17.6rem;

    @media (max-width: 420px) {
      margin-left: 65px;
    }

    @media (max-width: 375px) {
      margin-left: 50px;
    }

    @media (max-width: 360px) {
      margin-left: 40px;
    }

    @media (max-width: 320px) {
      margin-left: 20px;
      width: 17.5rem;
    }
  }

  // Project Container //
  .button-project {
    margin-top: 35px;
    border-radius: 2px;
    margin-left: 120px;

    @media (max-width: 420px) {
      margin-left: -280px;
      margin-right: -80px;
      margin-top: 110px;
      width: 150px;
    }

    @media (max-width: 375px) {
      margin-left: -295px;
      margin-right: -80px;
      margin-top: 110px;
      width: 150px;
    }

    @media (max-width: 360px) {
      margin-left: -220px;
      margin-right: -80px;
      margin-top: 110px;
      width: 150px;
    }

    @media (max-width: 320px) {
      margin-left: -220px;
      padding-left: -150px;
      margin-top: 110px;
      width: 150px;
    }
  }

  .projectmerge {
    margin-left: -180px;
    margin-right: -10px;

    @media (max-width: 420px) {
      margin-right: 10px;
    }

    @media (max-width: 375px) {
      margin-left: -180px;
      margin-right: -40px;
    }

    @media (max-width: 360px) {
      margin-right: 80px;
    }

    @media (max-width: 320px) {
      margin-left: -210px;
      margin-right: -10px;
    }
  }

  // Project Container ends //
`;

const Home = () => (
  <div>
    <NavBar />
    <Container fluid>
      <div>
      <Jumbotron />
      <Jumbotron2 />
      </div>
      <Styles>
        <div style={{backgroundColor:'paleturquoise'}}>
        <Row>
          <Col xs={12} md={12} sm={12} style={{textAlign:'center'}}>
              <h1>Our services</h1>
              <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form</p>
          </Col>
          <Col xs={12} md={3} sm={6}>
            <Card border="light" className="card-settings1">
              <Card.Img
                className="imagesettings"
                src={`${training}`}
                alt="Card image"
              />
              <Card.Body>
                <Card.Text>
                  <h5>Training</h5>
                  Enable your organization work remotely while ensuring business
                  continuity using our Document Archiving Solution.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>

          <Col xs={12} md={3} sm={6}>
            <Card border="light" className="card-settings2">
              <Card.Img
                className="imagesettings"
                src={`${cloud}`}
                alt="Card image"
              />
              <Card.Body>
                <Card.Text>
                  <h5>Cloud Services and Solutions</h5>
                  Enable your organization work remotely while ensuring business
                  continuity using our Document Archiving Solution.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>

          <Col xs={12} md={3} sm={6}>
            <Card border="light" className="card-settings3">
              <Card.Img
                className="imagesettings"
                src={`${docmgt}`}
                alt="Card image"
              />
              <Card.Body>
                <Card.Text>
                  <h5>Electronic Document Management Solution</h5>
                  Enable your organization work remotely while ensuring business
                  continuity using our Document Archiving Solution.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>

          <Col xs={12} md={3} sm={6}>
            <Card border="light" className="card-settings4">
              <Card.Img
                className="imagesettings"
                src={`${datarec}`}
                alt="Card image"
              />
              <Card.Body>
                <Card.Text>
                  <h5>Data Recovery</h5>
                  Enable your organization work remotely while ensuring business
                  continuity using our Document Archiving Solution.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col xs={12} md={12} sm={12} style={{textAlign:'center'}}>
          <button style={{color:'white',background:'deepskyblue', border:'none', margin:'5% 5% 5% 5%', padding:'2% 5%'}}>All Services</button>
          </Col>
        </Row>
        </div>
      </Styles>
    </Container>
    <Jumbotron3/>
  </div>
);

export default Home;