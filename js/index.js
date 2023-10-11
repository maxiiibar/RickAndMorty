const temaPag = JSON.parse(localStorage.getItem("modo"))
if (!temaPag) {
	localStorage.setItem("modo", JSON.stringify("claro"))
}
cambiarTema(temaPag)

const personajes = document.querySelector(".personajes")
const episodios = document.querySelector(".episodios")
const locaciones = document.querySelector(".locaciones")
const mainIndex = document.querySelector("main")
const presentacion = document.querySelector("#presentacion")
const barraBusqueda = document.querySelector("#barraDeBusqueda")
const inputBusqueda = document.querySelector("#input-busqueda")

accionBusqueda(mainIndex, barraBusqueda, inputBusqueda, presentacion)

const pagPersonajes = document.querySelectorAll("#pagPersonajes")
const pagLocaciones = document.querySelectorAll("#pagLocaciones")
const pagEpisodios = document.querySelectorAll("#pagEpisodios")
pagPersonajes.forEach(element => {
	element.onclick = () => {
		localStorage.setItem("categoria", JSON.stringify("personajes"))
	}
})
pagLocaciones.forEach(element => {
	element.onclick = () => {
		localStorage.setItem("categoria", JSON.stringify("locaciones"))
	}
})
pagEpisodios.forEach(element => {
	element.onclick = () => {
		localStorage.setItem("categoria", JSON.stringify("episodios"))
	}
})

fetch(`https://rickandmortyapi.com/api/character`)
	.then(res => res.json())
	.then(data => {
		cardsAHtml(data.results.slice(0, 10), cardsPersonajes, personajes, "boton-favorito")
		agregarAFav(".boton-personaje", "personajes-fav")
		/* detalleUnica(".card-personaje","character") */
	})

fetch(`https://rickandmortyapi.com/api/episode`)
	.then(res => res.json())
	.then(data => {
		cardsAHtml(data.results.slice(0, 6), cardsEpisodios, episodios, "boton-favorito")
		agregarAFav(".boton-episodio", "episodios-fav")
	})

fetch(`https://rickandmortyapi.com/api/location`)
	.then(res => res.json())
	.then(data => {
		cardsAHtml(data.results.slice(0, 6), cardsLocaciones, locaciones, "boton-favorito")
		agregarAFav(".boton-locacion", "locaciones-fav")
	})
