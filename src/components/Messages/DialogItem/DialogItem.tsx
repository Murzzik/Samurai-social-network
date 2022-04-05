import React from 'react';
import s from "./DialogItem.module.css";
import {NavLink} from "react-router-dom";
import avatar from "../../../images/user-avatar.png";

type DialogItemType = {
    name: string
    id: string
    avatar: string
}

const DialogItem = (props: DialogItemType) => {
    const path = '/messages/' + props.id

    return (
        <div className={s.dialog}>
            <NavLink to={'/messages/' + props.id}
                     className={(navData) => (navData.isActive ? s.active : '') + ' ' + s.userAvatar}>
                <img src={avatar} alt="avatar"/>
                {props.name}
            </NavLink>
        </div>
    )
}
export default DialogItem;