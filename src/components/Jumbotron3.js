import React from "react";
import { Jumbotron as Jumbo, Container } from "react-bootstrap";
import styled from "styled-components";
import { Row, Col } from "react-bootstrap";
import desktop from "../assets/desktop.jpg";

const Styles = styled.div`
  .jumbo {
    background: url(${desktop}) no-repeat fixed bottom;
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

const Jumbotron3 = () => (
  <Styles>
    <Jumbo fluid className="jumbo">

      <div className="overlay" style={{backgroundColor:'white'}}></div>
      <Container>
      <Row>
      <Col xs={12} md={6} sm={12}>
      <h1 className="allow">Subscribe to our newsletter</h1> 
      <p style={{color:'black'}}>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form</p>
      </Col>
      <Col xs={12} md={6} sm={12}>
        <div className="allow2">
            <input type="email" placeholder="Enter your Email" style={{width:'80%',border:'none', margin: '5% 5% 5% 5%', padding:'2% 5%'}}></input>
      <button style={{color:'white',background:'deepskyblue', border:'none', margin:'5% 5% 5% 5%', padding:'2% 5%'}}>Subscribe</button>
      </div>
      </Col>
      </Row>
      </Container>
    </Jumbo>
  </Styles>
);

export default Jumbotron3;