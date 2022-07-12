import React from 'react';
import { connect } from 'react-redux';
import { Users } from './Users';
import { RootStateType } from '../../redux/redux-store';
import { followAC, setUsersAC, unfollowAC, UserType } from '../../redux/users-reducer';
import { Dispatch } from 'redux';


type MapStateToProps = {
    users: UserType[]
}

type MapDispatchToProps = {
    follow: (userId: string) => void
    unfollow: (userId: string) => void
    setUsers: (users: UserType[]) => void
}

const mapStateToProps = (state: RootStateType): MapStateToProps => {
    return {
        users: state.usersPage.users
    }
};

const mapDispatchToProps = (dispatch: Dispatch): MapDispatchToProps => {
    return {
        follow: (userId: string) => {
            dispatch(followAC(userId))
        },
        unfollow: (userId: string) => {
            dispatch(unfollowAC(userId))
        },
        setUsers: (users: UserType[]) => {
            dispatch(setUsersAC(users))
        }
    }
}

export const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);