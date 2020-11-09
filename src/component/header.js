import React from "react";
import Jumbotron from "react-bootstrap/Jumbotron";
import logo from "../../src/image/crab.png";
import "../../src/component/jumbotron/header.css";

function Header() {
  return (
    <div>
      <Jumbotron>
        <img className="d-block w-3 image-jumbotron" src={logo} alt="Third slide" />
      </Jumbotron>
    </div>
  );
}

export default Header;
