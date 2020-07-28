// Components
import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { createGlobalStyle } from "styled-components";
import Template from "../template/Template";
import LoginPage from "../pages/LoginPage";
import SignupPage from "../pages/SignupPage";
import Dashboard from "../pages/DashboardPage";

import Alert from "react-bootstrap/Alert";

// Styled Components
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

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/submitted">
          <Template
            page={<Alert variant="primary">This is a primary alert.</Alert>}
          />
        </Route>
        <Route path="/dashboard">
          <Dashboard />
        </Route>
        <Route path="/signup">
          <Template page={<SignupPage />} />
        </Route>
        <Route path="/">
          <Template page={<LoginPage />} />
        </Route>
      </Switch>
      <GlobalStyle />
    </Router>
  );
};

export default App;
