import React from 'react';
import s from './Nav.module.css'

const Nav = () => {
    return (
        <nav className={s.nav}>
            <div className={s.item}><a href='#' target="_blank">Profile</a></div>
            <div className={s.item}><a href='#' target="_blank">Messages</a></div>
            <div className={s.item}><a href='#' target="_blank">News</a></div>
            <div className={s.item}><a href='#' target="_blank">Music</a></div>
            <div className={s.item}><a href='#' target="_blank">Settings</a></div>
        </nav>
    );
};

export default Nav;