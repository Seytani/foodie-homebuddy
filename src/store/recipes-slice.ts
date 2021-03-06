import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";

import { getApiClient } from "@/client";

const initialState = {
	recipes: [] as RecipeInterface[],
	status: "idle",
};

export const fetchRecipes = createAsyncThunk("recipes/fetch", async () => {
	const client = getApiClient();
	return await client.get<unknown, RecipeInterface[]>("recipes");
});

export const postRecipe = createAsyncThunk(
	"recipes/post",
	async (newRecipe: RecipeInterface) => {

		const client = getApiClient();
		return await client.post("recipes", newRecipe);
	}
);

const recipesSlice = createSlice({
	name: "recipes",
	initialState,
	reducers: {
		set_recipes(state, action: PayloadAction<RecipeInterface[]>) {
			state.recipes = action.payload;
		},
	},
	extraReducers(builder) {
		builder
			.addCase(fetchRecipes.pending, (state) => {
				state.status = "loading";
			})
			.addCase(fetchRecipes.fulfilled, (state, action) => {
				state.status = "succeeded";
				state.recipes = action.payload;
			})
			.addCase(fetchRecipes.rejected, (state) => {
				state.status = "rejected";
			});
	},
});

const recipesSelector = (state: IState): RecipeInterface[] => {
	return state.recipes.recipes;
};

export { recipesSelector };
export const { set_recipes } = recipesSlice.actions;
export default recipesSlice.reducer;
