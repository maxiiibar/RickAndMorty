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
                <div class="card-personaje">
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
        },"")
        return card
    }
    else{
        const card = data.reduce((acc, element) => {
            return acc + `
                <div class="card-personaje">
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
        },"")
        return card
    }
}

const singlePCard = (element, botonTipo) => {
    if (botonTipo === "boton-favorito"){
        const singleP = `
            <div class="card-personaje">
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
            <div class="card-personaje">
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
                <div class="card-episodio">
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
                <div class="card-episodio">
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
            <div class="card-episodio">
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
            <div class="card-episodio">
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
                <div class="card-locacion">
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
                <div class="card-locacion">
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
            <div class="card-locacion">
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
            <div class="card-locacion">
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
    botonModo.classList.toggle('botonOscuro')
    body.classList.toggle('bodyOscuro')
    navBar.classList.toggle('navOscuro')
    footer.classList.toggle('footerOscuro')
})