import { v1 } from 'uuid';

const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';

export type DialogsPageType = {
    dialogs: DialogType[]
    messages: MessagesType[]
    newMessageText: string
}

export type DialogType = {
    id: string
    name: string
    avatar: string
}
export type MessagesType = {
    id: string
    message: string
}

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
        {id: v1(), message: 'Yo'},
    ],
    newMessageText: '',
};

type ActionsType = ReturnType<typeof addMessageAC>
    | ReturnType<typeof updateNewMessageTextAC>

export const dialogsReducer = (state = initialState, action: ActionsType): DialogsPageType => {
    switch(action.type) {
        case ADD_MESSAGE: {
            const message = state.newMessageText;
            return {
                ...state,
                messages: [...state.messages, {id: v1(), message: message}],
                newMessageText: '',
            };
        }
        case UPDATE_NEW_MESSAGE_TEXT: {
            return {
                ...state,
                newMessageText: action.newMessageText,
            };
        }
        default:
            return state;
    }
};

export const addMessageAC = () => {
    return {
        type: ADD_MESSAGE,
    } as const;
};
export const updateNewMessageTextAC = (newMessageText: string) => {
    return {
        type: UPDATE_NEW_MESSAGE_TEXT,
        newMessageText: newMessageText,
    } as const;
};