const fnValidar10 = () => {

    let xTexto=document.getElementById("txtNombre").value;
    if(xTexto=="" || /^\s+$/.test(xTexto)) {
        alert("Falta Nombre y Apellidos...");
        return false;
    } 

    let xNumero=document.getElementById("txtEdad").value;
    if(xNumero==""){
        alert("Falta Edad...");
        return false;
    }    

    var Pref=document.getElementsByName("chkPrefer[]");
    var contar=0;
    for (var i=0; i < Pref.length; i++){
        if(Pref[i].checked){
            contar++;
        }
    }
    if(contar != 2){
        alert("Elegir 2 opciones... NO (" + contar + ") ");
        return false;
    }

    return true;
}