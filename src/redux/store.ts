import { v1 } from 'uuid';

declare const window: any;

type MessagesType = {
    id: string
    messages: string
}
type DialogsType = {
    id: string
    name: string
    avatar: string
}
type PostsType = {
    id: string
    message: string
    likesCount: number
}
type DialogsPageType = {
    messages: Array<MessagesType>
    dialogs: Array<DialogsType>
    newMessageText: string
}
type ProfilePageType = {
    posts: Array<PostsType>
    newPostText: string
}
export type RootStateType = {
    profilePage: ProfilePageType
    dialogsPage: DialogsPageType

}

type AddPostAT = {
    type: 'ADD-POST'
    postText: string
}
type UpdateNewPostTextAT = {
    type: 'UPDATE-NEW-POST-TEXT'
    newText: string
}

type AddMessageAT = {
    type: 'ADD-MESSAGE'
    messageText: string
}

const ADD_POST = 'ADD-POST';
const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

export type ActionType =
    AddPostAT
    | UpdateNewPostTextAT | AddMessageAT

export const addPostAC = (postText: string): AddPostAT => {
    return {
        type: ADD_POST,
        postText: postText,
    };
};
export const changeNewTextAC = (newPostText: string): UpdateNewPostTextAT => {
    return {
        type: UPDATE_NEW_POST_TEXT,
        newText: newPostText,
    };
};

export const addMessageAC = (messageText: string): AddMessageAT => {
    return {
        type: ADD_MESSAGE,
        messageText: messageText,
    };
};

export const store = {
    _state: {
        profilePage: {
            posts: [
                {id: v1(), message: 'Hi, how are you?', likesCount: 23},
                {id: v1(), message: 'It\'s my first post?', likesCount: 0},
            ],
            newPostText: 'MySocialNetWork',
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
                {id: v1(), messages: 'Hi'},
                {id: v1(), messages: 'How you doin?'},
                {id: v1(), messages: 'Yo'},
            ],
            newMessageText: '',
        },

    },
    getState() {
        return this._state;
    },
    _callSubscriber(_state: RootStateType) {
        console.log('State');
    },
    updateNewMessageText(newMessageText: string) {
        this._state.dialogsPage.newMessageText = newMessageText;
        this._callSubscriber(store._state);
    },
    dispatch(action: ActionType) {
        if(action.type === ADD_POST) {
            const newPost = {
                id: v1(),
                message: store._state.profilePage.newPostText,
                likesCount: 0,
            };
            this._state.profilePage.posts.push(newPost);
            this._state.profilePage.newPostText = '';
            this._callSubscriber(store._state);

        } else if(action.type === ADD_MESSAGE) {
            const messageText = {
                id: v1(),
                messages: store._state.dialogsPage.newMessageText,
            };
            this._state.dialogsPage.messages.push(messageText);
            this._state.dialogsPage.newMessageText = '';
            this._callSubscriber(store._state);

        } else if(action.type === UPDATE_NEW_POST_TEXT) {
            this._state.profilePage.newPostText = action.newText;
            this._callSubscriber(store._state);
        }
    },
    subscribe(observer: (state: RootStateType) => void) {
        this._callSubscriber = observer;
    },

};

export default store;
window.store = store;