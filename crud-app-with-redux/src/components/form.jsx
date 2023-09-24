import React from "react";
import { useState } from "react";
import Post from "./post";
import { useDispatch, useSelector } from "react-redux";
import { addPost } from "../redux/reducers/postSlice";

function Form() {
	const [title, setTitle] = useState("");
	const [disc, setDisc] = useState("");
	const dispatch = useDispatch();
	const posts = useSelector((state) => state.items.posts);

	return (
		<div className="text-center pt-10 pb-10">
			<div className="container">
				<div className="form mb-10">
					<input
						type="text"
						placeholder="type the title"
						className="border border-gray-300 rounded-sm mr-2 p-2 w-80 shadow-sm focus:ring-1 focus:border-sky-500 focus:outline-none"
						value={title}
						onChange={(e) => setTitle(e.target.value)}
					/>
					<input
						type="text"
						placeholder="type the discription"
						className="border border-gray-300 rounded-sm mr-2 p-2 w-80 shadow-sm focus:ring-1 focus:border-sky-500 focus:outline-none"
						value={disc}
						onChange={(e) => setDisc(e.target.value)}
					/>
					<button
						className="py-2 px-4 bg-blue-500 text-white font-semibold shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75 pl-10 pr-10 rounded-sm"
						onClick={() => dispatch(addPost({ id: posts.length, title, disc }))}
					>
						Add
					</button>
				</div>
				{posts.length ? (
					<Post />
				) : (
					<h2 className="bg-red-300 text-white">THERE ARE NO POSTS</h2>
				)}
			</div>
		</div>
	);
}

export default Form;
