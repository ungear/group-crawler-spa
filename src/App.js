import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          Some text
        </header>
        <nav className="App-navigation">
          <ul className="App-navigation__list">
            <li className="App-navigation__list-item">1</li>
            <li className="App-navigation__list-item">2</li>
          </ul>
        </nav>
      </div>
    );
  }
}

export default App;
