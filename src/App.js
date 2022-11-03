import { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  constructor() {
    super();

    this.state = {
      // initialise state to an empty array
      monsters: [],
    };
  }

  // first time a component (This is the APP component) gets rendered to the DOM
  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      // receive a response from the API
      .then((response) =>
        //convert the response into JSON
        response
          .json()
          // pass whatever is retrived into a variable you can name - whatever name you pick
          .then((users) =>
            // set the new state
            this.setState(
              () => {
                return { monsters: users };
              },
              // use second callback to ensure that state has changed
              () => {
                console.log(this.state);
              }
            )
          )
      );
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

        {/* // enter into js with {} */}
        {this.state.monsters.map((monster) => {
          return (
            <div key={monster.id}>
              <h1>{monster.name}</h1>
            </div>
          );
        })}
      </div>
    );
  }
}

export default App;
