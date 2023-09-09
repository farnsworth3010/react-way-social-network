import s from "./users.module.css";
import { NavLink } from "react-router-dom";
import userPhotoPlaceholder from "../../../assets/userPhoto.png";

let User = ({ user, followingInProgress, follow, unfollow }) => {
	return (
		<div className={s.userBlock}>
			<span className={s.left_section}>
				<div>
					<NavLink to={"/profile/" + user.id}>
						{user.photos.large ? (
							<img
								className={s.userPhoto}
								alt=""
								src={user.photos.large}
							/>
						) : (
							<img
								className={s.userPhoto}
								alt=""
								src={userPhotoPlaceholder}
							/>
						)}
					</NavLink>
				</div>
			</span>
			<span className={s.right_section}>
				<span>
					<div>{user.name}</div>
					<div>{user.status}</div>
				</span>
				<div className={s.follow_section}>
					{user.followed ? (
						<button
							disabled={followingInProgress.some(
								(id) => id === user.id
							)}
							onClick={() => {
								unfollow(user.id);
							}}
						>
							Unfollow
						</button>
					) : (
						<button
							disabled={followingInProgress.some(
								(id) => id === user.id
							)}
							onClick={() => {
								follow(user.id);
							}}
						>
							Follow
						</button>
					)}
				</div>
			</span>
		</div>
	);
};

export default User;
