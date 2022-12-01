import React, { useEffect, useState } from 'react';
import { Group, Panel, PanelHeader, PanelHeaderBack } from '@vkontakte/vkui';
import { FriendsList } from 'src/components';

import { FRIENDS } from 'src/utils/mocks';

const Friends = ({id, goBack}) => {
    const [friends, setFriends] = useState([]);

    useEffect(() => console.log('FriendsPanel render'));

    useEffect(() => {
        setFriends([...FRIENDS]);
    }, []);

    return (
        <Panel id={id}>
            <PanelHeader before={<PanelHeaderBack onClick={goBack}/>}>
                Друзья
            </PanelHeader>
            <Group>
                <FriendsList friends={friends}/>
            </Group>
        </Panel>
    );
};

export default React.memo(Friends);