import React, { FunctionComponent } from 'react';
import { Link } from 'react-router-dom';

import '@/styles/components/Navbar.scss';

import { useAuth } from '../store/auth';

const Navbar: FunctionComponent = () => {
    const { auth } = useAuth();
    const isLoggedIn = !!auth?.user;

    const renderLinks = () => {
        if (isLoggedIn) {
            return <div className="login d-flex fai-center">
                <span className="material-icons">logout</span>
                <a href="logout">
                    Logout
                </a>
            </div>;
        } 
        return <div className="login">
            <a href={auth?.loginUrl}>Login</a>
            <a href={auth?.signUpUrl}>Sign Up</a>
        </div>;

    };

    return <nav className="navbar-container d-flex fd-column ">
        <ul className="navbar">
            <li>
                <Link to="/meal-plan">Meal Plan</Link>
            </li>
            <li>
                <Link to="/shopping-list">Shopping List</Link>
            </li>
            <li>
                <Link to="/recipes">Recipes</Link>
            </li>
            <li>
                <Link to="/ingredients">Ingredients</Link>
            </li>
        </ul>
        { renderLinks() }
    </nav>;
};

export default Navbar;
