import React, { useEffect, useState } from 'react';
import { CellButton, Group, Header, Panel, PanelHeader, Placeholder, SimpleCell, Switch } from '@vkontakte/vkui';
import { FriendCell, UserInfo } from 'src/components';

import { Icon24AddOutline, Icon28LightbulbOutline } from '@vkontakte/icons';
import { LogoVKUI } from 'src/assets';

import { observer } from 'mobx-react-lite';
import { useStore } from 'src/hooks';

import { FRIENDS } from 'src/utils/mocks';

const Profile = ({id}) => {
    const [friends, setFriends] = useState([]);
    const {user} = useStore();

    useEffect(() => {
        setFriends([...FRIENDS]);
    }, []);

    return (
        <Panel id={id} sizeX={'regular'} style={{backgroundColor: 'var(--background_page)'}}>
            <PanelHeader shadow={false} separator={false}>
                <LogoVKUI className={'PanelHeader__in__Logo'}/>
            </PanelHeader>
            <Group>
                <UserInfo user={user}/>
            </Group>
            <Group>
                <SimpleCell
                    before={<Icon28LightbulbOutline/>}
                    after={<Switch/>}
                    subtitle={'На телефоне включится фонарик'}
                >
                    Больше света!
                </SimpleCell>
            </Group>
            <Group header={<Header mode={'primary'} indicator={friends.length || null}>Друзья</Header>}>
                {
                    !friends?.length
                        ? <Placeholder>Вы не добавили ни одного друга</Placeholder>
                        : friends.slice(0, 4).map(friend => <FriendCell key={friend.id} friend={friend}/>)
                }
                {
                    friends.length > 4
                    && <CellButton centered before={<Icon24AddOutline/>}>
                        Показать всех друзей
                    </CellButton>
                }
            </Group>
        </Panel>
    );
};

export default observer(Profile);