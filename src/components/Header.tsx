import React, { FunctionComponent } from 'react';
import { UserInterface } from '../client';

type HeaderProps = {
    user: UserInterface | null
    loginUrl: string;
    signUpUrl: string;
}

const Header: FunctionComponent<HeaderProps> = ({user, loginUrl, signUpUrl}) => {
    const isLoggedIn = !!user;
    const renderLinks = () => {
        if (isLoggedIn) {
            return  <a href="logout">Logout</a>;
        } 
        return <div>
            <a href={loginUrl}>Login</a>
            <a href={signUpUrl}>Sign Up</a>
        </div>;

    };
    return <header>
        <span>{ user?.email }</span>
        { renderLinks()}
    </header>;
};

export default Header;
