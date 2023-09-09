import profileReducer, { addPost, deletePost } from "./profileReducer";

let state = {
    posts: [
        { id: 1, message: "hi", likesCount: 12 },
        { id: 2, message: "hi", likesCount: 12 },
    ],
    profile: null,
    status: "",
}

it("length of posts should be incremented", () => {
	let action = addPost("test");
    let newState = profileReducer(state, action);
    expect(newState.posts.length).toBe(5)
});

it("state should be decrement if post deleted", ()=>{
    let action = deletePost(1)
    let newState = profileReducer(state, action)
    expect(newState.posts.length<state.posts.length).toBe(true)
})