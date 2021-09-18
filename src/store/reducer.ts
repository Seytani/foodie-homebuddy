import recipesReducer from './recipes';
import authReducer from './auth';

export const initialState: IState = {
    auth: {} as IAuth,
    recipes: [],
};

export default function mainReducer(state: IState, action: IAction ): IState {
    const { auth, recipes } = state;

    const newState = {
        auth: authReducer(auth, action),
        recipes: recipesReducer(recipes, action),
    };

    return newState;
}
