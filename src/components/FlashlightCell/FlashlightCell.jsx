import React from 'react';
import { Icon28LightbulbOutline } from '@vkontakte/icons';
import { SimpleCell, Switch } from '@vkontakte/vkui';

const FlashlightCell = () => {
    return (
        <SimpleCell
            before={<Icon28LightbulbOutline/>}
            after={<Switch/>}
            subtitle={'На телефоне включится фонарик'}
        >
            Больше света!
        </SimpleCell>
    );
};

export default FlashlightCell;