import React from 'react';
import { addPostAC, updateNewPostTextAC } from '../../../redux/store';
import MyPosts from './MyPosts';
import { ReduxStoreType } from '../../../redux/redux-store';

type PostsType = {
    store: ReduxStoreType
}

const MyPostsContainer: React.FC<PostsType> = ({store}) => {
    const state = store.getState().profilePage;

    const addNewPost = () => {
        store.dispatch(addPostAC(state.newPostText));
    };
    const onPostTextChange = (newPostText: string) => {
        store.dispatch(updateNewPostTextAC(newPostText));
    };

    return (
        <MyPosts
            newPostText={state.newPostText}
            posts={state.posts}
            updateNewPostText={onPostTextChange}
            addPost={addNewPost}
        />
    );
};

export default MyPostsContainer;