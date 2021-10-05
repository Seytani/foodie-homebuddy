import React, { FunctionComponent, ChangeEvent } from 'react';

import '@/styles/components/base/Input.scss';

interface InputProps {
    label: string;
    onChange: (e:ChangeEvent<HTMLInputElement>) => void;
}

const Input: FunctionComponent<InputProps> = ({ label, onChange}) => {
    return <div className="input d-flex fd-column">
        <label htmlFor="" className="forder-2">{ label }</label>
        <input onChange={(e:ChangeEvent<HTMLInputElement>) => onChange(e)} type="text"/>
    </div>;
};

export default Input;
