import React, { Component } from 'react';
import { createStore, applyMiddleware  } from 'redux'
import { Provider } from 'react-redux'
import thunkMiddleware from 'redux-thunk'

import app from './store/reducers.js'
import './App.css';
import 'normalize.css';
import { Link } from 'react-router-dom'
import {Main} from './components/Main.js';

const store = createStore(
  app,  
  applyMiddleware(
    thunkMiddleware,
  )
)

class App extends Component {
  render() {
    return (
      <Provider store={store}>
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
      </Provider>
    );
  }
}

export default App;
