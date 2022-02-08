import React, { FunctionComponent, useEffect, useState } from 'react';

import '@/styles/components/pages/meal-plan/index.scss';

import MealEvent from './MealEvent';
import MealForm from './MealForm/MealForm';
import Calendar from '@/components/base/Calendar/Calendar';

import { mealsSelector } from '@/store/meals-slice';
import { useSelector } from 'react-redux';
import { useDispatch } from '@/store/hooks';
import { fetchMeals } from '@/store/meals-slice';

const getMealEvents = (meals) => {
    return meals.map(meal => {
        const date = new Date(`${meal.date} 00:00`);
        return <MealEvent key={meal.id} date={date} meal={meal} />;
    });
};

const MealPlan: FunctionComponent = () => {
    const dispatch = useDispatch();
    const meals = useSelector(mealsSelector);
    const [date, setDate] = useState(new Date);
    const [showModal, setShowModal] = useState(false);

    const mealEvents = getMealEvents(meals);

    useEffect(() => {
        async function fetch() {
            dispatch(fetchMeals());
        }
        fetch();
    }, [dispatch]);

    const handleDayClick = (selectedDate) => {
        setDate(selectedDate);
        setShowModal(true);
    };

    return <div className="meal-plan-page">
        <h1 className="page-title">Meal Plan</h1>
        <Calendar month={1} onDayClick={handleDayClick}>
            { mealEvents }
        </Calendar>
        <MealForm
            date={date}
            visible={showModal}
            onClose={() => setShowModal(false)}
        />
    </div>;
};

export default MealPlan;
