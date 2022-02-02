import React, { FunctionComponent, useState, KeyboardEvent, useEffect, ChangeEvent } from 'react';
import '@/styles/components/pages/recipes/ingredient_mini_form.scss';
import { getApiClient } from '@/client';
import Input from '@/components/base/Input';
import InputSelector from '@/components/base/InputSelector';

interface IngredientMiniFormProps {
    saveIngredient: (name: string, qty: string) => void
}

const IngredientMiniForm: FunctionComponent<IngredientMiniFormProps> = ({ saveIngredient }) => {
    const [visible, setVisible] = useState(false);
    const [qty, setQty] = useState('');
    const [ingredientName, setIngredientName] = useState('');
    const [userIngredients, setUserIngredients] = useState([]); 
    // const options = [{id:1, name:'test1'}, {id:2, name:'test2'}, {id:3, name:'test3'}];
    const client = getApiClient();
    
    useEffect(() => {
        async function fetch() {
            const ingredients = await client.get<unknown, IngredientInterface[]>('ingredients');
            setUserIngredients(ingredients);
        }
        fetch();
    }, []);// eslint-disable-line react-hooks/exhaustive-deps


    function handleAddIngredientClick() {
        setVisible(true);
    }

    function handleOnChange(e: ChangeEvent<HTMLInputElement>) {
        setIngredientName(e.target.value);
        
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
                />
            </div>
            <div className="name-field">
                <InputSelector
                    label="name"
                    onChange={handleOnChange}
                    onKeyPress={handleKeyPress}
                    displayName="name"
                    options={userIngredients}
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
