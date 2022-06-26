import React from 'react';
import s from './Message.module.css';
import avatar from '../../../images/user-avatar.png';

type MessageType = {
    message: string
}

const Message: React.FC<MessageType> = ({ message }) => {
    return (
        <div className={s.chatWindow}>
            <img src={avatar} alt="avatar" />
            <div className={s.message}>
                {message}
            </div>
        </div>
    );
};
export default Message;