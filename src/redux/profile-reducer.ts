import { v1 } from 'uuid';

const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SET_USER_PROFILE = 'SET-USER-PROFILE';

export type ProfilePageType = {
    posts: PostType[]
    newPostText: string
    profile: ProfileResponseType | null
}

export type PostType = {
    id: string
    message: string
    likesCount: number
};
export type ProfileResponseType = {
    aboutMe: string
    userId: number
    lookingForAJob: boolean
    lookingForAJobDescription: string
    fullName: string
    contacts: ContactsType
    photos: {small: string, large: string}
}

export type ContactsType = {
    github: string
    vk: string
    facebook: string
    instagram: string
    twitter: string
    website: string
    youtube: string
    mainLink: string
}

const initialState: ProfilePageType = {
    posts: [
        {id: v1(), message: 'Say hi', likesCount: 0},
    ],
    newPostText: '',
    profile: null,
};

type ActionsType =
    ReturnType<typeof addPostAC>
    | ReturnType<typeof updateNewPostTextAC>
    | ReturnType<typeof setUserProfile>

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
        case 'SET-USER-PROFILE': {
            return {
                ...state,
                profile: action.profile,
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
        newText,
    } as const;
};

export const setUserProfile = (profile: ProfileResponseType) => {
    return {
        type: SET_USER_PROFILE,
        profile,
    } as const;
};
