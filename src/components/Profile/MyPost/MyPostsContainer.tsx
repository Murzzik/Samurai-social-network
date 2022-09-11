import React from 'react';
import MyPosts from './MyPosts';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { RootStateType } from '../../../redux/redux-store';
import { addPostAC, PostType, updateNewPostTextAC } from '../../../redux/profile-reducer';

type MapStateToProps = {
    posts: PostType[]
    newPostText: string
}

type MapDispatchToProps = {
    updateNewPostText: (newPostText: string) => void
    addPost: (newPostText: string) => void
}

const mapStateToProps = (state: RootStateType): MapStateToProps => {
    return {
        posts: state.profilePage.posts,
        newPostText: state.profilePage.newPostText,
    };
};

const mapDispatchToProps = (dispatch: Dispatch): MapDispatchToProps => {
    return {
        updateNewPostText: (newPostText: string) => {
            dispatch(updateNewPostTextAC(newPostText));
        },
        addPost: (newPostText: string) => {
            dispatch(addPostAC(newPostText));
        },
    };
};

export const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);
