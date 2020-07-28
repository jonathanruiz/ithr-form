// Components
import React from "react";
import MainHeader from "../components/MainHeader";
import styled from "styled-components";

// Bootstrap
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "bootstrap/dist/css/bootstrap.min.css";

// Styled Components
const MainApp = styled.div`
  .App {
    text-align: center;
  }
`;

const LoginPage = (props) => {
  return (
    <MainApp className="App">
      <Container fluid="md">
        <Row>
          <Col>
            <MainHeader></MainHeader>
          </Col>
        </Row>
        <Row>
          <Col xs={3} />
          <Col xs={6}>{props.page}</Col>
          <Col xs={3} />
        </Row>
      </Container>
    </MainApp>
  );
};

export default LoginPage;
