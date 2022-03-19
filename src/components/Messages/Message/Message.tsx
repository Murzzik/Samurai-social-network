import React from 'react';
import s from "./Message.module.css";
import avatar from "../../../images/user-avatar.png";

type MessageType = {
    message: string
}

const Message = (props: MessageType) => {
    return (
        <div className={s.chatWindow}>
            <img src={avatar} alt="avatar"/>
            <div className={s.message}>{props.message}</div>
        </div>
    )
}
export default Message;