import React, { useState, FunctionComponent, ChangeEvent, MouseEvent } from 'react';
import 'trix/dist/trix';
import { TrixEditor } from 'react-trix';

import client from '../../../client';

const RecipeEdit : FunctionComponent = () => {
    const [recipeName, setRecipeName] = useState<string>('');
    const [editor, setEditor] = useState<unknown>({});

    const mergeTags = [{
        trigger: '@',
        tags: [
            { name: 'test 1', tag: '@tag1' },
        ]
    }];

    function handleNameOnChange(e: ChangeEvent<HTMLInputElement>) {
        setRecipeName(e.target.value);
    }

    function handleTrixOnReady(editor: unknown,) {
        console.log('onEditorReady', editor);
        setEditor(editor);
    }

    function handleTrixOnChange(html: string, text: string) {
        console.log('onEditorChange', html, text);
    }

    async function handleSubmitForm(e: MouseEvent) {
        e.preventDefault();
        const recipe = await client.post('recipes',
            { name: recipeName,  content: JSON.stringify(editor) });
        console.log(recipe);

    }

    return <div>
        <label>
            Name:
            <input type="text" value={recipeName} onChange={handleNameOnChange} />
        </label>
        <TrixEditor
            mergeTags={mergeTags}
            onEditorReady={handleTrixOnReady}
            onChange={handleTrixOnChange}
        />
        <button onClick={handleSubmitForm}>Submit</button>
    </div>;
};

export default RecipeEdit;