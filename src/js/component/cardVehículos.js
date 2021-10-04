import React, { useContext } from "react";
import { Context } from "../store/appContext";
import PropTypes from "prop-types";
import { Card, Button } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";

export const CardVehículos = props => {
	const { store, actions } = useContext(Context);
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
					<h5 className="card-title">{props.vehículos.name}</h5>
					<p className="card-text" />
					<a href="#" className="btn btn-primary">
						Go somewhere
					</a>
				</div>
			</div>
		</div>
	);
};
CardVehículos.propTypes = {
	vehículos: PropTypes.object,
	name: PropTypes.string
};
