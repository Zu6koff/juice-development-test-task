import React from 'react';
import { Avatar, Title } from '@vkontakte/vkui';
import MiniInfoCell16 from '../MiniInfoCell16/MiniInfoCell16';

import { Icon20HomeOutline, Icon20UserOutline } from '@vkontakte/icons';

import { observer } from 'mobx-react-lite';

import './UserInfo.css';

const UserInfo = ({user}) => {
    return (
        <div className={'UserInfo'}>
            <Avatar size={88} src={user.photo}/>
            <Title className={'UserInfo__FullName'} level={'3'} weight={'2'}>{user.full_name}</Title>
            <div className={'UserInfo__InfoCells'}>
                <MiniInfoCell16 icon={<Icon20HomeOutline/>}>
                    {user.city || 'Не указан'}
                </MiniInfoCell16>
                <MiniInfoCell16 icon={<Icon20UserOutline/>} mode={'button'}>
                    Открыть профиль
                </MiniInfoCell16>
            </div>
        </div>
    );
};

export default observer(UserInfo);