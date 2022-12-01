import React from 'react';
import { ModalRoot } from '@vkontakte/vkui';

import ExampleModalCard from './ExampleModalCard';

const Modal = () => {
    return (
        <ModalRoot activeModal={null}>
            <ExampleModalCard id={'example'}/>
        </ModalRoot>
    );
};

export default Modal;