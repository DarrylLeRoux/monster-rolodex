import { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  constructor() {
    super();

    this.state = {
      name: "Darryl",
    };
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>Hi {this.state.name}</p>
          <button
            onClick={() => {
              // Set a new Object for React to change
              // Otherwise it will point to the same object
              this.setState({ name: "Andrei" });
            }}
          >
            Change Name
          </button>
        </header>
      </div>
    );
  }
}

export default App;
