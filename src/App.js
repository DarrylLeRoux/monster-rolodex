import { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [
        {
          name: "Linda",
        },
        {
          name: "Frank",
        },
        {
          name: "Jack",
        },
      ],
    };
  }

  render() {
    return (
      <div className="App">
        {/* <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Hi, I am {this.state.name} and I work at {this.state.company}
          </p>
          <button
            onClick={() => {
              // Set a new Object for React to change
              // Otherwise it will point to the same object and not change
              this.setState(
                () => {
                  return {
                    name: "Andrei",
                    company: `ZTM with ${this.state.name}`,
                  };
                },
                // second function passed to setState( , second) will only run once the first has been executed, and therefore update the state for the console.log
                () => {
                  console.log(this.state);
                }
              );
            }}
          >
            Change Name
          </button>
        </header> */}

        {this.state.monsters.map((monster) => {
          return <h1>{monster.name}</h1>;
        })}
      </div>
    );
  }
}

export default App;
