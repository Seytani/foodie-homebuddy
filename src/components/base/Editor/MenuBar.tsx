import React, { FunctionComponent } from 'react';

const MenuBar: FunctionComponent = () => {
    return <div className="menu-bar">
        <button className="menu-bar__icon">
            <span className="material-icons">format_bold</span>
        </button>
        <button className="menu-bar__icon">
            <span className="material-icons">
                format_italic
            </span>
        </button>
        <button className="menu-bar__icon">
            <span className="material-icons">
                strikethrough_s
            </span>
        </button>
        <button className="menu-bar__icon">
            <span className="material-icons">
                format_size
            </span>
        </button>
        <button className="menu-bar__icon">
            <span className="material-icons">
                text_fields
            </span>
        </button>
        <button className="menu-bar__icon">
            <span className="material-icons">
                list
            </span>
        </button>
        <button className="menu-bar__icon">
            <span className="material-icons">
                format_list_numbered
            </span>
        </button>
    </div>;
};

export default MenuBar;
