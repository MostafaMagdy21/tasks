import React from "react";
import { Col, Container, Row, Accordion, Button } from "react-bootstrap";

export const Question = ({ allQst, setAllQst, notify }) => {
	const data = JSON.parse(localStorage.getItem("item"));
	const deleteQst = (qstId) => {
		let newArr = allQst.filter((item) => item.id !== qstId);
		setAllQst(newArr);
		localStorage.setItem("item", JSON.stringify(newArr));
	};
	return (
		<div className="qst mt-3">
			<Container>
				<Row>
					<Col>
						{data ? (
							data.map((item) => (
								<Accordion key={item.id} defaultActiveKey="0" className=" mt-3">
									<Accordion.Item eventKey="1">
										<Accordion.Header>
											<div className="m-auto">{item.question}</div>
										</Accordion.Header>
										<Accordion.Body>
											{item.answer}
											<Button
												className="add-botton w-100"
												variant="danger"
												onClick={() => {
													deleteQst(item.id);
													notify("تم حذف السؤال", "success");
												}}
											>
												حذف السؤال
											</Button>
										</Accordion.Body>
									</Accordion.Item>
								</Accordion>
							))
						) : (
							<h2 className="text-center">لا يوجد أسئلة</h2>
						)}
					</Col>
				</Row>
			</Container>
		</div>
	);
};

export default Question;
