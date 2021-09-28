import React, { Component } from "react";
import { Context } from "../store/appContext";
import { CardPlanetas } from "../component/cardPlanetas";
export const VistaPlanetas = () => {
	const { store, actions } = useContext(Context);
	console.log(store.planetas);
	return (
		<div className="text-center mt-5">
			{store.planetas.map((element, id) => {
				return (
					<>
						<CardPlanetas key={id} planetas={element} />{" "}
					</>
				);
			})}
		</div>
	);
};
