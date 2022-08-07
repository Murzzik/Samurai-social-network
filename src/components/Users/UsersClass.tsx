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
}

export class Users extends React.Component<UsersType> {

    constructor(users: UsersType) {
        super(users);
        axios.get('https://social-network.samuraijs.com/api/1.0/users').then((res) => {
            this.props.setUsers(res.data.items);
        });
    }

    render() {
        return (
            <div>
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