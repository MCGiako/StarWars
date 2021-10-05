import React, { useEffect } from "react";
import { useContext } from "react";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const VistaVehículos = () => {
	const { store, actions } = useContext(Context);
	const { VistaVehículosid } = useParams();

	useEffect(() => {
		actions.fetchInformaciónVehículos(VistaVehículosid);
	}, []);

	return (
		<div className="container">
			<h1 className="text-white">Nombre: {store.InformaciónVehículos.name}</h1>
			<h1 className="text-white">Modelo del vehículo: {store.InformaciónVehículos.model}</h1>
			<h1 className="text-white">Clase del vehículo: {store.InformaciónVehículos.vehicle_class}</h1>
			<h1 className="text-white">El fabricante del vehículo: {store.InformaciónVehículos.manufacturer}</h1>
			<h1 className="text-white">Valor del vehículo: {store.InformaciónVehículos.cost_in_credits}</h1>
			<h1 className="text-white">El largo del vehículo: {store.InformaciónVehículos.lenght}</h1>
			<h1 className="text-white">N° de tripulantes: {store.InformaciónVehículos.crew}</h1>
			<h1 className="text-white">N° de pasajeros: {store.InformaciónVehículos.passengers}</h1>
			<h1 className="text-white">Capacidad de carga del vehículo: {store.InformaciónVehículos.cargo_capacity}</h1>

			<Link to="/">
				<span className="btn btn-primary btn" href="#" role="button">
					Back home
				</span>
			</Link>
		</div>
	);
};
