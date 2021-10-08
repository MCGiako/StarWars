import React, { useEffect } from "react";
import { useContext } from "react";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const VistaPlanetas = () => {
	const { store, actions } = useContext(Context);
	const VistaPlanetasid = useParams();

	useEffect(() => {
		actions.fetchInformacionPlanetas(VistaPlanetasid.id);
	}, []);

	return (
		<div className="container">
			<h1 className="text-white">Nombre: {store.InformacionPlanetas.name}</h1>
			<h1 className="text-white">Diametro: {store.InformacionPlanetas.diameter}</h1>
			<h1 className="text-white">Población: {store.InformacionPlanetas.population}</h1>
			<h1 className="text-white">Terreno: {store.InformacionPlanetas.terrain}</h1>
			<h1 className="text-white">Gravedad: {store.InformacionPlanetas.gravedad}</h1>
			<h1 className="text-white">Superficie del Agua: {store.InformacionPlanetas.SurfaceWater}</h1>

			<Link to="/">
				<span className="btn btn-primary btn" href="#" role="button">
					Back home
				</span>
			</Link>
		</div>
	);
};
