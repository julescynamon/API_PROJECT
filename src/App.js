import "./app.scss";
import SearchBar from "./components/searchBar/SearchBar";
import BarResult from "./components/barResults/BarResult";

function App() {
	return (
		<div className="App">
			<div className="hero"></div>
			<h1 className="title-hero">IP Adress Tracker</h1>
			<SearchBar />
			<BarResult />
		</div>
	);
}

export default App;
