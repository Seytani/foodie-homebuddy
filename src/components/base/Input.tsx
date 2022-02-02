import React, { FunctionComponent, ChangeEvent, EventHandler, FocusEvent, KeyboardEvent } from 'react';

import '@/styles/components/base/Input.scss';
export interface InputProps {
    label: string;
    value?: string;
    type?: string;
    required?: boolean;
    autoFocus?: boolean;
    maxlength?: number
    onChange?: EventHandler<ChangeEvent<HTMLInputElement>>;
    onBlur?: EventHandler<FocusEvent<HTMLInputElement>>;
    onKeyPress?: EventHandler<KeyboardEvent<HTMLInputElement>>;
}

const Input: FunctionComponent<InputProps> = (props) => {
    const {label, type} = props;
    return <div className="input d-flex fd-column">
        <label htmlFor="" className="forder-2">{ label }</label>
        <input
            type={type}
            { ...props }
        />
    </div>;
};

export default Input;
