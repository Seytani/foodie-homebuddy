import React, { FunctionComponent } from 'react';

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

export default MealEvent;
