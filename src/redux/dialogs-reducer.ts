import { v1 } from 'uuid';
import { DialogsPageType, MessagesType } from './state';

const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';

export const dialogsReducer = (state: DialogsPageType, action: any) => {
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