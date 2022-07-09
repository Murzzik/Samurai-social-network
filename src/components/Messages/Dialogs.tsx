import React, { ChangeEvent } from 'react';
import s from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import { DialogsType, MessagesType } from '../../redux/store';

export type DialogsPageType = {
    dialogs: DialogsType[]
    messages: MessagesType[]
    addMessage: (newMessageText: string) => void
    updateNewMessageText: (newMessageText: string) => void
    newMessageText: string
}

const Dialogs: React.FC<DialogsPageType> = ({addMessage, updateNewMessageText, dialogs, messages, newMessageText}) => {

    const dialogsElements = dialogs.map((dialog, i) =>
        <DialogItem key={i} name={dialog.name} id={dialog.id} avatar={dialog.avatar} />);
    const messagesElements = messages.map((message, i) =>
        <Message key={i} message={message.message} id={message.id} />);

    const sendMessage = () => {
        addMessage(newMessageText);
    };
    const onMessageTextChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        const newMessageText = e.currentTarget.value;
        updateNewMessageText(newMessageText);
    };

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {messagesElements}
                <div className={s.addMessageForm}>
                    <textarea onChange={onMessageTextChange} value={newMessageText} />
                    <button onClick={sendMessage}>Add post</button>
                </div>
            </div>
        </div>
    );
};

export default Dialogs;