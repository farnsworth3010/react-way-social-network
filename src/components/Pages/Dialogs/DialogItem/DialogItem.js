import s from "../Dialogs.module.css"
import {NavLink} from 'react-router-dom'

const DialogItem = (props) => {
    let path = "/dialogs/" + props.id;

	return (
		<NavLink to={path}>
			<li className={s.user}>{props.name}</li>
		</NavLink>
	);
}

export default DialogItem;