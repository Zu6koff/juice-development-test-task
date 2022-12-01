import React from 'react';
import { Caption } from '@vkontakte/vkui';

import './MiniInfoCellSmall.css';

const MiniInfoCellSmall = ({Component = 'div', icon, children, mode = 'default', ...props}) => {
    const isButton = mode === 'button';

    return (
        <Component className={'MiniInfoCellSmall'} {...props}>
            <span className={`MiniInfoCellSmall__Icon ${isButton ? 'Button' : ''}`}>{icon}</span>
            <Caption className={`MiniInfoCellSmall__Label ${isButton ? 'Button' : ''}`} level={'1'}>{children}</Caption>
        </Component>
    );
};

export default MiniInfoCellSmall;