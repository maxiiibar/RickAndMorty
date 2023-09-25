const pagPersonajes = document.querySelectorAll("#pagPersonajes")
const pagLocaciones = document.querySelectorAll("#pagLocaciones")
const pagEpisodios = document.querySelectorAll("#pagEpisodios")
pagPersonajes.forEach( element => {
	element.onclick = () => {
		localStorage.setItem("categoria",JSON.stringify("personajes"))
	}
})
pagLocaciones.forEach( element => {
	element.onclick = () => {
		localStorage.setItem("categoria",JSON.stringify("locaciones"))
	}
})
pagEpisodios.forEach( element => {
	element.onclick = () => {
		localStorage.setItem("categoria",JSON.stringify("episodios"))
	}
})

const cat = JSON.parse(localStorage.getItem("categoria"))
console.log(cat)
const seccionPag = document.querySelector(".seccionPagina")
if (cat==="personajes"){
    seccionPag.innerHTML = `
        <h2>PERSONAJES</h2>
        <div class="contenedor"></div>
    `
    const contenedorPag = document.querySelector(".contenedor")
    fetch (`https://rickandmortyapi.com/api/character`)
    .then ( res => res.json() )
    .then ( data => {
        console.log(data)
        cardsAHtml(data.results, cardsPersonajes, contenedorPag,"boton-favorito")
        agregarAFav(".boton-personaje","personajes-fav")
    })
}
else if (cat==="episodios"){
    seccionPag.innerHTML = `
        <h2>EPISODIOS</h2>
        <div class="contenedor"></div>
    `
    const contenedorPag = document.querySelector(".contenedor")
    fetch (`https://rickandmortyapi.com/api/episode`)
    .then ( res => res.json() )
    .then ( data => {
        cardsAHtml(data.results, cardsEpisodios, contenedorPag,"boton-favorito")
        agregarAFav(".boton-episodio","episodios-fav")
    })
}
else if (cat==="locaciones"){
    seccionPag.innerHTML = `
        <h2>LOCACIONES</h2>
        <div class="contenedor"></div>
    `
    const contenedorPag = document.querySelector(".contenedor")
    fetch (`https://rickandmortyapi.com/api/location`)
    .then ( res => res.json() )
    .then ( data => {
        cardsAHtml(data.results, cardsLocaciones, contenedorPag,"boton-favorito")
        agregarAFav(".boton-locacion","locaciones-fav")
    })
}