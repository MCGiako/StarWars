import React, { useContext, useState, useEffect } from "react";
import { Context } from "../store/appContext";
import PropTypes from "prop-types";
import { Card, Button } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";

export const CardFavoritos = props => {
	const { store, actions } = useContext(Context);
	const params = useParams();
	console.log(props);
	return (
		<div className="col-xs-12 col-sm-6 col-md-4 col-lg-3" style={{ width: "18rem" }}>
			<div className="card-body">
				<div className="card-body text-warning">
					<h5 className="card-title">{props.Favoritos.name}</h5>
					<button
						className="btn btn-outline-warning float-right"
						onClick={() => {
							actions.EliminarDeFavoritos(Favoritos);
							console.log(store.Favoritos);
						}}>
					</button>
				</div>
			</div>
		</div>
	);
};
CardFavoritos.propTypes = {
	Favoritos: PropTypes.object,
	name: PropTypes.string
};