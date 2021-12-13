import React, { FunctionComponent, EventHandler, ChangeEvent, FocusEvent, useState, KeyboardEvent} from 'react';

import Input from '@/components/base/Input';

interface IRecipeNameProps {
    onChange: EventHandler<ChangeEvent<HTMLInputElement>>
}

const RecipeName: FunctionComponent<IRecipeNameProps> = ({ onChange }) => {
    const [name, setName] = useState('My Recipe');
    const [showTitle, setShowTitle] = useState(true);
    const [showEdit, setShowEdit] = useState(false);

    function handleInputChange(e: ChangeEvent<HTMLInputElement>) {
        setName(e.target.value);
        onChange(e);
    }

    function handleInputBlur(e: FocusEvent<HTMLInputElement>) {
        const name = e.target.value;
        setShowTitle(!!name);
    }

    function handleKeyPress(e: KeyboardEvent<HTMLInputElement>) {
        if(e.key === 'Enter') {
            setShowTitle(!!name);
        }
    }

    function handleTitleClick() {
        setShowTitle(false);
    }


    const recipeTitle = (<div className="recipe-name" onClick={handleTitleClick} onMouseEnter={() => setShowEdit(true)} onMouseLeave={() => setShowEdit(false)}>
        <h1>{ name }</h1>
        {showEdit && <span className='material-icons c-secondary ml-5'>edit</span>}
    </div>);

    return <div className="recipe-name-container mb-20">
        {showTitle
          ? recipeTitle
          : <Input
                label="Recipe Name"
                value={name}
                maxlength={50}
                onChange={handleInputChange}
                onBlur={handleInputBlur}
                onKeyPress={handleKeyPress}
                autoFocus
            />
        }
    </div>;
};

export default RecipeName;