import { ComponentType } from 'react';
import Dialogs from './Dialogs';
import { connect } from 'react-redux';
import { compose, Dispatch } from 'redux';
import { RootStateType } from '../../redux/redux-store';
import { addMessageAC, DialogsPageType, updateNewMessageTextAC } from '../../redux/dialogs-reducer';
import { withAuthRedirect } from '../hoc/withAuthRedirect';

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

export const DialogsContainer = compose<ComponentType>(connect(mapStateToProps, mapDispatchToProps), withAuthRedirect)(Dialogs);