const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			personajes: [],
			informacionPersonajes: {},
			planetas: [],
			InformacionPlanetas: {},
			vehiculos: [],
			InformacionVehiculos: {},
			Favoritos: []
		},

		actions: {
			personajes: () => {
				const store = getStore();
				fetch("https://www.swapi.tech/api/people/")
					.then(response => response.json())
					.then(result => {
						setStore({ personajes: result.results });
						console.log(result.results);
					})
					.catch(error => console.log("error", error));
			},

			planetas: () => {
				const store = getStore();
				fetch("https://www.swapi.tech/api/planets/")
					.then(response => response.json())
					.then(result => {
						setStore({ planetas: result.results });
						console.log("planetas", result.results);
					})
					.catch(error => console.log("error", error));
			},

			vehiculos: () => {
				const store = getStore();
				fetch("https://www.swapi.tech/api/vehicles/")
					.then(response => response.json())
					.then(result => {
						setStore({ vehiculos: result.results });
						console.log("vehiculos", result.results);
					})
					.catch(error => console.log("error", error));
			},

			fetchInformacionPersonajes: uid => {
				const store = getStore();
				fetch("https://www.swapi.tech/api/people/" + uid)
					.then(response => response.json())
					.then(result => {
						setStore({ informacionPersonajes: result.result.properties });
						console.log("resultfetch", result);
						console.log(store.informacionPersonajes);
					})
					.catch(error => console.log("error", error));
			},

			fetchInformacionPlanetas: uid => {
				const store = getStore();
				fetch("https://www.swapi.tech/api/planets/" + uid)
					.then(response => response.json())
					.then(result => {
						setStore({ InformacionPlanetas: result.result.properties });
					})
					.catch(error => console.log("error", error));
			},

			fetchInformacionVehiculos: uid => {
				const store = getStore();
				fetch("https://www.swapi.tech/api/vehicles/" + uid)
					.then(response => response.json())
					.then(result => {
						setStore({ InformacionVehiculos: result.result.properties });
					})
					.catch(error => console.log("error", error));
			},

			AgregarAFavoritos: name => {
				const store = getStore();
				setStore({ Favoritos: [...store.Favoritos, name] });
				let valorPreciso = [...new Set(store.Favoritos)];
				setStore({ Favoritos: valorPreciso });
				console.log(store.Favoritos);
			},

			EliminarDeFavoritos: index => {
				const store = getStore();
				console.log(index);
				const NuevaLista = store.Favoritos.filter(key => key !== index);
				setStore({ Favoritos: NuevaLista });
			}
		}
	};
};

export default getState;
