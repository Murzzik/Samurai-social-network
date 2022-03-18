import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Nav from "./components/Navbar/Nav"
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Messages/Dialogs";
import News from './components/News/News'
import Settings from './components/Settings/Settings'
import Music from "./components/Music/Music";
import {BrowserRouter, Route, Routes} from 'react-router-dom';


const App = () => {
    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <Header/>
                <Nav/>
                <div className='app-wrapper-content'>
                    <Routes>
                        <Route path={'/profile'} element={<Profile/>}/>
                        <Route path={'/messages/*'} element={<Dialogs/>}/>
                        <Route path={'/news'} element={<News/>}/>
                        <Route path={'/music'} element={<Music/>}/>
                        <Route path={'/settings'} element={<Settings/>}/>
                    </Routes>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
