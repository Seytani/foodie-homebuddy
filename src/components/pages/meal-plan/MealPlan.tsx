import React, { FunctionComponent, useEffect, useState } from 'react';

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
    return <div>
        <div>
            { date.toDateString() }
        </div>
        <div>
            { meal.type }
        </div>
        <div>
            { meal.recipe.name }
        </div>
    </div>;
};

const getMealEvents = (meals) => {
    return meals.map(meal => (
        <MealEvent key={meal.id} date={new Date(meal.date)} meal={meal} />
    ));
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
        <Calendar>
            { mealEvents }
        </Calendar>
    </div>;
};

export default MealPlan;
