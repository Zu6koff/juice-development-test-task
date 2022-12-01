import React from 'react';
import { Avatar, Title } from '@vkontakte/vkui';
import MiniInfoCellSmall from 'src/components/MiniInfoCellSmall/MiniInfoCellSmall';

import { Icon20HomeOutline, Icon20UserOutline } from '@vkontakte/icons';

import { observer } from 'mobx-react-lite';

import './UserInfo.css';

const UserInfo = ({user}) => {
    return (
        <div className={'UserInfo'}>
            <Avatar size={88} src={user.photo}/>
            <Title className={'UserInfo__FullName'} level={'3'} weight={'2'}>{user.full_name}</Title>
            <div className={'UserInfo__InfoCells'}>
                <MiniInfoCellSmall icon={<Icon20HomeOutline/>}>
                    {user.city || 'Не указан'}
                </MiniInfoCellSmall>
                <MiniInfoCellSmall icon={<Icon20UserOutline/>} mode={'button'}>
                    Открыть профиль
                </MiniInfoCellSmall>
            </div>
        </div>
    );
};

export default observer(UserInfo);