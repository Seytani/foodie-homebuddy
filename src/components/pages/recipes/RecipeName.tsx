import React, { FunctionComponent, EventHandler, ChangeEvent, FocusEvent, useState, MouseEvent} from 'react';

import Input from '@/components/base/Input';

interface IRecipeNameProps {
    onChange: EventHandler<ChangeEvent<HTMLInputElement>>
}

const RecipeName: FunctionComponent<IRecipeNameProps> = ({ onChange }) => {
    const [name, setName] = useState('Click to edit recipe name');
    const [showTitle, setShowTitle] = useState(true);

    function handleInputChange(e: ChangeEvent<HTMLInputElement>) {
        setName(e.target.value);
        onChange(e);
    }

    function handleInputBlur(e: FocusEvent<HTMLInputElement>) {
        const name = e.target.value;
        setShowTitle(!!name);
    }

    function handleTitleClick() {
        setShowTitle(false);
    }

    const recipeTitle = (<div onClick={handleTitleClick}>
        <h1>{ name }</h1>
    </div>);

    return <div className="recipe-name mb-30">
        {showTitle
          ? recipeTitle
          : <Input
                label="Recipe Name"
                value={name}
                onChange={handleInputChange}
                onBlur={handleInputBlur}
                autoFocus
            />
        }
    </div>;
};

export default RecipeName;