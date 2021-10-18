import React, { useContext } from "react";
import { Context } from "../store/appContext";
import PropTypes from "prop-types";
import { Card, Button } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";
import { VistaVehiculos } from "../views/VistaVehiculos";

export const CardVehiculos = props => {
	const { store, actions } = useContext(Context);
	const params = useParams();
	console.log(props);
	return (
		<div className="col-xs-12 col-sm-6 col-md-4 col-lg-3" style={{ width: "18rem" }}>
			<img
				src="https://static1.abc.es/media/summum/2020/01/03/porsche-nave-2-kxFG--620x349@abc.jpg"
				className="card-img-top"
				alt="..."
			/>
			<div className="card-body">
				<div className="card-body text-warning">
					<h5 className="card-title">{props.vehiculos.name}</h5>
					<Link to={"./VistaVehiculos/" + props.vehiculos.uid}>
						<a href="#" className="btn btn-warning text-dark">
							Leer más
						</a>
					</Link>
					<button
						className="btn btn-outline-warning float-right"
						onClick={() => {
							actions.AgregarAFavoritos(props.vehiculos.name);
							console.log(store.Favoritos);
						}}>
						<i className="fas fa-heart text-warning" />
					</button>
				</div>
			</div>
		</div>
	);
};
CardVehiculos.propTypes = {
	vehiculos: PropTypes.object,
	name: PropTypes.string,

	uid: PropTypes.string
};
