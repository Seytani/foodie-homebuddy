import React, { FunctionComponent, useState } from "react";

import '@/styles/components/base/Notification.scss';

let $visible;
let $setVisible; 
let $setText;

export function notUseNotification() {
    return (text) => {
        $setText(text);
        $setVisible(!$visible);
    };
}

const Notification: FunctionComponent = () => {
    const [visible, setVisible] = useState(false);
    const [text, setText] = useState('');
    $visible = visible;
    $setVisible = setVisible;
    $setText = setText;

    return <div className={`notification ${visible ? 'visible' : ''}`}>
        { text }
    </div>;
};

export default Notification;