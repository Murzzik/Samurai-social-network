import React from 'react';
import MyPosts, { MyPostsType } from './MyPost/MyPosts';
import ProfileInfo from './ProfileInfo/ProfileInfo';

type ProfileType = {
    posts: MyPostsType[]
    addPost: (postMessage: string) => void
}

const Profile: React.FC<ProfileType> = ({ posts, addPost }) => {

    return (
        <div>
            <ProfileInfo/>
            <MyPosts posts={posts} addPost={addPost}/>
        </div>
    );
};

export default Profile;