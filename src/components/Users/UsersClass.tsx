import React from 'react';
import s from './User.module.css';
import defaultAvatar from '../../images/avatar.jpg';
import { UserType } from '../../redux/users-reducer';
import axios from 'axios';

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
}

export class Users extends React.Component<UsersType> {
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then((res) => {
            this.props.setUsers(res.data.items);
            this.props.setTotalUsersCount(res.data.totalCount);
        });
    }

    onCurrentPageChanged = (currentPage: number) => {
            this.props.setCurrentPage(currentPage)
            axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${currentPage}&count=${this.props.pageSize}`).then((res) => {
            this.props.setUsers(res.data.items);
        });
    }

    render() {

        const totalPagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize)

        const pages = [];

        for(let i = 1; i <= totalPagesCount; i++) {
                pages.push(i);
        }
        // Pagination carousel
        let curP = this.props.currentPage;
        let curPF = ((curP - 5) < 0) ?  0  : curP - 5 ;
        let curPL = curP + 4;
        let slicedPages = pages.slice( curPF, curPL);

        return (
            <div>
                <div className={s.pagination_block}>
                    {slicedPages.map(page => <span className={`${s.pagination} ${this.props.currentPage === page && s.selectedPage}`} onClick={() => this.onCurrentPageChanged(page)}>{page}</span>)}
                </div>
                {this.props.users.map((user, id) =>
                    <div key={id} className={s.userStyleContainer}>
                <span>
                    <div>
                        <img className={s.userPhoto}
                             src={user.photos.small !== null ? user.photos.small : defaultAvatar} />
                    </div>
                    <div>
                        {
                            user.isFriends ?
                                <button onClick={() => {
                                    this.props.unfollow(user.id);
                                }}>Unfollow</button>
                                :
                                <button onClick={() => {
                                    this.props.follow(user.id);
                                }}>Follow</button>
                        }
                    </div>
                </span>
                        <span>
                    <div>{user.name}</div>
                    <div>{user.status}</div>
                    <span>
                        <div>{'user.location.country'}</div>
                        <div>{'user.location.city'}</div>
                    </span>
                </span>
                    </div>)
                }
            </div>
        );
    }
}