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
    fullName: string
    status: string
    photoUrl: string
    location: {
        country: string,
        city: string
    }
}

const initialState: UsersPageType = {
    users: [
    //     {id: v1(), isFriends: true, photoUrl: 'https://icons-for-free.com/iconfiles/png/128/avatar-1320568024619304547.png', fullName: 'Alexander', status: 'Senior developer yay', location: {country: 'Ukraine', city: 'Kyiv'}},
    //     {id: v1(), isFriends: true, photoUrl: 'https://icons-for-free.com/iconfiles/png/128/avatar-1320568024619304547.png', fullName: 'Denis', status: 'Give some job', location: {country: 'Ukraine', city: 'Kyiv'}},
    //     {id: v1(), isFriends: false, photoUrl: 'https://icons-for-free.com/iconfiles/png/128/avatar-1320568024619304547.png', fullName: 'Jhonas', status: 'Graciac bueno', location: {country: 'Norway', city: 'Oslo'}},
    //     {id: v1(), isFriends: true, photoUrl: 'https://icons-for-free.com/iconfiles/png/128/avatar-1320568024619304547.png', fullName: 'Artem', status: 'Board game masta', location: {country: 'Netherlands', city: 'Amsterdam'}},
    ],
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