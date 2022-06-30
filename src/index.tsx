import reportWebVitals from './reportWebVitals';
import './index.css';
import store, { RootStateType, StoreType } from './redux/state';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import React from 'react';

export const renderTree = (state: RootStateType) => {
    ReactDOM.render(
        <BrowserRouter>
            <App store={store} />
        </BrowserRouter>,
        document.getElementById('root'),
    );
};

renderTree(store.getState());
store.subscribe(renderTree);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
