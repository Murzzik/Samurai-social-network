import React from 'react';
import './App.css';
import main from './images/main-img.jpg'
import Header from "./components/Header/Header";
import Nav from "./components/Navbar/Nav"
import Profile from "./components/Profile/Profile";


const App = () => {
    return (
        <div className='app-wrapper'>
            <Header/>
            <Nav/>
            <Profile/>
        </div>
    );
}

export default App;
