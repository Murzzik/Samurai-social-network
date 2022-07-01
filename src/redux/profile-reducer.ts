import { v1 } from 'uuid';
import { ActionsTypes, PostType, ProfilePageType } from './state';

const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

export const profileReducer = (state: ProfilePageType, action: any) => {

    switch(action.type) {
        case ADD_POST:
            const newPost: PostType = {
                id: v1(),
                message: action.postText,
                likesCount: 0,
            };
            state.posts.push(newPost);
            state.newPostText = '';
            return state;
        case UPDATE_NEW_POST_TEXT:
            state.newPostText = action.newText;
            return state;
        default:
            return state;
    }
};