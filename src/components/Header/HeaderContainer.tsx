import React from 'react';
import { Header } from './Header';
import { AuthResponseType, setUserData } from '../../redux/auth-reducer';
import { connect } from 'react-redux';
import { RootStateType } from '../../redux/redux-store';
import { usersAPI } from '../../api/api';

type MapStateToPropsType = {
    isAuth: boolean
    login: string | null
}

type MapDispatchToPropsType = {
    setUserData: (id: number, email: string, login: string) => void
}

type HeaderContainerType = MapStateToPropsType & MapDispatchToPropsType

class HeaderContainer extends React.Component<HeaderContainerType, AuthResponseType> {
    componentDidMount() {
        usersAPI.authME()
            .then((data) => {
                if(data.resultCode === 0) {
                    let {id, email, login} = data.data;
                    this.props.setUserData(id, email, login);
                }
            });
    };

    render() {
        return <Header {...this.props} />;
    };
};

const mapStateToProps = (state: RootStateType): MapStateToPropsType => {
    return {
        isAuth: state.auth.isAuth,
        login: state.auth.login,
    };
};

export default connect<MapStateToPropsType, MapDispatchToPropsType, {}, RootStateType>
(mapStateToProps, {setUserData})(HeaderContainer);