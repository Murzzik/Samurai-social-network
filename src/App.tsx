import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Nav from './components/Navbar/Nav';
import News from './components/News/News';
import Settings from './components/Settings/Settings';
import Music from './components/Music/Music';
import { Route, Routes } from 'react-router-dom';
import { DialogsContainer } from './components/Messages/DialogsContainer';
import { UsersContainer } from './components/Users/UsersContainer';
import ProfileContainer from './components/Profile/ProfileContainer';


const App: React.FC = () => {

    return (
        <div className="app-wrapper">
            <Header />
            <Nav />
            <div className="app-wrapper-content">
                <Routes>
                    <Route path={'/profile'} element={<ProfileContainer />}>
                        <Route path={':id'} element={<ProfileContainer/>}
                        />
                    </Route>
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
