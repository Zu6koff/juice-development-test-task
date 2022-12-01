import React from 'react';
import { List, Placeholder } from '@vkontakte/vkui';
import FriendCell from '../FriendCell/FriendCell';

const FriendsList = ({friends, ...props}) => {
    if (!friends?.length) return <Placeholder>Вы не добавили ни одного друга</Placeholder>;

    return (
        <List {...props}>
            {
                friends.map(friend => <FriendCell key={friend.id} friend={friend}/>)
            }
        </List>
    );
};

export default FriendsList;