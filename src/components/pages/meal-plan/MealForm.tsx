import React, { FunctionComponent, useReducer } from 'react';

import '@/styles/components/pages/meal-plan/MealForm.scss';

import Input from '@/components/base/Input';

const initialState = { type: '', date: null, recipe_id: '' };

function reducer(state, action) {
    switch(action.type) {
        case 'setType':
            return { ...state, type: action.payload };
        case 'setDate':
            return { ...state, date: action.payload };
        case 'setRecipeId':
            return { ...state, recipe_id: action.payload };
        default:
            throw new Error('invalid action');
    }
}

interface MealFormProps {
    onFormChange: (IMeal) => void;
}

const MealForm: FunctionComponent<MealFormProps> = ({ onFormChange }) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    const handleInputChange = (action, event) => {
        const { value } = event.target;
        dispatch({ type: action, payload: value });
        onFormChange(state);
    };

    return <div className='meal-form'>
        <div className='meal-form__title'>
            <h4>Create Meal</h4>
        </div>
        <form className='meal-form__form'>
            <div className="form__control">
                <Input label="Type" onChange={event => handleInputChange('setType', event)} />
            </div>
            <div className="form__control">
                <Input label="Date" onChange={event => handleInputChange('setDate', event)} />
            </div>
            <div className="form__control">
                <Input label="Recipe" onChange={event => handleInputChange('setRecipeId', event)}/>
            </div>
        </form>
    </div>;
};

export default MealForm;

