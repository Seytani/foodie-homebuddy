import React, { FunctionComponent } from 'react';
import { useParams, useLocation } from 'react-router';

import { RecipeInterface } from '../../../client';

type RecipeShowProps = {
    recipes: RecipeInterface[];
}

type RecipeShowParams = {
    recipeId: string;
}

// TODO: move this type to centralize location
type RecipeLocationState = {
    recipe: RecipeInterface;
}

const RecipeShow : FunctionComponent<RecipeShowProps> = ({ recipes }) => {
    const { recipeId } = useParams<RecipeShowParams>();
    const { state } = useLocation<RecipeLocationState>();

    const recipe: RecipeInterface = state.recipe;
    if (!recipe || !recipe.instructions) {
        // TODO: re-fetch using recipe id on reload
        throw new Error();
    }

    return <div>
        <h3>This is the show page</h3>
        <span>{ recipe.name }</span>
        <div dangerouslySetInnerHTML={{__html: recipe.instructions}}></div>
    </div>;
};

export default RecipeShow;
