const fnValidar01 =() => {

    var xNumero=document.getElementById("numNumero").value;
    if(!(/^\d{3}$/.test(xNumero))){
        alert("Máximo 3 digitos...");
        return false;
    }  
    return true;
}