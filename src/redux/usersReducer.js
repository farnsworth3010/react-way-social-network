import { api } from "../api/api";
import { updateOnjectInArray } from "../components/utils/Object-helpers";

const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET_USERS";
const SET_CURRENT_PAGE = "SET_CURRENT_PAGE";
const SET_TOTAL_USERS_COUNT = "SET_TOTAL_USERS_COUNT";
const TOGGLE_IS_FETCHING = "TOGGLE_IS_FETCHING";
const TOGGLE_IS_FOLLOWING_PROGRESS = "TOGGLE_IS_FOLLOWING_PROGRESS";

let initialState = {
	users: [],
	pageSize: 5,
	totalUsersCount: 0,
	currentPage: 1,
	isFetching: true,
	followingInProgress: [],
};

let usersReducer = (state = initialState, action) => {
	switch (action.type) {
		case FOLLOW:
			return {
				...state,
				users: updateOnjectInArray(state.users, action.userId, "id", {followed: true})
			};
		case UNFOLLOW:
			return {
				...state,
				users: updateOnjectInArray(state.users, action.userId, "id", {followed: false})
			};
		case SET_USERS:
			return {
				...state,
				users: [...action.users],
			};
		case SET_CURRENT_PAGE:
			return {
				...state,
				currentPage: action.currentPage,
			};
		case SET_TOTAL_USERS_COUNT:
			return {
				...state,
				totalUsersCount: action.count,
			};
		case TOGGLE_IS_FETCHING:
			return {
				...state,
				isFetching: action.isFetching,
			};
		case TOGGLE_IS_FOLLOWING_PROGRESS:
			return {
				...state,
				followingInProgress: action.isFetching
					? [...state.followingInProgress, action.userId]
					: state.followingInProgress.filter(
							(id) => id !== action.userId
					  ),
			};
		default:
			return state;
	}
};

export const followSuccess = (userId) => ({ type: FOLLOW, userId });
export const unfollowSuccess = (userId) => ({ type: UNFOLLOW, userId });
export const setUsers = (users) => ({ type: SET_USERS, users });
export const setCurrentPage = (currentPage) => ({
	type: SET_CURRENT_PAGE,
	currentPage,
});
export const setTotalUsersCount = (count) => ({
	type: SET_TOTAL_USERS_COUNT,
	count,
});
export const setToggleIsFetching = (isFetching) => ({
	type: TOGGLE_IS_FETCHING,
	isFetching,
});
export const setTFP = (isFetching, userId) => ({
	type: TOGGLE_IS_FOLLOWING_PROGRESS,
	isFetching,
	userId,
});

export const getUsers = (currentPage, pageSize) => async (dispatch) => {
	dispatch(setToggleIsFetching(true));
	let data = await api.users.getUsers(currentPage, pageSize);
	dispatch(setUsers(data.items));
	dispatch(setTotalUsersCount(data.totalCount));
	dispatch(setToggleIsFetching(false));
};

const followUnfollodFlow = async (dispatch, userId, apiMethod, actionCreator) => {
    dispatch(setTFP(true, userId));
	let data = await api.users.follow(userId);
	if (data.resultCode === 0) {
		dispatch(followSuccess(userId));
	}
	dispatch(setTFP(false, userId));
}

export const follow = (userId) => async (dispatch) => {
	followUnfollodFlow(dispatch, userId, api.users.follow.bind(api), followSuccess)
};

export const unfollow = (userId) => async (dispatch) => {
	followUnfollodFlow(dispatch, userId, api.users.unfollow.bind(api), unfollowSuccess)
};
export default usersReducer;
