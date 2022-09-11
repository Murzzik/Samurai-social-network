import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Nav from './components/Navbar/Nav';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Messages/Dialogs';
import News from './components/News/News';
import Settings from './components/Settings/Settings';
import Music from './components/Music/Music';
import { Route, Routes } from 'react-router-dom';
import { RootStateType } from './redux/state';

type AppPropsType = {
    state: RootStateType
    addPost: (postMessage: string) => void
}

const App: React.FC<AppPropsType> = ({state, addPost}) => {

    return (
        <div className="app-wrapper">
            <Header />
            <Nav />
            <div className="app-wrapper-content">
                <Routes>
                    <Route path={'/profile'} element={<Profile posts={state.profilePage.posts} addPost={addPost}/>} />
                    <Route path={'/messages/*'} element={<Dialogs state={state} />} />
                    <Route path={'/news'} element={<News />} />
                    <Route path={'/music'} element={<Music />} />
                    <Route path={'/settings'} element={<Settings />} />
                </Routes>
            </div>
        </div>
    );
};

export default App;
