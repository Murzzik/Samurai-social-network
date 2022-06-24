import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';

export type PostsType = {
    posts: MyPostsType[]
}

export type MyPostsType = {
    id: string
    message: string
    likesCount: number
}

const MyPosts: React.FC<PostsType> = ({ posts }) => {
    let postsElements = posts.map(post => <Post message={post.message} likesCount={post.likesCount} />);

    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div className={s.addMessageForm}>
                    <textarea></textarea>
                    <button>Add post</button>
                </div>
            </div>
            <div className={s.posts}>
                {postsElements}
            </div>
        </div>
    );
};

export default MyPosts;