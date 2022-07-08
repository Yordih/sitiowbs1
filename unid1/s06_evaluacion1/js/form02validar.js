const fnValidar02 = () => {

    ////// PRIMER ELEMENTO HTML CUADRO TEXTO \\\\\\\\\
   let xTexto=document.getElementById("txtTexto").value;
    if (!/^[a-zA-Z0-9]*$/.test(xTexto) ) {
        alert("Sin espacios en blanco...");
        return false;
    }  
    ///////////////////////////////////////////////////////

    /////////// SEGUNDO ELEMENTO HTML RADIO \\\\\\\\\\\\\\\\\
    let elementGenero=document.getElementsByName ("radGenero");
    let varGenero="";
    let eligioGenero=false;
    for(let i=0;i < elementGenero.length; i++){
        if(elementGenero[i].checked){
            varGenero=elementGenero[i].value;
            eligioGenero=true;
		}
	}

    if(!eligioGenero){
        alert("Elija un Género...");
        return false;
	}else{
        alert("Su género es: " + varGenero);
	} 
    //////////////////////////////////////////////////

    /////////// TERCER ELEMENTO HTML CHECKBOX \\\\\\\\\\\\\\\\\
    let Pref=document.getElementsByName("chkPref[]");
    let contar=0;
    for (var i=0; i < Pref.length; i++){
        if(Pref[i].checked){
            contar++;
        }
    }
    if(contar != 2){
        alert("Elija 2 PREFERENCIAS... ha elegido (" + contar + ") ");
        return false;
    }
    ///////////////////////////////////////////////////////

    return true;
}