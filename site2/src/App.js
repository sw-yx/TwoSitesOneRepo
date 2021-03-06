import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  state = { toggle: true };
  toggleToggle = () => this.setState({ toggle: !this.state.toggle });
  render() {
    const { toggle } = this.state;
    return (
      <div className="App">
        <header className="App-header">
          <h1>This is Site Two!</h1>
          <ul>
            <li>
              <A href="https://twositesonerepo-site1.netlify.com/">
                See Site One
              </A>
            </li>
            <li>
              <A href="https://github.com/sw-yx/TwoSitesOneRepo/">
                See Source for both
              </A>
            </li>
          </ul>
          <img
            src={logo}
            onClick={this.toggleToggle}
            className={"App-logo " + (toggle && "Logo-spin")}
            alt="logo"
          />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <A href="https://reactjs.org/">Learn React</A>
          <A href="https://parceljs.org/getting_started.html">Learn Parcel</A>
        </header>
      </div>
    );
  }
}

function A(props) {
  // you can use object spread because babel-preset-react-app is set up for you
  const { href, children, ...rest } = props;
  return (
    <a
      className="App-link"
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      {...rest}
    >
      {children}
    </a>
  );
}
export default App;
