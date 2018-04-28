import React from 'react';
import { Switch, Route } from 'react-router-dom'
import {Home} from './Home';
import {Tops} from './Tops';

export const Main = () => (
  <main>
    <Switch>
      <Route exact path='/' component={Home}/>
      <Route path='/tops' component={Tops}/>
    </Switch>
  </main>
)