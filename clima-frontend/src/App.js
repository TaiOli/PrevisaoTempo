import React, { useState } from "react";
import FormPesquisa from "./components/FormPesquisa";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

const App = () => {
	const [clima, setClima] = useState(null);

	const buscarClima = (cidade) => {
		setClima(null);
	};

	return (
		<div className="App">
			<FormPesquisa onSearch={buscarClima} clima={clima} />
		</div>
	);
};

export default App;
