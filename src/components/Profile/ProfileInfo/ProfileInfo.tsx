import React from 'react';
import s from '../Profile.module.css';
import main from '../../../images/main-img.jpg';
import { ProfileResponseType } from '../../../redux/profile-reducer';

type ProfileInfoType = {
    profile: ProfileResponseType | null
}

const ProfileInfo: React.FC<ProfileInfoType> = ({profile}) => {

    return (
        <div className={s.content}>
            <img src={main} alt="" />
            <div className={s.descriptionBlock}>
                <img src={profile?.photos.large}/> <span>{profile?.aboutMe}</span>
            </div>
        </div>
    );
};

export default ProfileInfo;