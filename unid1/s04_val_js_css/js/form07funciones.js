const pasarTexto=() =>{
    var xValor=document.getElementById("texto1").value;
    document.getElementById("texto2").value = xValor;
}    
const fnConcatenar=() => {
    var xTextol=document.getElementById("texto1").value;
    var xTexto3=document.getElementById("texto3").value;
    document.getElementById("texto4").value = xTextol + " / " + xTexto3;
}