import React from 'react';
import PropTypes from 'prop-types';
import style from './style.scss';

const Modal = ({isOpen, close, children}) => (
    <div>
        {isOpen &&
            <div className={style.modal} onClick={close}>
                <div className={style.content}>
                    <span className={style.close} onClick={close}></span>
                    {children}
                </div>
            </div>
        }
    </div>
);

Modal.propTypes = {
    isOpen: PropTypes.bool.isRequired,
    close: PropTypes.func.isRequired,
    children: PropTypes.object.isRequired
};

export default Modal;