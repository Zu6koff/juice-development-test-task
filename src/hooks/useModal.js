import { useCallback, useState } from 'react';

export const useModal = () => {
    const [activeModal, setActiveModal] = useState(null);

    const openModal = useCallback((e) => {
        const {modal} = e.currentTarget.dataset;
        setActiveModal(modal);
    }, []);

    const closeModal = useCallback(() => {
        setActiveModal(null);
    }, []);

    return {activeModal, openModal, closeModal};
};