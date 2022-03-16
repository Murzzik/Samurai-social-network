import React from 'react';
import s from './Profile.module.css'
import main from "../../images/main-img.jpg";
import MyPosts from "./MyPost/MyPosts";


const Profile = () => {
    return (
        <div className={s.content}>
            <img src={main} alt=""/>
            <div>ava + decription</div>
            <MyPosts/>
        </div>
    );
};

export default Profile;