import React, { useState, FunctionComponent, ChangeEvent, MouseEvent } from 'react';

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
        <div className="recipe-name mb-20">
            <Input label="Recipe Name" />
        </div>
        <Editor onChange={setInstructions} />
        <button onClick={handleSubmitForm}>Save</button>
    </div>;
};

export default RecipeEdit;