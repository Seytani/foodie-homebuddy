import React, { useEffect, FunctionComponent } from 'react';
import { Switch, Route, Link, useRouteMatch } from 'react-router-dom';

import client from '../../../client';
import { useRecipes } from '../../../store/recipes';

import RecipesIndex from './RecipesIndex';
import RecipeEdit from './RecipeEdit';
import RecipeShow from './RecipeShow';

const Recipes: FunctionComponent = () => {
    const { path } = useRouteMatch();

    const { setRecipes } = useRecipes();

    useEffect(() => {
        async function fetch() {
            const recipes = await client.get<unknown, RecipeInterface[]>('recipes');
            setRecipes(recipes);
        }
        fetch();
    }, []);

    return <div>
        <Link to="recipes/new">Add Recipe</Link>
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
    </div>;
};

export default Recipes;