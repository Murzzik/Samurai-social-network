import { combineReducers, legacy_createStore as createStore } from 'redux';
import { profileReducer } from './profile-reducer';
import { dialogsReducer } from './dialogs-reducer';

const reducers = combineReducers({
    profilePage: profileReducer, dialogsPage: dialogsReducer})

export const store = createStore(reducers)

export type ReduxStoreType = typeof store