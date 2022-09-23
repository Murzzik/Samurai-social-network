import React from 'react';
import { connect } from 'react-redux';
import { RootStateType } from '../../redux/redux-store';
import { followUsers, getUsers, unfollowUsers, UserType } from '../../redux/users-reducer';

import { UsersPresent } from './UsersPresent';
import { Preloader } from '../common/Preloader/Preloader';

type UsersType = {
    users: UserType[]
    followUsers: (userId: number) => void
    unfollowUsers: (userId: number) => void
    pageSize: number
    totalUsersCount: number
    currentPage: number
    isFetching: boolean
    followingInProgress: number[]
    getUsers: (currentPage: number, pageSize: number) => void
}

type MapStateToProps = {
    users: UserType[]
    pageSize: number
    totalUsersCount: number
    currentPage: number
    isFetching: boolean
    followingInProgress: number[]
}

export class UsersContainers extends React.Component<UsersType> {
    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.pageSize)
    };

    onCurrentPageChanged = (currentPage: number) => {
        this.props.getUsers(currentPage, this.props.pageSize)
    };

    render() {
        return <>
            {this.props.isFetching && <Preloader />}
            <UsersPresent users={this.props.users}
                          totalUsersCount={this.props.totalUsersCount}
                          pageSize={this.props.pageSize}
                          currentPage={this.props.currentPage}
                          onCurrentPageChanged={this.onCurrentPageChanged}
                          unfollowUsers={this.props.unfollowUsers}
                          followingInProgress={this.props.followingInProgress}
                          followUsers={this.props.followUsers}
            />
        </>;
    }
}

const mapStateToProps = (state: RootStateType): MapStateToProps => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        followingInProgress: state.usersPage.followingInProgress
    };
};

export const UsersContainer = connect(mapStateToProps, {
    getUsers, followUsers, unfollowUsers
})(UsersContainers);