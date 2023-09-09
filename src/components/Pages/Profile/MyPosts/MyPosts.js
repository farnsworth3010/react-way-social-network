import { Field, reduxForm } from "redux-form";
import { TextArea } from "../../../common/FormsControls/FormsControls";
import { maxLengthCreator, required } from "../../../utils/validators/validators";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";

const maxLength10 = maxLengthCreator(10)

const MyPosts = (props) => {
	let postsElements = props.posts.map((post) => (
		<Post key={post.id} likes={post.likesCount} message={post.message} id={post.id} />
	));

	let onAddPost = (values) => {
		props.addPost(values.postText);
	};
	return (
		<div className={s.posts}>
			<h3>My posts</h3>
			<br />
			<MyPostsFormRedux onSubmit={onAddPost} />
			{postsElements}
		</div>
	);
};

const MyPostsForm = (props)=> {
	return(
		<form onSubmit={props.handleSubmit}>
			<Field name="postText" placeholder="Write something..." component={TextArea} validate={[required, maxLength10]}/>
			<button>Add post</button>
		</form>
	)
}

const MyPostsFormRedux = reduxForm({form: 'myPosts'})(MyPostsForm)

export default MyPosts;
