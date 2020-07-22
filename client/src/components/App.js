// Components
import React from "react";
import LoginForm from "./LoginForm";
import MainHeader from "./MainHeader";

// Bootstrap
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "bootstrap/dist/css/bootstrap.min.css";

// Styled Components
import styled, { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
      monospace;
  }

`;

const MainApp = styled.div`
  .App {
    text-align: center;
  }
`;

const App = () => {
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
          <Col xs={6}>
            <LoginForm></LoginForm>
          </Col>
          <Col xs={3} />
        </Row>
      </Container>
      <GlobalStyle></GlobalStyle>
    </MainApp>
  );
};

export default App;
