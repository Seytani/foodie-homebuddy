import React, { FunctionComponent, ChangeEvent, EventHandler, FocusEvent } from 'react';

import '@/styles/components/base/Input.scss';

export interface InputProps {
    label: string;
    value?: string;
    onChange?: EventHandler<ChangeEvent<HTMLInputElement>>;
    onBlur?: EventHandler<FocusEvent<HTMLInputElement>>;
    autoFocus?: boolean;
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
