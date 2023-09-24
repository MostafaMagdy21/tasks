import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	posts: [],
};

export const PostSlice = createSlice({
	name: "post",
	initialState,
	reducers: {
		// addPost: (state, actions) => void(state.posts.push(actions.payload)),
		addPost: (state, actions) => {
			state.posts.push(actions.payload);
		},
		editePost: (state, action) => {
			console.log(action.payload.id);
			state.posts &&
				state.posts.map((item) => {
					if (item.id === action.payload.id) {
						item.title = action.payload.title;
						item.disc = action.payload.disc;
					}
				});
		},
		deletePost: (state, action) => {
			state.posts = state.posts.filter((item) => item.id !== action.payload);
		},
	},
});

export const { addPost, editePost, deletePost } = PostSlice.actions;
export default PostSlice.reducer;
