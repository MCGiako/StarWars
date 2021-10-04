import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { CardPersonajes } from "../component/cardPersonajes";
import { Card, Button } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";

export const VistaPersonajes = () => {
	const { store, actions } = useContext(Context);
	console.log(store.personajes);
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
