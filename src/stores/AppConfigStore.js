import { makeAutoObservable, runInAction } from 'mobx';
import bridge from '@vkontakte/vk-bridge';

class AppConfigStore {
    flash_is_available = false;
    flash_level = 0;
    appearance = 'light';

    constructor() {
        makeAutoObservable(this);
        this.bridgeSubscribe();
        bridge.send('VKWebAppFlashGetInfo');
    }

    bridgeSubscribe = () => {
        bridge.subscribe(({detail: {type, data}}) => {
            if (type === 'VKWebAppUpdateConfig') {
                runInAction(() => {
                    this.appearance = data.appearance;
                });
            }
            if (type === 'VKWebAppFlashGetInfoResult') {
                runInAction(() => {
                    this.flash_is_available = data.is_available;
                    this.flash_level = data.level || 0;
                });
            }
        });
    };

    switchAppearance = () => {
        this.appearance = this.appearance === 'light' ? 'dark' : 'light';
    };

    setFlashLevel = (level) => {
        bridge.send('VKWebAppFlashSetLevel', {level: level}).then(({result}) => {
            if (!result) return false;
            runInAction(() => this.flash_level = level);
        });
    };
}

export default AppConfigStore;