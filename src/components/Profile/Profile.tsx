import React from 'react';
import MyPosts from './MyPost/MyPosts';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import { ActionsTypes, PostType } from '../../redux/state';

type ProfileType = {
    posts: PostType[]
    newPostText: string
    dispatch: (action: ActionsTypes) => void
}

const Profile: React.FC<ProfileType> = ({ posts, newPostText, dispatch }) => {

    return (
        <div>
            <ProfileInfo />
            <MyPosts posts={posts} newPostText={newPostText} dispatch={dispatch} />
        </div>
    );
};

export default Profile;