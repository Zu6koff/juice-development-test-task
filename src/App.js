import React from 'react';
import { AppRoot, Epic, SplitCol, SplitLayout, Tabbar as VKTabbar, TabbarItem, View } from '@vkontakte/vkui';
import { Friends, PlaceholderPanel as Placeholder, Profile } from 'src/panels';
import Modal from 'src/modals/Modal';

import { Icon28NewsfeedLinesOutline, Icon28UserSquareOutline } from '@vkontakte/icons';

import './App.css';
import { useModal, useNavigation } from 'src/hooks';

const App = () => {
    const {activeView, activePanel, go, goBack} = useNavigation('profile');
    const {activeModal, openModal, closeModal} = useModal();

    return (
        <AppRoot>
            <SplitLayout modal={<Modal activeModal={activeModal} closeModal={closeModal}/>}>
                <SplitCol animate>
                    <Epic activeStory={activeView} tabbar={<Tabbar go={go} activeView={activeView}/>}>
                        <View id={'profile'} activePanel={activePanel}>
                            <Profile id={'profile'} go={go}/>
                            <Friends id={'friends'} goBack={goBack}/>
                        </View>
                        <View id={'placeholder'} activePanel={activePanel}>
                            <Placeholder id={'placeholder'} openModal={openModal}/>
                        </View>
                    </Epic>
                </SplitCol>
            </SplitLayout>
        </AppRoot>
    );
};

const Tabbar = ({go, activeView}) => {
    return (
        <VKTabbar>
            <TabbarItem
                onClick={go}
                data-page={'placeholder'}
                selected={activeView === 'placeholder'}
                disabled={activeView === 'placeholder'}
                indicator={<Icon28NewsfeedLinesOutline/>}
                text={'Placeholder'}
            />
            <TabbarItem
                onClick={go}
                data-page={'profile'}
                selected={activeView === 'profile'}
                disabled={activeView === 'profile'}
                indicator={<Icon28UserSquareOutline/>}
                text={'Профиль'}
            />
        </VKTabbar>
    );
};

export default App;