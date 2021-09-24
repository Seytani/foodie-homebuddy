import React, { FunctionComponent } from 'react';

import '@/styles/components/base/Input.scss';

interface InputProps {
    label: string;
}

const Input: FunctionComponent<InputProps> = ({ label}) => {
    return <div className="input d-flex fd-column">
        <label htmlFor="" className="forder-2">{ label }</label>
        <input type="text"/>
    </div>;
};

export default Input;
