import { combineReducers, legacy_createStore as createStore } from 'redux';
import { profileReducer } from './profile-reducer';
import { dialogsReducer } from './dialogs-reducer';

export type ReduxStoreType = typeof store;

const reducers = combineReducers({
    profilePage: profileReducer, dialogsPage: dialogsReducer,
});

export const store = createStore(reducers);