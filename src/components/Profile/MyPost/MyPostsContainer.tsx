import React from 'react';
import { addPostAC, RootStateType, updateNewPostTextAC } from '../../../redux/store';
import MyPosts from './MyPosts';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';

const mapStateToProps = (state: RootStateType) => {
    return {
        posts: state.profilePage.posts,
        newPostText: state.profilePage.newPostText
    }
}

const mapDispatchToProps = (dispatch: Dispatch) => {
    return {
      updateNewPostText: (newPostText: string) => {
          dispatch(updateNewPostTextAC(newPostText))
      },
      addPost: (newPostText: string) => {
          dispatch(addPostAC(newPostText))
      }
    }
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)

export default MyPostsContainer;