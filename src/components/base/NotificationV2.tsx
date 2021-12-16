import React, { FunctionComponent, useContext, useState, createContext } from "react";

import '@/styles/components/base/Notification.scss';

export const NotificationContext = createContext(null);


export const NotificationProvider = ({ children }) => {
    const [visible, setVisible] = useState(false);

    return <NotificationContext.Provider value={{visible, setVisible}}>
        { children }
    </NotificationContext.Provider>;
};

export function useNotification() {
    const notification = useContext(NotificationContext);
    return () => {
        notification.setVisible(!notification.visible);
    };
}

const Notification: FunctionComponent = () => {
    const notification = useContext(NotificationContext);

    return <div className={`notification ${notification.visible ? 'visible' : ''}`}>
        This is a notification
    </div>;
};

export default Notification;