import React from "react";
import Profile from "./Profile";
import { connect } from "react-redux";
import { setUserProfile } from "../../../redux/profileReducer";
import { withRouter } from "react-router-dom";
import { withAuthRedirect } from "../../../hoc/withAuthRedirect";
import { compose } from "redux";
import {getStatus, updateStatus} from '../../../redux/profileReducer'
class ProfileContainer extends React.Component {
	componentDidMount() {
		let userId = this.props.match.params.userId;
		if (!userId) {
			if(!this.props.profileId){
				this.props.history.push("/login")
			}
			else{
				this.props.setUserProfile(this.props.profileId)

			}
		} else {
			this.props.setUserProfile(userId)
		}
		this.props.getStatus(userId)
	}

	render() {
		return(
			<Profile status={this.props.status} {...this.props} profile={this.props.profile} updateStatus={this.props.updateStatus}/>
		)
	}
}

let mapStateToProps = (state) => ({
	profile: state.profilePage.profile,
	status: state.profilePage.status,
	profileId: state.auth.userId,
	isAuth: state.auth.isAuth
});

export default compose(connect(mapStateToProps, {setUserProfile, getStatus, updateStatus}), withRouter)(ProfileContainer);
