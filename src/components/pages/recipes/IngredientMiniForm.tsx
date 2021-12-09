import React, { FunctionComponent, useState, KeyboardEvent } from 'react';

import '@/styles/components/pages/recipes/ingredient_mini_form.scss';

import Input from '@/components/base/Input';

interface IngredientMiniFormProps {
    saveIngredient: (name: string, qty: string) => void
}

const IngredientMiniForm: FunctionComponent<IngredientMiniFormProps> = ({ saveIngredient }) => {
    const [visible, setVisible] = useState(false);
    const [qty, setQty] = useState('');
    const [ingredientName, setIngredientName] = useState('');

    function handleAddIngredientClick() {
        setVisible(true);
    }

    function handleSaveClick() {
        saveIngredient(ingredientName, qty);
        setQty('');
        setIngredientName('');
        setVisible(false);
    }

    function handleKeyPress(e: KeyboardEvent<HTMLInputElement>) {
        if(e.key === 'Enter') {
        saveIngredient(ingredientName, qty);
        setVisible(false);

        }
    }

    if (!visible) {
        return <button className="btn d-flex fai-center" onClick={handleAddIngredientClick}>
            <span className="material-icons">add_circle_outline</span>
            Add Ingredient
        </button>;
    }
    return <div className="ingredient-miniform shadow-box">
        <div className="d-flex mb-20">
            <div className="qty-field">
                <Input
                    label="qty"
                    onChange={e => setQty(e.target.value)}
                    autoFocus
                    required
                />
            </div>
            <div className="name-field">
                <Input
                    label="name"
                    onChange={e => setIngredientName(e.target.value)}
                    onKeyPress={handleKeyPress}
                    required
                />
            </div>
        </div>
        <div className="d-flex fjc-flex-end">
            <button
                className="btn mr-5"
                onClick={handleSaveClick}
            >
                Save
            </button>
            <button
                className="btn"
                onClick={() => setVisible(false)}
            >
                Cancel
            </button>
        </div>
    </div>;
};

export default IngredientMiniForm;
