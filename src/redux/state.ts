import { v1 } from 'uuid';
import { renderTree } from '../index';

export type MessagesType = {
    id: string
    message: string
}
export type DialogsType = {
    id: string
    name: string
    avatar: string
}
export type PostType = {
    id: string
    message: string
    likesCount: number
}
export type DialogsPageType = {
    messages: MessagesType[]
    dialogs: DialogsType[]
}
export type ProfilePageType = {
    posts: PostType[]
    newPostText: string
}
export type RootStateType = {
    profilePage: ProfilePageType
    dialogsPage: DialogsPageType
}

export type StoreType = {
    _state: RootStateType
    changeText: (newText: string) => void
    addPost: () => void
    _callSubscriber: (state: RootStateType) => void
    subscribe: (observer: (state: RootStateType) => void) => void
    getState: () => RootStateType
}

const store: StoreType = {
    _state: {
        profilePage: {
            posts: [
                { id: v1(), message: 'Hi, how are you?', likesCount: 23 },
                { id: v1(), message: 'It\'s my first post?', likesCount: 0 },
            ],
            newPostText: '',
        },
        dialogsPage: {
            dialogs: [
                { id: v1(), name: 'Dimych', avatar: '' },
                { id: v1(), name: 'Andrey', avatar: '' },
                { id: v1(), name: 'Sveta', avatar: '' },
                { id: v1(), name: 'Sasha', avatar: '' },
                { id: v1(), name: 'Viktor', avatar: '' },
                { id: v1(), name: 'Valera', avatar: '' },
            ],
            messages: [
                { id: v1(), message: 'Hi' },
                { id: v1(), message: 'How you doin?' },
                { id: v1(), message: 'Yo' },
            ],
        },
    },
    getState() {
        return this._state
    },
    _callSubscriber() {
        console.log('State changed')
    },
    addPost()  {
        const newPost: PostType = {
            id: v1(),
            message: this._state.profilePage.newPostText,
            likesCount: 0,
        };
        this._state.profilePage.posts.push(newPost);
        this._state.profilePage.newPostText = '';
        this._callSubscriber(this._state);
    },
    changeText(newText: string) {
        this._state.profilePage.newPostText = newText;
        this._callSubscriber(this._state);
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },
};

export default store;