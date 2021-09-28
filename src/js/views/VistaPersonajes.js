import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { CardPersonaje } from "../component/cardPersonaje";
export const VistaPersonajes = () => {
	const { store, actions } = useContext(Context);
	console.log(store.personajes);
	return (
		<div className="text-center mt-5">
			{store.personajes.map((element, id) => {
				return (
					<>
						<CardPersonaje key={id} personajes={element} />{" "}
					</>
				);
			})}
		</div>
	);
};
