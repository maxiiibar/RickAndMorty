let temaPag = JSON.parse(localStorage.getItem("modo"))
cambiarTema(temaPag)

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

const cat = JSON.parse(localStorage.getItem("categoria"))
const seccionPag = document.querySelector(".seccionPagina")

traerData(seccionPag, cat)

const mainPag = document.querySelector(".main-pagina")
const barraBusqueda = document.querySelector("#barraDeBusqueda")
const inputBusqueda = document.querySelector("#input-busqueda")

accionBusqueda(mainPag, barraBusqueda, inputBusqueda)

temaPag = JSON.parse(localStorage.getItem("modo"))
cambiarTema(temaPag)

const botonPrev = document.querySelector("#prev")
const botonNext = document.querySelector("#next")
const numeroPag = document.querySelector("#contador")

const revisarPagina = (elemento) => {
	temaPag = JSON.parse(localStorage.getItem("modo"))
	if (temaPag == "oscuro") {
		botonPrev.classList.toggle("escondidoO", elemento.innerHTML == 1)
	}
	else {
		botonPrev.classList.toggle("escondido", elemento.innerHTML == 1)
	}
	if (elemento.innerHTML == 1) {
		botonPrev.disabled = true
	}
	else {
		botonPrev.disabled = false
	}
}
const revisarUltima = (elemento, nro) => {
	temaPag = JSON.parse(localStorage.getItem("modo"))
	if (temaPag == "oscuro") {
		botonNext.classList.toggle("escondidoO", elemento.innerHTML == nro)
	}
	else {
		botonNext.classList.toggle("escondido", elemento.innerHTML == nro)
	}
	if (elemento.innerHTML == nro) {
		botonNext.disabled = true
	}
	else {
		botonNext.disabled = false
	}
}
revisarPagina(numeroPag)
botonNext.onclick = () => {
	const numero = new Number(numeroPag.innerHTML)
	const final = traerData(seccionPag, cat, numero + 1)
	temaPag = JSON.parse(localStorage.getItem("modo"))
    cambiarTema(temaPag)
	const indice = document.querySelector("#contador")
	indice.innerHTML = `${numero + 1}`
	revisarPagina(indice)
	revisarUltima(indice, final)
}
botonPrev.onclick = () => {
	const numero = new Number(numeroPag.innerHTML)
	const final = traerData(seccionPag, cat, numero - 1)
	temaPag = JSON.parse(localStorage.getItem("modo"))
    cambiarTema(temaPag)
	const indice = document.querySelector("#contador")
	indice.innerHTML = `${numero - 1}`
	revisarPagina(indice)
	revisarUltima(indice, final)
}