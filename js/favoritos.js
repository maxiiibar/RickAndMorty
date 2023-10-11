let temaPag = JSON.parse(localStorage.getItem("modo"))
cambiarTema(temaPag)

const pagPersonajes = document.querySelector("#pagPersonajes")
const pagLocaciones = document.querySelector("#pagLocaciones")
const pagEpisodios = document.querySelector("#pagEpisodios")

pagPersonajes.onclick = () => { localStorage.setItem("categoria", JSON.stringify("personajes")) }
pagLocaciones.onclick = () => { localStorage.setItem("categoria", JSON.stringify("locaciones")) }
pagEpisodios.onclick = () => { localStorage.setItem("categoria", JSON.stringify("episodios")) }

const personajesFavoritos = document.querySelector(".personajes-favoritos");
const episodiosFavoritos = document.querySelector(".episodios-favoritos");
const locacionesFavoritas = document.querySelector(".locaciones-favoritas");
const mainFav = document.querySelector(".main-favoritos")

const barraBusqueda = document.querySelector("#barraDeBusqueda")
const inputBusqueda = document.querySelector("#input-busqueda")

accionBusqueda(mainFav, barraBusqueda, inputBusqueda)

const eliminarDeFav = (tipo, funcion, funcionSingular, contenedor, claseBoton, storage, botonTipo) => {
    const cards = document.querySelectorAll(claseBoton)
    for (let i = 0; i < cards.length; i++) {
        cards[i].onclick = (e) => {
            const id = e.currentTarget.id.slice(4)
            console.log(id)
            const memoria = JSON.parse(localStorage.getItem(storage))
            const nuevaMemoria = memoria.filter(elemento => elemento !== id)
            localStorage.setItem(storage, JSON.stringify(nuevaMemoria))
            crearCardsFav(tipo, funcion, funcionSingular, contenedor, claseBoton, storage, botonTipo)
        }
    }
}
const crearCardsFav = (tipo, funcion, funcionSingular, contenedor, claseBoton, storage, botonTipo) => {
    const memoriaFav = JSON.parse(localStorage.getItem(storage))
    if (!memoriaFav || memoriaFav.length === 0) {
        if (claseBoton === ".boton-locacion") {
            contenedor.innerHTML = `
                <div class="vacio">
                    <h3 class="textoVacio">No tienes locaciones favoritas. <a id="irALocaciones" href="pagina.html">Añadir</a></h3>
                </div>            
            `
        }
        else if (claseBoton == ".boton-personaje") {
            contenedor.innerHTML = `
            <div class="vacio">
                <h3 class="textoVacio">No tienes personajes favoritos. <a id="irAPersonajes" href="pagina.html">Añadir</a></h3>
            </div>  
            `
        }
        else {
            contenedor.innerHTML = `
            <div class="vacio">
                <h3 class="textoVacio">No tienes episodios favoritos. <a id="irAEpisodios" href="pagina.html">Añadir</a></h3>
            </div>  
            `
        }
    }
    else {
        if (memoriaFav.length === 1) {
            fetch(`https://rickandmortyapi.com/api/${tipo}/${memoriaFav[0]}`)
                .then(res => res.json())
                .then(data => {
                    cardsAHtml(data, funcionSingular, contenedor, botonTipo)
                    eliminarDeFav(tipo, funcion, funcionSingular, contenedor, claseBoton, storage, botonTipo)
                })
        }
        else {
            let ids = memoriaFav.reduce((acc, element) => { return acc + `${element}, ` }, "")
            ids = ids.substring(0, ids.length - 2)
            fetch(`https://rickandmortyapi.com/api/${tipo}/${ids}`)
                .then(res => res.json())
                .then(data => {
                    cardsAHtml(data, funcion, contenedor, botonTipo)
                    eliminarDeFav(tipo, funcion, funcionSingular, contenedor, claseBoton, storage, botonTipo)
                })
        }
    }
}

crearCardsFav("character", cardsPersonajes, singlePCard, personajesFavoritos, ".boton-personaje", "personajes-fav", "boton-eliminar")
crearCardsFav("episode", cardsEpisodios, singleECard, episodiosFavoritos, ".boton-episodio", "episodios-fav", "boton-eliminar")
crearCardsFav("location", cardsLocaciones, singleLCard, locacionesFavoritas, ".boton-locacion", "locaciones-fav", "boton-eliminar")

const añadirE = document.getElementById("irAEpisodios")
const añadirP = document.getElementById("irAPersonajes")
const añadirL = document.getElementById("irALocaciones")

if (añadirE) {
    añadirE.onclick = () => { localStorage.setItem("categoria", JSON.stringify("episodios")) }
}
if (añadirL) {
    añadirL.onclick = () => { localStorage.setItem("categoria", JSON.stringify("locaciones")) }
}
if (añadirP) {
    añadirP.onclick = () => { localStorage.setItem("categoria", JSON.stringify("personajes")) }
}