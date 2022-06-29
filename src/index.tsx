import reportWebVitals from './reportWebVitals';
import './index.css';
import state, { addPost, changeText, RootStateType, subscribe } from './redux/state';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import React from 'react';

export const renderTree = (state: RootStateType) => {
    ReactDOM.render(
        <BrowserRouter>
            <App state={state} addPost={addPost} changeText={changeText} />
        </BrowserRouter>,
        document.getElementById('root'),
    );
};

renderTree(state)
subscribe(renderTree);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
