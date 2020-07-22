// Components
import React from "react";

// Bootstrap
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Card from "react-bootstrap/Card";

// Styled Components
import styled from "styled-components";

const StyledCard = styled(Card)`
  margin-top: 20px;
`;

const LoginForm = () => {
  return (
    <div>
      <Form>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>
        <Form.Group controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
      <StyledCard>
        <Card.Body>
          Don't have an account? Sign up <a href="#">here</a>!
        </Card.Body>
      </StyledCard>
    </div>
  );
};

export default LoginForm;
