import React, { FunctionComponent } from 'react';
import { Link, useRouteMatch } from 'react-router-dom';

import { useRecipes } from '../../../store/recipes';

const RecipesIndex: FunctionComponent = () => {
    const { url } = useRouteMatch();
    
    const { recipes } = useRecipes();

    const recipeList = recipes.map((rp: RecipeInterface) => (
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
