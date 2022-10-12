import { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  constructor() {
    super();

    this.state = {
      name: "Darryl",
      company: "ZTM",
    };
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Hi {this.state.name}, I work at {this.state.company}
          </p>
          <button
            onClick={() => {
              // Set a new Object for React to change
              // Otherwise it will point to the same object and not change
              this.setState({ name: "Andrei", company: "Clear View" });
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
