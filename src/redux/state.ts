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

let state: RootStateType = {
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
    },
};

let rerenderEntireTree = (state: RootStateType) => {

};

export const addPost = () => {
    const newPost: PostType = {
        id: v1(),
        message: state.profilePage.newPostText,
        likesCount: 0,
    };
    state.profilePage.posts.push(newPost);
    state.profilePage.newPostText = '';
    rerenderEntireTree(state);
};

export const changeText = (newText: string) => {
    state.profilePage.newPostText = newText;
    rerenderEntireTree(state);
};

export const subscribe = (observer: (state: RootStateType) => void) => {
    rerenderEntireTree = observer;
};

export default state;