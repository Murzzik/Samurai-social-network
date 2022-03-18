import React from 'react';
import s from './Post.module.css'
import avatar from '../../../../images/avatar.jpg'

type PostPropsType = {
    message: string
    likesCount: number
}

const Post = (props: PostPropsType) => {
    return (
        <div className={s.item}>
            <img src={avatar} alt="avatar"/>
            {props.message}
            <div>
                <span>like</span> {props.likesCount}
            </div>
        </div>
    );
};

export default Post;