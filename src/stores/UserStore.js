import { makeAutoObservable, runInAction } from 'mobx';
import bridge from '@vkontakte/vk-bridge';

class UserStore {
    id = null;
    first_name = "";
    last_name = "";
    photo = null;
    city = null;

    constructor() {
        makeAutoObservable(this);
        this.fetchUserDataFromVK();
    }

    fetchUserDataFromVK = async () => {
        const {id, first_name, last_name, photo_100, city} = await bridge.send('VKWebAppGetUserInfo');
        runInAction(() => {
            this.id = id;
            this.first_name = first_name;
            this.last_name = last_name;
            this.photo = photo_100;
            this.city = city?.title || null;
        });
    };

    get full_name() {
        return `${this.first_name} ${this.last_name}`;
    }
}

export default UserStore;