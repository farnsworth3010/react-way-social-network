import { api } from "../api/api";

const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";
const SET_USER_PROFILE = "SET_USER_PROFILE";
const SET_STATUS = "SET_STATUS";
const DELETE_POST = "DELETE_POST"
let initialState = {
	posts: [
		{ id: 1, message: "hi", likesCount: 12 },
		{ id: 2, message: "hi", likesCount: 12 },
	],
	profile: null,
	status: "",
};

const profileReducer = (state = initialState, action) => {
	switch (action.type) {
		case ADD_POST: {
			return {
				...state,
				posts: [
					...state.posts,
					{
						id: 5,
						message: action.postText,
						likesCount: 0,
					},
				],
			};
		}
		// case UPDATE_NEW_POST_TEXT:
		// 	return {
		// 		...state,
		// 		newPostText: action.newText,
		// 	};
		case DELETE_POST:
			return {
				...state, posts: state.posts.filter((p) => p.id != action.postId)
			}
		case SET_USER_PROFILE:
			return {
				...state,
				profile: action.profile,
			};
		case SET_STATUS:
			return {
				...state,
				status: action.status,
			};
		default:
			return state;
	}
};

export const deletePost = (postId) => ({type: DELETE_POST, postId})

export const addPost = (postText) => ({ type: ADD_POST, postText });
export const setUserProfileSuccess = (profile) => ({
	type: SET_USER_PROFILE,
	profile,
});
export const setStatus = (status) => ({ type: SET_STATUS, status });
// export const updateNewPostText = (text) => ({
// 	type: UPDATE_NEW_POST_TEXT,
// 	newText: text,
// });

export const getStatus = (userId) => async (dispatch) => {
	let response = await api.profile.getStatus(userId)
	dispatch(setStatus(response))
};

export const updateStatus = (status) => async (dispatch) => {
	let response = await api.profile.updateStatus(status)
	if (response.data.resultCode === 0) {
		dispatch(setStatus(status));
	}
};

export const setUserProfile = (userId) => {
	return (dispatch) => {
		api.profile.getProfile(userId).then((data) => {
			dispatch(setUserProfileSuccess(data));
		});
	};
};

export default profileReducer;
