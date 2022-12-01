import React from 'react';
import { Button, Group, Panel, PanelHeader, Placeholder } from '@vkontakte/vkui';

import { IllustrationTongue, LogoVKUI } from 'src/assets';

const PlaceholderPanel = ({id, openModal}) => {
    return (
        <Panel id={id}>
            <PanelHeader shadow={false} separator={false}>
                <LogoVKUI className={'PanelHeader__in__Logo'}/>
            </PanelHeader>
            <Group>
                <Placeholder
                    stretched
                    title={'Немного лирики'}
                    icon={<img src={IllustrationTongue} alt={'illustration'}/>}
                    action={
                        <Button size={'m'} onClick={openModal} data-modal={'example'}>
                            Нажми на меня
                        </Button>
                    }
                >
                    Прежде чем описание станет хорошим, его необходимо написать.
                    Не правда ли?
                </Placeholder>
            </Group>
        </Panel>
    );
};

export default React.memo(PlaceholderPanel);