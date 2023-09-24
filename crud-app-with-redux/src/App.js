import "./App.css";
import Form from "./components/form";

function App() {
	return (
		<div className="App">
			<header className="bg-black p-7">
				<div className="container">
					<h1 className="text-center text-4xl md:text-3xl sm:text-2xl font-bold text-white">
						CRUD APP USING REDUX-TOOLKIT AND TAILWIND
					</h1>
				</div>
			</header>
			<Form />
		</div>
	);
}

export default App;
