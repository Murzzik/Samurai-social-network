import React, {FC} from 'react';
import s from './MyPosts.module.css'
import Post from "./Post/Post";
import {ActionType} from "../../../redux/state";

export type PostsType = {
    posts: Array<MyPostsType>
    newPostText: string
    dispatch: (action: ActionType) => void
}

export type MyPostsType = {
    id: string
    message: string
    likesCount: number
}
const MyPosts: React.FC<PostsType> = (props) => {
    const postsElements = props.posts.map(p => <Post message={p.message} likesCount={p.likesCount}/>)

    const newPostElement = React.useRef<HTMLTextAreaElement | null>(null);

    const addPost = () => {
        props.dispatch({type: "ADD-POST"});

    }

    const onPostChange = () => {
        const text = newPostElement.current!.value;
        props.dispatch({type: "UPDATE-NEW-POST-TEXT", newText: text});
    }

    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea ref={newPostElement} value={props.newPostText} onChange={onPostChange}/>
                </div>
                <div>
                    <button onClick={addPost}>Add post</button>
                </div>
            </div>
            <div className={s.posts}>
                {postsElements}
            </div>
        </div>
    );
};

export default MyPosts;