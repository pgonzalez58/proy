(function () {
	setTimeout(function () {
		console.log($("#Enviar"));
		$("#Enviar").click(function () {
			login();
		});
		$("#Registrar").click(function () {
			registro();
		});
	}, 2000);

	function login() {
		$.ajax("/api/Usuarios/login", {  // ruta relativa a las api del modelo LoopBack API Explorer ver Curl
			//$.ajax("http://localhost:3000/login", {
			//data: { Email1: $('#Email1').val(), Password1: $('#Password1').val() },
			//ya data se le pasan dirctamente los parametros definidos en el modelo de la app
			//segun node_modules/loopback/common/models/user.json
			data: { email: $('#Email1').val(), password: $('#Password1').val() },
			method: "POST",
			dataType: 'json',
			success: function (data) {
				console.log(data);
				
				//	if (data.statusCode == 401 || data.statusCode == 400) en caso de que se tenga el error visualizado
				//no es muy usual ya que no se maneja todos los codigos de errores
				if (data.error) // en este caso el error no es null es decir siempre retorna un valor, su evaluacion sera tomada para la condicion
					alert("Usuario o Password incorrecto")
				else {
					//location = "http://localhost:3000/success.html"
					console.log(data);
					localStorage.userId=data.userId;
					localStorage.accessToken=data.id;
					$("#pages_container").load("/pages/success/success.html");

				}

			},
			error: function (data) {
				//console.log(data);
				alert("Usuario o Password incorrecto")
			},
		});
	}
	function registro() {
		$.ajax("/api/Usuarios", {
			data: { email: $('#Email1').val(), password: $('#Password1').val() },
			method: "POST",
			dataType: 'json',
			success: function (data) {
				console.log(data);
				
				//	if (data.statusCode == 401 || data.statusCode == 400) en caso de que se tenga el error visualizado
				//no es muy usual ya que no se maneja todos los codigos de errores
				if (data.error) // en este caso el error no es null es decir siempre retorna un valor, su evaluacion sera tomada para la condicion
					alert(data.responseJSON.error.message)
				else
					//location = "http://localhost:3000/success.html"
					console.log(data);
			},
			error: function (data) {
				//console.log(data);
				alert(data.responseJSON.error.message)
			}
		});
	}


}
	)();
