sails new project //crea un proyecto nuevo ewn sailñs
sails lift  //ejecuta el servidor
npom i


CARPETAS DEL PROYECTO
	COntrollers
	models //informacion de la aplicacion 
	policies //controla los accesos de usuarios de la aplicacion 
	response 
	service 


CArpetas 
	Assets //estilos de la pagina web 
	Config 
		env //claves para conectarnos de manera remota
		locales //Json para tyraducir la ppagina web
		local.js //define el puerto de la aplicacion
		cors.js //manejo de solicitudes CORS
		golbals.js //definimos las var globales 
		http.js // especificamos detalles del servidor http
		connections.js //admiistra conecciones de BD 

	modules
		carga las dependencias del package JSON






NOTAS
*****************************
routes.js se usa para inyectar los ficheros guardados en views


GENERAR MODELO Y CONTROLADOR
***********************
en consola
sails generate api nom_api // genera los archivos para el modelo 



En el modelo ser hace un obj JSON  y se especifgican los tipos de 
datos a usar son:
 string, text, integer, float, date, datetime, boolean, binary, 
array, json, email.

En el obj JSON tienes una funcion this.toObject()
que retorna un objeto del JSON























