interface IContextProps {
    state: IState;
    dispatch: any;
}

interface IState {
    auth: IAuth 
    recipes: RecipeInterface[]
}

interface IAction {
    type: string;
    payload: any;
}

interface IAuth {
    user: IUser;
    loginUrl: string;
    signUpUrl: string;
}
interface IUser {
    id: number;
    email: string;
}
interface RecipeInterface {
    id: number;
    name: string;
    instructions: string;
    user_id: number
}

interface IRecipeHook {
    recipes: RecipeInterface[];
    [key: string]: any;
}

interface IAuthHook {
    auth: IAuth;
    [key: string]: any;
}
interface IngredientInterface {
    id?: number;
    name: string;
    quantity: string;
    user_id?: number
}