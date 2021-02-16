import logo from "./logo.svg";
import "./App.css";
import React from "react";
import pooPoo from "./poopoo.jpg";

function foobar() {
  return (
    <React.Fragment>
      <h2>Look here as well</h2>
      <p>poo poo pee pee</p>
      <h5>pew pew</h5>
    </React.Fragment>
  );
}

function App() {
  let message = <h2>Look here</h2>;
  return (
    <React.Fragment>
      <h1 className="header">Hello World</h1>
      {message}
      <p
        style={{
          fontFamily: 'monospace',
          fontSize: "24px"
        }}
      >
        Welcome to my home page
      </p>
      <img src={require("./puppy.jpg").default} />
      <img src={pooPoo} />
      {foobar()}
    </React.Fragment>
  );
}

export default App;