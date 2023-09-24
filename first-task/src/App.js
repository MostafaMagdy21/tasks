import React, { useState } from "react";
import "./app.css";
import Header from "./component/Header";
import FormInputs from "./component/Form";
import Question from "./component/Question";
import { Button, Container } from "react-bootstrap";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
	const [allQst, setAllQst] = useState([]);

	// add question
	const addQst = (qst, ans) => {
		const idRandom = Math.floor(Math.random() * 1000);
		setAllQst([...allQst, { id: idRandom, question: qst, answer: ans }]);
		localStorage.setItem(
			"item",
			JSON.stringify([...allQst, { id: idRandom, question: qst, answer: ans }])
		);
	};

	// for notification
	const notify = (msg, type) => {
		if (type === "success") {
			toast.success(msg);
		} else if (type === "error") {
			toast.error(msg);
		}
	};

	return (
		<div className="app" lang="ar" dir="rtl">
			<Header />
			<FormInputs addQst={addQst} notify={notify} />
			<Question allQst={allQst} setAllQst={setAllQst} notify={notify} />
			<Container>
				<Button
					variant="secondary"
					size="lg"
					className="w-100 mt-3"
					onClick={() => {
						setAllQst([]);
						localStorage.removeItem("item");
						notify("تم حذف جميع الاسئلة", "success");
					}}
				>
					جذف جميع الاسئلة
				</Button>
				<ToastContainer />
			</Container>
		</div>
	);
};

export default App;
