import React from 'react';
import { addMessageAC, updateNewMessageTextAC } from '../../redux/store';
import { ReduxStoreType } from '../../redux/redux-store';
import Dialogs from './Dialogs';

export type DialogsPageType = {
    store: ReduxStoreType
}

const DialogsContainer: React.FC<DialogsPageType> = ({store}) => {
    const state = store.getState().dialogsPage;

    const sendMessage = () => {
        store.dispatch(addMessageAC(state.newMessageText));
    };
    const onMessageTextChange = (newMessageText: string) => {
        store.dispatch(updateNewMessageTextAC(newMessageText));
    };

    return (
        <Dialogs
            dialogs={state.dialogs}
            messages={state.messages}
            newMessageText={state.newMessageText}
            addMessage={sendMessage} updateNewMessageText={onMessageTextChange}
        />
    );
};

export default DialogsContainer;