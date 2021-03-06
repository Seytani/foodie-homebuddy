import React, { useState, FunctionComponent, ChangeEvent, MouseEvent } from 'react';

import '@/styles/components/pages/recipes/recipes_edit.scss';
import defaultRecipe from '@/assets/img/default-recipe.jpg';
import { postRecipe } from '@/store/recipes-slice';
import { useDispatch } from '@/store/hooks';
import Editor from '@/components/base/Editor';
import RecipeName from './RecipeName';
import IngredientList from './IngredientList';
import IngredientMiniForm from './IngredientMiniForm';

const RecipeEdit : FunctionComponent = () => {
    const [recipeName, setRecipeName] = useState<string>('');
    const [instructions, setInstructions] = useState<string>('');
    const [ingredients, setIngredients] = useState<IngredientInterface[]>([]);
    const [prepTime, setPrepTime] = useState(0);
    const [calories, setCalories] = useState(0);
    const dispatch = useDispatch();

    function handleNameOnChange(e: ChangeEvent<HTMLInputElement>) {
        setRecipeName(e.target.value);
    }

    function saveIngredient(name: string, qty: string) {
        setIngredients([...ingredients, { name, quantity: qty}]);
    }

    async function handleSubmitForm(e: MouseEvent) {
        e.preventDefault();
        dispatch(postRecipe({ name: recipeName,  instructions }));
    }

    return <div className="recipes-edit">
        <div className="recipe-header d-flex mb-30">
            <div className="recipe-info">
                <RecipeName  onChange={handleNameOnChange} />
                <div className="recipe-last-prep mb-20">
                    Last prep: <span>3 weeks ago</span>
                </div>
                <div className="recipe-tags mb-30 d-flex">
                    <span>mexican</span>

                </div>
                <div className="recipe-stats mb-40 d-flex">
                    <div className="stat fgrow-1">
                        <div className="stat__value">{ ingredients.length }</div>
                        <div className="stat__name">Ingredients</div>
                    </div>
                    <div className="stat fgrow-1">
                        <div
                            contentEditable
                            className="stat__value"
                            suppressContentEditableWarning
                        >
                            { prepTime }
                        </div>
                        <div className="stat__name">Hours</div>
                    </div>
                    <div className="stat fgrow-1">
                        <div
                            contentEditable
                            className="stat__value"
                            suppressContentEditableWarning
                        >
                            { calories }
                        </div>
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
        <hr className="mb-20"/>
        <div className="ingredient-list-container mb-20">
            <IngredientList ingredients={ingredients} />
            <IngredientMiniForm saveIngredient={saveIngredient} />
        </div>
        <div className="editor-container mb-20">
            <Editor onChange={setInstructions} />
        </div>
        <button className="btn" onClick={handleSubmitForm}>Save</button>
    </div>;
};

export default RecipeEdit;