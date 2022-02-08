interface IContextProps {
	state: IState;
	dispatch: any;
}

interface IState {
	auth: IAuth;
	recipes: IRecipes;
	meals: IMealsState;
}

interface IAction {
	type: string;
	payload: any;
}

interface IRecipes {
	recipes: RecipeInterface[];
	status: string;
}

interface IAuth {
	user: IUser;
    status: string;
}
interface IUser {
	id?: number;
	username?: string;
	email?: string;
	password?: string;
}
interface RecipeInterface {
	id?: number;
	name: string;
	instructions: string;
	user_id?: number;
}

interface IngredientInterface {
	id?: number;
	name: string;
	quantity: string;
	user_id?: number;
}

interface IMealState {
	meals: IMeal[];
	state: string;
}

interface IMeal {
	id?: number;
	type: string;
	date: Date;
	recipe?: RecipeInterface;
	recipe_id?: string;
}
