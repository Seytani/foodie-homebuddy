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

interface IngredientInterface {
    id: number;
    name: string;
    user_id: number
}