const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			personajes: [],
			InformaciónPersonajes: {},
			planetas: [],
			InformaciónPlanetas: {},
			vehículos: [],
			InformaciónVehículos: {},
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

			vehículos: () => {
				const store = getStore();
				fetch("https://www.swapi.tech/api/vehicles/")
					.then(response => response.json())
					.then(result => {
						setStore({ vehículos: result.results });
						console.log(vehículos);
					})
					.catch(error => console.log("error", error));
			},

			fetchInformaciónPersonajes: uid => {
				const store = getStore();
				fetch("https://www.swapi.tech/api/people/" + uid)
					.then(response => response.json())
					.then(result => {
						setStore({ InformaciónPersonajes: result.results.properties });
						console.log("InformaciónPersonajes", store.InformaciónPersonajes);
					})
					.catch(error => console.log("error", error));
			},
			fetchInformaciónPlanetas: uid => {
				const store = getStore();
				fetch("https://www.swapi.tech/api/planets/" + uid)
					.then(response => response.json())
					.then(result => {
						setStore({ InformaciónPlanetas: result.results.properties });
						console.log("InformaciónPlanetas", store.InformaciónPlanetas);
					})
					.catch(error => console.log("error", error));
			},
			fetchInformaciónVehículos: uid => {
				const store = getStore();
				fetch("https://www.swapi.tech/api/vehicles/" + uid)
					.then(response => response.json())
					.then(result => {
						setStore({ InformaciónVehículos: result.results.properties });
						console.log("InformaciónVehículos", store.InformaciónVehículos);
					})
					.catch(error => console.log("error", error));
			},

			AgregarAFavoritos: nombre => {
				const store = getStore();
				setStore({ favourites: [...store.Favoritos, nombre] });
				let valorPreciso = [...new Set(store.Favoritos)];
				setStore({ favourites: valorPreciso });
				console.log(store.favourites);
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