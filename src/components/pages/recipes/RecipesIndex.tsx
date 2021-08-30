import React, { FunctionComponent } from 'react';
import { Link, useRouteMatch } from 'react-router-dom';

import { RecipeInterface } from '../../../client';

type RecipeIndexProps = {
    recipes: RecipeInterface[];
}

const RecipesIndex: FunctionComponent<RecipeIndexProps> = ({ recipes }) => {
    const { url } = useRouteMatch();

    const recipeList = recipes.map((rp : RecipeInterface) => (
        <li key={rp.id}>
            <Link to={{ 
                pathname: `${url}/${rp.id}`,
                state: { recipe: rp }
            }}
        >
                { rp.name }
            </Link>
        </li>     
    ));

    return <div>
        <h3>This is recipes index component</h3>
        <ul>{ recipeList }</ul>
    </div>;
};

export default RecipesIndex;
