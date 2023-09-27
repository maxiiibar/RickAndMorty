const agregarAFav = (clase, fav) => {
    const cards = document.querySelectorAll(clase)
    for  ( let i = 0; i < cards.length; i++ ){
        cards[i].onclick = (e) => {
            const id = e.currentTarget.id.slice(4)
            const memoria = JSON.parse(localStorage.getItem(fav))
            if (!memoria){
                localStorage.setItem(fav,JSON.stringify([id]))
                Toastify({
                    text: "Añadido a favoritos",
                    duration: 3000,
                    destination: "favoritos.html",
                    newWindow: false,
                    close: true,
                    gravity: "bottom", // `top` or `bottom`
                    position: "right", // `left`, `center` or `right`
                    stopOnFocus: true, // Prevents dismissing of toast on hover
                    style: {
                      background: "linear-gradient(to right, #00b09b, #96c93d)",
                    },
                    onClick: function(){} // Callback after click
                  }).showToast();
            }
            else{
                const indiceItem = memoria.findIndex( elemento => elemento === id)
                const nuevaMemoria = memoria
                if (indiceItem === -1){
                    nuevaMemoria.push(id)
                    localStorage.setItem(fav,JSON.stringify(nuevaMemoria))
                    Toastify({
                        text: "Añadido a favoritos",
                        duration: 3000,
                        destination: "favoritos.html",
                        newWindow: false,
                        close: true,
                        gravity: "bottom", // `top` or `bottom`
                        position: "right", // `left`, `center` or `right`
                        stopOnFocus: true, // Prevents dismissing of toast on hover
                        style: {
                          background: "linear-gradient(to right, #00b09b, #96c93d)",
                        },
                        onClick: function(){} // Callback after click
                      }).showToast();
                }
                else{
                    Toastify({
                        text: "Ya se encuentra en favoritos",
                        duration: 3000,
                        destination: "favoritos.html",
                        newWindow: false,
                        close: true,
                        gravity: "bottom", // `top` or `bottom`
                        position: "right", // `left`, `center` or `right`
                        stopOnFocus: true, // Prevents dismissing of toast on hover
                        style: {
                          background: "linear-gradient(90deg, rgba(255,76,76,1) 41%, rgba(255,187,91,1) 100%)",
                        },
                      }).showToast();
                }
            }
        }
    }
}

const cardsPersonajes = (data, botonTipo) => {
    if (botonTipo === "boton-favorito"){
        const card = data.reduce((acc, element) => {
            return acc + `
                <div class="card-personaje" id="cardP${element.id}">
                    <div class="imagen-personaje">
                        <img src="${element.image || "imagen-no-disponible.png"}">
                    </div>
                    <div class="contenido-personaje">
                        <h5>${ element.name || "Nombre no disponible"}</h5>
                        <p>Especie: ${element.species || "No disponible"}</p>
                        <p>Genero: ${element.gender || "No disponible"}</p>
                        <p>Estado: ${element.status || "No disponible"}</p>
                    </div>
                    <div class="fav-personaje">
                        <button class="${botonTipo} boton-personaje" id="fav-${element.id}"><i class="fa-solid fa-star fa-lg"></i></button>
                    </div>
                </div>
            `
        },"")
        return card
    }
    else{
        const card = data.reduce((acc, element) => {
            return acc + `
                <div class="card-personaje" id="cardP${element.id}">
                    <div class="imagen-personaje">
                        <img src="${element.image || "imagen-no-disponible.png"}">
                    </div>
                    <div class="contenido-personaje">
                        <h5>${ element.name || "Nombre no disponible"}</h5>
                        <p>Especie: ${element.species || "No disponible"}</p>
                        <p>Genero: ${element.gender || "No disponible"}</p>
                        <p>Estado: ${element.status || "No disponible"}</p>
                    </div>
                    <div class="fav-personaje">
                        <button class="${botonTipo} boton-personaje" id="fav-${element.id}"><i class="fa-solid fa-trash fa-lg"></i></button>
                    </div>
                </div>
            `
        },"")
        return card
    }
}

const singlePCard = (element, botonTipo) => {
    if (botonTipo === "boton-favorito"){
        const singleP = `
            <div class="card-personaje" id="cardP${element.id}">
                <div class="imagen-personaje">
                    <img src="${element.image || "imagen-no-disponible.png"}">
                </div>
                <div class="contenido-personaje">
                    <h5>${ element.name || "Nombre no disponible"}</h5>
                    <p>Especie: ${element.species || "No disponible"}</p>
                    <p>Genero: ${element.genre || "No disponible"}</p>
                    <p>Estado: ${element.status || "No disponible"}</p>
                </div>
                <div class="fav-personaje">
                    <button class="${botonTipo} boton-personaje" id="fav-${element.id}"><i class="fa-solid fa-star fa-lg"></i></button>
                </div>
            </div>
        `
        return singleP
    }
    else{
        const singleP = `
            <div class="card-personaje" id="cardP${element.id}">
                <div class="imagen-personaje">
                    <img src="${element.image || "imagen-no-disponible.png"}">
                </div>
                <div class="contenido-personaje">
                    <h5>${ element.name || "Nombre no disponible"}</h5>
                    <p>Especie: ${element.species || "No disponible"}</p>
                    <p>Genero: ${element.genre || "No disponible"}</p>
                    <p>Estado: ${element.status || "No disponible"}</p>
                </div>
                <div class="fav-personaje">
                    <button class="${botonTipo} boton-personaje" id="fav-${element.id}"><i class="fa-solid fa-trash fa-lg"></i></button>
                </div>
            </div>
        `
        return singleP
    }
}

const cardsEpisodios = (data, botonTipo) => {
    if (botonTipo==="boton-favorito"){
        const card = data.reduce((acc, element) => {
            return acc + `
                <div class="card-episodio" id="cardE${element.id}">
                    <div class="contenido-episodio">
                        <h5>${ element.name || "Nombre no disponible"}</h5>
                        <p>Episodio: ${element.episode || "No disponible"}</p>
                        <p>Fecha de emisión: ${element.air_date || "No disponible"}</p>
                    </div>
                    <div class="fav-episodio">
                        <button class="${botonTipo} boton-episodio" id="fav-${element.id}"><i class="fa-solid fa-star fa-lg"></i></button>
                    </div>
                </div>
            `
        },"")
        return card
    }
    else{
        const card = data.reduce((acc, element) => {
            return acc + `
                <div class="card-episodio" id="cardE${element.id}">
                    <div class="contenido-episodio">
                        <h5>${ element.name || "Nombre no disponible"}</h5>
                        <p>Episodio: ${element.episode || "No disponible"}</p>
                        <p>Fecha de emisión: ${element.air_date || "No disponible"}</p>
                    </div>
                    <div class="fav-episodio">
                        <button class="${botonTipo} boton-episodio" id="fav-${element.id}"><i class="fa-solid fa-trash fa-lg"></i></button>
                    </div>
                </div>
            `
        },"")
        return card
    }
}

const singleECard = (element,botonTipo) => {
    if (botonTipo === "boton-favorito"){
        const singleE = `
            <div class="card-episodio" id="cardE${element.id}">
                <div class="contenido-episodio">
                    <h5>${ element.name || "Nombre no disponible"}</h5>
                    <p>Episodio: ${element.episode || "No disponible"}</p>
                    <p>Fecha de emisión: ${element.air_date || "No disponible"}</p>
                </div>
                <div class="fav-episodio">
                    <button class="${botonTipo} boton-episodio" id="fav-${element.id}"><i class="fa-solid fa-star fa-lg"></i></button>
                </div>
            </div>
        `
        return singleE
    }
    else{
        const singleE = `
            <div class="card-episodio" id="cardE${element.id}">
                <div class="contenido-episodio">
                    <h5>${ element.name || "Nombre no disponible"}</h5>
                    <p>Episodio: ${element.episode || "No disponible"}</p>
                    <p>Fecha de emisión: ${element.air_date || "No disponible"}</p>
                </div>
                <div class="fav-episodio">
                    <button class="${botonTipo} boton-episodio" id="fav-${element.id}"><i class="fa-solid fa-trash fa-lg"></i></button>
                </div>
            </div>
        `
        return singleE
    }
}

const cardsLocaciones = (data, botonTipo) => {
    if (botonTipo==="boton-favorito"){
        const card = data.reduce((acc, element) => {
            return acc + `
                <div class="card-locacion" id="cardL${element.id}">
                    <div class="contenido-locacion">
                        <h5>${ element.name || "Nombre no disponible"}</h5>
                        <p>Tipo: ${element.type || "No disponible"}<p>
                        <p>Dimensión: ${element.dimension || "No disponible"}</p>
                    </div>
                    <div class="fav-locacion">
                        <button class="${botonTipo} boton-locacion" id="fav-${element.id}"><i class="fa-solid fa-star fa-lg"></i></button>
                    </div>
                </div>
            `
        },"")
        return card
    }
    else{
        const card = data.reduce((acc, element) => {
            return acc + `
                <div class="card-locacion" id="cardL${element.id}">
                    <div class="contenido-locacion">
                        <h5>${ element.name || "Nombre no disponible"}</h5>
                        <p>Tipo: ${element.type || "No disponible"}<p>
                        <p>Dimensión: ${element.dimension || "No disponible"}</p>
                    </div>
                    <div class="fav-locacion">
                        <button class="${botonTipo} boton-locacion" id="fav-${element.id}"><i class="fa-solid fa-trash fa-lg"></i></button>
                    </div>
                </div>
            `
        },"")
        return card
    }
}

const singleLCard = (element,botonTipo) => {
    if (botonTipo==="boton-favorito"){
        const singleL = `
            <div class="card-locacion" id="cardL${element.id}">
                <div class="contenido-locacion">
                    <h5>${ element.name || "Nombre no disponible"}</h5>
                    <p>Tipo: ${element.type || "No disponible"}<p>
                    <p>Dimensión: ${element.dimension || "No disponible"}</p>
                </div>
                <div class="fav-locacion">
                    <button class="${botonTipo} boton-locacion" id="fav-${element.id}"><i class="fa-solid fa-star fa-lg"></i></button>
                </div>
            </div>
        `
        return singleL
    }
    else{
        const singleL = `
            <div class="card-locacion" id="cardL${element.id}">
                <div class="contenido-locacion">
                    <h5>${ element.name || "Nombre no disponible"}</h5>
                    <p>Tipo: ${element.type || "No disponible"}<p>
                    <p>Dimensión: ${element.dimension || "No disponible"}</p>
                </div>
                <div class="fav-locacion">
                    <button class="${botonTipo} boton-locacion" id="fav-${element.id}"><i class="fa-solid fa-trash fa-lg"></i></button>
                </div>
            </div>
        `
        return singleL
    }
}

const cardsAHtml = (data, funcion, contenedor, botonTipo) => {
    contenedor.innerHTML = funcion(data, botonTipo)
}

const navBar = document.querySelector("nav")
const body = document.querySelector("body")
const botonModo = document.querySelector("#modoBoton")
const footer = document.querySelector("footer")
botonModo.addEventListener("click",() => {
	const valorB = JSON.parse(localStorage.getItem("tema"))
    botonModo.classList.toggle('botonOscuro')
    body.classList.toggle('bodyOscuro')
    navBar.classList.toggle('navOscuro')
    footer.classList.toggle('footerOscuro')
})

/* const detalleUnica = (clase,objeto) => {
	const claseCard = document.querySelectorAll(clase)
	console.log(claseCard)
	for ( let i = 0; i < claseCard.length; i++){
		claseCard[i].onclick = (e) => {
			const id = e.currentTarget.id.slice(5)
			fetch (`https://rickandmortyapi.com/api/${objeto}/${id}`)
            .then ( res => res.json() )
            .then ( data => {
                console.log(data)
            })
		}
	}
} */

const traerData = (contenedor, memoria,numeroPag) => {
    if (memoria==="personajes"){
        contenedor.innerHTML = `
            <h2>PERSONAJES</h2>
            <div class="contenedor"></div>
        `
        const contenedorPag = document.querySelector(".contenedor")
        fetch (`https://rickandmortyapi.com/api/character/?page=${(numeroPag||1)}`)
        .then ( res => res.json() )
        .then ( data => {
            cardsAHtml(data.results, cardsPersonajes, contenedorPag,"boton-favorito")
            agregarAFav(".boton-personaje","personajes-fav")
        })
        return 42
    }
    else if (memoria==="episodios"){
        contenedor.innerHTML = `
            <h2>EPISODIOS</h2>
            <div class="contenedor"></div>
        `
        const contenedorPag = document.querySelector(".contenedor")
        fetch (`https://rickandmortyapi.com/api/episode/?page=${(numeroPag||1)}`)
        .then ( res => res.json() )
        .then ( data => {
            cardsAHtml(data.results, cardsEpisodios, contenedorPag,"boton-favorito")
            agregarAFav(".boton-episodio","episodios-fav")
        })
        return 3
    }
    else if (memoria==="locaciones"){
        contenedor.innerHTML = `
            <h2>LOCACIONES</h2>
            <div class="contenedor"></div>
        `
        const contenedorPag = document.querySelector(".contenedor")
        fetch (`https://rickandmortyapi.com/api/location/?page=${(numeroPag||1)}`)
        .then ( res => res.json() )
        .then ( data => {
            cardsAHtml(data.results, cardsLocaciones, contenedorPag,"boton-favorito")
            agregarAFav(".boton-locacion","locaciones-fav")
        })
        return 7
    }
}