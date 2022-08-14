const FOLLOW_USER = 'FOLLOW_USER';
const UNFOLLOW_USER = 'UNFOLLOW_USER';
const SET_USERS = 'SET_USERS'
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE'
const SET_TOTAL_USERS = 'SET_TOTAL_USERS'

export type UsersPageType = {
    users: UserType[]
    pageSize: number
    totalUsersCount: number
    currentPage: number
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
    pageSize: 5,
    totalUsersCount: 0,
    currentPage: 2,
};

type ActionsType =
    ReturnType<typeof followAC>
    | ReturnType<typeof unfollowAC>
    | ReturnType<typeof setUsersAC>
    | ReturnType<typeof setCurrentPageAC>
    | ReturnType<typeof setTotalUsersCountAC>

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
                users: action.users
            }
        }
        case SET_CURRENT_PAGE: {
            return {
                ...state,
                currentPage: action.currentPage
            }
        }
        case 'SET_TOTAL_USERS': {
            return {
                ...state,
                totalUsersCount: action.totalUsersCount
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

export const setCurrentPageAC = (currentPage: number) => (
    {type: SET_CURRENT_PAGE, currentPage}
) as const;

export const setTotalUsersCountAC = (totalUsersCount: number) => (
    {type: SET_TOTAL_USERS, totalUsersCount}
) as const;
