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
import {ActionType, RootStateType} from "./redux/state";

type AppPropsType = {
    state: RootStateType
    newPostText: string
    newMessageText: string
    updateNewMessageText: (newDialogsText: string) => void
    dispatch: (action: ActionType) => void
}

const App: React.FC<AppPropsType> = (props) => {

    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <Header/>
                <Nav/>
                <div className='app-wrapper-content'>
                    <Routes>
                        <Route path={'/profile'} element={
                            <Profile
                                posts={props.state.profilePage.posts}
                                dispatch={props.dispatch}
                                newPostText={props.state.profilePage.newPostText}
                            />
                        }/>
                        <Route path={'/messages/*'} element={
                            <Dialogs state={props.state}
                                     newMessageText={props.newMessageText}
                                     updateNewMessageText={props.updateNewMessageText}
                            />}
                        />
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
