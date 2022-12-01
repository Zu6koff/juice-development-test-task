import React from 'react';
import { CellButton, Group, Header, Panel, PanelHeader, PanelHeaderButton } from '@vkontakte/vkui';
import { AsyncDataWrapper, FlashlightCell, FriendsList, UserInfo } from 'src/components';

import { Icon24AddOutline, Icon28MoonOutline, Icon28SunOutline } from '@vkontakte/icons';
import { LogoVKUI } from 'src/assets';

import { useStore } from 'src/hooks';
import { observer } from 'mobx-react-lite';

const Profile = ({id, go}) => {
    const {user, appConfig} = useStore();

    return (
        <Panel id={id} sizeX={'regular'} className={'panel-backgroundPage'}>
            <PanelHeader
                shadow={false}
                separator={false}
                before={
                    <PanelHeaderButton onClick={appConfig.switchAppearance} aria-label={'Сменить тему'}>
                        {appConfig.appearance === 'light' ? <Icon28MoonOutline/> : <Icon28SunOutline/>}
                    </PanelHeaderButton>
                }
            >
                <LogoVKUI className={'PanelHeader__in__Logo'}/>
            </PanelHeader>
            <Group>
                <AsyncDataWrapper state={user.state.userData}>
                    <UserInfo
                        id={user.id}
                        full_name={user.full_name}
                        photo_url={user.photo_url}
                        city={user.city}
                    />
                </AsyncDataWrapper>
            </Group>
            <Group>
                <FlashlightCell/>
            </Group>
            <Group
                header={
                    <Header mode={'primary'} indicator={user.friends.length || null}>
                        Друзья
                    </Header>
                }
            >
                <AsyncDataWrapper state={user.state.friends}>
                    <FriendsList friends={user.friends.slice(0, 4)}/>
                </AsyncDataWrapper>
                {
                    user.friends.length > 4 &&
                    <CellButton
                        centered
                        before={<Icon24AddOutline/>}
                        onClick={go}
                        data-page={'profile/friends'}
                    >
                        Показать всех друзей
                    </CellButton>
                }
            </Group>
        </Panel>
    );
};

export default observer(Profile);