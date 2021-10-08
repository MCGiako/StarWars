import React, { useEffect } from "react";
import { useContext } from "react";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const VistaVehiculos = () => {
	const { store, actions } = useContext(Context);
	const VistaVehiculosid = useParams();

	useEffect(() => {
		actions.fetchInformacionVehiculos(VistaVehiculosid.id);
	}, []);

	return (
		<div className="container">
			<h1 className="text-white">Nombre: {store.InformacionVehiculos.name}</h1>
			<h1 className="text-white">Modelo del vehículo: {store.InformacionVehiculos.model}</h1>
			<h1 className="text-white">Clase del vehículo: {store.InformacionVehiculos.vehicle_class}</h1>
			<h1 className="text-white">El fabricante del vehículo: {store.InformacionVehiculos.manufacturer}</h1>
			<h1 className="text-white">Valor del vehículo: {store.InformacionVehiculos.cost_in_credits}</h1>
			<h1 className="text-white">El largo del vehículo: {store.InformacionVehiculos.lenght}</h1>
			<h1 className="text-white">N° de tripulantes: {store.InformacionVehiculos.crew}</h1>
			<h1 className="text-white">N° de pasajeros: {store.InformacionVehiculos.passengers}</h1>
			<h1 className="text-white">Capacidad de carga del vehículo: {store.InformacionVehiculos.cargo_capacity}</h1>

			<Link to="/">
				<span className="btn btn-primary btn" href="#" role="button">
					Back home
				</span>
			</Link>
		</div>
	);
};
