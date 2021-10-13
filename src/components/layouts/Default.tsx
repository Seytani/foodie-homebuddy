import React, { FunctionComponent } from 'react';

import '@/styles/components/layout/Default.scss';

import Navbar from '../base/Navbar';
import { useDispatch, useSelector } from '@/store/hooks';
import { authSelector } from '@/store/auth-slice';

const DefaultLayout: FunctionComponent = (props) => {

    const auth = useSelector(authSelector);
    const dispatch = useDispatch();
    
    function getUsername(user: IUser): string {
        if (!user) {
            return '';
        }
        const username = user.email.split('@')[0];
        return username.charAt(0).toUpperCase() + username.slice(1);
    }

    return (
        <div className="default-layout d-flex">
            <aside>
                <div className="logo">
                    <h1>Foodie
                        <span className="logo__subtitle">homebuddy</span>
                    </h1>
                </div>
                <div className="user">
                    { auth.user &&
                        <span>hello { getUsername(auth.user) }</span>
                    }
                </div>
                <Navbar />
            </aside>
            <main>
                { props.children }
            </main>
        </div>
    );
};

export default DefaultLayout;