import s from "./users.module.css";
import { NavLink } from "react-router-dom";
import userPhotoPlaceholder from "../../../assets/userPhoto.png";
import Paginator from "../../common/Paginator/Paginator";
import User from "./User";

let UsersFunctional = ({
	currentPage,
	totalUsersCount,
	pageSize,
	users,
	onPageChanged,
	follow,
	unfollow,
	followingInProgress,
}) => {
	return (
		<div>
			<Paginator
				currentPage={currentPage}
				onPageChanged={onPageChanged}
				totalUsersCount={totalUsersCount}
				pageSize={pageSize}
			/>
			{users.map((u) => (
				<User
					user={u}
					key={u.id}
					follow={follow}
					unfollow={unfollow}
					followingInProgress={followingInProgress}
				/>
			))}
		</div>
	);
};

export default UsersFunctional;
