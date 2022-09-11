import React from 'react';
import Dialogs from './Dialogs';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { RootStateType } from '../../redux/redux-store';
import { addMessageAC, DialogsPageType, updateNewMessageTextAC } from '../../redux/dialogs-reducer';

type MapStatePropsType = {
    dialogsPage: DialogsPageType
    newMessageText: string
}
type MapDispatchToProps = {
    updateNewMessageText: (newMessage: string) => void
    addMessage: () => void
}

const mapStateToProps = (state: RootStateType): MapStatePropsType => {
    return {
        newMessageText: state.dialogsPage.newMessageText,
        dialogsPage: state.dialogsPage,
    };
};

const mapDispatchToProps = (dispatch: Dispatch): MapDispatchToProps => {
    return {
        updateNewMessageText: (newMessageText: string) => {
            dispatch(updateNewMessageTextAC(newMessageText));
        },
        addMessage: () => {
            dispatch(addMessageAC());
        },
    };
};

export const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);
