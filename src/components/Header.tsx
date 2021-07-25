import React from 'react';
type HeaderProps = {
    loginUrl: string;
    signUpUrl: string;
}

const Header = ({loginUrl, signUpUrl}: HeaderProps) => {
    return <header>
        <a href={loginUrl}>Login</a>
        <a href={signUpUrl}>Sign Up</a>
    </header>
};

export default Header;
