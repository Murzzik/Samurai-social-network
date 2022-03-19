import {v1} from "uuid";

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
}
type ProfilePageType = {
    posts: Array<PostsType>
}
export type RootStateType = {
    profilePage: ProfilePageType
    dialogsPage: DialogsPageType
}

let state: RootStateType = {
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
            {id: v1(), messages: 'Hi'},
            {id: v1(), messages: 'How you doin?'},
            {id: v1(), messages: 'Yo'},
        ]
    },
}

export default state