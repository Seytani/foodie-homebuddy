import React, { FunctionComponent, createContext, useContext, useReducer } from 'react';

import mainReducer, { initialState } from './reducer';

export const GlobalStore = createContext({} as IContextProps);

export const useGlobalStore = (): IContextProps => useContext(GlobalStore);

const Provider: FunctionComponent = ({ children }) => {
    const [state, dispatch] = useReducer(mainReducer, initialState);

    return (
        <GlobalStore.Provider value={{ state, dispatch }}>
            { children }
        </GlobalStore.Provider>
    );

};

export default Provider;

