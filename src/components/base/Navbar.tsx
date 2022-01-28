import React, { FunctionComponent } from 'react';
import { Link } from 'react-router-dom';

import '@/styles/components/base/Navbar.scss';
import { useSelector } from '@/store/hooks';
import { authSelector } from '@/store/auth-slice';


const Navbar: FunctionComponent = () => {
    const auth = useSelector(authSelector);
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
        return <div className="login d-flex">
            <ul>
            <li>
                <Link to="/login">Login</Link>
            </li>
            <li>
                <Link to="/signup">Signup</Link>
            </li>
        </ul>
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
