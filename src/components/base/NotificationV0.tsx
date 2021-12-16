import React, { FunctionComponent, useState } from 'react';

interface NotificationProps {
    visible: boolean;
}

export function useNotification() {
    const [visible, setVisible] = useState(false);

    const toggleNotification = () => {
      setVisible(!visible);
    };

    return {visible, toggleNotification};
}

const Notification: FunctionComponent<NotificationProps> = ({ visible }) => {
    return <div className={`notification ${visible ? 'visible' : ''}`}>
        test notification text
    </div>;
};

export default Notification;