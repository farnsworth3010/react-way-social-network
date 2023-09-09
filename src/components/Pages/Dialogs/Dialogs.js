import s from "./Dialogs.module.css";
import Message from "./Message/Message";
import DialogItem from "./DialogItem/DialogItem";
import React from "react";
import { Redirect } from "react-router";
import AddMessageForm from './AddMessageForm/AddMessageForm'
import { Field, Form, reduxForm } from "redux-form";
import AddMessageFormRedux from "./AddMessageForm/AddMessageForm";

const Dialogs = (props) => {
	let dialogsElements = props.dialogsPage.messages.map((dialog) => (
		<DialogItem key={dialog.id} name={dialog.name} id={dialog.id} />
	));
	let messagesElements = props.dialogsPage.messages.map((message) => (
		<Message
			key={message.id}
			my={message.my}
			message={message.message}
			id={message.id}
		/>
	));

	// let onNewMsgChange = (e) => {
	// 	props.newMsgChange(e.target.value);
	// };
	// let onSendMessage = () => {
	// 	props.sendMessage();
	// };
	const addNewMessage = (values) => {
		props.sendMessage(values.newMessageBody)
	}
	return (
		<div className={s.dialogs}>
			<div className={s.listContainer}>
				<h1>Dialogs</h1>
				<ul className={s.users}>{dialogsElements}</ul>
			</div>
			<div className={s.messagesContainer}>
				<div className={s.messagesField}>{messagesElements}</div>
				<AddMessageFormRedux onSubmit={addNewMessage} />
			</div>
		</div>
	);
};

export default Dialogs;
