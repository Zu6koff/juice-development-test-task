import React from 'react';
import { ModalRoot } from '@vkontakte/vkui';

import ExampleModalCard from './ExampleModalCard';

const Modal = ({activeModal, closeModal}) => {
    return (
        <ModalRoot activeModal={activeModal} onClose={closeModal}>
            <ExampleModalCard id={'example'} onClose={closeModal}/>
        </ModalRoot>
    );
};

export default Modal;