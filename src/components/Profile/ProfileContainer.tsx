import React from 'react';
import Profile from './Profile';
import { connect } from 'react-redux';
import { ProfilePageType, ProfileResponseType, setUserProfile, userProfile } from '../../redux/profile-reducer';
import { RootStateType } from '../../redux/redux-store';
import { withRouter } from './ComponentWithRouterProps';
import { RouteComponentProps } from '@reach/router';

type PathParamsType = {
    router: any
}

type MapStateToPropsType = {
    profile: ProfileResponseType | null
}

type MapDispatchToPropsType = {
    userProfile: (userID: number) => void
}

type ProfileContainerType = MapStateToPropsType & MapDispatchToPropsType & RouteComponentProps<PathParamsType>

class ProfileContainer extends React.Component<ProfileContainerType, ProfilePageType> {

    componentDidMount() {
        let userId = this.props.router.params.userId
        if (!userId) {
            userId = 2
        }
        this.props.userProfile(userId)
    }

    render() {
        return (
            <div>
                <Profile {...this.props} />
            </div>
        );
    }
}

const mapStateToProps = (state: RootStateType): MapStateToPropsType => ({
    profile: state.profilePage.profile
});

export default connect<MapStateToPropsType, MapDispatchToPropsType, {}, RootStateType>(mapStateToProps, {userProfile})(withRouter(ProfileContainer));