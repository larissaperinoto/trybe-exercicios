import React from 'react';
import { Switch, Route, Link } from 'react-router-dom';

export default function App() {
  return (
    <div>
      <Link to="/">Início</Link>
      <br />
      <Link to="/about">Sobre</Link>
      <Switch>
        <Route exact path="/">
          <div>
            <h1>Você está na página Início</h1>
          </div>
        </Route>
        <Route path="/about">
          <div>
            <h1>Você está na página Sobre</h1>
          </div>
        </Route>
        <Route path='*'>
          <div>
            <h1>Página não encontrada</h1>
          </div>
        </Route>
      </Switch>
    </div>
  );
};
