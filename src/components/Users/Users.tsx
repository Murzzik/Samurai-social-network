import React from 'react';
import { UserType } from '../../redux/users-reducer';
import { v1 } from 'uuid';

type UsersType = {
    users: UserType[]
    follow: (userId: string) => void
    unfollow: (userId: string) => void
    setUsers: (users: UserType[]) => void
}

export const Users: React.FC<UsersType> = ({users, follow, unfollow, setUsers}) => {
    if(!users.length) {
        setUsers([
            {
                id: v1(),
                isFriends: true,
                photoUrl: 'https://icons-for-free.com/iconfiles/png/128/avatar-1320568024619304547.png',
                fullName: 'Alexander',
                status: 'Senior developer yay',
                location: {country: 'Ukraine', city: 'Kyiv'},
            },
            {
                id: v1(),
                isFriends: true,
                photoUrl: 'https://icons-for-free.com/iconfiles/png/128/avatar-1320568024619304547.png',
                fullName: 'Denis',
                status: 'Give some job',
                location: {country: 'Ukraine', city: 'Kyiv'},
            },
            {
                id: v1(),
                isFriends: false,
                photoUrl: 'https://icons-for-free.com/iconfiles/png/128/avatar-1320568024619304547.png',
                fullName: 'Jhonas',
                status: 'Graciac bueno',
                location: {country: 'Norway', city: 'Oslo'},
            },
            {
                id: v1(),
                isFriends: true,
                photoUrl: 'https://icons-for-free.com/iconfiles/png/128/avatar-1320568024619304547.png',
                fullName: 'Artem',
                status: 'Board game masta',
                location: {country: 'Netherlands', city: 'Amsterdam'},
            },
        ]);
    }

    return (
        <div>
            {users.map((user, id) =>
                <div key={id}>
                <span>
                    <div><img src={user.photoUrl} /></div>
                    <div>
                        {
                            user.isFriends ?
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
                    <div>{user.fullName}</div>
                    <div>{user.status}</div>
                    <span>
                        <div>{user.location.country}</div>
                        <div>{user.location.city}</div>
                    </span>
                </span>
                </div>)
            }
        </div>
    );
};