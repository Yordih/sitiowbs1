const fnValidar06 = () =>{

    var xCorreo=document.getElementById("txtCorreo").value;
    if(!(/^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i.test(xCorreo))){
        alert("Escribe CORREO valido...");
        return false;
    }
   /// Caso contrario ///
    return true;
    }