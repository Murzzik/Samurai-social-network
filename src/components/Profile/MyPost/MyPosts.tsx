import React, { ChangeEvent } from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';
import { PostType } from '../../../redux/store';

type PostsType = {
    posts: PostType[]
    addPost: (newPostText: string) => void
    updateNewPostText: (newPostText: string) => void
    newPostText: string
}

const MyPosts: React.FC<PostsType> = ({posts, updateNewPostText, newPostText, addPost}) => {
    const postsElements = posts.map((post, i) => <Post key={i} message={post.message} likesCount={post.likesCount} />);

    const addNewPost = () => {
        addPost(newPostText);
    };
    const onPostTextChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        const newMessageText = e.currentTarget.value;
        updateNewPostText(newMessageText);
    };

    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div className={s.addMessageForm}>
                    <textarea onChange={onPostTextChange} value={newPostText} onKeyPress={addNewPost }/>
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