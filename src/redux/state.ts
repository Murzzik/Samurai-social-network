import {v1} from "uuid";
import { renderTree } from '../render';

type MessagesType = {
    id: string
    messages: string
}
type DialogsType = {
    id: string
    name: string
    avatar: string
}
type PostType = {
    id: string
    message: string
    likesCount: number
}
type DialogsPageType = {
    messages: MessagesType[]
    dialogs: DialogsType[]
}
type ProfilePageType = {
    posts: Array<PostType>
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

export const addPost = (postText: string) => {
    const newPost: PostType = {
        id: v1(),
        message: postText,
        likesCount: 0
    }
    state.profilePage.posts.push(newPost)
    renderTree(state)
}

export default state