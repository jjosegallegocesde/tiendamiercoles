//controlando etiquetas

//1. crear una variable para guardar una etiqueta
let etiquetaTitulo = document.getElementById("titulo")
console.log(etiquetaTitulo)

//2. como modifcar el texto de una etiqueta
etiquetaTitulo.textContent="rojo vos no existis"

//controlando el menu
let etiqutaMenu = document.getElementById("menu")
etiqutaMenu.textContent="Batman DC"

//controlando una foto
let etiquetaFoto=document.getElementById("fotobatman")
etiquetaFoto.src="img/batman2.png"

//cambiar el estilo de la etiqueta
etiquetaTitulo.classList.add("text-center")
etiquetaTitulo.classList.add("text-danger")