import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {v1} from "uuid";

let posts = [
    {id: v1(), message: 'Hi, how are you?', likesCount: 23},
    {id: v1(), message: "It's my first post?", likesCount: 0}
]
let dialogs = [
    {id: v1(), name: 'Dimych'},
    {id: v1(), name: 'Andrey'},
    {id: v1(), name: 'Sveta'},
    {id: v1(), name: 'Sasha'},
    {id: v1(), name: 'Viktor'},
    {id: v1(), name: 'Valera'}
]

let messages = [
    {id: v1(), messages: 'Hi'},
    {id: v1(), messages: 'How you doin?'},
    {id: v1(), messages: 'Yo'},
]
ReactDOM.render(
  <React.StrictMode>
    <App posts={posts} dialogs={dialogs} messages={messages} />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
