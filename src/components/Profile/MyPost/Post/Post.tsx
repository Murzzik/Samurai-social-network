import React from 'react';
import s from './Post.module.css';
import avatar from '../../../../images/avatar.jpg';

type PostPropsType = {
    message: string
    likesCount: number
}

const Post: React.FC<PostPropsType> = ({message, likesCount}) => {
    return (
        <div className={s.item}>
            <img src={avatar} alt="avatar" />
            {message}
            <div>
                <span>like</span> {likesCount}
            </div>
        </div>
    );
};

export default Post;