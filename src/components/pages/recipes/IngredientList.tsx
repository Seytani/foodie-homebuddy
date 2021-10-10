import React, { FunctionComponent } from 'react';

import '@/styles/components/base/IngredientList.scss';

interface IngredientListProps {
    ingredients: IngredientInterface[];
}

const IngredientList: FunctionComponent<IngredientListProps> = ({ ingredients }) => {
    const ingredientsItems = ingredients.map(ingredient => (
        <li className="ingredient" key={ ingredient.id }>
            <span className="ingredient__qty">1&nbsp;</span>
            <span className="ingredient__name">{ ingredient.name }</span>
        </li>
    ));

    return <div className="ingredient-list mb-10">
        <h4 className="mb-20">Ingredients</h4>
        <div className="ml-20">
            <ul className="mb-10">
                { ingredientsItems }
            </ul>
        </div>
    </div>;
};

export default IngredientList;