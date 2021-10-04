import React, { Component } from "react";
import { Context } from "../store/appContext";
import { CardVehículos } from "../component/cardVehículos";
export const VistaVehículos = () => {
	const { store, actions } = useContext(Context);
	const { VistaVehículosid } = useParams();

	useEffect(() => {
		actions.fetchInformaciónVehículos(VistaVehículosid);
	}, []);

	return (
		<div className="text-center mt-5">
			{store.vehículos.map((element, id) => {
				return (
					<>
						<CardVehículos key={id} vehículos={element} />{" "}
					</>
				);
			})}
		</div>
	);
};
