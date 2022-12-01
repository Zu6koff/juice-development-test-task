import React from 'react';
import { Caption } from '@vkontakte/vkui';

import './MiniInfoCell16.css';

const MiniInfoCell16 = ({icon, children, mode = 'default'}) => {
    const isButton = mode === 'button';

    return (
        <div className={'MiniInfoCell16'}>
            <span className={`MiniInfoCell16__Icon ${isButton ? 'Button' : ''}`}>{icon}</span>
            <Caption className={`MiniInfoCell16__Label ${isButton ? 'Button' : ''}`} level={'1'}>{children}</Caption>
        </div>
    );
};

export default MiniInfoCell16;