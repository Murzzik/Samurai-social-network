const SET_USER_DATA = 'SET-USER-DATA';

export type AuthDataType = {
    id: number | null
    email: string | null
    login: string | null
    isAuth: boolean
}

export type AuthResponseType = {
    resultCode: number
    messages: Array<string>
    data: {
        id: number
        email: string
        login: string
    }
}

const initialState: AuthDataType = {
    id: null,
    email: null,
    login: null,
    isAuth: false,
};

type ActionsType = ReturnType<typeof setUserData>

export const authReducer = (state = initialState, action: ActionsType): AuthDataType => {
    switch(action.type) {
        case SET_USER_DATA: {
            return {
                ...state,
                ...action.data,
                isAuth: true
            };
        }

        default:
            return state;
    }
};

export const setUserData = (id: number, email: string, login: string) => (
    {
        type: SET_USER_DATA,
        data: {id, email, login}
    }
) as const;
