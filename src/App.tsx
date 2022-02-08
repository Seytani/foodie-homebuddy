import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import '@/styles/index.scss';

import DefaultLayout from './components/layouts/Default';
import PrivateRoute from './components/base/PrivateRoute';
import Ingredients from './components/pages/Ingredients/Ingredients';
import Recipes from './components/pages/recipes/Recipes';
import MealPlan from "./components/pages/meal-plan/MealPlan";
import Signup from './components/pages/auth/Signup';
import Login from './components/pages/auth/Login';
import Test from '@/components/pages/Test';
import { NotificationProvider } from '@/components/base/Notification';

function App(): JSX.Element {
	return (
		<div className="App">
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
								<PrivateRoute path="/meal-plan">
									<MealPlan />
								</PrivateRoute>
								<Route path="/test"><Test /></Route>
								<Route path="/signup" component={Signup} />
								<Route path="/login" component={Login} />
								<Route path="/" component={Login} />
							</Switch>
						</DefaultLayout>
					</Router>
			</NotificationProvider>
		</div>
	);
}

export default App;
