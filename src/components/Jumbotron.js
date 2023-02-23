import React from "react";
import { Jumbotron as Jumbo, Container } from "react-bootstrap";
import styled from "styled-components";
import { Row, Col } from "react-bootstrap";

const Styles = styled.div`
  .jumbo {
    background-size: cover;
    color: #ccc;
    height: 100%;
    width: 110%;
    position: relative;
    z-index: -2;

    @media (min-width: 320px) {
      width: 104.5%;
    }
  }

  .overlay {
    background-color: black;
    opacity: 0.4;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    z-index: -1;
  }

  .allow {
    padding-left: 5px;
    text-align: left;
    padding-top: 20%;
    font-size: 50px;
    color: black;
    font-style: bold;
    z-index: -1;

    @media (max-width: 250px) {
      margin-top: 0px;
      padding-top: 0px;
    }

    &:hover {
      color: white;
    }
  }

  .allow2 {
    padding-right: 5px;
    text-align: left;
    color: black;
    font-size: 12px;
    @media (min-width: 375px) {
      padding-top: 25%;
    }

    @media (max-width: 375px) {
      padding-top: 0px;
    }
  }

  p {
    padding-left: 5px;
    text-align: left;
    font-size: 30px;
    color: white;

    @media (min-width: 375px) {
      font-size: 25px;
    }
  }
`;

const Jumbotron = () => (
  <Styles>
    <Jumbo fluid className="jumbo">
      <div className="overlay" style={{backgroundColor:'lightblue'}}></div>
      <Container>
      <Row>
      <Col xs={12} md={6} sm={12}>
      <h1 className="allow">We Are Consulting For Your Business Finances</h1> 
      <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form</p>
      <button style={{color:'white',background:'deepskyblue', border:'none', margin:'5% 5% 5% 5%', padding:'2% 5%'}}>Start now</button>
      </Col>
      <Col xs={12} md={6} sm={12}>
        <div className="allow2">
      <img src="https://cf.ltkcdn.net/womens-fashion/images/std/263155-800x515r1-professional-business-attire-women.jpg" width="100%" alt="businessWomen"/>
      </div>
      </Col>
      </Row>
      </Container>
    </Jumbo>
  </Styles>
);

export default Jumbotron;
