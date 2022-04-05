import React from 'react';
import MyPosts, {MyPostsType} from "./MyPost/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {ActionType} from "../../redux/state";

type ProfileType = {
    posts: MyPostsType[]
    newPostText:string
    dispatch: (action: ActionType) => void
}

const Profile: React.FC<ProfileType> = (props) => {

    return (
        <div>
            <ProfileInfo/>
            <MyPosts posts={props.posts} newPostText={props.newPostText} dispatch={props.dispatch}/>
        </div>
    );
};

export default Profile;