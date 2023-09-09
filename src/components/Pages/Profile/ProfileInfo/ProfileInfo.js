import Preloader from "../../../common/Preloader/Preloader";
import s from "./ProfileInfo.module.css"
import userPhotoPlaceholder from '../../../../assets/userPhoto.png'
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";

const ProfileInfo = ({profile, status, updateStatus}) => {
	if(!profile){
		return <Preloader/>
	}
	return (
		<div>
			<img
				className={s.profileCover}
				alt=""
				src="https://images.unsplash.com/photo-1615859131861-052f0641a60e?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8d2lkZXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80"
			/>
			<div className={s.userNameSurname}>
				{profile.photos.large ? <img className={s.profileAvatar} alt="" src={profile.photos.large}/>
				  : <img className={s.profileAvatar} alt="" src={userPhotoPlaceholder}/>}
				{profile.fullName}
				<ProfileStatusWithHooks updateStatus={updateStatus} status={status} />
			</div>
		</div>
	);
};

export default ProfileInfo;
