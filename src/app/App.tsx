import React from 'react';
import { Switch, Route } from 'react-router-dom';
import DocumentTitle from 'react-document-title';
import Game from './pages/Game';
import Home from './pages/Home';

function App() {
  return (
    <Switch>
      <Route path="/game">
        <DocumentTitle title="Game">
          <Game />
        </DocumentTitle>
      </Route>
      <Route path="/">
        <DocumentTitle title="Trivia Fighter!">
          <Home />
        </DocumentTitle>
      </Route>
    </Switch>
  );
}

export default App;
