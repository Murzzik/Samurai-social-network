import React, { ChangeEvent } from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';
import { PostType } from '../../../redux/state';

type PostsType = {
    posts: PostType[]
    addPost: () => void
    newPostText: string
    changeNewTextCallback: (newPostText: string) => void
}

const MyPosts: React.FC<PostsType> = ({posts, addPost, newPostText, changeNewTextCallback}) => {
    const postsElements = posts.map((post, i) => <Post key={i} message={post.message} likesCount={post.likesCount} />);

    const addNewPost = () => {
        addPost();
    };

    const onPostTextChange= (e: ChangeEvent<HTMLTextAreaElement>) => {
        changeNewTextCallback(e.currentTarget.value)
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