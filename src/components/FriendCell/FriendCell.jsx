import React from 'react';
import { calcInitialsAvatarColor, InitialsAvatar, SimpleCell } from '@vkontakte/vkui';
import { getInitials } from 'src/utils/getInitials';

const FriendCell = ({friend, ...props}) => {
    return (
        <SimpleCell
            subtitle={friend.email}
            extraSubtitle={friend.phone}
            before={
                <InitialsAvatar size={48} gradientColor={calcInitialsAvatarColor(friend.id)}>
                    {getInitials(friend.name)}
                </InitialsAvatar>
            }
            disabled
            {...props}
        >
            {friend.name}
        </SimpleCell>
    );
};

export default FriendCell;