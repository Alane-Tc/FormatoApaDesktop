window.addEventListener("load", function () {
    let fuenteLibro = document.querySelector("#libro")
    let fuenteRevista = document.querySelector("#revista")
    let fuentePeriodico = document.querySelector("#periodico")
    let fuenteEnci = document.querySelector("#enciclopedia")
    let fuenteCapLibro = document.querySelector("#capLibro")
    let fuenteWeb = document.querySelector("#PaginaWeb")

    let libro = () => { window.location = 'pages/fuentelibro.html' }
    let revista = () => { window.location = 'pages/fuenteRevista.html' }
    let periodico = () => { window.location = 'pages/fuentePeriodico.html' }
    let enciclopedia = () => { window.location = 'pages/fuenteEnciclopedia.html' }
    let CapituloLibro = () => { window.location = 'pages/fuenteCapLibro.html' }
    let Web = () => { window.location = 'pages/fuenteWeb.html' }

    fuenteLibro.addEventListener("click", function () { libro(); })
    fuenteRevista.addEventListener("click", function () { revista(); })
    fuentePeriodico.addEventListener("click", function () { periodico(); })
    fuenteEnci.addEventListener("click", function () { enciclopedia(); })
    fuenteCapLibro.addEventListener("click", function () { CapituloLibro(); })
    fuenteWeb.addEventListener("click", function () { Web(); })
})