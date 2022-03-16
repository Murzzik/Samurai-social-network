import React from 'react';
import logo from "../../images/logo-head.png";
import s from './Header.module.css'


const Header = () => {
    return (
        <header className={s.header}>
            <img src={logo} alt="Omega"/>
        </header>
    );
};

export default Header;