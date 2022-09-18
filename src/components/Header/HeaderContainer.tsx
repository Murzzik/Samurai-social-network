import React from 'react';
import { Header } from './Header';
import axios from 'axios';
import { AuthResponseType, setUserData } from '../../redux/auth-reducer';
import { connect } from 'react-redux';
import { RootStateType } from '../../redux/redux-store';

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
        axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`,
            {withCredentials: true
            })
            .then((res) => {
                if(res.data.resultCode === 0) {
                    let {id, email, login} = res.data.data
                    this.props.setUserData(id, email, login)
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
        login: state.auth.login
    }
}

export default connect<MapStateToPropsType, MapDispatchToPropsType, {}, RootStateType>
(mapStateToProps, {setUserData})(HeaderContainer);