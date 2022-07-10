import { combineReducers, legacy_createStore as createStore } from 'redux';
import { profileReducer } from './profile-reducer';
import { dialogsReducer } from './dialogs-reducer';

const rootReducer = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
});

export type RootStateType = ReturnType<typeof rootReducer>;

export const store = createStore(rootReducer);
