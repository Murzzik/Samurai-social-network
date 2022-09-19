import React from 'react';
import { connect } from 'react-redux';
import { RootStateType } from '../../redux/redux-store';
import {
    follow,
    setCurrentPage,
    setTotalUsersCount,
    setUsers,
    toggleIsFetching,
    unfollow,
    UserType,
} from '../../redux/users-reducer';

import { UsersPresent } from './UsersPresent';
import { Preloader } from '../common/Preloader/Preloader';
import { usersAPI } from '../../api/api';

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

export class UsersContainers extends React.Component<UsersType> {
    componentDidMount() {
        if(!this.props.users.length) {
            usersAPI.getUsers().then((data => {
                this.props.setUsers(data.items);
            }));
        }

        this.props.toggleIsFetching(true);
        usersAPI.getPaginationStatus(this.props.currentPage, this.props.pageSize)
            .then((data) => {
                this.props.toggleIsFetching(false);
                this.props.setUsers(data.items);
                this.props.setTotalUsersCount(data.totalCount);
            });
    };

    onCurrentPageChanged = (currentPage: number) => {
        this.props.setCurrentPage(currentPage);
        this.props.toggleIsFetching(true);
        usersAPI.getPaginationStatus(currentPage, this.props.pageSize)
            .then((data) => {
                this.props.toggleIsFetching(false);
                this.props.setUsers(data.items);
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

export const UsersContainer = connect(mapStateToProps, {
    follow,
    unfollow,
    setUsers,
    setCurrentPage,
    setTotalUsersCount,
    toggleIsFetching,
})(UsersContainers);