import React, { Component } from 'react';
import { createStore } from 'redux'
import app from './store/reducers.js'
import './App.css';
import 'normalize.css';
import { Link } from 'react-router-dom'
import {Main} from './components/Main.js';

const store = createStore(app)

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          Some text
        </header>
        <nav className="App-navigation">
          <ul className="App-navigation__list">
            <li className="App-navigation__list-item"><Link to='/'>Home</Link></li>
            <li className="App-navigation__list-item"><Link to='/tops'>Tops</Link></li>
          </ul>
        </nav>
        <Main />
      </div>
    );
  }
}

export default App;
