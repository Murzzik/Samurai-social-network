import React from 'react';
import { Header } from './Header';
import { authorizeME, AuthResponseType, setUserData } from '../../redux/auth-reducer';
import { connect } from 'react-redux';
import { RootStateType } from '../../redux/redux-store';

type MapStateToPropsType = {
    isAuth: boolean
    login: string | null
}

type MapDispatchToPropsType = {
    authorizeME: () => void
}

type HeaderContainerType = MapStateToPropsType & MapDispatchToPropsType

class HeaderContainer extends React.Component<HeaderContainerType, AuthResponseType> {
    componentDidMount() {
        this.props.authorizeME()
    };

    render() {
        return <Header {...this.props} />;
    };
}

const mapStateToProps = (state: RootStateType): MapStateToPropsType => {
    return {
        isAuth: state.auth.isAuth,
        login: state.auth.login,
    };
};

export default connect<MapStateToPropsType, MapDispatchToPropsType, {}, RootStateType>
(mapStateToProps, {authorizeME})(HeaderContainer);