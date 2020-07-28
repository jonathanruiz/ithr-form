// Components
import React from "react";
import styled from "styled-components";
import SignupForm from "../components/SignupForm";

// Styled Components
const MainApp = styled.div`
  .App {
    text-align: center;
  }
`;

const SignupPage = () => {
  return <SignupForm></SignupForm>;
};

export default SignupPage;
