import React, { EventHandler, FunctionComponent, MouseEvent } from 'react';

interface ButtonProps {
    children: JSX.Element | string;
    variant?: string;
    onClick?: EventHandler<MouseEvent<HTMLButtonElement>>
}

const Button: FunctionComponent<ButtonProps> = (props: ButtonProps) => {
    const { children, variant='primary' } = props;

    return <>
        <button 
            type="button"
            className={`btn btn-${variant}`}
            { ...props }
        >
            { children }
        </button>
    </>;
};

export default Button;
