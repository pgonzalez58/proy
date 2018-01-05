//(function () {

	function login(credentials,cb) {
		$.ajax("/api/Usuarios/login", {  // ruta relativa a las api del modelo LoopBack API Explorer ver Curl
			//$.ajax("http://localhost:3000/login", {
			//data: { Email1: $('#Email1').val(), Password1: $('#Password1').val() },
			//ya data se le pasan dirctamente los parametros definidos en el modelo de la app
			//segun node_modules/loopback/common/models/user.json
			data: credentials,
			method: "POST",
			dataType: 'json',
			success: function (data) {
				cb(null,data);

			},
			error: function (ex) {
				cb(ex);
			},
		});
	}
	function registro(credentials,cb) {
		$.ajax("/api/Usuarios", {
			data: credentials,
			method: "POST",
			dataType: 'json',
			success: function (data) {
				cb(null,data);
			},
			error: function (ex) {
				cb(ex);
			}
		});
	}



