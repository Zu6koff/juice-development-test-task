import React, { useEffect, useState } from 'react';
import { CellButton, Group, Header, Panel, PanelHeader } from '@vkontakte/vkui';
import { FlashlightCell, FriendsList, UserInfo } from 'src/components';

import { Icon24AddOutline } from '@vkontakte/icons';
import { LogoVKUI } from 'src/assets';
import { useStore } from 'src/hooks';

import { FRIENDS } from 'src/utils/mocks';

const Profile = ({id, go}) => {
    const [friends, setFriends] = useState([]);
    const {user} = useStore();

    useEffect(() => console.log('ProfilePanel render'));

    useEffect(() => {
        setFriends([...FRIENDS]);
    }, []);

    return (
        <Panel id={id} sizeX={'regular'} className={'panel-backgroundPage'}>
            <PanelHeader shadow={false} separator={false}>
                <LogoVKUI className={'PanelHeader__in__Logo'}/>
            </PanelHeader>
            <Group>
                <UserInfo user={user}/>
            </Group>
            <Group>
                <FlashlightCell/>
            </Group>
            <Group header={<Header mode={'primary'} indicator={friends.length || null}>Друзья</Header>}>
                <FriendsList friends={friends.slice(0, 4)}/>
                {
                    friends.length > 4 &&
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

export default React.memo(Profile);