import React, { useState } from 'react';
import { AppRoot, Epic, SplitCol, SplitLayout, Tabbar as VKTabbar, TabbarItem, View } from '@vkontakte/vkui';
import { Profile } from 'src/pages';

import './App.css';
import { Icon28NewsfeedLinesOutline, Icon28UserSquareOutline } from '@vkontakte/icons';

const App = () => {
    return (
        <AppRoot>
            <SplitLayout>
                <SplitCol>
                    <Epic activeStory={'profile'} tabbar={<Tabbar/>}>
                        <View id={'profile'} activePanel={'profile'}>
                            <Profile id={'profile'}/>
                        </View>
                    </Epic>
                </SplitCol>
            </SplitLayout>
        </AppRoot>
    );
};

const Tabbar = () => {
    return (
        <VKTabbar>
            <TabbarItem
                indicator={<Icon28NewsfeedLinesOutline/>}
                text={'Placeholder'}
            />
            <TabbarItem
                selected
                indicator={<Icon28UserSquareOutline/>}
                text={'Профиль'}
            />
        </VKTabbar>
    );
};

export default App;