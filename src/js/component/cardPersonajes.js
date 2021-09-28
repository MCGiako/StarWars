import React, { useContext } from "react";
import { Context } from "../store/appContext";
import PropTypes from "prop-types";
import { Card, Button } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";

export const CardPersonajes = props => {
	const { store, actions } = useContext(Context);
	console.log(props);
	return (
		<div className="card" style={{ width: "18rem" }}>
			<img
				src="https://as.com/meristation/imagenes/2019/12/19/noticias/1576748977_381724_1576749029_noticia_normal_recorte1.jpg"
				className="card-img-top"
				alt="..."
			/>
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
CardPersonajes.propTypes = {
	personajes: PropTypes.object,
	name: PropTypes.string
};
