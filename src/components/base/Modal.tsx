import ReactDOM from 'react-dom';
import React, { FunctionComponent, useRef, EventHandler, MouseEvent } from 'react';

import "@/styles/components/base/Modal.scss";

import Button from './Button';

interface ModalProps {
    children: JSX.Element;
    visible: boolean;
    onClose: () => void;
}

const Modal: FunctionComponent<ModalProps> = ({ children, visible, onClose }) => {
    const modalWrapper = document.getElementById('modal-wrapper');
    const modalRef = useRef(null);

    const closeModalFromOutside : EventHandler<MouseEvent<HTMLDivElement>> = (e) => {
        if (modalRef.current.contains(e.target)) {
            return;
        }
        onClose();
    };
    
    const closeModal : EventHandler<MouseEvent<HTMLButtonElement>> = () => {
        onClose();
    };

    return ReactDOM.createPortal(
        <div 
            className={`modal-wrapper ${visible ? 'visible' : ''}`}
        >
            <div className="curtain"/>
            <div className="modal-container"  onClick={closeModalFromOutside} >
                <div className="modal d-flex fd-column" ref={modalRef}>
                    <div className="modal__header d-flex fjc-flex-end">
                        <Button variant="circular" onClick={closeModal}>
                            <span className="material-icons">close</span>
                        </Button>
                    </div>
                    <div className="modal__body">
                        { children }
                    </div>
                </div>
            </div>
        </div>,
        modalWrapper
    );
};

export default Modal;
