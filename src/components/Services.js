import React from "react";
import LayoutNav from "./LayoutNav";
import styled from "styled-components";
import software_services from "../assets/software_services.jpg";
// import software_services1 from "../assets/software_services1.jpg";

const Container = styled.div`
  margin-top: 100px;
`;
const Title1 = styled.h1`
  padding-top: 10px;
  font-family: Merriweather;
  font-size: 25px;
`;

const Title = styled.div``;

const Section1 = styled.section`
  height: 120px;
  margin-left: 80px;
  padding-top: 120px;
`;

const Section2 = styled.section`
  height: 120px;
  margin-left: 5px;
  padding-top: 50px;
  margin-bottom: 150px;
`;

const Image1 = styled.div`
  background: url(${software_services}) no-repeat fixed center;
  background-size: cover;
  margin-left: -85px;
  margin-right: -85px;
  height: 60vh;
`;

// const Image2 = styled.div`
//   background: url(${software_services1}) center;
//   background-size: cover;
//   margin-left: -85px;
//   margin-right: -85px;
//   height: 60vh;
// `;

const Paragraph1 = styled.p`
  font-family: Merriweather;
`;

const Paragraph2 = styled.p`
  font-family: Merriweather;
`;

const Styles = styled.div``;

const Services = () => (
  <div>
    <LayoutNav />
    <Styles>
      <Container fluid>
        <Image1>
          <Section1 className="section">
            <Title1>
              <strong>Services and Solutions</strong>
            </Title1>
            <Paragraph1>Our offerings:</Paragraph1>
            <Paragraph2>
              <strong>Quantum IT Innovation</strong> is a market leader in the areas of
              software development and deployment, <br />
              systems integration, software implementation, software support
              services
              <br /> and software enhancement and customization
            </Paragraph2>
          </Section1>
        </Image1>
        {/* <Image2> */}
        <Section2 className="section">
          <Title>Document Management Solution</Title>
          <p>Our offerings:</p>
          <p>
            Ut sit amet rutrum diam. Curabitur lacinia velit orci, lobortis
            ornare est euismod eget. Aenean scelerisque finibus ullamcorper.
            Praesent lacinia faucibus justo, at iaculis orci dapibus id. Cras
            eget quam nec mi bibendum egestas. Praesent rutrum orci nec nulla
            blandit semper. Suspendisse rutrum lacus ligula, sed molestie risus
            tristique in. Nullam iaculis nisl a ligula elementum faucibus.
            Nullam sit amet odio ex.
          </p>
        </Section2>
        {/* </Image2> */}
      </Container>
    </Styles>
  </div>
);

export default Services;
