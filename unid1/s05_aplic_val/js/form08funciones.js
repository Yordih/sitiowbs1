function verTablas(generoElegido, mtzAlumnos, turnoElegido)
{
    
	contadorTurno=0;
    orden=0;
    res="";

    t01="<table>";
    t01 += "<tr>";
    t01 += "<th class='titulo' colspan='5'>Datos personales"+res+"</th>";
    t01 += "</tr>";
    t01 += "<tr>";
    t01 +="<th>No.</th><th>Turno</th><th>Apellidos y Nombres</th> <th>Foto</th> <th>Género</th>";
    t01 += "</tr>";

    if(mtzAlumnos.length>0){
        for(var i=0 ; i < mtzAlumnos.length; i++){
            turnoMtz = mtzAlumnos[i][3]; // Turno
            mtzGenero=mtzAlumnos[i][4];  // Genero
            
            if(turnoMtz == turnoElegido && mtzGenero == generoElegido){
                orden ++;
                apeNom = mtzAlumnos[i][2] +","+ mtzAlumnos[i][1];
                genero = fnGenero(mtzAlumnos[i][4]);
                turno = fnTurno(mtzAlumnos[i][3]);
                foto = mtzAlumnos[i][0];

                t01 += "<tr>";
                t01 += "<td>"+orden+"</td><td>"+turno+"</td><td>"+apeNom+"</td><td><img src='img/f"+foto+".jpg'></td><td>"+genero+"</td>";
                t01 += "</tr>";
                contadorTurno ++;
            }
        
        }
    } 
    t01 += "</table>";    
    document.getElementById("marco").innerHTML = t01;
    
}

function fnGenero(xGenero){ 
	if(xGenero == "M"){
        return"Masculino";
    }else if(xGenero =="F"){
        return"Femenino";
    } 
}
function fnTurno(xTurno){ 
	if(xTurno == "M"){
        return"Mañana";
    }else if(xTurno =="N"){
        return"Noche";
    } 
}


function borrarMarco(){
	document.getElementById("marco").innerHTML="Resutado borrado ..."

}
