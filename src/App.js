import './App.css';
import React, { Component } from "react";
import { BrowserRouter } from "react-router-dom";

import MainPage from "./pages/MainPage/MainPage";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <MainPage />
      </BrowserRouter>
    );
  }
}

export default App;
