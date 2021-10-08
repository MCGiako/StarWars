import React, { useContext, useState, useEffect } from "react";
import { Context } from "../store/appContext";
import PropTypes from "prop-types";
import { Card, Button } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";
import { VistaPersonajes } from "../views/VistaPersonajes";

export const CardPersonajes = props => {
	const { store, actions } = useContext(Context);
	const params = useParams();
	console.log(props);
	return (
		<div className="col-xs-12 col-sm-6 col-md-4 col-lg-3" style={{ width: "18rem" }}>
			<img
				src="https://i2.wp.com/codigoespagueti.com/wp-content/uploads/2021/03/mace-windu-y-yoda-star-wars-quien-era-mas-pdoeroso.jpg?fit=1280%2C720&quality=80&ssl=1"
				className="card-img-top"
				alt="..."
			/>
			<div className="card-body">
				<div className="card-body text-warning">
					<h5 className="card-title">{props.personajes.name}</h5>
					<Link to={"./VistaPersonajes/" + props.personajes.uid}>
						<a href="#" className="btn btn-info text-dark">
							Leer más
						</a>
					</Link>
					<button
						className="btn btn-outline-warning float-right"
						onClick={() => {
							actions.AgregarAFavoritos(VistaPersonajes.name);
							console.log(store.Favoritos);
						}}>
						<i className="fas fa-heart text-warning" />
					</button>
				</div>
			</div>
		</div>
	);
};
CardPersonajes.propTypes = {
	personajes: PropTypes.object,
	name: PropTypes.string,

	uid: PropTypes.string
};
