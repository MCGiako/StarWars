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
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},
			loadSomeData: () => {
				/**
					fetch().then().then(data => setStore({ "foo": data.bar }))
                */
				const store = getStore();

				fetch("https://www.swapi.tech/api/people/")
					.then(response => response.json())
					.then(result => {
						setStore({ personajes: result.results });
						console.log(result.results);
					})

					.catch(error => console.log("error", error));

				fetchInformaciónPersonajes: uid => {
					const store = getStore();
					fetch("https://www.swapi.tech/api/people/" + uid)
						.then(response => response.json())
						.then(result => {
							setStore({ InformaciónPersonajes: result.results.properties });
							console.log("InformaciónPersonajes", store.InformaciónPersonajes);
						})
						.catch(error => console.log("error", error));

					fetch("https://www.swapi.tech/api/planets/")
						.then(response => response.json())
						.then(result => {
							setStore({ planetas: result.results });
							console.log(planetas);
						})
						.catch(error => console.log("error", error));

					fetchInformaciónPlanetas: uid => {
						const store = getStore();
						fetch("https://www.swapi.tech/api/planets/" + uid)
							.then(response => response.json())
							.then(result => {
								setStore({ InformaciónPlanetas: result.results.properties });
								console.log("InformaciónPlanetas", store.InformaciónPlanetas);
							})
							.catch(error => console.log("error", error));

						fetch("https://www.swapi.tech/api/vehicles/")
							.then(response => response.json())
							.then(result => {
								setStore({ vehículos: result.results });
								console.log(vehículos);
							})

							.catch(error => console.log("error", error));
					};

					changeColor: (index, color) => {
						//get the store
						const store = getStore();

						//we have to loop the entire demo array to look for the respective index
						//and change its color
						const demo = store.demo.map((elm, i) => {
							if (i === index) elm.background = color;
							return elm;
						});

						//reset the global store
						setStore({ demo: demo });
					};
				};
			}
		}
	};
};

export default getState;
