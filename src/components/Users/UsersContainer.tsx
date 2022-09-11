import React from 'react';
import { connect } from 'react-redux';
import { RootStateType } from '../../redux/redux-store';
import axios from 'axios';
import {
    follow,
    setCurrentPage,
    toggleIsFetching,
    setTotalUsersCount,
    setUsers,
    unfollow,
    UserType,
} from '../../redux/users-reducer';

import { UsersPresent } from './UsersPresent';
import { Preloader } from '../common/Preloader/Preloader';

type UsersType = {
    users: UserType[]
    follow: (userId: string) => void
    unfollow: (userId: string) => void
    setUsers: (users: UserType[]) => void
    setCurrentPage: (currentPage: number) => void
    setTotalUsersCount: (totalUsersCount: number) => void
    pageSize: number
    totalUsersCount: number
    currentPage: number
    isFetching: boolean
    toggleIsFetching: (isFetching: boolean) => void
}

type MapStateToProps = {
    users: UserType[]
    pageSize: number
    totalUsersCount: number
    currentPage: number
    isFetching: boolean
}

// type MapDispatchToProps = {
//     follow: (userId: string) => void
//     unfollow: (userId: string) => void
//     setUsers: (users: UserType[]) => void
//     setCurrentPage: (currentPage: number) => void
//     setTotalUsersCount: (totalUsersCount: number) => void
//     toggleIsFetching: (isFetching: boolean) => void
// }

export class UsersContainers extends React.Component<UsersType> {
    componentDidMount() {
        this.props.toggleIsFetching(true)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then((res) => {
            this.props.toggleIsFetching(false)
            this.props.setUsers(res.data.items);
            this.props.setTotalUsersCount(res.data.totalCount);
        });
    };

    onCurrentPageChanged = (currentPage: number) => {
        this.props.setCurrentPage(currentPage);
        this.props.toggleIsFetching(true)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${currentPage}&count=${this.props.pageSize}`).then((res) => {
            this.props.toggleIsFetching(false)
            this.props.setUsers(res.data.items);
        });
    };

    render() {
        return <>
            {this.props.isFetching && <Preloader />}
            <UsersPresent users={this.props.users}
                          totalUsersCount={this.props.totalUsersCount}
                          pageSize={this.props.pageSize}
                          currentPage={this.props.currentPage}
                          onCurrentPageChanged={this.onCurrentPageChanged}
                          follow={this.props.follow}
                          unfollow={this.props.unfollow}
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
    };
};
//
// const mapDispatchToProps = (dispatch: Dispatch): MapDispatchToProps => {
//     return {
//         follow: (userId: string) => {
//             dispatch(followAC(userId));
//         },
//         unfollow: (userId: string) => {
//             dispatch(unfollowAC(userId));
//         },
//         setUsers: (users: UserType[]) => {
//             dispatch(setUsersAC(users));
//         },
//         setCurrentPage: (currentPage: number) => {
//             dispatch(setCurrentPageAC(currentPage));
//         },
//         setTotalUsersCount: (totalUsersCount: number) => {
//             dispatch(setTotalUsersCountAC(totalUsersCount));
//         },
//         toggleIsFetching: (isFetching: boolean) => {
//             dispatch(setToggleIsFetchingAC(isFetching))
//         }
//     };
// };

export const UsersContainer = connect(mapStateToProps,{
    follow,
    unfollow,
    setUsers,
    setCurrentPage,
    setTotalUsersCount,
    toggleIsFetching,
})(UsersContainers);