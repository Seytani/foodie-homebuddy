import React, { FunctionComponent, useReducer, useState } from 'react';
import { useDispatch } from 'react-redux';

import '@/styles/components/pages/meal-plan/MealForm.scss';

import { postMeal } from '@/store/meals-slice';

import Modal from '@/components/base/Modal';
import Input from '@/components/base/Input';
import Button from '@/components/base/Button';
import ButtonGroup from '@/components/base/ButtonGroup';
import RecipeSelector from './RecipeSelector';

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
    date: Date;
    visible: boolean;
    onClose: () => void;
}

const MealForm: FunctionComponent<MealFormProps> = (props) => {
    const dispatch = useDispatch();
    const { date, visible, onClose } = props;
    console.log(date.toISOString().split('T')[0]);
    const [meal, localDispatch] = useReducer(reducer, initialState);

    const handleInputChange = (action, event) => {
        const { value } = event.target;
        localDispatch({ type: action, payload: value });
    };

    const handleSaveClick = () => {
        dispatch(postMeal(meal));
        onClose();
    };


    return <Modal visible={visible} onClose={onClose}>
        <div className='meal-form'>
            <form className='meal-form__form'>
                <div className="form__control d-flex fjc-center">
                    <ButtonGroup>
                        <Button variant="secondary">Breakfast</Button>
                        <Button>Lunch</Button>
                        <Button variant="secondary">Dinner</Button>
                        <Button variant="secondary">Snacks</Button>
                    </ButtonGroup>
                </div>
                <div className="form__control">
                    <Input
                        label="Date"
                        value={date.toISOString().split('T')[0]}
                        onChange={event => handleInputChange('setDate', event)}
                    />
                </div>
                <div className="form__control">
                    <RecipeSelector />
                </div>
                <div className="form__actions">
                    <Button onClick={handleSaveClick}>Save</Button>     
                    <Button onClick={onClose}>Cancel</Button>
                </div>
            </form>
        </div>
    </Modal>;
};

export default MealForm;

