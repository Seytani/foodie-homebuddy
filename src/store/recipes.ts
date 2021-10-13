// import { useGlobalStore } from ".";

// export default function recipeReducer(recipes: RecipeInterface[], action: IAction): RecipeInterface[]{
//     switch (action.type) {
//         case 'recipes/set':
//             return action.payload;
//             break;
//         case 'recipes/add':
//             return [...recipes, action.payload];
//             break;
//         default:
//             return recipes;
//             break;
//     }
// }


// export function useRecipes(): IRecipeHook {
//     const { state, dispatch } = useGlobalStore();

//     function setRecipes(recipes: RecipeInterface[]) {
//         dispatch({ type: 'recipes/set', payload: recipes });
//     }

//     function addRecipe() {
//         const newRecipe = {
//             name: 'New Recipe',
//             instructions: 'new instructions',
//         };
//         dispatch({ type: 'recipes/add', payload: newRecipe });
//     }

//     const { recipes } = state;

//     return { recipes, setRecipes, addRecipe };
// }
export {};