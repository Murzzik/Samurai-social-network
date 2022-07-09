import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Nav from './components/Navbar/Nav';
import Profile from './components/Profile/Profile';
import News from './components/News/News';
import Settings from './components/Settings/Settings';
import Music from './components/Music/Music';
import { Route, Routes } from 'react-router-dom';
import { store } from './redux/redux-store';
import DialogsContainer from './components/Messages/DialogsContainer';

const App: React.FC = () => {

    return (
        <div className="app-wrapper">
            <Header />
            <Nav />
            <div className="app-wrapper-content">
                <Routes>
                    <Route path={'/profile'} element={<Profile store={store} />} />
                    <Route path={'/messages/*'} element={<DialogsContainer store={store} dialogs={[]} messages={[]}
                                                                           newMessageText={''} />} />
                    <Route path={'/news'} element={<News />} />
                    <Route path={'/music'} element={<Music />} />
                    <Route path={'/settings'} element={<Settings />} />
                </Routes>
            </div>
        </div>
    );
};

export default App;
