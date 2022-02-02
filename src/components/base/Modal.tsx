import React, { FunctionComponent, useState, createContext, useContext } from 'react';

import "@/styles/components/base/Modal.scss";

import Button from './Button';

interface ModalProviderProps {
    children: JSX.Element;
}

interface UseModalPayload {
    body: JSX.Element;
    footer?: JSX.Element;
}

export const ModalContext = createContext(null);

export const ModalProvider = ({ children }: ModalProviderProps): JSX.Element => {
    const [visible, setVisible] = useState(false);
    const [body, setBody] = useState(null as JSX.Element);
    const [footer, setFooter] = useState(null as JSX.Element);

    return (
        <ModalContext.Provider
            value={{ visible, setVisible, body, setBody, footer, setFooter }}
        >
            { children }
        </ModalContext.Provider>
    );
};

export function useModal() : [(payload: UseModalPayload) => void, () => void] {
    const modal = useContext(ModalContext);

    const closeModal = () => {
        modal.setVisible(false);
    };

    const showModal = (payload: UseModalPayload) => {
        modal.setVisible(true);
        payload.body && modal.setBody(payload.body);
        payload.footer && modal.setFooter(payload.footer);
    };
    
    return [showModal, closeModal];
}

const Modal: FunctionComponent = () => {
    const modal = useContext(ModalContext);
    if (!modal) {
        return null;
    }

    const closeModal = () => {
        modal.setVisible(false);
    };

    return (
        <div 
            className={`modal-wrapper ${modal.visible ? 'visible' : ''}`}
        >
            <div className="curtain" onClick={closeModal}>
                <div className="modal d-flex fd-column">
                    <div className="modal__header d-flex fjc-flex-end">
                        <Button variant="circular" onClick={closeModal}>
                            <span className="material-icons">close</span>
                        </Button>
                    </div>
                    <div className="modal__body fgrow-1">
                        { modal.body }
                    </div>
                    <div className="modal___footer">
                        { modal.footer }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Modal;
