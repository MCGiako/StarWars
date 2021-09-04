import React, { useContext } from "react";
import { Context } from "../store/appContext";
import PropsTypes from "prop-types";
import { Card, Button } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";

export const CardPersonaje = props => {
	const { store, actions } = useContext(Context);
	return (
		<div className="card" style={{ width: "18rem" }}>
			<img src="..." className="card-img-top" alt="..." />
			<div className="card-body">
				<h5 className="card-title">{props.personajes.name}</h5>
				<p className="card-text" />
				<a href="#" className="btn btn-primary">
					Go somewhere
				</a>
			</div>
		</div>
	);
};
CardPersonaje.propstypes = {
	name: PropsTypes.string
};
