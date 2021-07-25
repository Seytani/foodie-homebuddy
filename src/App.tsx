import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import PrivateRoute from './components/PrivateRoute';
import Header from './components/Header';

function App() {
  const token = getCookie('jwt');
  const callback: string = process.env.REACT_APP_BASE_URL || 'http://localhost:4000';
  const authProviderUrl: string = process.env.REACT_APP_AUTH_PROVIDER || 'http://localhost:3000';
  const loginUrl = `${authProviderUrl}/users/sign_in?callback=${callback}`
  const singUpUrl = `${authProviderUrl}/users/sign_up?callback=${callback}`;

  return (
    <div className="App">
      <Router>
        <Header loginUrl={loginUrl} signUpUrl={singUpUrl}></Header>
        <Switch>
          <PrivateRoute jwt={token} path="/ingredients" redirectUrl={loginUrl}>
            <h1>Ingredients are private</h1>
          </PrivateRoute>
          <Route path="/">
            <h1>HomePage is public</h1>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

function getCookie(cookieName: string) {
  return document.cookie.split('; ')
    .find(row => row.startsWith(cookieName))
    ?.split("=")[1] || '';
}


export default App;
