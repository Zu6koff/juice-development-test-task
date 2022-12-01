import React from 'react';
import { AppRoot, Epic, SplitCol, SplitLayout, Tabbar as VKTabbar, TabbarItem, View } from '@vkontakte/vkui';
import { Friends, PlaceholderPanel as Placeholder, Profile } from 'src/panels';

import { Icon28NewsfeedLinesOutline, Icon28UserSquareOutline } from '@vkontakte/icons';

import './App.css';

const App = () => {
    return (
        <AppRoot>
            <SplitLayout>
                <SplitCol>
                    <Epic activeStory={'placeholder'} tabbar={<Tabbar/>}>
                        <View id={'profile'} activePanel={'profile'}>
                            <Profile id={'profile'}/>
                            <Friends id={'friends'}/>
                        </View>
                        <View id={'placeholder'} activePanel={'placeholder'}>
                            <Placeholder id={'placeholder'}/>
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