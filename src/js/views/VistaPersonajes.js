import React, { Component } from "react";
import { CardPersonaje } from "../component/cardPersonaje";
export const VistaPersonajes = () => {
	return (
		<div className="container">
			<h1>Personajes</h1>
			<div className="row">
				<CardPersonaje />
				<CardPersonaje />
				<CardPersonaje />
				<CardPersonaje />
				<CardPersonaje />
				<CardPersonaje />
				<CardPersonaje />
				<CardPersonaje />
				<CardPersonaje />
				<CardPersonaje />
			</div>
		</div>
	);
};
