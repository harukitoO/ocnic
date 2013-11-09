
function dati(){
	
	var persona = new Object();
	
	persona.nombre = document.frmcontactos.txtnom.value;
	persona.edad = document.frmcontactos.txted.value;
	persona.correo = document.frmcontactos.txtcorreo.value;
	persona.genero = document.frmcontactos.selgen.value;
	persona.numero = document.frmcontactos.txtnum.value;
	var reg = /[0-9]{1,}/;
		if(reg.test(persona.edad)){
			var reg=/[A-Za-z]/;
			if(reg.test(persona.nombre)){
			  var reg= /^[_a-z0-9-]+(\.[_a-z0-9-]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,3})$/;
 				 if(reg.test(persona.correo)){
	  				 var reg= /^[0-9]{4}-[0-9]{4}$/;
  						if(reg.test(persona.numero)){
	  //parte para el localstorage
	localStorage.pernom = persona.nombre;
	localStorage.pered = persona.edad;
	localStorage.perco = persona.correo;
	localStorage.perge = persona.genero;
	localStorage.pernum = persona.numero;
	
	mostrar(localStorage.pernom, persona.nombre, localStorage.pered, localStorage.perco, localStorage.perge, localStorage.pernum)
  }
  else alert("numero de telefono Incorrecto (1234-1234)");
  }
   else alert("Correo Electronico Incorrecto");
  
  }
   else alert("Nombre Incorrecto");
			}
			else alert("edad incorrecta");
}
 
function mostrar(name, nombre, edad, correo, genero, numero){
	if (genero=="femenino")var nom = "Bienvenida "+nombre;
	else var nom = "Bienvenido "+nombre;
document.writeln("<head>");
document.writeln("<title>--- Contactanos --- Ocnic Life S.A. de C.V.</title>");
document.writeln("<link rel = \"stylesheet\" type = \"text/css\" href = \"../css/style.css\">");
document.writeln("</head>");
document.writeln("<body>");
document.writeln("<table align=\"center\"><tr><td>");
document.writeln("<div class = \"principal\">");
document.writeln("<table><tr><td width = \"25%\"><img src = \"../img/logo.png\" width = \"80%\" height = \"50%\" style = \"border-radius: 10pt;\" />");
document.writeln("</td><td><img id = \"slid1\" src = \"../img/bnnr.gif\"></td><td>");
document.writeln("<a href=\"../Buscador.htm\"><img src=\"../img/btn.jpg\" width = \"80%\" height = \"20%\" style = \"border-radius: 10pt;\" alt=\"ir al buscador\"/><br> ir al buscador</a>");
document.writeln("</td></tr>");
document.writeln("</table></div>");
document.writeln("<div id = \"conmenu\"><ul id = \"menu\">");
document.writeln("<li><a href=\"../index.html\" class=\"menu_left\">Inicio</a></li>");
    document.writeln("<li><a href=\"categ.html\">Ventas</a></li>");
    document.writeln("<li><a href=\"proms.html\">CyberMonday</a></li>");
    document.writeln("<li><a href=\"us.html\" class = \"menu_right\">Contactenos</a></li>");
document.writeln("</ul></div>");
    document.writeln(" <div class= \"principal\" id=\"pro\">");
	document.writeln("<div style=\"color:#FFF; background-color:#999\">");
  	document.writeln("<br><h1> " + nom +"</h1>");
	document.writeln("<br><h2> de ahora en adelante recibiras a tu correo " + correo +" las ultimas noticias sobre los nuevos productos de nuestro sitio</h2>");
	document.writeln("<br><h3> edad: " + edad +"</h3>");
	document.writeln("<br><h3> numero: " + numero +"</h3>");
	document.writeln("<br><h3> genero: " + genero +"</h3>");
	document.writeln("<br><h3> esta informacion solamente sera utilizada con fines de brindarte unicamente las mejores promociones de manera personalizada</h3>");
    document.writeln("</div></div><footer>");
    document.writeln("<hr align=\"center\" color=\"#000\" size=\"2\" />");
 document.writeln("<p>&copy; OCNIC EXCELENS&trade; | Todos los derechos reservados | Lenguaje Interpretado al cliente</p>");
           document.writeln("</footer></td></tr>");
    document.writeln("</table>");
 }
