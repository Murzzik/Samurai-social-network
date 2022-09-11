import React from 'react';
import s from '../Profile.module.css';
import cn from './ProfileInfo.module.css'
import main from "../../../images/main-img.jpg";

const ProfileInfo = () => {
    return (
        <div className={s.content}>
            <img src={main} alt=""/>
            <div className={cn.descriptionBlock}>ava + description</div>
        </div>
    );
};

export default ProfileInfo;