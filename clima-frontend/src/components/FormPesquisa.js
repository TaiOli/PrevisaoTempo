import React, { useState, useEffect } from "react";
import "../App.css";
import TemperatureImage from "../img/Temperature-Now.png";
import ImageVento from "../img/image-1.png";
import ImageUmidade from "../img/image-2.png";
import ImageChuva from "../img/image-3.png";
import ImageLocalizacao from "../img/image-4.png";
import WeatherImage from "../img/weather.png";

const FormPesquisa = () => {
	const [cidade, setCidade] = useState("");
	const [clima, setClima] = useState(null);
	const [debouncedCidade, setDebouncedCidade] = useState("");
	const [erro, setErro] = useState(null);

	useEffect(() => {
		const timer = setTimeout(() => {
			setDebouncedCidade(cidade);
		}, 500);

		return () => clearTimeout(timer);
	}, [cidade]);

	useEffect(() => {
		if (debouncedCidade) {
			RealizarBusca(debouncedCidade);
		} else {
			setClima(null);
			setErro(null);
		}
	}, [debouncedCidade]);

	const RealizarBusca = async (cidade) => {
		try {
			const response = await fetch(
				`http://localhost:8000/api/clima?cidade=${cidade}`,
			);
			if (!response.ok) {
				throw new Error("Erro ao realizar a busca dos dados do clima.");
			}

			const data = await response.json();
			console.log(data); // Verifique o que está sendo retornado

			if (data.error) {
				setErro(data.error);
				setClima(null);
			} else {
				setClima(data);
				setErro(null);
			}
		} catch (error) {
			setErro("Não foi possível obter os dados do clima.");
			setClima(null);
		}
	};

	const AtualizarValor = (e) => {
		setCidade(e.target.value);
	};

	return (
		<div className="container text-center py-4 form-pesquisa-container">
			<div className="d-flex justify-content-center align-items-center flex-column">
				<form className="d-flex flex-column align-items-center">
					<input
						type="text"
						value={cidade}
						onChange={AtualizarValor}
						placeholder="Pesquisar por localidade"
						className="form-control mb-3 input-cidade w-100"
					/>

					<div className="imagem-tempo-container">
						<img
							src={TemperatureImage}
							alt="Imagem de tempo"
							className="mt-3 imagem-tempo img-fluid"
						/>
						<img
							src={WeatherImage}
							alt="Imagem do clima"
							className="imagem-weather img-fluid"
						/>

						{/* Exibe valor da temperatura */}
						<span className="temperatura-no-tempo">
							{clima ? clima.temperatura : "..."}
						</span>

						{/* Exibe descrição da temperatura ou mensagem de erro */}
						<div className="descricao-temperatura">
							{erro ? (
								<div className="erro-mensagem">{erro}</div>
							) : clima ? (
								clima.descricao
							) : (
								" "
							)}
						</div>

						{/* Exibe cidade digitada no input */}
						<div className="cidade-localizacao-container">
							<img
								src={ImageLocalizacao}
								alt="Imagem Localizacao"
								className="imagem-localizacao img-fluid"
							/>
							<span className="cidade-no-tempo">{cidade || "Cidade"}</span>
						</div>
					</div>
				</form>

				<div className="quadrados-container d-flex flex-wrap justify-content-center">
					{/* Quadrado com valor da velocidade do vento */}
					<div className="col-12 col-sm-6 col-md-4 col-lg-3 quadrado">
						<img
							src={ImageVento}
							alt="Imagem do vento"
							className="imagem-vento"
						/>
						<div className="dados-clima-container">
							<h3 className="titulo-vento">Vento</h3>
							<span className="velocidade-vento">
								{clima ? `${clima.velocidadeVento} km/h` : "..."}
							</span>
						</div>
					</div>

					{/* Quadrado com valor da umidade */}
					<div className="col-12 col-sm-6 col-md-4 col-lg-3 quadrado">
						<img
							src={ImageUmidade}
							alt="Imagem da umidade"
							className="imagem-umidade"
						/>
						<div className="dados-clima-container">
							<h3 className="titulo-umidade">Umidade</h3>
							<span className="umidade">
								{clima ? `${clima.umidadeRelativa}%` : "..."}
							</span>
						</div>
					</div>

					{/* Quadrado com valor da chuva */}
					<div className="col-12 col-sm-6 col-md-4 col-lg-3 quadrado">
						<img
							src={ImageChuva}
							alt="Imagem de chuva"
							className="imagem-chuva"
						/>
						<div className="dados-clima-container">
							<h3 className="titulo-chuva">Chuva</h3>
							<span className="chuva">{clima ? `${clima.chuva}%` : "..."}</span>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default FormPesquisa;
