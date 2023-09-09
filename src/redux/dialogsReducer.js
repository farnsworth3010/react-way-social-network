const SEND_MESSAGE = "SEND-MESSAGE";
const UPDATE_NEW_MESSAGE_TEXT = "UPDATE_NEW_MESSAGE_TEXT";

let initialState = {
	messages: [
		{ id: 1, message: "Hi", my: true },
		{ id: 2, message: "Hi", my: false },
		{ id: 3, message: "Do you like tea?", my: false },
		{ id: 4, message: "Yes, I do", my: true },
	],
	dialogs: [
		{ id: 1, name: "Andrew" },
		{ id: 2, name: "Alex" },
		{ id: 3, name: "Max" },
		{ id: 4, name: "Carlos" },
		{ id: 5, name: "Carver" },
	],
};

const dialogsReducer = (state = initialState, action) => {
	switch (action.type) {
		case "SEND-MESSAGE":
			return {
				...state,
				messages: [
					...state.messages,
					{ id: 5, message: action.newMessageBody, my: true },
				],
				newMsgText: "",
			};
		case "UPDATE_NEW_MESSAGE_TEXT":
			return {
				...state,
				newMsgText: action.newText,
			};
		default:
			return state;
	}
};

export const sendMessageCreator = (newMessageBody) => ({ type: SEND_MESSAGE, newMessageBody });
export const updateNewMessageTextCreator = (text) => ({
	type: UPDATE_NEW_MESSAGE_TEXT,
	newText: text,
});

export default dialogsReducer;
