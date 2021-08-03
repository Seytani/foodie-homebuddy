import React, { useState, FunctionComponent, ChangeEvent, MouseEvent } from 'react';
import 'trix/dist/trix';
import { TrixEditor } from 'react-trix';

import client, { RecipeInterface } from '../../../client';

const Recipes: FunctionComponent = () => {
    const mergeTags = [{
        trigger: '@',
        tags: [
            { name: 'test 1', tag: '@tag1' },
        ]
    }];

    const [recipeName, setRecipeName] = useState<string>('');
    const [editor, setEditor] = useState<any>({});

    function handleInputOnChange(e: ChangeEvent<HTMLInputElement>) {
        setRecipeName(e.target.value);
    }

    function handleTrixOnReady(editor: any,) {
        setEditor(editor);
    }

    function handleChange(text: string, html: string) {
        console.log(editor.getDocument());
    }

    function handleSubmitForm(e: MouseEvent) {
        e.preventDefault();
        saveRecipe();

    }

    async function saveRecipe() {
        const recipe = await client.post('recipes', { name: recipeName,  content: JSON.stringify(editor) });
        console.log(recipe);
        //
    }

    return <form>
        <label >
            Name:
            <input type="text" value={ recipeName } onChange={handleInputOnChange} />
            <TrixEditor mergeTags={mergeTags} onEditorReady={handleTrixOnReady} onChange={handleChange} />
            <button onClick={handleSubmitForm}>Submit</button>
        </label>
    </form>;
};

export default Recipes;