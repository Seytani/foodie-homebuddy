import React, { FunctionComponent } from 'react';

import '@/styles/components/base/IngredientList.scss';

const IngredientList: FunctionComponent = () => {
    return <div className="ingredient-list mb-20">
        <h4 className="mb-20">Ingredients</h4>
        <div className="ml-20">
            <ul className="mb-10">
                <li>1 Carrots</li>
                <li>3 Potatoes</li>
                <li>1 lts Chicken Stock</li>
            </ul>
            <button className="btn d-flex fai-center">
                <span className="material-icons">add_circle_outline</span>
                Add Ingredient
            </button>
        </div>
    </div>;
};

export default IngredientList;