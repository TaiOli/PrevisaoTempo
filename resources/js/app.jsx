import React from "react";
import ReactDOM from "react-dom/client";
import FormPesquisa from "./components/FormPesquisa.jsx";

const root = document.getElementById("app");
if (root) {
	ReactDOM.createRoot(root).render(<FormPesquisa />);
}
