import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App__container">
          {this.props.children}
        </div>
      </div>
    );
  }
}

export default App;
