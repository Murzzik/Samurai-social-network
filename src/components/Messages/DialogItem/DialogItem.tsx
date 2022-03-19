import React from 'react';
import s from "../Dialogs.module.css";
import {NavLink} from "react-router-dom";

type DialogItemType = {
    name: string
    id: string
}

const DialogItem = (props: DialogItemType) => {
    let path = '/messages/' + props.id

    return (
        <div className={s.dialog}>
            <NavLink to={'/messages/' + props.id}
                     className={(navData) => navData.isActive ? s.active : ''}>{props.name}
            </NavLink>
        </div>
    )
}
export default DialogItem;