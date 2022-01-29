import { configureStore } from '@reduxjs/toolkit';

import authReducer from './auth-slice';
import recipesReducer from './recipes-slice';
import mealReducer from './meals-slice';

export const store = configureStore({
        reducer: {
                auth: authReducer,
                recipes: recipesReducer,
                meals: mealReducer,
        },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
