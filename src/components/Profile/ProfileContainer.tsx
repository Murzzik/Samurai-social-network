import React, { ComponentType } from 'react';
import Profile from './Profile';
import { connect } from 'react-redux';
import { ProfilePageType, ProfileResponseType, userProfile } from '../../redux/profile-reducer';
import { RootStateType } from '../../redux/redux-store';
import { withRouter } from './ComponentWithRouterProps';
import { RouteComponentProps } from '@reach/router';
import { withAuthRedirect } from '../hoc/withAuthRedirect';
import { compose } from 'redux';

type PathParamsType = {
    router: any
}

type MapStateToPropsType = {
    profile: ProfileResponseType | null
}

export type MapDispatchToPropsType = {
    userProfile: (userID: number) => void
}

type ProfileContainerType = MapStateToPropsType & MapDispatchToPropsType & RouteComponentProps<PathParamsType>

class ProfileContainer extends React.Component<ProfileContainerType, ProfilePageType> {

    componentDidMount() {
        let userId = this.props.router.params.userId;
        if(!userId) {
            userId = 2;
        }
        this.props.userProfile(userId);
    }

    render() {
        return (
            <Profile {...this.props} />
        );
    }
}

const mapStateToProps = (state: RootStateType): MapStateToPropsType => ({
    profile: state.profilePage.profile,
});

export default compose<ComponentType>(connect<MapStateToPropsType, MapDispatchToPropsType, {}, RootStateType>(mapStateToProps, {userProfile}), withRouter, withAuthRedirect)(ProfileContainer)

// export default withAuthRedirect(connect<MapStateToPropsType, MapDispatchToPropsType, {}, RootStateType>(mapStateToProps, {userProfile})(withRouter(ProfileContainer)));