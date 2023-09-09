import { Field, reduxForm } from "redux-form";
import { TextArea } from "../../../common/FormsControls/FormsControls";
import { maxLengthCreator, required } from "../../../utils/validators/validators";
import s from '../Dialogs.module.css'

const maxLength50 = maxLengthCreator(50)

const AddMessageForm = (props) => {
	return (
		<form onSubmit={props.handleSubmit} className={s.sendMessageContainer}>
			<Field validate={[required, maxLength50]} component={TextArea} name="newMessageBody" placeholder="Message text"/>
			<button>Send</button>
		</form>
	);
};

const AddMessageFormRedux = reduxForm({form: 'dialogAddMessageForm'})(AddMessageForm)
export default AddMessageFormRedux