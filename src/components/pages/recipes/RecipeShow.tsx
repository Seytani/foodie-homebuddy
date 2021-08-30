import React, { FunctionComponent } from 'react';
import { useParams } from 'react-router';
import { RecipeInterface } from '../../../client';

type RecipeShowProps = {
    recipes: RecipeInterface[];
}

type RecipeShowParams = {
    recipeId: string;
}

const RecipeShow : FunctionComponent<RecipeShowProps> = ({ recipes }) => {
    const { recipeId } = useParams<RecipeShowParams>();
    const recipe: RecipeInterface | undefined = recipes.find(rp => rp.id === parseInt(recipeId));

    return <div>
        <h3>This is the show page</h3>
        <span>{ recipe?.name }</span>
    </div>;
};

export default RecipeShow;
