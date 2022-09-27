import React from 'react';
import s from './User.module.css';
import defaultAvatar from '../../images/avatar.jpg';
import { UserType } from '../../redux/users-reducer';
import { NavLink } from 'react-router-dom';

type UsersPresentType = {
    users: UserType[]
    pageSize: number
    totalUsersCount: number
    currentPage: number
    onCurrentPageChanged: (currentPage: number) => void
    unfollowUsers: (userId: number) => void
    followingInProgress: number[]
    followUsers: (userId: number) => void

}

export const UsersPresent: React.FC<UsersPresentType> = ({
                                                             users,
                                                             pageSize,
                                                             currentPage,
                                                             totalUsersCount,
                                                             onCurrentPageChanged,
                                                             unfollowUsers,
                                                             followingInProgress,
                                                             followUsers,
                                                         }) => {
    const totalPagesCount = Math.ceil(totalUsersCount / pageSize);

    const pages = [];

    for(let i = 1; i <= totalPagesCount; i++) {
        pages.push(i);
    }

    // Pagination carousel
    let curP = currentPage;
    let curPF = ((curP - 5) < 0) ? 0 : curP - 5;
    let curPL = curP + 4;
    let slicedPages = pages.slice(curPF, curPL);

    return (
        <div>
            <div>
                <div className={s.pagination_block}>
                    {slicedPages.map((page, id) => <span key={id}
                                                         className={`${s.pagination} ${currentPage === page && s.selectedPage}`}
                                                         onClick={() => onCurrentPageChanged(page)}>{page}</span>)}
                </div>
                {users.map((user, id) =>
                    <div key={id} className={s.userStyleContainer}>
                <span>
                    <div>
                        <NavLink to={`/profile/${user.id}`} target="_blank"><img className={s.userPhoto}
                                                                                 src={user.photos.small !== null ? user.photos.small : defaultAvatar}
                                                                                 alt="User avatar photo" /></NavLink>
                    </div>
                    <div>
                        {
                            user.followed ?
                                <button disabled={followingInProgress.some(id => id === user.id)} onClick={() => {
                                    unfollowUsers(user.id);
                                }}>Unfollow</button>
                                :
                                <button disabled={followingInProgress.some(id => id === user.id)} onClick={() => {
                                    followUsers(user.id);
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
        </div>
    );
};
