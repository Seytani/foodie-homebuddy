import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState = {} as RecipeInterface[];

const recipesSlice = createSlice({
	name: "recipes",
	initialState,
	reducers: {
		set(state, action: PayloadAction<RecipeInterface[]>) {
			return action.payload;
		},
	},
});

const recipesSelector = (state: IState): RecipeInterface[] => {
	return state.recipes;
};

export { recipesSelector };
export const { set } = recipesSlice.actions;
export default recipesSlice.reducer;
