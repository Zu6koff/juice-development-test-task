import React from 'react';
import { AppRoot, Epic, SplitCol, SplitLayout, Tabbar as VKTabbar, TabbarItem, View } from '@vkontakte/vkui';
import { Friends, Profile } from 'src/pages';

import { Icon28NewsfeedLinesOutline, Icon28UserSquareOutline } from '@vkontakte/icons';

import './App.css';

const App = () => {
    return (
        <AppRoot>
            <SplitLayout>
                <SplitCol>
                    <Epic activeStory={'profile'} tabbar={<Tabbar/>}>
                        <View id={'profile'} activePanel={'profile'}>
                            <Profile id={'profile'}/>
                            <Friends id={'friends'}/>
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