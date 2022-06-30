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
import { StoreType } from './redux/state';

type AppPropsType = {
    store: StoreType
}

const App: React.FC<AppPropsType> = ({ store }) => {

    const state = store.getState();

    return (
        <div className="app-wrapper">
            <Header />
            <Nav />
            <div className="app-wrapper-content">
                <Routes>
                    <Route path={'/profile'} element={
                        <Profile
                            posts={state.profilePage.posts}
                            newPostText={state.profilePage.newPostText}
                            dispatch={store.dispatch.bind(store)} />
                    } />
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
