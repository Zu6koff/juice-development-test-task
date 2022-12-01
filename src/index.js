import React, { useEffect, useMemo } from 'react';
import ReactDOM from 'react-dom/client';
import { AdaptivityProvider, ConfigProvider } from '@vkontakte/vkui';

import App from './App';

import '@vkontakte/vkui/dist/vkui.css';
import '@vkontakte/vkui/dist/fonts.css';
import { StoreProvider } from 'src/components';
import UserStore from 'src/stores/UserStore';
import bridge from '@vkontakte/vk-bridge';

const root = ReactDOM.createRoot(document.getElementById('root'));

const AppStructure = () => {
    const store = useMemo(() => ({
        user: new UserStore(),
    }), []);

    useEffect(() => {
        bridge.send('VKWebAppInit');
    }, []);

    return (
        <ConfigProvider>
            <AdaptivityProvider>
                <StoreProvider store={store}>
                    <App/>
                </StoreProvider>
            </AdaptivityProvider>
        </ConfigProvider>
    );
};

root.render(
    <React.StrictMode>
        <AppStructure/>
    </React.StrictMode>,
);
