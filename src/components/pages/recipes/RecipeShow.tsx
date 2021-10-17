import React, { FunctionComponent } from 'react';
import { useParams } from 'react-router';

import { useSelector } from '@/store/hooks';
import { recipesSelector } from '@/store/recipes-slice';

type RecipeShowParams = {
    recipeId: string;
}

const RecipeShow: FunctionComponent = () => {
    const { recipeId } = useParams<RecipeShowParams>();

    const recipes = useSelector(recipesSelector);

    const recipe: RecipeInterface | undefined = recipes.find(rc => rc.id === parseInt(recipeId));
    if (!recipe || !recipe.instructions) {
        // Todo: re-fetch on
        throw new Error('recipe not found');
    }

    return <div>
        <h3>This is the show page</h3>
        <span>{ recipe.name }</span>
        <div dangerouslySetInnerHTML={{__html: recipe.instructions}}></div>
    </div>;
};

export default RecipeShow;
