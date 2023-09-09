import {
	sendMessageCreator,
	updateNewMessageTextCreator,
} from "../../../redux/dialogsReducer";
import Dialogs from "./Dialogs";
import { connect } from "react-redux";
import {compose} from 'redux'
import { withAuthRedirect } from "../../../hoc/withAuthRedirect";

let mapStateToProps = (state) => {
	return{
		dialogsPage: state.dialogsPage,
	}

}
let mapDispatchToProps = (dispatch) => {
	return{
		// newMsgChange: (text) =>{
		// 	dispatch(updateNewMessageTextCreator(text))
		// },
		sendMessage: (newMessageBody) =>{
			dispatch(sendMessageCreator(newMessageBody))
		}
	}
}

export default compose(connect(mapStateToProps, mapDispatchToProps),withAuthRedirect)(Dialogs)
