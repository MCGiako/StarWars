import React, { useContext, getActions } from "react";
import { CardFavoritos } from "../component/CardFavoritos";
import { Context } from "../store/appContext";
import { Favoritos1 } from "./views/VistaFavoritos";


export const Favoritos1 = () => {
	const { store, actions } = useContext(Context);
	return (
		<div>
			<h1 className="text-center">Lista Favoritos</h1>
			<CardFavoritos />
		</div>
	);
};
