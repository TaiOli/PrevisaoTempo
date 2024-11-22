import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));

document.title = "Previsão do Tempo";

root.render(
	<React.StrictMode>
		<App />
	</React.StrictMode>,
);

// Se você quiser começar a medir a performance no seu app, passe uma função
// para registrar os resultados (por exemplo: reportWebVitals(console.log))
// ou envie para um endpoint de análise. Saiba mais em: https://bit.ly/CRA-vitals
reportWebVitals();
