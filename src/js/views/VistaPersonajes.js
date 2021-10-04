import React, { useEffect } from "react";
import { useContext } from "react";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const VistaPersonajes = () => {
	const { store, actions } = useContext(Context);
	const { VistaPersonajesid } = useParams();

	useEffect(() => {
		actions.fetchInformaciónPersonajes(VistaPersonajesid);
	}, []);

	return (
		<div className="container">
			<h1 className="text-white">Nombre: {store.InformaciónPersonajes.name}</h1>
			<h1 className="text-white">Género: {store.InformaciónPersonajes.gender}</h1>
			<h1 className="text-white">Altura: {store.InformaciónPersonajes.height}</h1>
			<h1 className="text-white">Masa: {store.InformaciónPersonajes.mass}</h1>
			<h1 className="text-white">Color de Pelo: {store.InformaciónPersonajes.hair_color}</h1>
			<h1 className="text-white">Planeta Natal: {store.InformaciónPersonajes.homeworld}</h1>
		</div>
	);
};
