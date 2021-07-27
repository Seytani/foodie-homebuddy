import React, { useState, FunctionComponent, MouseEvent, ChangeEvent } from 'react';

type IngredientFormType = {
    saveIngredient: (name: string) => void;
}

const IngredientForm: FunctionComponent<IngredientFormType> = ({ saveIngredient }) => {
    const [ingredientName, setIngredientName] = useState('');

    async function handleSubmitForm(e: MouseEvent) {
        e.preventDefault();
        await saveIngredient(ingredientName);
        setIngredientName('');
    }

    function handleChange(e: ChangeEvent<HTMLInputElement>) {
        setIngredientName(e.target.value);
    }

    return <form>
        <input type="text" value={ingredientName} onChange={ handleChange } />
        <button onClick={handleSubmitForm}>Add Ingredient</button>
    </form>;

};

export default IngredientForm;