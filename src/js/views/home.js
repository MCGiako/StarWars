import React, { useContext } from "react";
import { Fragment } from "react";
import "../../styles/home.scss";
import { Carrusel } from "../component/Carrusel";
import { Context } from "../store/appContext";
import PropsTypes from "prop-types";
import { CardPersonajes } from "../component/cardPersonajes";

export const Home = () => {
	const { store, actions } = useContext(Context);
	return (
		<div className="text-center mt-5">
			{store.personajes.map((element, id) => {
				return (
					<>
						<CardPersonajes key={id} personajes={element} />{" "}
					</>
				);
			})}
		</div>
	);
};
