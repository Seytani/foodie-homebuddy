import React, { useState, useEffect, FunctionComponent } from 'react';
import { Switch, Route, useRouteMatch } from 'react-router-dom';

import client, { RecipeInterface } from '../../../client';

import RecipesIndex from './RecipesIndex';
import RecipeEdit from './RecipeEdit';
import RecipeShow from './RecipeShow';

const Recipes: FunctionComponent = () => {
    const { path } = useRouteMatch();

    const [recipes, setRecipes] = useState<RecipeInterface[] | []>([]);

    useEffect(() => {
        async function fetch() {
            const recipes = await client.get<unknown, RecipeInterface[]>('recipes');
            setRecipes(recipes);
        }
        fetch();
    }, []);

    return <div>
        <Switch>
            <Route exact path={path}>
                <RecipesIndex recipes={recipes} />
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