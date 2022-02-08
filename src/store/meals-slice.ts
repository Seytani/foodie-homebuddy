import { getApiClient } from "@/client";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchMeals = createAsyncThunk('meals/fetch', async () => {
    const client = getApiClient();
    return await client.get<unknown, IMeal[]>('meals');
});

export const postMeal = createAsyncThunk('meals/post',
    async (newMeal: IMeal) => {
        const client = getApiClient();
        return await client.post<unknown, IMeal>('meals', newMeal);
    }
);

const initialState = {
    meals: [] as IMeal[],
    status: '',
};

const mealSlice = createSlice({
    name: 'meals',
    initialState,
    reducers: {},
    extraReducers(builder) {
        builder
			.addCase(fetchMeals.pending, (state) => {
				state.status = 'loading';
			})
			.addCase(fetchMeals.fulfilled, (state, action) => {
				state.status = 'succeeded';
				state.meals = action.payload;
			})
			.addCase(fetchMeals.rejected, (state) => {
				state.status = 'rejected';
			})
            .addCase(postMeal.fulfilled, (state, action) => {
                state.meals.push(action.payload);
            });
    }
});

export const mealsSelector = (state: IState): IMeal[] => {
    return state.meals.meals;
};

export default mealSlice.reducer;
