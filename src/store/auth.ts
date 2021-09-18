import { useGlobalStore } from '.';

export default function authReducer(auth: IAuth, action: IAction): IAuth {
    switch (action.type) {
        case 'auth/set_auth':
            return action.payload; 
            break;
        default:
            return auth;
            break;
    }
}

export function useAuth(): IAuthHook {
    const { state, dispatch } = useGlobalStore();

    function setAuth(auth: IAuth) {
        dispatch({ type: 'auth/set_auth', payload: auth});
    }

    const { auth } = state;

    return { auth, setAuth };
}
