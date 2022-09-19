import React from 'react';
import { UserType } from '../../redux/users-reducer';
import axios from 'axios';
import defaultAvatar from '../../images/avatar.jpg'
import s from './User.module.css'

type UsersType = {
    users: UserType[]
    follow: (userId: string) => void
    unfollow: (userId: string) => void
    setUsers: (users: UserType[]) => void
}

export const Users: React.FC<UsersType> = ({users, follow, unfollow, setUsers}) => {
    if(!users.length) {
        axios.get('https://social-network.samuraijs.com/api/1.0/users').then((res) => {
            setUsers(res.data.items);
        });
    }
    return (
        <div>
            {users.map((user, id) =>
                <div key={id} className={s.userStyleContainer}>
                <span>
                    <div>
                        <img className={s.userPhoto} src={user.photos.small !== null ? user.photos.small : defaultAvatar} />
                    </div>
                    <div>
                        {
                            user.followed ?
                                <button onClick={() => {
                                    unfollow(user.id);
                                }}>Unfollow</button>
                                :
                                <button onClick={() => {
                                    follow(user.id);
                                }}>Follow</button>
                        }
                    </div>
                </span>
                    <span>
                    <div>{user.name}</div>
                    <div>{user.status}</div>
                    <span>
                        <div>{"user.location.country"}</div>
                        <div>{"user.location.city"}</div>
                    </span>
                </span>
                </div>)
            }
        </div>
    );
};