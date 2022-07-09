import reportWebVitals from './reportWebVitals';
import './index.css';
import { store } from './redux/redux-store';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import React from 'react';
import { Provider } from 'react-redux';
import { RootStateType } from './redux/store';

export const renderTree = (state: RootStateType) => {
    ReactDOM.render(
        <BrowserRouter>
            <Provider store={store}>
                <App />
            </Provider>
        </BrowserRouter>,
        document.getElementById('root'),
    );
};

renderTree(store.getState());
store.subscribe(() => {
    let state = store.getState();
    renderTree(state)
});

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
