import { v1 } from 'uuid';
import { profileReducer } from './profile-reducer';
import { dialogsReducer } from './dialogs-reducer';

export type MessagesType = {
    id: string
    message: string
};
export type DialogsType = {
    id: string
    name: string
    avatar: string
};
type PostType = {
    id: string
    message: string
    likesCount: number
};
type DialogsPageType = {
    messages: MessagesType[]
    dialogs: DialogsType[]
    newMessageText: string
};
type ProfilePageType = {
    posts: PostType[]
    newPostText: string
};
type RootStateType = {
    profilePage: ProfilePageType
    dialogsPage: DialogsPageType
};

const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';

type ActionsTypes = ReturnType<typeof addPostAC>
    | ReturnType<typeof updateNewPostTextAC>
    | ReturnType<typeof addMessageAC>
    | ReturnType<typeof updateNewMessageTextAC>

export type StoreType = {
    _state: RootStateType
    _callSubscriber: (state: RootStateType) => void
    subscribe: (observer: (state: RootStateType) => void) => void
    getState: () => RootStateType
    dispatch: (action: ActionsTypes) => void
};

const addPostAC = (postText: string) => {
    return {
        type: ADD_POST,
        postText: postText,
    } as const;
};
const updateNewPostTextAC = (newText: string) => {
    return {
        type: UPDATE_NEW_POST_TEXT,
        newText: newText,
    } as const;
};

const addMessageAC = (messageText: string) => {
    return {
        type: ADD_MESSAGE,
        messageText: messageText,
    };
};
const updateNewMessageTextAC = (newMessageText: string) => {
    return {
        type: UPDATE_NEW_MESSAGE_TEXT,
        newMessageText: newMessageText,
    };
};

const store: StoreType = {
    _state: {
        profilePage: {
            posts: [
                {id: v1(), message: 'Hi, how are you?', likesCount: 23},
                {id: v1(), message: 'It\'s my first post?', likesCount: 0},
            ],
            newPostText: '',
        },
        dialogsPage: {
            dialogs: [
                {id: v1(), name: 'Dimych', avatar: ''},
                {id: v1(), name: 'Andrey', avatar: ''},
                {id: v1(), name: 'Sveta', avatar: ''},
                {id: v1(), name: 'Sasha', avatar: ''},
                {id: v1(), name: 'Viktor', avatar: ''},
                {id: v1(), name: 'Valera', avatar: ''},
            ],
            messages: [
                {id: v1(), message: 'Hi'},
                {id: v1(), message: 'How you doin?'},
                {id: v1(), message: 'Yo'},
            ],
            newMessageText: '',
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
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
        this._callSubscriber(this._state);
    },
};

export default store;