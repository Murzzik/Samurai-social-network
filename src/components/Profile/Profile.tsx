import React from 'react';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import { ReduxStoreType } from '../../redux/redux-store';
import MyPostsContainer from './MyPost/MyPostsContainer';

type ProfileType = {
    store: ReduxStoreType
}

const Profile: React.FC<ProfileType> = ({store}) => {

    return (
        <div>
            <ProfileInfo />
            <MyPostsContainer store={store} />
        </div>
    );
};

export default Profile;