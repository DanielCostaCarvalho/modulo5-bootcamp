import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Repository from './pages/Repository';
import Main from './pages/Main';

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/repository/:repository" component={Repository} />
        <Route path="/" exact component={Main} />
      </Switch>
    </BrowserRouter>
  );
}
