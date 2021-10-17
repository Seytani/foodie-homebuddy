import React, { useEffect, FunctionComponent } from 'react';
import { Switch, Route, useRouteMatch } from 'react-router-dom';

import client from "@/client";

import RecipesIndex from "./RecipesIndex";
import RecipeEdit from "./RecipeEdit";
import RecipeShow from "./RecipeShow";

import { useDispatch } from "@/store/hooks";
import { set_recipes } from "@/store/recipes-slice";

const Recipes: FunctionComponent = () => {
	const { path } = useRouteMatch();

	const dispatch = useDispatch();

	useEffect(() => {
		async function fetch() {
			const recipes = await client.get<unknown, RecipeInterface[]>("recipes");
			dispatch(set_recipes(recipes));
		}
		fetch();
	}, []);

	return (
		<div className="recipes-page">
			<Switch>
				<Route exact path={path}>
					<RecipesIndex />
				</Route>
				<Route exact path={`${path}/new`}>
					<RecipeEdit />
				</Route>
				<Route exact path={`${path}/:recipeId/edit`}>
					<RecipeEdit />
				</Route>
				<Route exact path={`${path}/:recipeId`}>
					<RecipeShow />
				</Route>
			</Switch>
		</div>
	);
};

export default Recipes;
