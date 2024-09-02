import "./App.css";
import About from "./components/About";
import Contact from "./components/Contact";
import Menu from "./components/Menu";
import Projects from "./components/Projects";
import Shuffler from "./components/Shuffler";

function App() {
	return (
		<>
			<Shuffler />
			<About />
			<Projects />
			<Contact />
			<Menu />
		</>
	);
}

export default App;
