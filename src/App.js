import "./app.scss";
import SearchBar from "./components/searchBar/SearchBar";
import BarResult from "./components/barResults/BarResult";
import Map from "./components/map/Map";

function App() {
	return (
		<div className="App">
			<div className="hero"></div>
			<h1 className="title-hero">IP Adress Tracker</h1>
			<SearchBar />
			<BarResult />
			<Map />
		</div>
	);
}

export default App;
