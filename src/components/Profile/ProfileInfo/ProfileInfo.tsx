import React from 'react';
import s from '../Profile.module.css';
import cn from './ProfileInfo.module.css'
import main from "../../../images/main-img.jpg";
import MyPosts from "../MyPost/MyPosts";

const ProfileInfo = () => {
    return (
        <div className={s.content}>
            <img src={main} alt=""/>
            <div className={cn.descriptionBlock}>ava + decription</div>
        </div>
    );
};

export default ProfileInfo;