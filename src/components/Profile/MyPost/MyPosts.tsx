import React from 'react';
import s from './MyPosts.module.css'
import avatar from '../../../../images/avatar.jpg'

const MyPosts = () => {
    return (
        <div>
            My posts
            <div>
                <textarea></textarea>
                <button>Add post</button>
            </div>
            <div className={s.posts}>
                <div className={s.item}>
                    <img src={avatar} alt="avatar"/>
                    post 1
                </div>
                <div className={s.item}>
                    post 2
                </div>
            </div>
        </div>
    );
};

export default MyPosts;