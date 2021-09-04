import React, { Component } from "react";
import { CardPlanetas } from "../component/cardPlanetas";
export const VistaPlanetas = () => {
	return (
		<div className="container">
			<h1>Planetas</h1>
			<div className="row">
				<CardPlanetas />
				<CardPlanetas />
				<CardPlanetas />
				<CardPlanetas />
				<CardPlanetas />
				<CardPlanetas />
				<CardPlanetas />
				<CardPlanetas />
				<CardPlanetas />
				<CardPlanetas />
			</div>
		</div>
	);
};
