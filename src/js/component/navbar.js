import React, { useContext } from "react";
import { useEffect, useState } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import { Dropdown } from "react-bootstrap";

export const Navbarfavoritos = () => {
	const { store, actions } = useContext(Context);
	const [Favoritos, EliminarDeFavoritos] = useState([store.Favoritos]);
	useEffect(() => {}, [store.Favoritos]);

	return (
		<>
			<nav className="navbar navbar-light bg-dark">
				<div className="container">
					<Link className="navbar-brand text-warning" to="/">
						Star Wars
					</Link>

					<Dropdown>
						<Dropdown.Toggle>Favoritos</Dropdown.Toggle>

						<Dropdown.Menu>
							{store.Favoritos.map((favorito, key) => {
								return (
									<Dropdown.Item key={key}>
										{favorito}
										<a
											onClick={() => {
												store.Favoritos.splice(key, 1);
												EliminarDeFavoritos([...store.Favoritos]);
												console.log(store.Favoritos);
											}}>
											<i className="fas fa-times-circle"></i>
										</a>
									</Dropdown.Item>
								);
							})}
						</Dropdown.Menu>
					</Dropdown>
				</div>
			</nav>
		</>
	);
};
