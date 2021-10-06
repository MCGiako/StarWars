import React, { useContext } from "react";
import { Context } from "../store/appContext";
import PropTypes from "prop-types";
import { Card, Button } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";
import { VistaPlanetas } from "../views/VistaPlanetas";

export const CardPlanetas = props => {
	const { store, actions } = useContext(Context);
	const params = useParams();
	console.log(props);
	return (
		<div className="col-xs-12 col-sm-6 col-md-4 col-lg-3" style={{ width: "18rem" }}>
			<img
				src="https://pm1.narvii.com/6361/c338000011dddc976bc1e960bf83c6a04402b720_hq.jpg"
				className="card-img-top"
				alt="..."
			/>
			<div className="card-body">
				<div className="card-body text-warning">
					<h5 className="card-title">{props.planetas.name}</h5>
					<Link to={"./VistaPlanetas/" + CardPlanetas.uid}>
						<a href="#" className="btn btn-info text-dark">
							Leer más
						</a>
					</Link>
					<button
						className="btn btn-outline-warning float-right"
						onClick={() => {
							actions.AgregarAFavoritos(VistaPlanetas.nombre);
							console.log(store.Favoritos);
						}}>
						<i className="fas fa-heart text-warning" />
					</button>
				</div>
			</div>
		</div>
	);
};
CardPlanetas.propTypes = {
	planetas: PropTypes.object,
	name: PropTypes.string
};
