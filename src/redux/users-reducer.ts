const FOLLOW_USER = 'FOLLOW_USER';
const UNFOLLOW_USER = 'UNFOLLOW_USER';
const SET_USERS = 'SET_USERS'
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE'
const SET_TOTAL_USERS = 'SET_TOTAL_USERS'
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING'

export type UsersPageType = {
    users: UserType[]
    pageSize: number
    totalUsersCount: number
    currentPage: number
    isFetching: boolean
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
    isFetching: false,
};

type ActionsType =
    ReturnType<typeof follow>
    | ReturnType<typeof unfollow>
    | ReturnType<typeof setUsers>
    | ReturnType<typeof setCurrentPage>
    | ReturnType<typeof setTotalUsersCount>
    | ReturnType<typeof toggleIsFetching>

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
        case SET_TOTAL_USERS: {
            return {
                ...state,
                totalUsersCount: action.totalUsersCount
            }
        }
        case TOGGLE_IS_FETCHING: {
            return {
                ...state,
                isFetching: action.isFetching
            }
        }
        default:
            return state;
    }
};

export const follow = (userID: string) => (
    {type: FOLLOW_USER, userID}
) as const;
export const unfollow = (userID: string) => (
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
