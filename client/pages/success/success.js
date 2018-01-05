/* global localStorage */
(function () {
	$("#updatedata").click(function () {
		updateUserData();
	});

	getUserData();

	function getUserData() {
		$.ajax("/api/Usuarios/" + localStorage.userId, {  // ruta relativa a las api del modelo LoopBack API Explorer ver Curl
			//$.ajax("http://localhost:3000/login", {
			//data: { Email1: $('#Email1').val(), Password1: $('#Password1').val() },
			//ya data se le pasan dirctamente los parametros definidos en el modelo de la app
			//segun node_modules/loopback/common/models/user.json
			data: { id: localStorage.userId }, //preguntar por data
			method: "GET",
			dataType: 'json',
			beforeSend: function (request) {
				request.setRequestHeader("Authorization", localStorage.accessToken)
			},
			success: function (data) {
				console.log(data);
				$("#showData").html(data);
				//	if (data.statusCode == 401 || data.statusCode == 400) en caso de que se tenga el error visualizado
				//no es muy usual ya que no se maneja todos los codigos de errores
				if (data.error) // en este caso el error no es null es decir siempre retorna un valor, su evaluacion sera tomada para la condicion
					alert("Usuario o Password incorrecto")
				else {
					//location = "http://localhost:3000/success.html"
					console.log(data);

					$("#showData").html(data.email);
					$("#Nombre1").val(data.nombre);
					$("#Apellido1").val(data.apellido);
					$("#fechaNacimiento1").val(data.fechaNacimiento);
					$("#Direccion1").val(data.direccion);
				}
			},
			error: function (data) {
				//console.log(data);
				alert("Usuario o Password incorrecto")
			},
		});
	}

	function updateUserData() {
		$.ajax("/api/Usuarios/updateProfile/" + localStorage.userId, {  // ruta relativa a las api del modelo LoopBack API Explorer ver Curl
			//$.ajax("http://localhost:3000/login", {
			//data: { Email1: $('#Email1').val(), Password1: $('#Password1').val() },
			//ya data se le pasan dirctamente los parametros definidos en el modelo de la app
			//segun node_modules/loopback/common/models/user.json
			data: JSON.stringify({ nombre: $('#Nombre1').val(), apellido: $('#Apellido1').val(), fechaNacimiento: $('#fechaNacimiento1').val()
			 	,direccion: $('#Direccion1').val() }), //preguntar por data
			//data: JSON.stringify({ nombre: "Nombre de Prueba", apellido: "ApellidoP", fechaNacimiento: new Date(), direccion: "El Vigia" }), //preguntar por data)
			method: "POST",
			dataType: 'json',
			contentType: "application/json",
			beforeSend: function (request) {
				request.setRequestHeader("Authorization", localStorage.accessToken)
			},
			success: function (data) {
				console.log(data);
				$("#showData").html(data);
				//	if (data.statusCode == 401 || data.statusCode == 400) en caso de que se tenga el error visualizado
				//no es muy usual ya que no se maneja todos los codigos de errores
				if (data.error) // en este caso el error no es null es decir siempre retorna un valor, su evaluacion sera tomada para la condicion
					alert("Usuario o Password incorrecto")
				else {
					//location = "http://localhost:3000/success.html"
					console.log(data);

					$("#showData").html(data.email);
					// enviar los datos para el formulario de consulta
				}
			},
			error: function (data) {
				//console.log(data);
				alert("Usuario o Password incorrecto")
			},
		});
	}


}
	)();
