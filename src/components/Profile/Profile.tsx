import React from 'react';
import MyPosts, {MyPostsType, PostsType} from "./MyPost/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import { addPost } from '../../redux/state';

type ProfileType = {
    posts: MyPostsType[]
    addPost: (postText: string) => void
}

const Profile: React.FC<ProfileType> = ( {posts, addPost} ) => {

    return (
        <div>
            <ProfileInfo/>
            <MyPosts posts={posts} addPost={addPost}/>
        </div>
    );
};

export default Profile;