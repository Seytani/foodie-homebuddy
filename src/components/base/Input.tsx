import React, { FunctionComponent, ChangeEvent, EventHandler, FocusEvent, KeyboardEvent } from 'react';

import '@/styles/components/base/Input.scss';

export interface InputProps {
    label: string;
    value?: string;
    onChange?: EventHandler<ChangeEvent<HTMLInputElement>>;
    onBlur?: EventHandler<FocusEvent<HTMLInputElement>>;
    onKeyPress?: EventHandler<KeyboardEvent<HTMLInputElement>>;
    required?: boolean;
    autoFocus?: boolean;
    maxlength?: number
}

const Input: FunctionComponent<InputProps> = (props) => {
    return <div className="input d-flex fd-column">
        <label htmlFor="" className="forder-2">{ props.label }</label>
        <input
            { ...props }
            type="text"
        />
    </div>;
};

export default Input;
