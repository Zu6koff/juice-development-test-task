import React from 'react';
import { Avatar, Title } from '@vkontakte/vkui';
import MiniInfoCellSmall from 'src/components/MiniInfoCellSmall/MiniInfoCellSmall';

import { Icon20HomeOutline, Icon20UserOutline } from '@vkontakte/icons';

import './UserInfo.css';

const UserInfo = ({full_name, photo_url, city, id}) => {
    return (
        <div className={'UserInfo'}>
            <Avatar size={88} src={photo_url}/>
            <Title className={'UserInfo__FullName'} level={'3'} weight={'2'}>{full_name}</Title>
            <div className={'UserInfo__InfoCells'}>
                <MiniInfoCellSmall icon={<Icon20HomeOutline/>}>
                    {city || 'Не указан'}
                </MiniInfoCellSmall>
                <MiniInfoCellSmall
                    icon={<Icon20UserOutline/>}
                    mode={'button'}
                    Component={'a'}
                    href={`https://vk.com/id${id}`}
                    target={'_blank'}
                    rel={'noreferrer'}
                >
                    Открыть профиль
                </MiniInfoCellSmall>
            </div>
        </div>
    );
};

export default UserInfo;