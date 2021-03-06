import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";

import { Home } from "./views/home";
import { Demo } from "./views/demo";
import { Single } from "./views/single";
import injectContext from "./store/appContext";

import { Navbarfavoritos } from "./component/navbar";
import { Footer } from "./component/footer";
import { CardPersonajes } from "./component/cardPersonajes";
import { CardPlanetas } from "./component/cardPlanetas";
import { CardVehiculos } from "./component/cardVehiculos";
import { VistaPersonajes } from "./views/VistaPersonajes";
import { VistaPlanetas } from "./views/VistaPlanetas";
import { VistaVehiculos } from "./views/VistaVehiculos";

//create your first component
const Layout = () => {
	//the basename is used when your project is published in a subdirectory and not in the root of the domain
	// you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
	const basename = process.env.BASENAME || "";

	return (
		<div className="d-flex flex-column">
			<BrowserRouter basename={basename}>
				<ScrollToTop>
					<Navbarfavoritos />
					<Switch>
						<Route exact path="/">
							<Home />
						</Route>
						<Route exact path="/VistaPersonajes/:id">
							<VistaPersonajes />
						</Route>
						<Route exact path="/VistaPlanetas/:id">
							<VistaPlanetas />
						</Route>
						<Route exact path="/VistaVehiculos/:id">
							<VistaVehiculos />
						</Route>
						<Route>
							<h1>Not found!</h1>
						</Route>
					</Switch>
					<Footer />
				</ScrollToTop>
			</BrowserRouter>
		</div>
	);
};

export default injectContext(Layout);
