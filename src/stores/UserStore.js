import { makeAutoObservable, runInAction } from 'mobx';
import bridge from '@vkontakte/vk-bridge';

class UserStore {
    id = null;
    first_name = '';
    last_name = '';
    photo_url = null;
    city = null;
    friends = [];
    state = {
        userData: 'loading',
        friends: 'loading',
    };

    constructor() {
        makeAutoObservable(this);

        this.fetchUserDataFromVK();
        this.fetchFriends();
    }

    fetchUserDataFromVK = async () => {
        const {id, first_name, last_name, photo_100, city} = await bridge.send('VKWebAppGetUserInfo');

        runInAction(() => {
            this.id = id;
            this.first_name = first_name;
            this.last_name = last_name;
            this.photo_url = photo_100;
            this.city = city?.title || null;

            this.state.userData = 'success';
        });
    };

    fetchFriends = async () => {
        try {
            const response = await fetch('https://jsonplaceholder.typicode.com/users');
            if (!response.ok) throw new Error('Что-то пошло не так');
            const friends = await response.json();

            runInAction(() => {
                this.friends = friends;
                this.state.friends = 'success';
            });
        } catch (error) {
            runInAction(() => {
                this.state.friends = 'error';
            });
        }
    };

    get full_name() {
        return `${this.first_name} ${this.last_name}`;
    }
}

export default UserStore;