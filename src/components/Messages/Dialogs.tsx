import React, { ChangeEvent } from 'react';
import s from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import { DialogsPageType } from '../../redux/dialogs-reducer';

type DialogsPropsType = {
    dialogsPage: DialogsPageType
    newMessageText?: string
    addMessage: () => void
    updateNewMessageText: (newMessageText: string) => void
}

const Dialogs: React.FC<DialogsPropsType> = ({addMessage, updateNewMessageText, newMessageText, dialogsPage}) => {

    const dialogsElements = dialogsPage.dialogs.map((dialog, id) =>
        <DialogItem key={id} name={dialog.name} id={dialog.id} avatar={dialog.avatar} />);
    const messagesElements = dialogsPage.messages.map((message, id) =>
        <Message key={id} message={message.message} id={message.id} />);

    const sendMessage = () => {
        addMessage();
    };
    const onMessageTextChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        updateNewMessageText(e.currentTarget.value);
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