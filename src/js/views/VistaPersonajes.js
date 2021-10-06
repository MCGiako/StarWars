import React, { useEffect } from "react";
import { useContext } from "react";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const VistaPersonajes = () => {
	const { store, actions } = useContext(Context);
	const VistaPersonajesid = useParams();

	useEffect(() => {
		actions.fetchInformacionPersonajes(VistaPersonajesid.id);
	}, []);

	console.log("informaciónpersonajes", store.informacionPersonajes);

	return (
		<div className="container">
			<h1 className="text-white">Nombre: {store.informacionPersonajes.name}</h1>
			<h1 className="text-white">Género: {store.informacionPersonajes.gender}</h1>
			<h1 className="text-white">Altura: {store.informacionPersonajes.height}</h1>
			<h1 className="text-white">Masa: {store.informacionPersonajes.mass}</h1>
			<h1 className="text-white">Color de Pelo: {store.informacionPersonajes.hair_color}</h1>

			<Link to="/">
				<span className="btn btn-primary btn" href="#" role="button">
					Back home
				</span>
			</Link>
		</div>
	);
};
