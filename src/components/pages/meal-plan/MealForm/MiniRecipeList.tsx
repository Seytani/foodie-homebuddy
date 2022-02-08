import React, { FunctionComponent } from 'react';

import '@/styles/components/pages/meal-plan/MiniRecipeList.scss';

interface MiniRecipeListProps {
    recipes: RecipeInterface[];
}

import recipeImage from '@/assets/img/roasted-veggies.jpg';

const MiniRecipeList: FunctionComponent<MiniRecipeListProps> = (props) => {
    const { recipes } = props;
    const recipeList = recipes.map(recipe => 
        <div className="recipe-mini-card d-flex" key={recipe.id}>
            <img src={recipeImage} alt="recipe image" />
            <div>
                {recipe.name}
            </div>
        </div>
    );
    return <div className="mini-recipe-list">
        { recipeList }
    </div>;
};

export default MiniRecipeList;

