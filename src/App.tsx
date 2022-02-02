import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import '@/styles/index.scss';

import DefaultLayout from './components/layouts/Default';
import PrivateRoute from './components/base/PrivateRoute';
import Ingredients from './components/pages/Ingredients/Ingredients';
import Recipes from './components/pages/recipes/Recipes';
import Signup from './components/pages/auth/Signup';
import Login from './components/pages/auth/Login';
import Test from '@/components/pages/Test';
import { NotificationProvider } from '@/components/base/Notification';
import { ModalProvider } from '@/components/base/Modal';

function App(): JSX.Element {
	return (
		<div className="App">
			<ModalProvider>
				<NotificationProvider>
						<Router>
							<DefaultLayout>
								<Switch>
									<PrivateRoute
										path="/ingredients"
									>
										<Ingredients />
									</PrivateRoute>
									<PrivateRoute
										path="/recipes"
									>
										<Recipes />
									</PrivateRoute>
									<Route path="/test"><Test /></Route>
									<Route path="/signup" component={Signup} />
									<Route path="/login" component={Login} />
									<Route path="/" component={Login} />
								</Switch>
							</DefaultLayout>
						</Router>
				</NotificationProvider>
			</ModalProvider>
		</div>
	);
}

export default App;
