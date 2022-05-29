import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import { ActionType, addMessageAC, RootStateType } from '../../redux/state';

export type DialogsPageType = {
    state: RootStateType
    newMessageText: string
    updateNewMessageText: (newDialogsText: string) => void
    dispatch: (action: ActionType) => void
}

const Dialogs: React.FC<DialogsPageType> = (props) => {

    const messageText = React.useRef<HTMLTextAreaElement | null>(null);

    const addMessage = () => {
        const message = messageText.current!.value;
        props.dispatch(addMessageAC(message));
        alert(message);
    };

    const onMessageChange = () => {
        const message = messageText.current!.value;
        props.updateNewMessageText(message);
        console.log(message);
    };

    const dialogsElements = props.state.dialogsPage.dialogs.map(d => <DialogItem name={d.name} id={d.id}
                                                                                 avatar={d.avatar} />);
    const messagesElements = props.state.dialogsPage.messages.map(m => <Message message={m.messages} />);

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {messagesElements}
                <textarea ref={messageText} value={props.newMessageText} onChange={onMessageChange} />
                <button onClick={addMessage}>Add message</button>
            </div>
        </div>
    );
};

export default Dialogs;