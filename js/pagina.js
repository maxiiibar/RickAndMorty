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
const seccionPag = document.querySelector(".seccionPagina")

traerData(seccionPag,cat)

const mainPag = document.querySelector(".main-pagina")
const barraBusqueda = document.querySelector("#barraDeBusqueda")
const inputBusqueda = document.querySelector("#input-busqueda")
barraBusqueda.addEventListener("submit",(event)=>{
	event.preventDefault()
	mainPag.innerHTML = `
		<section class="encontrados container">
			<h3>PERSONAJES</h3>
			<div class="boxPersonajes"></div>
		</section>
		<section class="encontrados container">
			<h3>EPISODIOS</h3>
			<div class="boxEpisodios"></div>
		</section>
		<section class="encontrados container">
			<h3>LOCACIONES</h3>
			<div class="boxLocaciones"></div>
		</section>
	`
	const contenedorPersonajes = document.querySelector(".boxPersonajes")
	const contenedorEpisodios = document.querySelector(".boxEpisodios")
	const contenedorLocaciones = document.querySelector(".boxLocaciones")
	fetch (`https://rickandmortyapi.com/api/character/?name=${inputBusqueda.value.toLowerCase()}`)
	.then ( res => res.json() )
	.then ( data => {
		if(data.error){
			contenedorPersonajes.innerHTML = `
            <div class="vacio">
                <p>No se encontraron personajes con este nombre</p>
            </div>  
            `
		}
		else{
			if (data.results.length===1){
				cardsAHtml(data.results[0], singlePCard, contenedorPersonajes,"boton-favorito")
			}
			else{
				cardsAHtml(data.results,cardsPersonajes,contenedorPersonajes,"boton-favorito")
			}
		}
        agregarAFav(".boton-personaje","personajes-fav")
	})
	
	fetch (`https://rickandmortyapi.com/api/episode/?name=${inputBusqueda.value.toLowerCase()}`)
	.then ( res => res.json() )
	.then ( data => {
		if(data.error){
			contenedorEpisodios.innerHTML = `
            <div class="vacio">
                <p>No se encontraron episodios con este nombre</p>
            </div>  
            `
		}
		else{
			if (data.results.length===1){
				cardsAHtml(data.results[0], singleECard, contenedorEpisodios,"boton-favorito")
			}
			else{
				cardsAHtml(data.results,cardsEpisodios,contenedorEpisodios,"boton-favorito")
			}
		}
        agregarAFav(".boton-episodio","episodios-fav")
	})
	
	fetch (`https://rickandmortyapi.com/api/location/?name=${inputBusqueda.value.toLowerCase()}`)
	.then ( res => res.json() )
	.then ( data => {
		if(data.error){
			contenedorLocaciones.innerHTML = `
            <div class="vacio">
                <p>No se encontraron locaciones con este nombre</p>
            </div>  
            `
		}
		else{
			if (data.results.length===1){
				cardsAHtml(data.results[0], singleLCard, contenedorLocaciones,"boton-favorito")
			}
			else{
				cardsAHtml(data.results,cardsLocaciones,contenedorLocaciones,"boton-favorito")
			}
		}
        agregarAFav(".boton-locacion","locaciones-fav")
	})
})

const botonPrev = document.querySelector("#prev")
const botonNext = document.querySelector("#next")
const numeroPag = document.querySelector("#contador")

const revisarPagina = (elemento) => {
	botonPrev.classList.toggle("escondido", elemento.innerHTML==1)
	if(elemento.innerHTML==1){
		botonPrev.disabled=true
	}
	else{
		botonPrev.disabled=false
	}
}
const revisarUltima = (elemento,nro) => {
	botonNext.classList.toggle("escondido", elemento.innerHTML==nro)
	if(elemento.innerHTML==nro){
		botonNext.disabled=true
	}
	else{
		botonNext.disabled=false
	}
}
revisarPagina(numeroPag)
botonNext.onclick = () => {
	const numero = new Number (numeroPag.innerHTML)
	const final = traerData(seccionPag,cat,numero + 1)
	const indice = document.querySelector("#contador")
	indice.innerHTML=`${numero+1}`
	revisarPagina(indice)
	revisarUltima(indice,final)
}
botonPrev.onclick = () => {
	const numero = new Number (numeroPag.innerHTML)
	const final = traerData(seccionPag,cat,numero-1)
	const indice = document.querySelector("#contador")
	indice.innerHTML=`${numero-1}`
	revisarPagina(indice)
	revisarUltima(indice,final)
}