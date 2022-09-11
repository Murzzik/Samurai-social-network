import {v1} from "uuid";
import { rerenderEntireTree } from '../render';

type MessagesType = {
    id: string
    message: string
}
type DialogsType = {
    id: string
    name: string
    avatar: string
}
export type PostType = {
    id: string
    message: string
    likesCount: number
}
type DialogsPageType = {
    messages: MessagesType[]
    dialogs: DialogsType[]
}
type ProfilePageType = {
    posts: PostType[]
}
export type RootStateType = {
    profilePage: ProfilePageType
    dialogsPage: DialogsPageType
}

let store: RootStateType = {
    profilePage: {
        posts: [
            {id: v1(), message: 'Hi, how are you?', likesCount: 23},
            {id: v1(), message: "It's my first post?", likesCount: 0}
        ]
    },
    dialogsPage: {
        dialogs: [
            {id: v1(), name: 'Dimych', avatar: ''},
            {id: v1(), name: 'Andrey', avatar: ''},
            {id: v1(), name: 'Sveta', avatar: ''},
            {id: v1(), name: 'Sasha', avatar: ''},
            {id: v1(), name: 'Viktor', avatar: ''},
            {id: v1(), name: 'Valera', avatar: ''}
        ],
        messages: [
            {id: v1(), message: 'Hi'},
            {id: v1(), message: 'How you doin?'},
            {id: v1(), message: 'Yo'},
        ]
    },
}

export const addPost = (postMessage: string) => {
    debugger
    const newPost: PostType = {
        id: v1(),
        message: postMessage,
        likesCount: 0
    };
     store.profilePage.posts.push(newPost)
    rerenderEntireTree(store)
};

export default store