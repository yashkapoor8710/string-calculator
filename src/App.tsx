import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { StringCalculator } from "./StringCalculator";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <StringCalculator />
      </header>
    </div>
  );
}

export default App;
