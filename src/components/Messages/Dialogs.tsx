import React from 'react';
import s from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {RootStateType} from "../../redux/state";


export type DialogsPageType = {
    state: RootStateType
}

const Dialogs: React.FC<DialogsPageType> = (props) => {

    let messageText = React.useRef<HTMLTextAreaElement | null>(null)

    let addMessage = () => {
        let message = messageText.current?.value
        alert(message)
    }

    let dialogsElements = props.state.dialogsPage.dialogs.map(d => <DialogItem name={d.name} id={d.id} avatar={d.avatar}/>)
    let messagesElements = props.state.dialogsPage.messages.map(m => <Message message={m.messages}/>)

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {messagesElements}
                <textarea ref={messageText}></textarea>
                <button onClick={addMessage}>Add message</button>
            </div>
        </div>
    );
};

export default Dialogs;