import React, { useState } from "react";
import {
	Button,
	Container,
	Form,
	FloatingLabel,
	Row,
	Col,
} from "react-bootstrap";

export const FormInputs = ({ addQst, notify }) => {
	const [qst, setQst] = useState("");
	const [ans, setAns] = useState("");
	const [flag, setFlag] = useState(true);

	const addOneQst = () => {
		if (!qst || !ans) {
			notify("من فضلك ادخل السؤال و الاجابة", "error");
			setFlag(false);
			return;
		}
		addQst(qst, ans);
		setQst("");
		setAns("");
		notify("تم اضافة السؤال بنجاح", "success");
		setFlag(true);
	};
	return (
		<div className="form">
			<Container>
				<Row>
					<Col xl={5}>
						<FloatingLabel
							controlId="floatingInput"
							label="اكتب سؤالك"
							className="mb-3"
						>
							<Form.Control
								value={qst}
								onChange={(e) => setQst(e.target.value)}
								type="text"
								placeholder="اكتب سؤالك"
								className={!flag && "error"}
							/>
						</FloatingLabel>
					</Col>
					<Col xl={5}>
						<FloatingLabel
							controlId="floatingInput"
							label="الاجابة"
							className="mb-3"
						>
							<Form.Control
								value={ans}
								onChange={(e) => setAns(e.target.value)}
								type="text"
								placeholder="الاجابة"
								className={!flag && "error"}
							/>
						</FloatingLabel>
					</Col>
					<Col xl={2}>
						<Button
							className="add-botton w-100"
							variant="primary"
							onClick={addOneQst}
						>
							اضافة سؤال
						</Button>
					</Col>
				</Row>
			</Container>
		</div>
	);
};

export default FormInputs;
