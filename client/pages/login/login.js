(function () {
	setTimeout(function () {
		console.log($("#Enviar"));
		$("#Enviar").click(function () {
			usrLogin();
		});
		$("#Registrar").click(function () {
			usrRegistro();
		});
	}, 2000);
	function usrLogin() {
		login({ email: $('#Email1').val(), password: $('#Password1').val() }, cbLogin);
	}
	function cbLogin(ex, data) {
		//	if (data.statusCode == 401 || data.statusCode == 400) en caso de que se tenga el error visualizado
		//no es muy usual ya que no se maneja todos los codigos de errores
		if (ex) // en este caso el error no es null es decir siempre retorna un valor, su evaluacion sera tomada para la condicion
			alert("Usuario o Password incorrecto")
		else {
			//location = "http://localhost:3000/success.html"
			console.log(data);
			localStorage.userId = data.userId; //guarda en el objeto del navegador 
			localStorage.accessToken = data.id;
			$("#pages_container").load("/pages/success/success.html");
		}
	}

	function usrRegistro() {
		registro({ email: $('#Email1').val(), password: $('#Password1').val() }, cbRegistro);
	}

	function cbRegistro(ex, data) {
		console.log(data);
				
		//	if (data.statusCode == 401 || data.statusCode == 400) en caso de que se tenga el error visualizado
		//no es muy usual ya que no se maneja todos los codigos de errores
		if (data.error) // en este caso el error no es null es decir siempre retorna un valor, su evaluacion sera tomada para la condicion
			alert(data.responseJSON.error.message)
		else
			//location = "http://localhost:3000/success.html"
			console.log(data);
	}
})();
	
// success: function (data) {
// 				console.log(data);
// 				
// 				//	if (data.statusCode == 401 || data.statusCode == 400) en caso de que se tenga el error visualizado
// 				//no es muy usual ya que no se maneja todos los codigos de errores
// 				if (data.error) // en este caso el error no es null es decir siempre retorna un valor, su evaluacion sera tomada para la condicion
// 					alert("Usuario o Password incorrecto")
// 				else {
// 					//location = "http://localhost:3000/success.html"
// 					console.log(data);
// 					localStorage.userId=data.userId;
// 					localStorage.accessToken=data.id;
// 					$("#pages_container").load("/pages/success/success.html");
// 
// 				}
// 
// 			},
// 			error: function (data) {
// 				//console.log(data);
// 				alert("Usuario o Password incorrecto")
// 			},
// 		});

// success: function (data) {
// 				console.log(data);
// 				
// 				//	if (data.statusCode == 401 || data.statusCode == 400) en caso de que se tenga el error visualizado
// 				//no es muy usual ya que no se maneja todos los codigos de errores
// 				if (data.error) // en este caso el error no es null es decir siempre retorna un valor, su evaluacion sera tomada para la condicion
// 					alert(data.responseJSON.error.message)
// 				else
// 					//location = "http://localhost:3000/success.html"
// 					console.log(data);
// 			},
// 			error: function (data) {
// 				//console.log(data);
// 				alert(data.responseJSON.error.message)
// 			}
// 		});