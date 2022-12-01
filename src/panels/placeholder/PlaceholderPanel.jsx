import React, { useEffect } from 'react';
import { Button, Group, Panel, PanelHeader, Placeholder } from '@vkontakte/vkui';

import { IllustrationTongue, LogoVKUI } from 'src/assets';

const PlaceholderPanel = ({id, openModal}) => {
    useEffect(() => console.log('PlaceholderPanel render'));

    return (
        <Panel id={id}>
            <PanelHeader shadow={false} separator={false}>
                <LogoVKUI className={'PanelHeader__in__Logo'}/>
            </PanelHeader>
            <Group>
                <Placeholder
                    icon={<img src={IllustrationTongue} alt={'illustration'}/>}
                    title={'Немного лирики'}
                    action={
                        <Button size={'m'} onClick={openModal} data-modal={'example'}>
                            Нажми на меня
                        </Button>
                    }
                    stretched
                >
                    Прежде чем описание станет хорошим, его необходимо написать.
                    Не правда ли?
                </Placeholder>
            </Group>
        </Panel>
    );
};

export default React.memo(PlaceholderPanel);