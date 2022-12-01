import React from 'react';
import { PanelSpinner, Placeholder } from '@vkontakte/vkui';

const AsyncDataWrapper = ({state, children, placeholder = <PanelSpinner/>}) => {
    if (state === 'loading') return placeholder;
    if (state === 'error') return (
        <Placeholder>
            Произошла ошибка при загрузке данных
        </Placeholder>
    );

    return children;
};

export default AsyncDataWrapper;