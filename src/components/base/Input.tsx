import React, { FunctionComponent, ChangeEvent, EventHandler, FocusEvent } from 'react';

import '@/styles/components/base/Input.scss';

interface InputProps {
    label: string;
    value: string;
    onChange: EventHandler<ChangeEvent<HTMLInputElement>>;
    onBlur: EventHandler<FocusEvent<HTMLInputElement>>;
    autoFocus: boolean;
}

const Input: FunctionComponent<InputProps> = ({ label, value, onChange, onBlur, autoFocus }) => {
    return <div className="input d-flex fd-column">
        <label htmlFor="" className="forder-2">{ label }</label>
        <input
            value={value}
            onChange={(e) => onChange(e)} 
            onBlur={(e) => onBlur(e) }
            autoFocus={autoFocus}
            type="text"
        />
    </div>;
};

export default Input;
