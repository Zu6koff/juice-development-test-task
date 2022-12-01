import React from 'react';
import {
    calcInitialsAvatarColor,
    Group,
    Header,
    InitialsAvatar,
    Panel,
    PanelHeader,
    Placeholder,
    SimpleCell,
    Switch,
} from '@vkontakte/vkui';
import { UserInfo } from 'src/components';

import { LogoVKUI } from 'src/assets';

import { observer } from 'mobx-react-lite';
import { useStore } from 'src/hooks';
import { Icon28LightbulbOutline } from '@vkontakte/icons';
import { getInitials } from 'src/utils/getInitials';

const Profile = ({id}) => {
    const {user} = useStore();

    const friends = [
        {
            id: 1,
            name: 'Антон Васильев',
            email: 'aaa@mail.ru',
            phone: '+7 (999) 434-23-65',
        },
    ];

    return (
        <Panel id={id}>
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
            <Group header={<Header mode={'primary'}>Друзья</Header>}>
                {
                    !friends?.length
                        ? <Placeholder>Вы не добавили ни одного друга</Placeholder>
                        : friends.map(friend => (
                            <SimpleCell
                                key={friend.id}
                                subtitle={friend.email}
                                extraSubtitle={friend.phone}
                                before={
                                    <InitialsAvatar size={48} gradientColor={calcInitialsAvatarColor(friend.id)}>
                                        {getInitials(friend.name)}
                                    </InitialsAvatar>
                                }
                            >
                                {friend.name}
                            </SimpleCell>
                        ))

                }
            </Group>
        </Panel>
    );
};

export default observer(Profile);