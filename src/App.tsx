import React from 'react';
import './App.css';
import Nav from './components/Navbar/Nav';
import News from './components/News/News';
import Settings from './components/Settings/Settings';
import Music from './components/Music/Music';
import { Route, Routes } from 'react-router-dom';
import { DialogsContainer } from './components/Messages/DialogsContainer';
import { UsersContainer } from './components/Users/UsersContainer';
import ProfileContainer from './components/Profile/ProfileContainer';
import HeaderContainer from './components/Header/HeaderContainer';
import { Login } from './components/Login/Login';

const App: React.FC = () => {

    return (
        <div className="app-wrapper">
            <HeaderContainer />
            <Nav />
            <div className="app-wrapper-content">
                <Routes>
                    <Route path={'/profile'} element={<ProfileContainer />}>
                        <Route path={':userId'} element={<ProfileContainer />}
                        />
                    </Route>
                    <Route path={'/login'} element={<Login />} />
                    <Route path={'/messages/*'} element={<DialogsContainer />} />
                    <Route path={'/users'} element={<UsersContainer />} />
                    <Route path={'/news'} element={<News />} />
                    <Route path={'/music'} element={<Music />} />
                    <Route path={'/settings'} element={<Settings />} />
                </Routes>
            </div>
        </div>
    );
};

export default App;
