import React, { Component } from "react";
import { CardVehículos } from "../component/cardVehículos";
export const VistaVehículos = () => {
	return (
		<div className="container">
			<h1>Vehículos</h1>
			<div className="row">
				<CardVehículos />
			</div>
		</div>
	);
};
