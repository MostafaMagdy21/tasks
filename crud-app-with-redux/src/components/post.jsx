import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { editePost, deletePost } from "../redux/reducers/postSlice";

function Post() {
	const [flag, setFlag] = useState(false);
	const [title, setTitle] = useState("");
	const [disc, setDisc] = useState("");
	const [id, setId] = useState(null);
	const dispatch = useDispatch();
	const data = useSelector((post) => post.items.posts);

	return (
		<>
			{data.length &&
				data.map((item) => (
					<div
						className="post border border-gray-200 shadow-md bg-gray-100   rounded-sm w-2/3 p-10"
						key={item.id}
					>
						{flag && item.id === id ? (
							<div>
								<input
									type="text"
									className="border border-gray-300 rounded-sm mr-2 p-2 w-80 shadow-sm focus:ring-1 focus:border-sky-500 focus:outline-none"
									value={title}
									onChange={(e) => setTitle(e.target.value)}
								/>
								<br />
								<input
									type="text"
									className="border border-gray-300 rounded-sm mr-2 p-2 w-80 shadow-sm focus:ring-1 focus:border-sky-500 focus:outline-none mt-3"
									value={disc}
									onChange={(e) => setDisc(e.target.value)}
								/>
							</div>
						) : (
							<>
								<h2 className="post-title font-bold text-lg">{item.title}</h2>
								<p className="post-disc mt-5 pl-5">{item.disc}</p>
							</>
						)}
						{flag && item.id === id ? (
							<button
								className="mt-5 mr-5 py-2 px-4 bg-blue-600 text-white font-semibold shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75 pl-10 pr-10 rounded-sm"
								onClick={() => {
									setFlag(!flag);
									dispatch(editePost({ title, disc, id: item.id }));
								}}
							>
								Save
							</button>
						) : (
							<button
								className="mt-5 mr-5 py-2 px-4 bg-green-600 text-white font-semibold shadow-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-opacity-75 pl-10 pr-10 rounded-sm"
								onClick={() => {
									setFlag(!flag);
									setId(item.id);
								}}
							>
								Edite
							</button>
						)}
						<button
							className="mt-5 py-2 px-4 bg-red-600 text-white font-semibold shadow-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-400 focus:ring-opacity-75 pl-10 pr-10 rounded-sm"
							onClick={() => dispatch(deletePost(item.id))}
						>
							Delete
						</button>
					</div>
				))}
		</>
	);
}

export default Post;
