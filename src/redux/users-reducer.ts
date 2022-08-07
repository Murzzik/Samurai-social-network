import { v1 } from 'uuid';

const FOLLOW_USER = 'FOLLOW_USER';
const UNFOLLOW_USER = 'UNFOLLOW_USER';
const SET_USERS = 'SET_USERS'

export type UsersPageType = {
    users: UserType[]
}

export type UserType = {
    id: string
    isFriends: boolean
    name: string
    status: string
    photos: {
        small: string,
        large: string
    }
    location: {
        country: string,
        city: string
    }
}

const initialState: UsersPageType = {
    users: [],
};

type ActionsType =
    ReturnType<typeof followAC>
    | ReturnType<typeof unfollowAC> | ReturnType<typeof setUsersAC>

export const usersReducer = (state = initialState, action: ActionsType): UsersPageType => {
    switch(action.type) {
        case FOLLOW_USER: {
            return {
                ...state,
                users: state.users.map(user => {
                    if(user.id === action.userID) {
                        return {...user, isFriends: true}
                    }
                    return user
                })
            }
        }
        case UNFOLLOW_USER: {
            return {
                ...state,
                users: state.users.map(user => {
                    if(user.id === action.userID) {
                        return {...user, isFriends: false}
                    }
                    return user
                })
            }
        }
        case SET_USERS: {
            return {
                ...state,
                users: [...state.users, ...action.users]
            }
        }
        default:
            return state;
    }
};

export const followAC = (userID: string) => (
    {type: FOLLOW_USER, userID}
) as const;
export const unfollowAC = (userID: string) => (
    {type: UNFOLLOW_USER, userID}
) as const;
export const setUsersAC = (users: UserType[]) => (
    {type: SET_USERS, users}
) as const;