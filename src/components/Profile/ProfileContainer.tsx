import React from 'react';
import Profile from './Profile';
import axios from 'axios';
import { connect } from 'react-redux';
import { ProfilePageType, setUserProfile } from '../../redux/profile-reducer';
import { RootStateType } from '../../redux/redux-store';
import { ProfileResponseType } from '../../redux/profile-reducer';

type MapStateToPropsType = {
    profile: ProfileResponseType | null
}

type MapDispatchToPropsType = {
    setUserProfile: (profile: ProfileResponseType) => void
}

type ProfileContainerType = MapStateToPropsType & MapDispatchToPropsType

class ProfileContainer extends React.Component<ProfileContainerType, ProfilePageType> {

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/2`).then((res) => {
            this.props.setUserProfile(res.data)
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

export default connect<MapStateToPropsType, MapDispatchToPropsType, {}, RootStateType>(mapStateToProps, {setUserProfile})(ProfileContainer);