import { Dispatch } from 'redux';
import { usersAPI } from '../api/api';

const FOLLOW_USER = 'FOLLOW_USER';
const UNFOLLOW_USER = 'UNFOLLOW_USER';
const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_TOTAL_USERS = 'SET_TOTAL_USERS';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';
const TOGGLE_IS_FOLLOWING_PROGRESS = 'TOGGLE_IS_FOLLOWING_PROGRESS';

export type UsersPageType = {
    users: UserType[]
    pageSize: number
    totalUsersCount: number
    currentPage: number
    isFetching: boolean
    followingInProgress: number[]
}

export type UserType = {
    id: number
    followed: boolean
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
    pageSize: 5,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: false,
    followingInProgress: [],
};

type ActionsType =
    ReturnType<typeof follow>
    | ReturnType<typeof unfollow>
    | ReturnType<typeof setUsers>
    | ReturnType<typeof setCurrentPage>
    | ReturnType<typeof setTotalUsersCount>
    | ReturnType<typeof toggleIsFetching>
    | ReturnType<typeof toggleFollowingProgress>

export const usersReducer = (state = initialState, action: ActionsType): UsersPageType => {
    switch(action.type) {
        case FOLLOW_USER: {
            return {
                ...state,
                users: state.users.map(user => {
                    if(user.id === action.userID) {
                        return {...user, followed: true};
                    }
                    return user;
                }),
            };
        }
        case UNFOLLOW_USER: {
            return {
                ...state,
                users: state.users.map(user => {
                    if(user.id === action.userID) {
                        return {...user, followed: false};
                    }
                    return user;
                }),
            };
        }
        case SET_USERS: {
            return {
                ...state,
                users: action.users,
            };
        }
        case SET_CURRENT_PAGE: {
            return {
                ...state,
                currentPage: action.currentPage,
            };
        }
        case SET_TOTAL_USERS: {
            return {
                ...state,
                totalUsersCount: action.totalUsersCount,
            };
        }
        case TOGGLE_IS_FETCHING: {
            return {
                ...state,
                isFetching: action.isFetching,
            };
        }
        case TOGGLE_IS_FOLLOWING_PROGRESS: {
            return {
                ...state,
                followingInProgress: action.isFetching
                    ? [...state.followingInProgress, action.userId]
                    : state.followingInProgress.filter(id => id !== action.userId),
            };
        }
        default:
            return state;
    }
};

export const follow = (userID: number) => (
    {type: FOLLOW_USER, userID}
) as const;
export const unfollow = (userID: number) => (
    {type: UNFOLLOW_USER, userID}
) as const;
export const setUsers = (users: UserType[]) => (
    {type: SET_USERS, users}
) as const;

export const setCurrentPage = (currentPage: number) => (
    {type: SET_CURRENT_PAGE, currentPage}
) as const;

export const setTotalUsersCount = (totalUsersCount: number) => (
    {type: SET_TOTAL_USERS, totalUsersCount}
) as const;

export const toggleIsFetching = (isFetching: boolean) => (
    {type: TOGGLE_IS_FETCHING, isFetching}
) as const;

export const toggleFollowingProgress = (isFetching: boolean, userId: number) => (
    {type: TOGGLE_IS_FOLLOWING_PROGRESS, isFetching, userId}
) as const;

export const getUsers = (currentPage: number, pageSize: number) => (dispatch: Dispatch) => {
    dispatch(toggleIsFetching(true));
    dispatch(setCurrentPage(currentPage));
    console.log('hello 23');
    usersAPI.getUsers(currentPage, pageSize).then((data) => {
        console.log('hello 1');
        dispatch(toggleIsFetching(false));
        dispatch(setUsers(data.items));
        dispatch(setTotalUsersCount(data.totalCount));
    });
};

export const followUsers = (userId: number) => (dispatch: Dispatch) => {
    dispatch(toggleFollowingProgress(true, userId));
    usersAPI.followUser(userId).then((data) => {
        if(data.resultCode === 0) {
            dispatch(follow(userId));
        }
        dispatch(toggleFollowingProgress(false, userId));
    });
};

export const unfollowUsers = (userId: number) => (dispatch: Dispatch) => {
    toggleFollowingProgress(true, userId);
    usersAPI.unfollowUser(userId).then((data) => {
        if(data.resultCode === 0) {
            dispatch(unfollow(userId));
        }
        dispatch(toggleFollowingProgress(false, userId));
    });
};
