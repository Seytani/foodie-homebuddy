import React, { FunctionComponent, useEffect } from 'react';

import '@/styles/components/pages/meal-plan/index.scss';

import Calendar from '@/components/base/Calendar/Calendar';
import { mealsSelector } from '@/store/meals-slice';

import { useSelector } from 'react-redux';
import { useDispatch } from '@/store/hooks';
import { fetchMeals } from '@/store/meals-slice';

interface MealEventProps {
    date: Date;
    meal: IMeal;
}

const MealEvent: FunctionComponent<MealEventProps> = ({ date, meal }) => {
    const showMeal = () => {
        alert('edit');
    };

    return <div className='meal-event' onClick={showMeal}>
        {`${meal.type} - ${meal.recipe.name}`}
    </div>;
};

const getMealEvents = (meals) => {
    return meals.map(meal => {
        const date = new Date(`${meal.date} 00:00`);
        return <MealEvent key={meal.id} date={date} meal={meal} />;
    });
};

const MealPlan: FunctionComponent = () => {
    const dispatch = useDispatch();
    const meals = useSelector(mealsSelector);

    const mealEvents = getMealEvents(meals);

    useEffect(() => {
        async function fetch() {
            dispatch(fetchMeals());
        }
        fetch();
    }, [dispatch]);

    return <div className="meal-plan-page">
        <h1 className="page-title">Meal Plan</h1>
        <Calendar month={1}>
            {mealEvents}
        </Calendar>
    </div>;
};

export default MealPlan;
