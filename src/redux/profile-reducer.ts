import { v1 } from 'uuid';

const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

export type ProfilePageType = {
    posts: PostType[]
    newPostText: string
}

export type PostType = {
    id: string
    message: string
    likesCount: number
};

const initialState: ProfilePageType = {
    posts: [
        {id: v1(), message: 'Say hi', likesCount: 0},
    ],
    newPostText: '',
};

type ActionsType =
    ReturnType<typeof addPostAC>
    | ReturnType<typeof updateNewPostTextAC>

export const profileReducer = (state = initialState, action: ActionsType): ProfilePageType => {
    switch(action.type) {
        case ADD_POST: {
            const newPost = {
                id: v1(),
                message: action.postText,
                likesCount: 0,
            };
            return {
                ...state,
                newPostText: '',
                posts: [newPost, ...state.posts],
            };
        }
        case UPDATE_NEW_POST_TEXT: {
            return {
                ...state,
                newPostText: action.newText,
            };
        }
        default:
            return state;
    }
};

export const addPostAC = (postText: string) => {
    return {
        type: ADD_POST,
        postText: postText,
    } as const;
};
export const updateNewPostTextAC = (newText: string) => {
    return {
        type: UPDATE_NEW_POST_TEXT,
        newText: newText,
    } as const;
};
