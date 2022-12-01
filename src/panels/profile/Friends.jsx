import React, { useEffect, useState } from 'react';
import { Group, Panel, PanelHeader, PanelHeaderBack, Placeholder } from '@vkontakte/vkui';
import { FriendCell } from 'src/components';

import { FRIENDS } from 'src/utils/mocks';

const Friends = ({id}) => {
    const [friends, setFriends] = useState([]);

    useEffect(() => {
        setFriends([...FRIENDS]);
    }, []);
    return (
        <Panel id={id}>
            <PanelHeader before={<PanelHeaderBack/>}>
                Друзья
            </PanelHeader>
            <Group>
                {
                    !friends?.length
                        ? <Placeholder>Вы не добавили ни одного друга</Placeholder>
                        : friends.map(friend => <FriendCell key={friend.id} friend={friend}/>)
                }
            </Group>
        </Panel>
    );
};

export default Friends;