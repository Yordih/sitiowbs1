var alumnos=Array(
	Array("1","Ruben Valeriano","Montoya Luna","M","M"),
	Array("2","Isabel Valeria","Neira Romero","M","F"),
	Array("3","Rodrigo Mario","Romero Quispe","M","M"),
	Array("4","Elena Luz","Luna Marroquin","N","F"),
	Array("5","José María","Lopez Diaz","M","M"),
	Array("6","Erika Bony","Puma Coila","N","F"),
	Array("7","Francisco Asis","Mamani Chuctaya","N","M"),
	Array("8","Josefa Marin","Orozco Huanca","N","F"),
	Array("9","Rosa Tamara","Sarmiento Ylachoque","N","F"),
	Array("10","Richard Madue","Torres Aguilar","M","M"),
	Array("11","Suly Lesli","Rivarrey Quispe","M","F"),
	Array("12","Katia Beatriz","Valencia Chura","N","F"),
	Array("13","Bethy","Morales Llerena","M","F"),
	Array("14","Luis Antonio","Valencia Puma","N","M"),
	Array("15","Rolando Alfredo","Perez Manrique","M","M"),
	Array("16","María Rosario","Monson Flores","M","F"),
	Array("17","Lucero Ebony","Valencia Chura","M","F"),
	Array("18","Gustavo Enrique","Mamani Quispe","M","M")
);
/*
const bucleTabla = (cantidad) => {
    for(var f=0; f < cantidad; f++){
        document.write("<table border='1'>");
            document.write("<tr> <th colspan='6' class='titulo'>Datos Personales<th> </tr>");
            document.write("<tr> <td id='tdIzq'>Nombres y Apellidos</td><td id='tdDer'></td></tr>");
			document.write("<tr> <td id='tdIzq'>Turno</td><td id='tdDer'></td> </tr>");
			document.write("<tr> <td id='tdIzq'>Genero</td><td id='tdDer'></td> </tr>");
            document.write("<tr>");
             for(var c=0; c< 3; c++){
                 document.write("<td>"+alumnos[f][c]+"</td>");
			 }	 
            document.write("</tr>");
        document.write("</table> <br>");
			}
	}
*/



function fnGenerarTabla(res,num,nom,ape,tur,gen)
{
	
}
	

function fnTurno(turno)
{
	/// Sentencia SWITCH para comparar el valor "M" y "N" de cada case con el array "alumnos"
	switch(turno)
     {       
         
         case 'M': return "Dia";break;
         case 'N': return "Noche";break;
         default:  return "???";break;
     }
}

function fnGenero(genero)
{
	switch(genero)
     {
                  
         case 'M': return "Masculino";break;
         case 'F': return "Femenino";break;
         default:  return "???";break;
     }
} 

/*
let principal = document.getElementById('cont-princ');

animal = new Array();


photo[0]=['img/f1.jpg'],
photo[1]=['img/f2.jpg'],
photo[2]=['img/f3.jpg'],
photo[3]=['img/f4.jpg'],
photo[4]=['img/f5.jpg'],
photo[5]=['img/f6.jpg'],
photo[6]=['img/f7.jpg'],
photo[7]=['img/f8.jpg'],
photo[8]=['img/f9.jpg'],
photo[9]=['img/f10.jpg'],
photo[10]=['img/f11.jpg'],
photo[11]=['img/f12.jpg'],
photo[12]=['img/f13.jpg'],
photo[13]=['img/f14.jpg'],
photo[14]=['img/f15.jpg'],
photo[15]=['img/f16.jpg'],
photo[16]=['img/f17.jpg'],
photo[17]=['img/f18.jpg'];


if(principal){
for(i=0;i<photo.length;i++){

    let creaDiv=document.createElement('div');
    let creaing=document.createElement('img');

    creaDiv.setAttribute('class','foto');
    creaDiv.innerHTML=photo[1][1];
    creaing.setAttribute("src",photo[i][0])
    principal.appendChild(creaDiv);
    principal.appendChild(creaing);
}
}
*/