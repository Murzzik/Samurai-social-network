import React from 'react';
import s from './Profile.module.css'
import main from "../images/main-img.jpg";


const Profile = () => {
    return (
        <div className={s.content}>
            <img src={main} alt=""/>
            <div>ava + decription</div>
            <div>
                My posts
                <div>
                    New post 1
                </div>
                <div className={s.posts}>
                    <div className={s.item}>
                        post 1
                    </div>
                    <div className={s.item}>
                        post 2
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Profile;