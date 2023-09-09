import MyPostsContainer from "./MyPosts/MyPostsContainer"
import ProfileInfo from "./ProfileInfo/ProfileInfo"
import s from "./Profile.module.css";

let Profile = (props)=> {
    return(
    <div>
    <ProfileInfo profile={props.profile} status={props.status} updateStatus={props.updateStatus} />
    <div className={s.contentWrapper}>
        <MyPostsContainer
        />
    </div>
</div>
    )
}

export default Profile