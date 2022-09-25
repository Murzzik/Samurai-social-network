import React, { ComponentType } from 'react';
import { Navigate } from 'react-router-dom';
import { RootStateType } from '../../redux/redux-store';
import { connect } from 'react-redux';
import { MapDispatchToPropsType } from '../Profile/ProfileContainer';

type MapStateToPropsForRedirectType = {
    isAuth: boolean
}
const mapStateToPropsForRedirect = (state: RootStateType): MapStateToPropsForRedirectType => ({
    isAuth: state.auth.isAuth,
});

export function withAuthRedirect<T>(Component: ComponentType<T>) {
    function RedirectComponent(props: MapStateToPropsForRedirectType) {
        let {isAuth, ...RestProps} = props;

        if(!props.isAuth) return <Navigate to={'/login'} />;
        return <Component {...RestProps as T} />;
    }

    return connect<MapStateToPropsForRedirectType,
        MapDispatchToPropsType,
        {}, RootStateType>
    (mapStateToPropsForRedirect)
    (RedirectComponent);
}