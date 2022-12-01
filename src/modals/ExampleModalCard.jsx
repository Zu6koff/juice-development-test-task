import React from 'react';
import { Button, ModalCard, SimpleCell } from '@vkontakte/vkui';
import {
    Icon28BillSeparatedOutline,
    Icon28IncognitoOutline,
    Icon28TagOutline,
    Icon56Stars3Outline,
} from '@vkontakte/icons';

const ExampleModalCard = ({id, onClose}) => {
    const items = [
        {
            label: 'Number one',
            subtitle: 'Короткое описание',
            before: <Icon28TagOutline/>,
        },
        {
            label: 'Number two',
            subtitle: 'Короткое описание',
            before: <Icon28BillSeparatedOutline/>,
        },
        {
            label: 'Number three',
            subtitle: 'Ёлочка гори',
            before: <Icon28IncognitoOutline/>,
        },
    ];

    return (
        <ModalCard
            id={id}
            header={'Это модальное окно'}
            subheader={'Короткое описание, а может и не короткое'}
            icon={<Icon56Stars3Outline/>}
            actions={<Button size={'l'} onClick={onClose}>Понятно</Button>}
        >
            <div className={'modalCard__noSpacedContent'}>
                {
                    items.map(item => (
                        <SimpleCell
                            key={item.label}
                            subtitle={item.subtitle}
                            before={item.before}
                            disabled
                        >
                            {item.label}
                        </SimpleCell>
                    ))
                }
            </div>
        </ModalCard>
    );
};

export default React.memo(ExampleModalCard);