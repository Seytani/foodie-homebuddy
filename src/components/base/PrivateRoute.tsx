import React from 'react';
import { authSelector } from '@/store/auth-slice';
import { useSelector } from '@/store/hooks';
import { Redirect, Route } from 'react-router-dom';

type PrivateRouteProps = {
    children: JSX.Element;
    path: string;
}

const PrivateRoute = ({ children, path }: PrivateRouteProps): JSX.Element => {
    const auth = useSelector(authSelector);
    const isLoggedIn = !!auth?.user;
    
    if (!isLoggedIn) {
        return <Redirect to="/login"/>;
    }

    return <Route path={path}>
        { children }
    </Route>;
};

export default PrivateRoute;