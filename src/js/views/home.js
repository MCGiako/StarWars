import React, { useContext } from "react";
import { Fragment } from "react";
import "../../styles/home.scss";
import { Carrusel } from "../component/Carrusel";
import { Context } from "../store/appContext";
import PropsTypes from "prop-types";
import { CardPersonajes } from "../component/cardPersonajes";
import { CardPlanetas } from "../component/cardPlanetas";
import { CardVehiculos } from "../component/cardVehiculos";

export const Home = () => {
	const { store, actions } = useContext(Context);
	console.log(store.planetas);
	return (
		<>
			<div className="row text-center mt-5">
				{store.personajes.map((element, id) => {
					console.log(element);
					return (
						<>
							<CardPersonajes key={id} personajes={element} />{" "}
						</>
					);
				})}
			</div>
			<div className="row text-center mt-5">
				{store.planetas.map((element, id) => {
					return (
						<>
							<CardPlanetas key={id} planetas={element} />{" "}
						</>
					);
				})}
			</div>

			<div className="row text-center mt-5">
				{store.vehiculos.map((element, id) => {
					return (
						<>
							<CardVehiculos key={id} vehiculos={element} />{" "}
						</>
					);
				})}
			</div>
		</>
	);
};
