import React from 'react';
import { Route } from 'react-router-dom';

type PrivateRouteProps = {
    children: JSX.Element;
    jwt: string;
    path: string;
    redirectUrl: string;
}

const PrivateRoute = ({ children, jwt, path, redirectUrl }: PrivateRouteProps) => {
    if (!jwt) {
        window.location.href = redirectUrl;
    }

    return <Route path={path}>
        { children }
    </Route>;
};

export default PrivateRoute;