import { FC } from "react";
import TodoList from "./components/todo/TodoList";
import Footer from "./components/footer/Footer";

const App: FC = () => {
	return (
		<>
			<TodoList />
			<Footer/>
		</>
	);
};

export default App;
