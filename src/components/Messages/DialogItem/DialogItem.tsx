import React from 'react';
import s from './DialogItem.module.css';
import { NavLink } from 'react-router-dom';
import avatar from '../../../images/user-avatar.png';

type DialogItemType = {
    name: string
    id: string
    avatar: string
}

const DialogItem: React.FC<DialogItemType> = ({ name, id }) => {
    const navClassName = (navData: any) => (navData.isActive ? s.active : '') + ' ' + s.userAvatar;

    return (
        <div className={s.dialog}>
            <NavLink to={'/messages/' + name}
                     className={navClassName}>
                <img src={avatar} alt="avatar" />
                {name}
            </NavLink>
        </div>
    );
};
export default DialogItem;