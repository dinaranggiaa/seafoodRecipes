import logo from "./image/crab.png";
import "./App.css";
// import { Jumbotron, Form, Button } from "react-bootstrap";
import Menu from "./component/menu/menuComponent";

function App() {
  return (
    <div class="w3-top">
      <div class="w3-bar w3-white w3-padding w3-card">
        <a href="#home" className="w3-bar-item w3-button judul">
          <img src={logo} className="logo" alt="logo" />
          &nbsp; Seafood Recipes
        </a>

        <div className="w3-right w3-hide-small navbar-menu">
          <a href="#home" class="w3-bar-item w3-button">
            Home
          </a>
          <a href="#recipes" class="w3-bar-item w3-button">
            Recipes
          </a>
          <a href="#subscription" class="w3-bar-item w3-button">
            Subscription
          </a>
          <a href="#rate" class="w3-bar-item w3-button">
            Rate
          </a>
        </div>
      </div>
      {/* <Jumbotron>
        <img
          className="d-block w-3 image-jumbotron"
          src={logo}
          alt="Third slide"
        />
      </Jumbotron> */}
      <div className="container">
        <p>List Menu</p>
      </div>
      <hr />
      <div className="container">
        <Menu />
      </div>
    </div>
  );
}

export default App;
