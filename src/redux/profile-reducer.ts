import { v1 } from 'uuid';
import { PostType, ProfilePageType } from './store';

const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

const initialState: ProfilePageType = {
    posts: [
        {id: v1(), message: 'Hi, how are you?', likesCount: 23},
        {id: v1(), message: 'It\'s my first post?', likesCount: 0},
    ],
    newPostText: '',
}

export const profileReducer = (state = initialState, action: any) => {
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