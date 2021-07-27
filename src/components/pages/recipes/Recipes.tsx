import React, { useState, FunctionComponent, ChangeEvent } from 'react';
import 'trix/dist/trix';
import { TrixEditor } from 'react-trix';

const Recipes: FunctionComponent = () => {
    const mergeTags = [{
        trigger: '@',
        tags: [
            { name: 'test 1', tag: '@tag1' },
        ]
    }];

    const [recipeName, setRecipeName] = useState<string>('');

    function handleInputOnChange(e: ChangeEvent<HTMLInputElement>) {
        console.log(e);
    }

    function handleTrixOnChange(param1: any, param2: any) {
        console.log(param1, param2);
    }

    return <form>
        <label >
            Name:
            <input type="text" value={ recipeName } onChange={handleInputOnChange} />
            <TrixEditor mergeTags={mergeTags} onChange={handleTrixOnChange} />
        </label>
    </form>;
};

export default Recipes;