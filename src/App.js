import React, { Component } from 'react';
// eslint-disable-next-line
import logo from './logo.svg';
import Proj from './Proj.js';
import './App.css';
import Firstproj from './Firstproj.js';
import InputForName from './InputForName.js';

class App extends Component {
  render() {
    return (
      <div>
        <Firstproj name="Satheesh"/>
        <Proj/>
        <InputForName />
      </div>
    );
  }
}

export default App;
