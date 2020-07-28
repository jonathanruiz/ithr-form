// Components
import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

// Bootstrap
import Card from "react-bootstrap/Card";

// Styled Components
const StyledCard = styled(Card)`
  margin-top: 20px;
`;

const LoginForm = () => {
  return (
    <StyledCard>
      <Card.Body>
        Don't have an account? Sign up <Link to="/signup">here</Link>!
      </Card.Body>
    </StyledCard>
  );
};

export default LoginForm;
