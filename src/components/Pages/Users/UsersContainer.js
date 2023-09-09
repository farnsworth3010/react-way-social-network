import { connect } from "react-redux";
import { setCurrentPage, setTFP, getUsers, follow, unfollow} from "../../../redux/usersReducer";
import React from "react";
import UsersFunctional from "./UsersFunctional";
import Preloader from "../../common/Preloader/Preloader";
import { compose } from "redux";
import { getCurrentPage, getFollowingInProgress, getIsFetching, getPageSize, getTotalUsersCount, getUsersS, getUsersSuperSelector } from "../../../redux/users-selectors";
export class UsersContainer extends React.Component{
	componentDidMount(){
		const {pageNumber, pageSize} = this.props
		this.props.getUsers(pageNumber, pageSize)
	}
	onPageChanged = (pageNumber) => {
		const {pageSize} = this.props
		this.props.getUsers(pageNumber, pageSize)
	}
	render(){
		return(
			<>
			{ this.props.isFetching ? <Preloader /> : null}
			<UsersFunctional 
			follow={this.props.follow}
			unfollow={this.props.unfollow}
			totalUsersCount={this.props.totalUsersCount}
			pageSize={this.props.pageSize}
			currentPage={this.props.currentPage}
			users={this.props.users}
			onPageChanged={this.onPageChanged}
			setTFP={this.props.setTFP}
			followingInProgress={this.props.followingInProgress}
			/>
			</>
		)
	}
}

let mapStateToProps = (state) => {
	return {
		users: getUsersSuperSelector(state),
		pageSize: getPageSize(state),
		totalUsersCount: getTotalUsersCount(state),
		currentPage: getCurrentPage(state),
		isFetching: getIsFetching(state),
		followingInProgress: getFollowingInProgress(state)
	};
};

export default compose(connect(mapStateToProps, {setTFP, setCurrentPage, getUsers, follow, unfollow}))(UsersContainer);