import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';

export type PostsType = {
    posts: MyPostsType[]
    addPost: (postMessage: string) => void
}

export type MyPostsType = {
    id: string
    message: string
    likesCount: number
}

const MyPosts: React.FC<PostsType> = ({posts, addPost}) => {
    const postsElements = posts.map((post, i) => <Post key={i} message={post.message} likesCount={post.likesCount} />);

    const newPostElement = React.useRef<HTMLTextAreaElement | null>(null);

    const addNewPost = () => {
        debugger
        const text = newPostElement.current!.value;
        addPost(text);
        newPostElement.current!.value = '';
    };

    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div className={s.addMessageForm}>
                    <textarea ref={newPostElement}></textarea>
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