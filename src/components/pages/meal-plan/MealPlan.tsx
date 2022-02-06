import React, { FunctionComponent, useEffect, useState } from 'react';

import '@/styles/components/pages/meal-plan/index.scss';

import MealEvent from './MealEvent';
import MealForm from './MealForm';
import Calendar from '@/components/base/Calendar/Calendar';

import { mealsSelector } from '@/store/meals-slice';
import { useSelector } from 'react-redux';
import { useDispatch } from '@/store/hooks';
import { fetchMeals } from '@/store/meals-slice';

import { useModal } from '@/components/base/Modal';
import Button from '@/components/base/Button';


const getMealEvents = (meals) => {
    return meals.map(meal => {
        const date = new Date(`${meal.date} 00:00`);
        return <MealEvent key={meal.id} date={date} meal={meal} />;
    });
};

const MealPlan: FunctionComponent = () => {
    const dispatch = useDispatch();
    const meals = useSelector(mealsSelector);
    const [showModal] = useModal();
    const [meal, setMeal] = useState(null as IMeal);

    const mealEvents = getMealEvents(meals);

    const modalFooter = <div>
        <div className="form__actions">
            <Button>Save</Button>     
            <Button>Cancel</Button>
        </div>
    </div>;

    useEffect(() => {
        async function fetch() {
            dispatch(fetchMeals());
        }
        fetch();
    }, [dispatch]);

    const handleDayClick = (date) => {
        showModal({ 
            body: <MealForm onFormChange={handleFormChange} />,
            footer: modalFooter,
        });
    };

    const handleFormChange = (newMeal) => (setMeal(newMeal));

    return <div className="meal-plan-page">
        <h1 className="page-title">Meal Plan</h1>
        <Calendar month={1} onDayClick={handleDayClick}>
            {mealEvents}
        </Calendar>
    </div>;
};

export default MealPlan;
