import React from 'react';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import { MyPostsContainer } from './MyPost/MyPostsContainer';
import { ProfileResponseType } from '../../redux/profile-reducer';
import { Preloader } from '../common/Preloader/Preloader';

type ProfileType = {
    profile: ProfileResponseType | null
}

const Profile: React.FC<ProfileType> = ({profile}) => {

    if (!profile) {
        return <Preloader/>
    }

    return (
        <div>
            <ProfileInfo profile={profile}/>
            <MyPostsContainer />
        </div>
    );
};

export default Profile;