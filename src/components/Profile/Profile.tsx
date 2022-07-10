import React from 'react';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import { MyPostsContainer } from './MyPost/MyPostsContainer';

const Profile: React.FC = () => {

    return (
        <div>
            <ProfileInfo />
            <MyPostsContainer />
        </div>
    );
};

export default Profile;