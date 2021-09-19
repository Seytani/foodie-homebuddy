import React, { FunctionComponent } from 'react';

import recipeImage from '../../../assets/img/roasted-veggies.jpg';

const RecipeCard: FunctionComponent<{ recipe: RecipeInterface}> = ({ recipe }) => {
    return <div className="recipe-card">
        <img src={recipeImage} alt="recipe image" />
        <div className="description">
            <h5 className="title">
                { recipe.name }
            </h5>
            <div className="d-flex">
                <div className="fgrow-1">
                    <div className="subtitle">
                        <span>45 min</span>
                    </div> 
                    <div className="ingredients-availability">
                        <span className="material-icons"> kitchen </span>
                    </div>
                </div>
                <div className="add-meal-plan d-flex fai-center">
                    <div className="circle d-flex fjc-center">
                        <span className="material-icons">playlist_add</span>
                    </div>
                </div>
            </div>
        </div>
    </div>;
};

export default RecipeCard;

