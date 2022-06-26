import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import { RootStateType } from '../../redux/state';

export type DialogsPageType = {
    state: RootStateType
}

const Dialogs: React.FC<DialogsPageType> = ({ state }) => {

    const dialogsElements = state.dialogsPage.dialogs.map((dialog, i) =>
        <DialogItem key={i} name={dialog.name} id={dialog.id} avatar={dialog.avatar} />);
    const messagesElements = state.dialogsPage.messages.map((message, i) =>
        <Message key={i} message={message.messages} />);

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {messagesElements}
            </div>
        </div>
    );
};

export default Dialogs;