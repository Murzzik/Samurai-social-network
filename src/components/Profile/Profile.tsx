import React from 'react';
import MyPosts from './MyPost/MyPosts';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import { PostType } from '../../redux/state';

type ProfileType = {
    posts: PostType[]
    addPost: () => void
    newPostText: string
    changeNewTextCallback: (newPostText: string) => void
}

const Profile: React.FC<ProfileType> = ({posts, addPost, newPostText, changeNewTextCallback}) => {

    return (
        <div>
            <ProfileInfo />
            <MyPosts posts={posts} addPost={addPost} newPostText={newPostText} changeNewTextCallback={changeNewTextCallback} />
        </div>
    );
};

export default Profile;