import s from "./Post.module.css";

const Post = (props) => {
    return(
        <div className={s.post}>
            <img className={s.post__avatar} alt="" src=""/>
            <div className={s.post__content}>
                <p>{props.message}</p>
            </div>
            <div className={s.post__options}>
                <div>Like<span className={s.post__likes}>{props.likes}</span></div>
            </div>
        </div>
    );
}

export default Post;