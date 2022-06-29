import React from 'react';
import s from './DialogItem.module.css';
import { NavLink } from 'react-router-dom';
import avatar from '../../../images/user-avatar.png';
import { DialogsType } from '../../../redux/state';

const DialogItem: React.FC<DialogsType> = ({ name}) => {
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