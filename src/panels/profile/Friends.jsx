import React from 'react';
import { Group, Panel, PanelHeader, PanelHeaderBack } from '@vkontakte/vkui';
import { Observer } from 'mobx-react-lite';
import { FriendsList } from 'src/components';

import { useStore } from 'src/hooks';

const Friends = ({id, goBack}) => {
    const {user} = useStore();

    return (
        <Panel id={id}>
            <PanelHeader before={<PanelHeaderBack onClick={goBack}/>}>
                Друзья
            </PanelHeader>
            <Group>
                <Observer>
                    {
                        () => <FriendsList friends={user.friends}/>
                    }
                </Observer>
            </Group>
        </Panel>
    );
};

export default React.memo(Friends);