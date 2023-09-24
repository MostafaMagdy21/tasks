import { configureStore } from "@reduxjs/toolkit";
import postSlice from "./reducers/postSlice";
// import postSlice from "./reducers/postSlice";

const store = configureStore({
	reducer: {
		items: postSlice,
	},
});

export default store;
