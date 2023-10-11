const temaPag = JSON.parse(localStorage.getItem("modo"))
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

const mainCont = document.querySelector(".main-contacto")

const barraBusqueda = document.querySelector("#barraDeBusqueda")
const inputBusqueda = document.querySelector("#input-busqueda")
const footer = document.querySelector("footer")

accionBusqueda(mainCont, barraBusqueda, inputBusqueda, null, footer)

const inputMail = document.querySelector("#input-mail")
const inputNombre = document.querySelector("#input-nombre")
const inputApellido = document.querySelector("#input-apellido")
const mensajeError = document.querySelector("#mensajeError")
const mensajeValido = document.querySelector("#mensajeValido")
const formulario = document.querySelector(".formCon")
const botonSubmit = document.querySelector("submit-form")

let habilitado = false

inputMail.addEventListener("input", (() => {
    const arroba = inputMail.value.indexOf('@')
    if (arroba === -1) {
        mensajeError.classList.remove("hidden")
        mensajeValido.classList.add("hidden")
        habilitado = false
    }
    else {
        const str = inputMail.value.slice(0, arroba)
        if (str.length < 3) {
            mensajeError.classList.remove("hidden")
            mensajeValido.classList.add("hidden")
            habilitado = false
        }
        else {
            mensajeError.classList.add("hidden")
            mensajeValido.classList.remove("hidden")
            habilitado = true
        }
    }
}))


formulario.addEventListener("submit", (event) => {
    event.preventDefault()
    if (habilitado && inputNombre.value !== "" && inputApellido.value !== "") {
        Swal.fire({
            icon: 'success',
            title: 'Perfecto',
            text: 'Te registraste con éxito',
            showConfirmButton: false,
        })
    }
    else {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Algo ha ido mal!',
            showConfirmButton: false,
        })
    }
})


