import React, { FunctionComponent } from 'react';
import { Link, useRouteMatch } from 'react-router-dom';

import strawberryImage from '../../../assets/img/strawberry-grain.png';
import fruitBowlImage from '../../../assets/img/img-fruit-bowl.png';


import { useRecipes } from '../../../store/recipes';
import RecipeCard from './RecipeCard';

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
                <RecipeCard recipe={rp} />
            </Link>
        </li>     
    ));

    return <div className="recipes-index">
        <div className="header d-flex fjc-center">
            <img className="strawberry" src={strawberryImage} alt="Strawberry" />
            <div className="search d-flex fai-center">
                <span className="icon material-icons">search</span>
                <input type="text" />
            </div>
            <img className="fruit-bowl" src={fruitBowlImage} alt="Strawberry" />
        </div>

        <div className="recipe-list">
            <h4>Your recipes</h4>
            <ul className="d-flex flex-wrap">{ recipeList }</ul>
        </div>
    </div>;
};

export default RecipesIndex;
