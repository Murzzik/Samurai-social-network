import { v1 } from 'uuid';
import { renderTree } from '../index';

export type MessagesType = {
    id: string
    message: string
};
export type DialogsType = {
    id: string
    name: string
    avatar: string
};
export type PostType = {
    id: string
    message: string
    likesCount: number
};
export type DialogsPageType = {
    messages: MessagesType[]
    dialogs: DialogsType[]
};
export type ProfilePageType = {
    posts: PostType[]
    newPostText: string
};
export type RootStateType = {
    profilePage: ProfilePageType
    dialogsPage: DialogsPageType
};
type AddPostActionType = {
    type: 'ADD-POST'
    postText: string
};
type ChangeNewTextActionType = {
    type: 'UPDATE-NEW-POST-TEXT'
    newText: string
};

export type ActionsTypes = AddPostActionType | ChangeNewTextActionType

export type StoreType = {
    _state: RootStateType
    _callSubscriber: (state: RootStateType) => void
    subscribe: (observer: (state: RootStateType) => void) => void
    getState: () => RootStateType
    dispatch: (action: AddPostActionType | ChangeNewTextActionType) => void
};

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
    _callSubscriber() {
        console.log('State changed');
    },
    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },
    dispatch(action: any) {
        if(action.type === 'ADD-POST') {
            const newPost: PostType = {
                id: v1(),
                message: action.postText,
                likesCount: 0,
            };
            this._state.profilePage.posts.push(newPost);
            this._state.profilePage.newPostText = '';
            this._callSubscriber(this._state);
        } else if(action.type === 'UPDATE-NEW-POST-TEXT') {
            this._state.profilePage.newPostText = action.newText;
            this._callSubscriber(this._state);
        }
    },
};

export default store;