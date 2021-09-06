import React from "react";
import ReactDOM from "react-dom";
import MainView from "./components/main-view/main-view";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";

import "./index.scss";

class MyFlixApplication extends React.Component {
  render() {
    return (
      <Container>
        <Nav variant="pills" className="justify-content-end" defaultActiveKey="/home">
          <Nav.Item>
            <Nav.Link href="#home">Home</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="#register">Register</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="#login">Login</Nav.Link>
          </Nav.Item>
        </Nav>
        <MainView />
      </Container> 
    );
  }
}

const container = document.getElementsByClassName("app-container")[0];

ReactDOM.render(React.createElement(MyFlixApplication), container);
