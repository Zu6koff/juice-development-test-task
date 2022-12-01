import React, { useState } from 'react';
import { Icon28LightbulbOutline } from '@vkontakte/icons';
import { SimpleCell, Switch } from '@vkontakte/vkui';
import { observer } from 'mobx-react-lite';
import { useStore } from 'src/hooks';

const FlashlightCell = () => {
    const {appConfig: {flash_is_available, flash_level, setFlashLevel}} = useStore();
    const [checked, setChecked] = useState(!!flash_level);

    const onChange = (e) => {
        const {checked} = e.currentTarget;
        setFlashLevel(checked ? 1 : 0);
        setChecked(checked);
    };

    return (
        <SimpleCell
            Component={'label'}
            before={<Icon28LightbulbOutline/>}
            after={<Switch onChange={onChange} checked={checked} disabled={!flash_is_available}/>}
            subtitle={flash_is_available ? 'На телефоне включится фонарик' : 'Функция не поддерживается'}
            disabled={!flash_is_available}
        >
            Больше света!
        </SimpleCell>
    );
};

export default observer(FlashlightCell);