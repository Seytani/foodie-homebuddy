interface IContextProps {
    state: any;
    dispatch: any;
}

interface IState {
    recipes: [] | RecipeInterface[]
}

interface IAction {
    type: string;
    payload: any;
}


interface RecipeInterface {
    id: number;
    name: string;
    instructions: string;
    created_at: string;
    updated_at: string;
    user_id: number
}

interface IRecipeHook {
    recipes: RecipeInterface[];
    [key: string]: any;
}
 