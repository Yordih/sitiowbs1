const fnvalidar01=()=>{

    //RESUMEN. Pasos para validar
    //1) Formulario con elemento HTML que tenga namey"id"
    //2) Un evento que desencadene una función con retorno true o false
    //3) Prueba Lógica para verificar si se ha escritoono se escrito

    let xTexto=document.getElementById("txtTexto").value;
    if(xTexto=="" || /^\S+$/.test(xTexto)) {
        alert("Falta TEXTO...");
        return false;
    }    
    
    let xNumero=document.getElementById("txtNumero").value;
    if(xNumero==""){
        alert("Falta NÚMERO...");
        return false;
    }
    /// Caso contrario ///
    return true;
    }