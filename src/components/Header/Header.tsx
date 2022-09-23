import React from 'react';
import logo from '../../images/logo-head.png';
import s from './Header.module.css';
import { NavLink } from 'react-router-dom';

type HeaderType = {
    isAuth: boolean
    login: string | null
}

export const Header: React.FC<HeaderType> = ({isAuth, login}) => {
    return (
        <header className={s.header}>
            <img src={logo} alt="Omega" />
            <div className={s.loginBlock}>
                {isAuth ? <span>{login}</span> : <NavLink to='/login'>
                    Login
                </NavLink>}
            </div>
        </header>
    );
};