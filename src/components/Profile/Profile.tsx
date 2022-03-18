import React from 'react';
import s from './Profile.module.css'
import MyPosts, {PostsType} from "./MyPost/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {v1} from "uuid";


const Profile: React.FC<PostsType> = (props) => {

    return (
        <div>
            <ProfileInfo/>
            <MyPosts posts={props.posts}/>
        </div>
    );
};

export default Profile;