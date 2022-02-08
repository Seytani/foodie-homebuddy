import React, { FunctionComponent } from 'react';
import { useSelector } from 'react-redux';

import '@/styles/components/pages/meal-plan/RecipeSelector.scss';

import SearchInput from '@/components/base/SearchInput';
import MiniRecipeList from './MiniRecipeList';

import { recipesSelector } from '@/store/recipes-slice';

const RecipeSelector: FunctionComponent = () => {
    const recipes = useSelector(recipesSelector);

    return <>
        <SearchInput size="medium" />
        <div className="recipe-list-wrapper">
            <MiniRecipeList recipes={recipes} />
        </div>
    </>;
};

export default RecipeSelector;

