import React, { useEffect, useState }  from 'react';
import './styles/index.scss';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import client, { UserInterface } from './client';
import { getCookie } from './helpers';

import PrivateRoute from './components/PrivateRoute';
import Header from './components/Header';
import Ingredients from './components/pages/Ingredients/Ingredients';
import Recipes from './components/pages/recipes/Recipes';

function App(): JSX.Element {
  const token = getCookie('jwt');
  const callback: string = process.env.REACT_APP_BASE_URL || 'http://localhost:4000';
  const authProviderUrl: string = process.env.REACT_APP_AUTH_PROVIDER || 'http://localhost:3000';
  const loginUrl = `${authProviderUrl}/users/sign_in?callback=${callback}`;
  const singUpUrl = `${authProviderUrl}/users/sign_up?callback=${callback}`;

  const [user, setUser] = useState<UserInterface | null>(null);

  useEffect(() => {
    async function fetch() {
      const user: UserInterface = await client.get('userinfo');
      setUser(user);
    }
    fetch();
  }, []);

  return (
    <div className="App">
      <Router>
        <Header user={user} loginUrl={loginUrl} signUpUrl={singUpUrl}></Header>
        <Switch>
          <PrivateRoute path="/ingredients" jwt={token}  redirectUrl={loginUrl}>
            <Ingredients />
          </PrivateRoute>
          <PrivateRoute path="/recipes" jwt={token}  redirectUrl={loginUrl}>
            <Recipes />
          </PrivateRoute>
          <Route path="/">
            <h1>HomePage is public</h1>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
