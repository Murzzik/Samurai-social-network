import React, { ChangeEvent } from 'react';
import s from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import { ActionsTypes, addMessageAC, RootStateType, StoreType, updateNewMessageTextAC } from '../../redux/store';
import { ReduxStoreType } from '../../redux/redux-store';

export type DialogsPageType = {
    store: ReduxStoreType

}

const Dialogs: React.FC<DialogsPageType> = ({ store}) => {

    const state = store.getState().dialogsPage

    const dialogsElements = state.dialogs.map((dialog, i) =>
        <DialogItem key={i} name={dialog.name} id={dialog.id} avatar={dialog.avatar} />);
    const messagesElements = state.messages.map((message, i) =>
        <Message key={i} message={message.message} id={message.id} />);
    const newTextMessage = state.newMessageText

    const addNewMessage = () => {
        store.dispatch(addMessageAC(newTextMessage))
    }

    const onMessageTextChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        const newMessageText = e.currentTarget.value
        store.dispatch(updateNewMessageTextAC(newMessageText))
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {messagesElements}
                <div className={s.addMessageForm}>
                    <textarea onChange={onMessageTextChange} value={newTextMessage}/>
                    <button onClick={addNewMessage}>Add post</button>
                </div>
            </div>
        </div>
    );
};

export default Dialogs;