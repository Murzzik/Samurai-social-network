import React from 'react';
import Profile from './Profile';
import axios from 'axios';
import { connect } from 'react-redux';
import { ProfilePageType, setUserProfile } from '../../redux/profile-reducer';
import { RootStateType } from '../../redux/redux-store';
import { ProfileResponseType } from '../../redux/profile-reducer';
import { withRouter } from './ComponentWithRouterProps';
import {RouteComponentProps} from "@reach/router";
import { profileAPI } from '../../api/api';

type PathParamsType = {
    router: any
}

type MapStateToPropsType = {
    profile: ProfileResponseType | null
}

type MapDispatchToPropsType = {
    setUserProfile: (profile: ProfileResponseType) => void
}

type ProfileContainerType = MapStateToPropsType & MapDispatchToPropsType & RouteComponentProps<PathParamsType>

class ProfileContainer extends React.Component<ProfileContainerType, ProfilePageType> {

    componentDidMount() {
        let userId = this.props.router.params.userId
        if (!userId) {
            userId = 2
        }
        profileAPI.getUserProfile(userId).then((data) => {
            this.props.setUserProfile(data)
        });
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

export default connect<MapStateToPropsType, MapDispatchToPropsType, {}, RootStateType>(mapStateToProps, {setUserProfile})(withRouter(ProfileContainer));