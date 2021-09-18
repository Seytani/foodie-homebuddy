import React, { useEffect }  from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import './App.scss';
import client from './client';
import { getCookie } from './helpers';
import { useAuth } from './store/auth';

import DefaultLayout from './components/layouts/Default';
import PrivateRoute from './components/PrivateRoute';
import Ingredients from './components/pages/Ingredients/Ingredients';
import Recipes from './components/pages/recipes/Recipes';


function App(): JSX.Element {
  const token = getCookie('jwt');
  const callback: string = process.env.REACT_APP_BASE_URL || 'http://localhost:4000';
  const authProviderUrl: string = process.env.REACT_APP_AUTH_PROVIDER || 'http://localhost:3000';
  const loginUrl = `${authProviderUrl}/users/sign_in?callback=${callback}`;
  const singUpUrl = `${authProviderUrl}/users/sign_up?callback=${callback}`;

  const { auth, setAuth } = useAuth();

  useEffect(() => {
    async function fetch() {
      const user: IUser = await client.get('userinfo');
      setAuth({ user, loginUrl, singUpUrl });
    }
    fetch();
  }, []);

  return (
    <div className="App">
      <Router>
        <DefaultLayout>
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
        </DefaultLayout>
      </Router>
    </div>
  );
}

export default App;
