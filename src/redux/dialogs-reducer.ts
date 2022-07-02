import { v1 } from 'uuid';
import { DialogsPageType, MessagesType } from './store';

const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';

const initialState: DialogsPageType = {
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
}

export const dialogsReducer = (state = initialState, action: any) => {
    switch(action.type) {
        case ADD_MESSAGE:
            state.newMessageText = '';
            const newMessage: MessagesType = {
                id: v1(),
                message: action.messageText,
            };
            state.messages.push(newMessage);
            return state
        case UPDATE_NEW_MESSAGE_TEXT:
            state.newMessageText = action.newMessageText;
            return state
        default:
            return state
    }
};