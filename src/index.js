import React, { useEffect, useMemo } from 'react';
import ReactDOM from 'react-dom/client';
import { AdaptivityProvider, ConfigProvider } from '@vkontakte/vkui';

import App from './App';

import '@vkontakte/vkui/dist/vkui.css';
import '@vkontakte/vkui/dist/fonts.css';
import { StoreProvider } from 'src/components';
import UserStore from 'src/stores/UserStore';
import bridge from '@vkontakte/vk-bridge';
import AppConfigStore from 'src/stores/AppConfigStore';
import { observer } from 'mobx-react-lite';

const root = ReactDOM.createRoot(document.getElementById('root'));

const AppStructure = observer(() => {
    const store = useMemo(() => ({
        user: new UserStore(),
        appConfig: new AppConfigStore(),
    }), []);

    useEffect(() => {
        bridge.send('VKWebAppInit');
    }, []);

    return (
        <StoreProvider store={store}>
            <ConfigProvider appearance={store.appConfig.appearance}>
                <AdaptivityProvider>
                    <App/>
                </AdaptivityProvider>
            </ConfigProvider>
        </StoreProvider>
    );
});

root.render(<AppStructure/>);
