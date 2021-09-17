import recipesReducer from './recipes';

export const initialState: IState = {
    recipes: []
};

export default function mainReducer(state: IState, action: IAction ): IState {
    const { recipes } = state;

    const newState = {
        recipes: recipesReducer(recipes, action),
    };

    return newState;
}
