
function datos() {
	localStorage.pronom2 = localStorage.pronom;
	localStorage.procat2 = localStorage.procat;
	localStorage.prodes2 = localStorage.prodes;
	localStorage.prosrc2 = localStorage.prosrc;
	localStorage.propre2 = localStorage.propre;
	
	var nombre = document.frm.txtnom.value;
	var des = document.frm.textito.value;
	var cat = document.frm.cat.value;
	var pre = document.frm.pre.value;
	
	var reg = /[A-Za-z]/;
	var regu = /^[0-9]{1,}\.[0-9]{2}$/;

		if(reg.test(nombre) && regu.test(pre)){
	
	if (cat == "hardware")var src = "img/pcs.jpg";
	else if (cat == "android market")var src = "img/app.jpg";
	else if (cat == "software")var src = "img/soft.jpg"
	else if (cat == "gadgets")var src = "img/gad.jpg"

localStorage.pronom = nombre;
localStorage.prodes = des;
localStorage.procat = cat;
localStorage.prosrc = src;
localStorage.propre = pre;
alert("datos agregados con exito");

}

else alert("nombre incorrecto datos incorectos");

}
	
function show (nom1, cat1, des1, src1, nom2, cat2, des2, src2, pre1, pre2)
{
document.writeln("<head>");
document.writeln("<title>--- Nuevos --- Ocnic Life S.A. de C.V.</title>");
document.writeln("<link rel = \"stylesheet\" type = \"text/css\" href = \"css/style.css\">");
document.writeln("</head><body>");
document.writeln("<table align=\"center\"><tr><td>");
document.writeln("<div class = \"principal\">");
document.writeln("<table><tr><td width = \"25%\"><img src = \"img/logo.png\" width = \"80%\" height = \"50%\" style = \"border-radius: 10pt;\" />");
document.writeln("</td><td><img id = \"slid1\" src = \"img/bnnr.gif\"></td><td>");
document.writeln("<a href=\"Buscador.htm\"><img src=\"img/btn.jpg\" width = \"80%\" height = \"20%\" style = \"border-radius: 10pt;\" alt=\"ir al buscador\"/><br> ir al buscador</a>");
document.writeln("</td></tr>");
document.writeln("</table></div>");
document.writeln("<div id = \"conmenu\"><ul id = \"menu\">");
document.writeln("<li><a href=\"index.html\" class=\"menu_left\">Inicio</a></li>");
    document.writeln("<li><a href=\"paginas/categ.html\">Ventas</a></li>");
    document.writeln("<li><a href=\"paginas/proms.html\">CyberMonday</a></li>");
    document.writeln("<li><a href=\"paginas/us.html\" class = \"menu_right\">Contactenos</a></li></ul></div>");
    document.writeln(" <div class= \"principal\" id=\"pro\">");
	
	document.writeln(" <table align=\"center\" id=\"prods\">");
    document.writeln("<tr><td class = \"nombre\">"); 
	document.writeln("<H3>"+nom1+"</H3></td></tr>");
    document.writeln("<tr ><td class=\"imagen\"><center><img src="+src1+" width=\"100%\"></center></td></tr>");
    document.writeln("<tr><td class=\"descrip\"><H3>Categoria:"+cat1+"</H3>");
    document.writeln("<br> descripcion: "+des1+"<br> precio: $"+ pre1); 
document.writeln(" </p><hr align=\"center\" color=\"#CCC\" size=\"1\"><p id=\"ver\"><a href=\"#\">Comprar</a></td></tr></table>");
	document.writeln(" <table align=\"center\" id=\"prods\">");
    document.writeln("<tr><td class = \"nombre\">"); 
	document.writeln("<H3>"+nom2+"</H3></td></tr>");
    document.writeln("<tr ><td class=\"imagen\"><center><img src="+src2+" width=\"100%\"></center></td></tr>");
    document.writeln("<tr><td class=\"descrip\"><H3>Categoria:"+cat2+"</H3>");
    document.writeln("<br> descripcion: "+des2+"<br> precio: $"+ pre2); 
document.writeln(" </p><hr align=\"center\" color=\"#CCC\" size=\"1\"><p id=\"ver\"><a href=\"#\">Comprar</a></td></tr></table>");
    document.writeln(" </div></td></tr></table>");
    document.writeln("</div><footer>");
    document.writeln("<hr align=\"center\" color=\"#000\" size=\"2\" />");
 document.writeln("<p>&copy; OCNIC EXCELENS&trade; | Todos los derechos reservados | Lenguaje Interpretado al cliente</p>");
           document.writeln("</footer></td></tr></table>");	
}