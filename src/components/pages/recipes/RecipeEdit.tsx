import React, { useState, FunctionComponent, ChangeEvent, MouseEvent } from 'react';

import client from '../../../client';
import Editor from '../../utils/Editor';

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

    return <div>
        <label>
            Name:
            <input type="text" value={recipeName} onChange={handleNameOnChange} />
        </label>
        <Editor onChange={setInstructions} />
        <button onClick={handleSubmitForm}>Submit</button>
    </div>;
};

export default RecipeEdit;