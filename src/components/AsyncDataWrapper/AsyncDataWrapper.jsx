import React from 'react';
import { PanelSpinner, Placeholder } from '@vkontakte/vkui';

const AsyncDataWrapper = ({state, children, placeholder = <PanelSpinner/>}) => {
    if (state === 'loading') return placeholder;
    if (state === 'error') return (
        <Placeholder title={'Произошла ошибка при загрузке данных'}>
            Перезапустите приложение
        </Placeholder>
    );

    return children;
};

export default AsyncDataWrapper;