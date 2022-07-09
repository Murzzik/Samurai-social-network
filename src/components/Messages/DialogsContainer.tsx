import React from 'react';
import { addMessageAC, RootStateType, updateNewMessageTextAC } from '../../redux/store';
import Dialogs from './Dialogs';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';

const mapStateToProps = (state: RootStateType) => {
    return {
        dialogsPage: state.dialogsPage,
    };
};

const mapDispatchToProps = (dispatch: Dispatch) => {
    return {
        updateNewMessageText: (newMessageText: string) => {
            dispatch(updateNewMessageTextAC(newMessageText));
        },
        addMessage: (messageText: string) => {
            dispatch(addMessageAC(messageText));
        },
    };
};

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer