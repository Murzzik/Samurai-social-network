import React, { ChangeEvent } from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';
import { ActionsTypes, addPostAC, PostType, updateNewPostTextAC } from '../../../redux/state';

type PostsType = {
    posts: PostType[]
    newPostText: string
    dispatch: (action: ActionsTypes) => void
}

const MyPosts: React.FC<PostsType> = ({posts, newPostText, dispatch}) => {
    const postsElements = posts.map((post, i) => <Post key={i} message={post.message} likesCount={post.likesCount} />);

    const addNewPost = () => {
        dispatch(addPostAC(newPostText))
    };

    const onPostTextChange= (e: ChangeEvent<HTMLTextAreaElement>) => {
        const newMessageText = e.currentTarget.value
        dispatch(updateNewPostTextAC(newMessageText))
    };

    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div className={s.addMessageForm}>
                    <textarea onChange={onPostTextChange} value={newPostText} />
                    <button onClick={addNewPost}>Add post</button>
                </div>
            </div>
            <div className={s.posts}>
                {postsElements}
            </div>
        </div>
    );
};

export default MyPosts;