import React, { useState, FunctionComponent, ChangeEvent, MouseEvent } from 'react';

import defaultRecipe from '@/assets/img/default-recipe.jpg';
import client from '../../../client';
import Editor from '../../base/Editor';
import Input from '../../base/Input';

const RecipeEdit : FunctionComponent = () => {
    const [recipeName, setRecipeName] = useState<string>('');
    const [instructions, setInstructions] = useState<string>('');

    function handleNameOnChange(e: ChangeEvent<HTMLInputElement>) {
        setRecipeName(e.target.value);
    }

    async function handleSubmitForm(e: MouseEvent) {
        e.preventDefault();
        const recipe = await client.post('recipes',
            { name: recipeName,  content: instructions });
        console.log(recipe);
    }

    return <div className="recipes-edit">
        <div className="recipe-header d-flex">
            <div className="recipe-info fgrow-1">
                <div className="recipe-name mb-20">
                    <Input label="Recipe Name" onChange={handleNameOnChange}/>
                </div>
                <div className="recipe-stats d-flex fjc-space-between">
                    <div className="stat">
                        <div className="stat__value">8</div>
                        <div className="stat__name">Ingredients</div>
                    </div>
                    <div className="stat">
                        <div className="stat__value">2</div>
                        <div className="stat__name">Hours</div>
                    </div>
                    <div className="stat">
                        <div className="stat__value">310</div>
                        <div className="stat__name">Calories</div>
                    </div>
                </div>
                <div className="recipe-actions">
                    <button className="btn">Add to Meal Plan</button>
                </div>
            </div>
            <div className="image-container">
                <img src={defaultRecipe} alt="image recipe" />
            </div>
        </div>
        <div className="editor-container mb-20">
            <Editor onChange={setInstructions} />
        </div>
        <button className="btn" onClick={handleSubmitForm}>Save</button>
    </div>;
};

export default RecipeEdit;