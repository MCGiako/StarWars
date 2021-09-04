const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			personajes: [],
			planetas: [],
			vehículos: []
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
						console.log(personajes);
					})

					.catch(error => console.log("error", error));

				fetch("https://swapi.tech/api/planets/")
					.then(response => response.json())
					.then(result => {
						setStore({ planetas: result.results });
						console.log(planetas);
					})

					.catch(error => console.log("error", error));

				fetch("https://swapi.tech/api/vehicles/")
					.then(response => response.json())
					.then(result => {
						setStore({ vehículos: result.results });
						console.log(vehículos);
					})

					.catch(error => console.log("error", error));
			}
		},

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
		}
	};
};

export default getState;
