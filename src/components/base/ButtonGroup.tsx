import React, { FunctionComponent } from 'react';

import '@/styles/components/base/ButtonGroup.scss';



interface ButtonGroupProps {
    children: JSX.Element[];
}

const ButtonGroup: FunctionComponent<ButtonGroupProps> = ({ children }) => {
    return <div className="button-group">
        { children }
    </div>;
};

export default ButtonGroup;
