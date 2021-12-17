import React, { useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "@/styles/index.scss";
import client from "./client";
import { getCookie } from "./helpers";

import DefaultLayout from "./components/layouts/Default";
import PrivateRoute from "./components/base/PrivateRoute";
import Ingredients from "./components/pages/Ingredients/Ingredients";
import Recipes from "./components/pages/recipes/Recipes";
import Test from "@/components/pages/Test";

import { NotificationProvider } from "@/components/base/Notification";

import { useDispatch } from "./store/hooks";
import { set_auth } from "./store/auth-slice";

function App(): JSX.Element {
	const token = getCookie("jwt");
	const callback: string =
		process.env.REACT_APP_BASE_URL || "http://localhost:4000";
	const authProviderUrl: string =
		process.env.REACT_APP_AUTH_PROVIDER || "http://localhost:3000";
	const loginUrl = `${authProviderUrl}/users/sign_in?callback=${callback}`;
	const signUpUrl = `${authProviderUrl}/users/sign_up?callback=${callback}`;

	const dispatch = useDispatch();

	useEffect(() => {
		async function fetch() {
			const user: IUser = await client.get("userinfo");
			dispatch(set_auth({ user, loginUrl, signUpUrl }));
		}
		fetch();
	}, []);

	return (
		<div className="App">
			<NotificationProvider>
					<Router>
						<DefaultLayout>
							<Switch>
								<PrivateRoute
									path="/ingredients"
									jwt={token}
									redirectUrl={loginUrl}
								>
									<Ingredients />
								</PrivateRoute>
								<PrivateRoute
									path="/recipes"
									jwt={token}
									redirectUrl={loginUrl}
								>
									<Recipes />
								</PrivateRoute>
								<Route path="/test">
									<Test />
								</Route>
								<Route path="/">
									<div className="d-flex">
										<h1>HomePage is public</h1>
									</div>
								</Route>
							</Switch>
						</DefaultLayout>
					</Router>
			</NotificationProvider>
		</div>
	);
}

export default App;
